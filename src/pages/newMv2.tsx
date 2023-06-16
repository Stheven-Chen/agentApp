import React, { useState, useEffect,useRef } from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import FabComponent from '../component/fab';
import Input from '../component/input';
import { useDispatch, useSelector } from 'react-redux';
import { setNew } from '../reducers/newSlice';
import { NewState } from '../reducers/newSlice';
import {useNavigate} from 'react-router-dom';
import formatCurrency from '../component/function/formatcurrency';
import useToday from '../component/function/today';
// import Signature from '../component/sign'
import  SignaturePad  from "signature_pad";


const NewAppMv2: React.FC = () => {
  const [data, setData] = useState<any>({
    polis: '',
    periode: '',
    okupasi: '',
    merek:'',
    tsi:'',
    addedDate:'',
    type:'',
    model:'',
    year:'',
    mesin:'',
    rangka:'',
    plat:'',
    komisi:'',
    diskon:'',
    startD:'',
    endD:'',
    perluasan:[]
      });
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [merekMobil, setMerekMobil] = useState([]);
  const [modelMobil, setModelMobil] = useState([]);
  const newApp = useSelector((state: NewState) => state.newApp);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const today = useToday();
    const [periode,setPeriode]=useState('');
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const signaturePad = useRef<SignaturePad | null>(null);
  const [sign, setSign] = useState<string>("");


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevState: any) => ({ ...prevState,addedDate: today, type: "New", [name]: value }));
    setPeriode(`${data.startD} - ${data.endD}`)
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Tambahkan ke array jika checkbox di-checked
      setSelectedOptions([...selectedOptions, value]);
    } else {
      // Hapus dari array jika checkbox di-unchecked
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const signaturePadOptions = {
        backgroundColor: "rgb(255, 255, 255)",
        penColor: "rgb(0, 0, 0)",
      };
      signaturePad.current = new SignaturePad(canvas, signaturePadOptions);
      signaturePad.current.clear(); // clear signature
    }
  }, []);

  // const handleClear = () => {
  //   signaturePad.current?.clear();
  //   setSign(""); // reset sign state
  //   console.log('clicked')
  // };

  


  
  useEffect(() => {
    const fetchMerekMobil = async () => {
      try {
        // const res = await fetch('http://192.168.137.1:3001/');
        const res = await fetch('https://agentserver-production.up.railway.app/');
        const merek = await res.json();
        setMerekMobil(merek);
        console.log(merek)
  
        // Cek apakah ada merek yang dipilih
        if (data.merek) {
          // Temukan model berdasarkan merek yang dipilih
          const selectedMerek = merek.find((item: { merek: string }) => item.merek === data.merek);
          console.log(selectedMerek.model)
  
          // Jika model ditemukan, set state selectedModel dengan model-model yang tersedia
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
  
  

    const save = () =>{
      const dataURL = signaturePad.current?.toDataURL();
    if (dataURL) {
      setSign(dataURL); // save signature to state
    }
    console.log(sign)

    }
  

  const submit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    dispatch(setNew({
      ...newApp, 
      tsi:data.tsi, 
      polis:data.polis, 
      periode:periode, 
      okupasi:data.okupasi, 
      addedDate:data.addedDate,
      type:data.type,
      merek:data.merek,
      model:data.model,
      year:data.year,
      mesin:data.mesin,
      plat:data.plat,
      rangka:data.rangka,
      diskon:data.diskon,
      komisi:25-data.diskon,
      perluasan:selectedOptions,
      sign:sign

    }))

    navigate('/agent/application/')
  }
 
  
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
                  {merekMobil.map((item: { merek: string }) => {
                    return <option value={item.merek}>{item.merek}</option>;
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
                  {modelMobil.map((item:string) => {
                    return <option value={item}>{item}</option>;
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
                  Okupasi:
                </label>
                <select
                  id="okupasi"
                  name="okupasi"
                  value={data.okupasi}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih okupasi</option>
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
                  value='ts'
                  checked={selectedOptions.includes('ts')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                  <span>TS</span>
                </div>
              </div>
              <div className={`relative my-5`}>
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
              </div>
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
