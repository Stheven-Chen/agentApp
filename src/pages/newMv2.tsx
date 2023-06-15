import React, { useState, useEffect } from 'react';
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

const NewAppMv2: React.FC = () => {
  const [data, setData] = useState({
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
    plat:''

  });
  const [merekMobil, setMerekMobil] = useState([]);
  const [modelMobil, setModelMobil] = useState(["1",'2','3']);
  const newApp = useSelector((state: NewState) => state.newApp);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const today = useToday();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState,addedDate: today, type: "New", [name]: value }));
  };


  
  useEffect(() => {
    const fetchMerekMobil = async () => {
      try {
        const res = await fetch('http://192.168.137.1:3001/');
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
  
  

    
  

  const submit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    dispatch(setNew({
      ...newApp, 
      tsi:data.tsi, 
      polis:data.polis, 
      periode:data.periode, 
      okupasi:data.okupasi, 
      addedDate:data.addedDate,
      type:data.type,
      merek:data.merek,
      model:data.model,
      year:data.year,
      mesin:data.mesin,
      plat:data.plat,
      rangka:data.rangka

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
                  value={data.rangka}
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
                  value={data.mesin}
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
              <div className='w-full flex justify-between px-2'>
                <button onClick={()=>{navigate('/agent/application')}} className="bg-yellow-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90">Cancel</button>
                <button type="submit" className="bg-sky-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90">Send</button>
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
