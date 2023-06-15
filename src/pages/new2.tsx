import React, { useState } from 'react';
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

const NewApp2: React.FC = () => {
  const [data, setData] = useState({
    polis: '',
    alamatObj: '',
    periode: '',
    okupasi: '',
    kelas:'',
    tsi:'',
    addedDate:'',
    type:''
  });
  const newApp = useSelector((state: NewState) => state.newApp);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const today = useToday();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState,addedDate: today, type: "New", [name]: value }));
  };

  const submit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    dispatch(setNew({
      ...newApp, 
      tsi:data.tsi, 
      polis:data.polis, 
      alamatObj:data.alamatObj, 
      periode:data.periode, 
      okupasi:data.okupasi, 
      kelas:data.kelas,
      addedDate:data.addedDate,
      type:data.type,

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
                <label htmlFor="periode" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Periode Pertanggungan:
                </label>
                <div className="flex justify-between items-center gap-4">
                <input
                  id="periode"
                  name="periode"
                  placeholder=""
                  value={data.periode}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  type="date"
                  min={today}
                />
                <span className="mt-5">s/d</span>
                <input
                  id="periode"
                  name="periode"
                  placeholder=""
                  value={data.periode}
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
                  <option value="Rumah Tinggal">Rumah Tinggal</option>
                  <option value="Ruko">Ruko</option>
                </select>
              </div>
              <div className={`relative my-5`}>
                <label className="block mb-2">Kelas Konstruksi:</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="kelas"
                    value="1"
                    checked={data.kelas === '1'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Kelas 1</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="kelas"
                    value="2"
                    checked={data.kelas === '2'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Kelas 2</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="kelas"
                    value="3"
                    checked={data.kelas === '3'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Kelas 3</span>
                </div>
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
                <button onClick={()=>{navigate('/application')}} className="bg-yellow-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90">Cancel</button>
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

export default NewApp2;
