import React, { useState, useRef, useEffect } from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import FabComponent from '../component/fab';
import Input from '../component/input';
import { useDispatch, useSelector } from 'react-redux';
import { setNew } from '../reducers/newSlice';
import {useNavigate, useLocation} from 'react-router-dom';
import formatCurrency from '../component/function/formatcurrency';
import useToday from '../component/function/today';
import  SignaturePad  from "signature_pad";
import {RootState} from '../reducers/userSlice';
import postal from '../component/function/postalCode';



const NewApp2: React.FC = () => {
  const [data, setData] = useState<any>({
    polis: '',
    alamatObj: '',
    periode: '',
    okupasi: '',
    kelas: '',
    tsi: '',
    addedDate: '',
    type: '',
    diskon: '',
    komisi: '',
    startD: '',
    endD: '',
    sr: [
      { arah: 'Kiri', okupasisr: '', jarak: '' },
      { arah: 'Kanan', okupasisr: '', jarak: '' },
      { arah: 'Depan', okupasisr: '', jarak: '' },
      { arah: 'Belakang', okupasisr: '', jarak: '' }
    ],
    prov:'',
    kota:'',
    kecamatan:'',
    kelurahan:'',
  });
  
  const [tsiComp, setTsiComp] = useState<any>({
    bangunan:'',
    content:''
  })
  const { username } = useSelector((state: RootState) => state.username);
  const [periode,setPeriode]=useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const today = useToday();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const signaturePad = useRef<SignaturePad | null>(null);
  const [sign, setSign] = useState<string>("");
  const {state} = useLocation()
  const {insuredName, NIK, address, phone, email, COB, ktp} = state
  const [selectOkupasi, setSelectOkupasi] = useState([]);
  const [rateDasar, setRateDasar] = useState(0);
  const [ratePerluasan, setRatePerluasan] = useState(0);
  const [listProv, setListProv] = useState([]);
  const [listKota, setListKota] = useState([]);
  const [listKecamatan, setListKecamatan] = useState([]);
  const [listKelurahan, setListKelurahan] = useState([]);
  const [kodePos, setKodePos] = useState();
  const [daerah, setDaerah] = useState({
    prov:'',
    kota:'',
    kecamatan:'',
    kelurahan:'',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    if (name === "startD") {
      // Menghitung tanggal 1 tahun kemudian dari startD
      const startDate = new Date(value);
      const endDate = new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate() + 1);
  
      setData((prevState: any) => ({
        ...prevState,
        addedDate: today,
        type: "New",
        [name]: value,
        endD: endDate.toISOString().split("T")[0] // Mengubah format tanggal ke "yyyy-mm-dd"
      }));
      setPeriode(`${startDate.toISOString().split('T')[0].toString()} - ${endDate.toISOString().split('T')[0].toString()}`);
    } else if (name.startsWith("jarak")) {
      const arah = name.replace("jarak", "");
  
      setData((prevState: any) => ({
        ...prevState,
        sr: prevState.sr.map((item: any) =>
          item.arah === arah ? { ...item, jarak: value } : item
        )
      }));
    } else if (name.startsWith("okupasisr")) {
      const arah = name.replace("okupasisr", "");
  
      setData((prevState: any) => ({
        ...prevState,
        sr: prevState.sr.map((item: any) =>
          item.arah === arah ? { ...item, okupasisr: value } : item
        )
      }));
    }else if (name === 'prov' || name === 'kota' || name === 'kecamatan' || name === 'kelurahan'){
      setData((prevState: any) => ({
        ...prevState,
        addedDate: today,
        type: "New",
        [name]: value
      }));
      setDaerah((prevData:any)=>({
        ...prevData,
        [name]:(e.target as HTMLSelectElement).selectedOptions[0].textContent
      }))
    } else {
      setData((prevState: any) => ({
        ...prevState,
        addedDate: today,
        type: "New",
        [name]: value
      }));
      setTsiComp((prevComp: any) => ({
        ...prevComp,
        [name]: value
      }));
      
    }
  };
  
  

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
  
      if (value === 'rsmdcc') {
        setRatePerluasan((prevRatePerluasan)=>prevRatePerluasan + 0.0005);
      }
  
      if (value === 'tsfwd') {
        setRatePerluasan((prevRatePerluasan)=>prevRatePerluasan + 0.0005);
      }
  
      if (value === 'others') {
        setRatePerluasan((prevRatePerluasan)=>prevRatePerluasan + 0.000005);
      }
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
  
      if (value === 'rsmdcc') {
        setRatePerluasan((prevRatePerluasan)=>prevRatePerluasan - 0.0005);
      }
  
      if (value === 'tsfwd') {
        setRatePerluasan((prevRatePerluasan)=>prevRatePerluasan - 0.0005);
      }
  
      if (value === 'others') {
        setRatePerluasan((prevRatePerluasan)=>prevRatePerluasan - 0.000005);
      }
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

  const save = () =>{
    const dataURL = signaturePad.current?.toDataURL();
  if (dataURL) {
    setSign(dataURL); 
  }
  console.log(sign)

  }

  useEffect(()=>{
    const fetchOkupasi = async () =>{
      try{
        const res = await fetch('https://agentserver-production.up.railway.app/okupasi');
        const okupasi = await res.json()
        setSelectOkupasi(okupasi);

        if(data.okupasi){
          const selectedOkupasi = okupasi.find((item: { okupasi: string }) => item.okupasi === data.okupasi);
          console.log(selectedOkupasi);

          if(selectedOkupasi){
            setRateDasar(selectedOkupasi.rate);
          } 
        }
        
      }catch(e){
        throw e
      }
    }
    fetchOkupasi()
  },[data.okupasi])

  useEffect(() => {
    const fetch = async () => {
      let query = "";
      const result = await postal(query);
      setListProv(result);
      if(data.prov){
        query = data.prov
        const result = await postal(query);
        setListKota(result);
      }
      if(data.kota){
        query = data.kota
        const result = await postal(undefined,query);
        setListKecamatan(result);
      }
      if(data.kecamatan){
        query = data.kecamatan
        const result = await postal(undefined,undefined,query);
        setListKelurahan(result);
      }
      if(data.kelurahan){
        query = data.kelurahan
        const result = await postal(undefined,undefined,undefined,query);
        setKodePos(result[0].postal_code);
      }
    };
    fetch();

  }, [data.prov, data.kota, data.kecamatan, data.kelurahan]);
  

  

  const submit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    dispatch(setNew({
      tsi:(parseInt(tsiComp.bangunan.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, ''))+parseInt(tsiComp.content.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, ''))),
      polis:data.polis, 
      alamatObj:`${data.alamatObj} ${daerah.kelurahan} ${daerah.kecamatan} ${daerah.kota} ${daerah.prov} -${kodePos}`, 
      periode:periode, 
      okupasi:data.okupasi, 
      kelas:data.kelas,
      addedDate:data.addedDate,
      type:data.type,
      diskon:data.diskon,
      komisi:15-data.diskon,
      perluasan:selectedOptions,
      sign:sign,
      NIK,
      address,
      phone,
      email,
      COB,
      insuredName,
      status:"Approval",
      rate:ratePerluasan+rateDasar, 
      ktp,
      agentName:username,
      bangunan:parseInt(tsiComp.bangunan.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, '')),
      content:parseInt(tsiComp.content.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, '')),
      sr:data.sr,
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
                    value="FLEXAS"
                    checked={data.polis === 'FLEXAS'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>FLEXAS</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="polis"
                    value="PAR"
                    checked={data.polis === 'PAR'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>PAR</span>
                </div>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="alamatObj" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Alamat Objek Pertanggungan
                </label>
                <Input
                  id="alamatObj"
                  name="alamatObj"
                  placeholder=""
                  value={data.alamatObj}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"
                />
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="prov" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Provinsi:
                </label>
                <select
                  id="prov"
                  name="prov"
                  value={data.prov}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih Provinsi</option>
                  {listProv.map((item:string, index:number) => {
                    return <option key={index} value={item}>{item}</option>;
                  })}
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="kota" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Kota:
                </label>
                <select
                  id="kota"
                  name="kota"
                  value={data.kota}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih Kota</option>
                  {listKota.map((item:{city_id:string, kota:string}, index:number) => {
                    return <option key={index} value={item.city_id}>{item.kota}</option>;
                  })}
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="kecamatan" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Kecamatan:
                </label>
                <select
                  id="kecamatan"
                  name="kecamatan"
                  value={data.kecamatan}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih Kecamatan</option>
                  {listKecamatan.map((item:{dis_id:string, dis_name:string},index:number) => {
                    return <option key={index} value={item.dis_id}>{item.dis_name}</option>;
                  })}
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="kelurahan" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Kelurahan:
                </label>
                <select
                  id="kelurahan"
                  name="kelurahan"
                  value={data.kelurahan}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih Kelurahan</option>
                  {listKelurahan.map((item:{subdis_id:string, subdis_name:string},index:number) => {
                    return <option key={index} value={item.subdis_id}>{item.subdis_name}</option>;
                  })}
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="kodepos" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Kode Pos:
                </label>
                <input
                  id="kodepos"
                  name="kodepos"
                  placeholder=""
                  value={kodePos}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  type="text"
                />
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
                  {selectOkupasi.map((item: { okupasi: string }, index:number) => {
                    return <option key={index} value={item.okupasi}>{item.okupasi}</option>;
                  })}
                </select>
              </div>
              <div className="relative my-5">
              <label htmlFor="sr" className="left-3 -top-2.5">
                Surrounding Risk:
              </label>
                <table className="w-full mt-4">
                  <thead>
                    <tr>
                      <th></th>
                      <th className='text-base font-normal'>Okupasi</th>
                      <th className='text-base font-normal'>Jarak</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Kiri:</td>
                      <td>
                      <input
                          type="text"
                          id="okupasisrKiri"
                          name="okupasisrKiri"
                          value={data.sr[0].okupasisr}
                          onChange={handleInputChange}
                          className="w-full rounded-xl pl-3 h-10 font-Poppins font-semibold"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          id="jarakKiri"
                          name="jarakKiri"
                          value={data.sr[0].jarak}
                          onChange={handleInputChange}
                          className="w-full rounded-xl pl-3 h-10 font-Poppins font-semibold"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Kanan:</td>
                      <td>
                      <input
                          type="text"
                          id="okupasisrKanan"
                          name="okupasisrKanan"
                          value={data.sr[1].okupasisr}
                          onChange={handleInputChange}
                          className="w-full rounded-xl pl-3 h-10 font-Poppins font-semibold"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          id="jarakKanan"
                          name="jarakKanan"
                          value={data.sr[1].jarak}
                          onChange={handleInputChange}
                          className="w-full rounded-xl pl-3 h-10 font-Poppins font-semibold"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Depan:</td>
                      <td>
                      <input
                          type="text"
                          id="okupasisrDepan"
                          name="okupasisrDepan"
                          value={data.sr[2].okupasisr}
                          onChange={handleInputChange}
                          className="w-full rounded-xl pl-3 h-10 font-Poppins font-semibold"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          id="jarakDepan"
                          name="jarakDepan"
                          value={data.sr[2].jarak}
                          onChange={handleInputChange}
                          className="w-full rounded-xl pl-3 h-10 font-Poppins font-semibold"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Belakang:</td>
                      <td>
                      <input
                          type="text"
                          id="okupasisrBelakang"
                          name="okupasisrBelakang"
                          value={data.sr[3].okupasisr}
                          onChange={handleInputChange}
                          className="w-full rounded-xl pl-3 h-10 font-Poppins font-semibold"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          id="jarakBelakang"
                          name="jarakBelakang"
                          value={data.sr[3].jarak}
                          onChange={handleInputChange}
                          className="w-full rounded-xl pl-3 h-10 font-Poppins font-semibold"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>


              <div className={`relative my-5`}>
                <label className="block mb-2">Perluasan:</label>
                <div className="flex items-center">
                <input
                  type="checkbox"
                  name="perluasan"
                  value="tsfwd"
                  checked={selectedOptions.includes('tsfwd')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                  <span>TSFWD</span>
                </div>
                <div className="flex items-center">
                <input
                  type="checkbox"
                  name="perluasan"
                  value='rsmdcc'
                  checked={selectedOptions.includes('rsmdcc')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                  <span>RSMDCC</span>
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
                  value='others'
                  checked={selectedOptions.includes('others')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                  <span>Others</span>
                </div>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="bangunan" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Total Nilai Bangunan:
                </label>
                <input
                  id="bangunan"
                  name="bangunan"
                  placeholder=""
                  value={formatCurrency(tsiComp.bangunan)}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  type="text"
                />
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="content" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Total Nilai Content:
                </label>
                <input
                  id="content"
                  name="content"
                  placeholder=""
                  value={formatCurrency(tsiComp.content)}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  type="text"
                />
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="tsi" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Total Nilai Pertanggungan:
                </label>
                <input
                  id="tsi"
                  name="tsi"
                  placeholder=""
                  readOnly
                  value={formatCurrency((parseInt(tsiComp.bangunan.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, ''))+parseInt(tsiComp.content.replace(/ /g, '').replace(/Rp/g, '').replace(/\./g, ''))).toString())}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  type="text"
                />
              </div>
              {/* <div className={`relative my-5`}>
                <label htmlFor="diskon" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Diskon:
                </label>
                <input
                  id="diskon"
                  name="diskon"
                  placeholder="Max 15"
                  value={data.diskon}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  max={15}
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

export default NewApp2;
