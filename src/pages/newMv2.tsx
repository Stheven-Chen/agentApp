import React, { useState, useEffect, useRef } from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import FabComponent from '../component/fab';
import Input from '../component/input';
import { useDispatch, useSelector } from 'react-redux';
import { setNew } from '../reducers/newSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import formatCurrency from '../component/function/formatcurrency';
import useToday from '../component/function/today';
import SignaturePad from 'signature_pad';
import { RootState } from '../reducers/userSlice';

const NewAppMv2: React.FC = () => {
  const [data, setData] = useState<any>({
    polis: '',
    periode: '',
    okupasi: '',
    merek: '',
    tsi: '',
    addedDate: '',
    type: '',
    model: '',
    year: '',
    mesin: '',
    rangka: '',
    plat: '',
    komisi: '',
    diskon: 0,
    startD: '',
    endD: '',
    perluasan: [],
    wil: 0,
    tjh:'',
    pa:''
  });
  const { username } = useSelector((state: RootState) => state.username);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [merekMobil, setMerekMobil] = useState([]);
  const [modelMobil, setModelMobil] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const today = useToday();
  const [periode, setPeriode] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const signaturePad = useRef<SignaturePad | null>(null);
  const [sign, setSign] = useState<string>('');
  const { state } = useLocation();
  const [rateDasar, setRateDasar] = useState(0);
  const [ratePerluasan, setRatePerluasan] = useState(0);
  const { insuredName, NIK, address, phone, email, COB } = state;
  const [premiTJH, setPremiTJH] = useState(0)
  const [premiPA, setPremiPA] = useState(0)

  const getRate = async (tsi: number, wil: number, polis: string) => {
    if (data.tsi && data.wil && data.polis) {
      try {
        const res = await fetch(`https://agentserver-production.up.railway.app/ratemv?min=${tsi}&max=${tsi}&wil=${wil}&type=${polis}`, {
          method: 'POST',
        });
        const rateData = await res.json();
        setRateDasar(rateData[0].rate);
      } catch (e) {
        throw e;
      }
    } else {
      setRateDasar(0);
    }
  };

  const handleNilaiJaminanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(name==='tjh'){

      setData((prevState: any) => ({ ...prevState, tjh: value }));
      getPerluasan(undefined, undefined, "tjh")
    }
    if(name==='pa'){
      
      setData((prevState: any) => ({ ...prevState, pa: value }));
      getPerluasan(undefined, undefined, "pa")
    }
  };
  

  const getPerluasan = async (wil: number|undefined, polis: string|undefined, cover: string|undefined) => {
    let perluasanRate = 0;
    
    try {
      if(cover === 'tjh'){
        const nilai = parseInt(data.tjh.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, ''))
        const res = await fetch(`https://agentserver-production.up.railway.app/ratemv?min=${nilai}&max=${nilai}&cover=${cover}`, {
          method: 'POST',
        });
        const rateTJH = await res.json()
        setPremiTJH((rateTJH[0].rate)*nilai)
        console.log(`Premi TJH ${nilai} * ${rateTJH[0].rate} = ${premiTJH}`)
      }

      if(cover ==='pa'){
        const nilai = parseInt(data.pa.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, ''))
        setPremiPA(nilai * (0.5/100))
        console.log(`Premi PA ${nilai} * ${0.5/100} = ${premiPA}`)
      }

      if(wil && polis && cover){
      const res = await fetch(`https://agentserver-production.up.railway.app/ratemv?wil=${wil}&type=${polis}&cover=${cover}`, {
        method: 'POST',
      });
  
      if (res.ok) {
        const perluasanData = await res.json();
        perluasanRate = perluasanData[0].rate;
      } else {
        throw new Error('Failed to fetch perluasan data');
      }
      }
    } catch (e) {
      console.error(e);
    }
  
    return perluasanRate;
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'startD') {
      const startDate = new Date(value);
      const endDate = new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate() + 1);

      setData((prevState: any) => ({
        ...prevState,
        addedDate: today,
        type: 'New',
        [name]: value,
        endD: endDate.toISOString().split('T')[0],
      }));

      setPeriode(`${startDate.toISOString().split('T')[0].toString()} - ${endDate.toISOString().split('T')[0].toString()}`);
    } else if (name === 'plat') {
      const plat = value.split(' ')[0];
      setData((prevData: any) => ({
        ...prevData,
        [name]:value,
      }));
      if (plat) {
        try {
          const res = await fetch(`https://agentserver-production.up.railway.app/plat?plat=${plat}`, {
            method: 'POST',
          });
          if (res.ok) {
            const dataWil = await res.json();
            setData((prevData: any) => ({
              ...prevData,
              [name]: value,
              wil: dataWil.wil,
            }));
          } else {
            throw new Error('Failed to fetch wil data');
          }
        } catch (e) {
          console.error(e);
        }
      }
    } else {
      setData((prevState: any) => ({ ...prevState, addedDate: today, type: 'New', [name]: value }));
      getRate(
        parseInt(data.tsi.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, '')),
        data.wil,
        data.polis
      );
    }
  };

  const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
      const perluasanRate = await getPerluasan(data.wil, data.polis, value);
      setRatePerluasan((prevRate) => prevRate + perluasanRate);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
      const perluasanRate = await getPerluasan(data.wil, data.polis, value);
      setRatePerluasan((prevRate) => prevRate - perluasanRate);
    }
  };
  
  const handleTJHPA = async (event: React.ChangeEvent<HTMLInputElement>) =>{
    const value = event.target.value;
    const isChecked = event.target.checked;
    if(isChecked){
      setSelectedOptions([...selectedOptions, value]);
      if (value === 'tjh' || value === 'pa') {
        handleNilaiJaminanChange(event); // Panggil fungsi handleNilaiJaminanChange
      }
    }else{
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
      if (value === 'tjh' || value === 'pa') {
        handleNilaiJaminanChange(event); // Panggil fungsi handleNilaiJaminanChange
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const signaturePadOptions = {
        backgroundColor: 'rgb(255, 255, 255)',
        penColor: 'rgb(0, 0, 0)',
      };
      signaturePad.current = new SignaturePad(canvas, signaturePadOptions);
      signaturePad.current.clear();
    }
  }, []);

  useEffect(() => {
    const fetchMerekMobil = async () => {
      try {
        const res = await fetch('https://agentserver-production.up.railway.app/');
        const merek = await res.json();
        setMerekMobil(merek);

        if (data.merek) {
          const selectedMerek = merek.find((item: { merek: string }) => item.merek === data.merek);

          if (selectedMerek) {
            setModelMobil(selectedMerek.model);
          }
        }
      } catch (e) {
        throw e;
      }
    };

    fetchMerekMobil();
  }, [data.merek]);

  const save = () => {
    const dataURL = signaturePad.current?.toDataURL();
    if (dataURL) {
      setSign(dataURL);
    }
  };

  useEffect(()=>{
    console.log(`rateDasar; ${rateDasar}`)
    console.log(`ratePerluasan; ${ratePerluasan}`)
    console.log(`Rate: ${ratePerluasan+rateDasar}`)
  },[ratePerluasan, rateDasar])

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setNew({
        tsi: parseInt(data.tsi.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, '')),
        polis: data.polis,
        periode: periode,
        okupasi: data.okupasi,
        addedDate: data.addedDate,
        type: data.type,
        merek: data.merek,
        model: data.model,
        year: data.year,
        mesin: data.mesin,
        plat: data.plat,
        rangka: data.rangka,
        diskon: data.diskon,
        komisi: 25 - data.diskon,
        perluasan: selectedOptions,
        sign: sign,
        NIK,
        address,
        phone,
        email,
        COB,
        insuredName,
        status: 'Approval',
        agentName: username,
        rate:rateDasar+ratePerluasan,
        tjh:premiTJH,
        pa:premiPA
      })
    );
      console.log(`
      rate ${rateDasar+ratePerluasan} premi: ${ parseInt(data.tsi.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, ''))*rateDasar+ratePerluasan}
      `)
    navigate('/agent/application/');
  };
 
  
  return (
    <>
      <Nav />
      <Tab />
      <MainBox
        content={
          <>
            <form onSubmit={submit}>
            <span className="font-semibold text-xl mb-5">New Application</span>
              <div className={`relative my-5`}>
                <label className="block mb-2">Jenis Pertanggungan:</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="polis"
                    value="Comprehensive"
                    checked={data.polis === 'Comprehensive'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Comprehensive</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="polis"
                    value="tlo"
                    checked={data.polis === 'tlo'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Total Loss Only</span>
                </div>
              </div>
              <div className={'relative my-5'}>
                <label htmlFor="merek" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Merek Kendaraan
                </label>
                <select name="merek" id="merek" value={data.merek}
                  onChange={handleInputChange} className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold">
                  <option value="">Pilih merek</option>
                  {merekMobil.map((item: { merek: string }, index:number) => {
                    return <option key={index} value={item.merek}>{item.merek}</option>;
                  })}
                </select>

              </div>
              <div className={'relative my-5'}>
                <label htmlFor="model" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Model Kendaraan
                </label>
                <select name="model" id="model" value={data.model}
                  onChange={handleInputChange} className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold">
                  <option value="">Pilih model</option>
                  {modelMobil.map((item:string, index:number) => {
                    return <option key={index} value={item}>{item}</option>;
                  })}
                </select>

              </div>
              <div className={`relative my-5`}>
                <label htmlFor="startD" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Periode Pertanggungan:
                </label>
                <div className="flex justify-between items-center gap-4">
                <input
                  id="startD"
                  name="startD"
                  placeholder=""
                  value={data.startD}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  type="date"
                  min={today}
                />
                <span className="mt-5">s/d</span>
                <input
                  id="endD"
                  name="endD"
                  placeholder=""
                  value={data.endD}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  type="date"
                  min={today}
                />

                </div>
              </div>
              <div className={` relative my-5 `}>
                <label
                  htmlFor="plat"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  No Plat
                </label>
                <input
                  pattern="[A-Z]{1,2}\s\d{1,4}\s[A-Z]{1,3}"
                  id="plat"
                  name="plat"
                  placeholder=""
                  value={data.plat.toUpperCase()}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"

                />
              </div>
              <div className={` relative my-5 `}>
                <label
                  htmlFor="rangka"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  No Rangka
                </label>
                <Input
                  id="rangka"
                  name="rangka"
                  placeholder=""
                  value={data.rangka.toUpperCase()}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"

                />
              </div>
              <div className={` relative my-5 `}>
                <label
                  htmlFor="mesin"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  No Mesin
                </label>
                <Input
                  id="mesin"
                  name="mesin"
                  placeholder=""
                  value={data.mesin.toUpperCase()}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"

                />
              </div>
              <div className={` relative my-5 `}>
                <label
                  htmlFor="year"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  Tahun Pembuatan
                </label>
                <input
              
                  id="year"
                  name="year"
                  placeholder=""
                  value={data.year}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"

                />
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="okupasi" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Penggunaan:
                </label>
                <select
                  id="okupasi"
                  name="okupasi"
                  value={data.okupasi}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih Penggunaan</option>
                  <option value="Pribadi">Pribadi</option>
                  <option value="Niaga">Niaga</option>
                  <option value="Dinas">Dinas</option>
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="tsi" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Total Nilai Pertanggungan:
                </label>
                <input
                  id="tsi"
                  name="tsi"
                  placeholder=""
                  value={formatCurrency(data.tsi)}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  type="text"
                />
              </div>
              <div className={`relative my-5`}>
                <label className="block mb-2">Perluasan</label>
                <div className="flex items-center">
                <input
                  type="checkbox"
                  name="perluasan"
                  value="tshfl"
                  checked={selectedOptions.includes('tshfl')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                  <span>TSHFL</span>
                </div>
                <div className="flex items-center">
                <input
                  type="checkbox"
                  name="perluasan"
                  value='rscc'
                  checked={selectedOptions.includes('rscc')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                  <span>RSCC</span>
                </div>
                <div className="flex items-center">
                <input
                  type="checkbox"
                  name="perluasan"
                  value='eqvet'
                  checked={selectedOptions.includes('eqvet')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                  <span>EQVET</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="perluasan"
                    value="tjh"
                    checked={selectedOptions.includes('tjh')}
                    onChange={handleTJHPA}
                    className="mr-2"
                  />
                  <span>TJH</span>
                  {selectedOptions.includes('tjh') && (
                    <input
                      type="text"
                      name="tjh"
                      value={formatCurrency(data.tjh)}
                      onChange={handleNilaiJaminanChange}
                      className='rounded-xl ml-2 px-3 font-Poppins'
                      placeholder="Input nilai jaminan"
                    />
                  )}
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="perluasan"
                    value="pa"
                    checked={selectedOptions.includes('pa')}
                    onChange={handleTJHPA}
                    className="mr-2"
                  />
                  <span>PA</span>
                  {selectedOptions.includes('pa') && (
                    <input
                      type="text"
                      name="pa"
                      value={formatCurrency(data.pa)}
                      onChange={handleNilaiJaminanChange}
                      className='rounded-xl ml-2 px-3 font-Poppins'
                      placeholder="Input nilai jaminan"
                    />
                  )}
                </div>
                <div className="flex items-center">
                <input
                  type="checkbox"
                  name="perluasan"
                  value='ts'
                  checked={selectedOptions.includes('ts')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                  <span>TS</span>
                </div>
              </div>
              {/* <div className={`relative my-5`}>
                <label htmlFor="diskon" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Diskon:
                </label>
                <input
                  id="diskon"
                  name="diskon"
                  placeholder="Max 25"
                  value={data.diskon}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  max={25}
                  type="number"
                />
              </div> */}
              <div className='relative my-5 rounded-xl border-solid border-2 border-gray-300 flex justify-center p-3 flex-col gap-3 shadow-lg'>
              <canvas className='rounded-xl' ref={canvasRef}></canvas>
              <div className='flex justify-center items-center w-full'>
              {/* <button className='bg-red-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90' onClick={handleClear}>Reset</button> */}
              </div>
                
              </div>
              <div className='w-full flex justify-between px-2'>
                <button onClick={()=>{navigate('/agent/application')}} className="bg-yellow-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90">Cancel</button>
                <button onClick={save} type="submit" className="bg-sky-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90">Send</button>
              </div>
            </form>
          </>
        }
      />
      <FabComponent />
    </>
  );
};

export default NewAppMv2;
