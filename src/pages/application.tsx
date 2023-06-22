import React,{useState} from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import FabComponent from '../component/fab';
import { useSelector } from 'react-redux';
import { NewState } from '../reducers/newSlice';
import { KlaimState } from '../reducers/klaimSlice';
import {EndorsState} from '../reducers/endorsSlice';

interface New {
  addedDate: any;
  type: any;
  insuredName: any;
  COB: any;
  NIK: any;
  address: any;
  phone: any;
  email: any;
  polis: any;
  merek: any;
  model: any;
  year: any;
  rangka: any;
  mesin: any;
  plat: any;
  okupasi: any;
  perluasan:any;
  tsi: any;
  periode: any;
  kelas: any;
  alamatObj: any;
  newApp: any;
  komisi:any;
  diskon:any;
  sign:any;
  status:any;
}

interface Klaim{
  nPolis:any;
  insuredName:any;
  periode:any;
  polis:any;
  okupasi:any;
  dol:any;
  COB:any;
  type:any;
  kronologi:any;
  klaim:any;
  addedDate:any;
  status:any;
}

const Application: React.FC = () => {
  const newApp = useSelector((state: NewState) => state.newApp);
  const klaim = useSelector((state: KlaimState) => state.klaim);
  const endors = useSelector((state: EndorsState) => state.endors);
  const [showModal, setShowModal] = useState<number>(-1);
  const [showModalK, setShowModalK] = useState<number>(-1);

    // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`http://10.1.113.136:3001/${username}/list`);
  //       const data = await res.json();
  //       setApp(data.new);
  //       setEndorse(data.endorse);
  //       setKlaim(data.klaim);

  //     } catch (e) {
  //       console.error("error dalam fetch", e);
  //     }
  //   };

  //   fetchData();
  // }, [username]);

  console.log(newApp)
  console.log(klaim)
  console.log(endors)

  const arr: New[] = [];
  const arrK: Klaim[] = [];
  for(let i = 0; i < klaim.nPolis.length;i++){
    const obj = {
      nPolis:Array.isArray(klaim.nPolis) ? [klaim.nPolis[i]] : [],
      insuredName:Array.isArray(klaim.insuredName) ? [klaim.insuredName[i]] : [],
      periode:Array.isArray(klaim.periode) ? [klaim.periode[i]] : [],
      polis:Array.isArray(klaim.polis) ? [klaim.polis[i]] : [],
      okupasi:Array.isArray(klaim.okupasi) ? [klaim.okupasi[i]] : [],
      dol:Array.isArray(klaim.dol) ? [klaim.dol[i]] : [],
      COB:Array.isArray(klaim.COB) ? [klaim.COB[i]] : [],
      type:Array.isArray(klaim.type) ? [klaim.type[i]] : [],
      kronologi:Array.isArray(klaim.kronologi) ? [klaim.kronologi[i]] : [],
      klaim:Array.isArray(klaim.klaim) ? [klaim.klaim[i]] : [],      
      addedDate:Array.isArray(klaim.addedDate) ? [klaim.addedDate[i]] : [],
      status:Array.isArray(klaim.status) ? [klaim.status[i]] : []
    }
    arrK.push(obj);
  }

  for(let i = 0; i < newApp.NIK.length;i++){
    const obj = {
      addedDate: Array.isArray(newApp.addedDate) ? [newApp.addedDate[i]] : [],
      type: Array.isArray(newApp.type) ? [newApp.type[i]] : [],
      insuredName: Array.isArray(newApp.insuredName) ? [newApp.insuredName[i]] : [],
      COB: Array.isArray(newApp.COB) ? [newApp.COB[i]] : [],
      NIK: Array.isArray(newApp.NIK) ? [newApp.NIK[i]] : [],
      address: Array.isArray(newApp.address) ? [newApp.address[i]] : [],
      phone: Array.isArray(newApp.phone) ? [newApp.phone[i]] : [],
      email: Array.isArray(newApp.email) ? [newApp.email[i]] : [],
      polis: Array.isArray(newApp.polis) ? [newApp.polis[i]] : [],
      merek: Array.isArray(newApp.merek) ? [newApp.merek[i]] : [],
      model: Array.isArray(newApp.model) ? [newApp.model[i]] : [],
      year: Array.isArray(newApp.year) ? [newApp.year[i]] : [],
      rangka: Array.isArray(newApp.rangka) ? [newApp.rangka[i]] : [],
      mesin: Array.isArray(newApp.mesin) ? [newApp.mesin[i]] : [],
      plat: Array.isArray(newApp.plat) ? [newApp.plat[i]] : [],
      okupasi: Array.isArray(newApp.okupasi) ? [newApp.okupasi[i]] : [],
      perluasan: Array.isArray(newApp.perluasan) ? [newApp.perluasan[i]] : [],
      tsi: Array.isArray(newApp.tsi) ? [newApp.tsi[i]] : [],
      periode: Array.isArray(newApp.periode) ? [newApp.periode[i]] : [],
      kelas: Array.isArray(newApp.kelas) ? [newApp.kelas[i]] : [],
      alamatObj: Array.isArray(newApp.alamatObj) ? [newApp.alamatObj[i]] : [],
      newApp: Array.isArray(newApp.newApp) ? [newApp.newApp[i]] : [],
      komisi: Array.isArray(newApp.komisi) ? [newApp.komisi[i]] : [],
      diskon: Array.isArray(newApp.diskon) ? [newApp.diskon[i]] : [],
      sign: Array.isArray(newApp.sign) ? [newApp.sign[i]] : [],
      status: Array.isArray(newApp.status) ? [newApp.status[i]] : []
    };
    
    arr.push(obj);
    

  }

  console.log(arrK)

  const modal = (index: number) => {
    setShowModal(index);
  };
  const modalK = (index: number) => {
    setShowModalK(index);
  };

  return (
    <>
      <Nav />
      <MainBox
        content={
          <>
            <span className="text-xl font-semibold">Application List</span>
            {newApp.NIK.length > 0 ||klaim.nPolis.length > 0 ? (

              <>
               {
                arr.map((data:New, index:number)=>{
                  return(
                   
                   <div key={index} className="w-full lg:w-9/12 flex flex-col justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5">
                    <div className="grid grid-cols-2">
                      <span>{data.addedDate}</span>
                      <span className="text-end">{data.COB}</span>
                      <span>{data.insuredName}</span>
                      <span className="text-end">{data.polis}</span>
                      <span className="">{data.type}</span>
                      <span className="text-end">{data.status}</span>
                    </div> 
                    <img className='h-5 w-5 self-center' onClick={() => modal(index)} src="/agent/assets/arrow.svg" alt="arrow" />
                     {showModal === index &&(
                      <div className="fixed top-0 left-0 font-Poppins w-screen h-screen z-50 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className='w-11/12 h-3/4 overflow-y-auto lg:w-9/12 bg-white rounded-xl p-4 flex flex-col'>
                        <span className='w-full text-center text-xl font-semibold'>{data.insuredName}</span>
                        <span className='w-full mt-5 text-start text-base'>{`NIK: ${data.NIK}`}</span>
                        <span className='w-full text-start text-base'>{`Phone: ${data.phone}`}</span>
                        <span className='w-full text-start text-base'>{`Email: ${data.email}`}</span>
                        <span className='w-full text-start text-base'>{`Alamat Objek Pertanggungan:`}</span>
                        <span className='w-full text-start text-base'>{`${data.alamatObj}`}</span>
                        <span className='w-full text-start text-base'>{`COB: ${data.COB}`}</span>
                        <span>&nbsp;</span>
                        <span className='w-full text-start text-base'>{`Okupasi: ${data.okupasi}`}</span>
                        <span className='w-full text-start text-base'>{`TSI: ${data.tsi}`}</span>
                        <span className='w-full text-start text-base'>{`Pertanggungan: ${data.polis}`}</span>
                        <span className='w-full text-start text-base'>{`Periode: ${data.periode}`}</span>
                        <span className='w-full text-start text-base'>{`Kelas: ${data.kelas}`}</span>
                        <span className='w-full text-start text-base'>{`Perluasan: ${data.perluasan}`}</span>
                        <span className='w-full text-start text-base'>{`Diskon: ${data.diskon}%`}</span>
                        <img src={data.sign} alt="sign" className='' />
                      <button className='text-sky-600 text-lg font-medium transition-transform transform-gpu duration-300 active:scale-90' onClick={() => setShowModal(-1)}>Close</button>
                      </div>
                    </div>
                      )}
                   </div>
                  
                  )
                })
              }

              

              {arrK.map((data:Klaim, index:number)=>{
                return(
                  <div key={index} className="w-full flex flex-col lg:w-9/12 justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5">
                  <div className="grid grid-cols-2">
                    <span>{data.addedDate}</span>
                    <span className="text-end">{data.COB}</span>
                    <span>{data.insuredName}</span>
                    <span className="text-end">{data.polis}</span>
                    <span className="">{data.type}</span>
                    <span className="text-end">{data.status}</span>

                  </div>
                  <img className='h-5 w-5 self-center' onClick={() => modalK(index)} src="/agent/assets/arrow.svg" alt="arrow" />

                {showModalK === index && (
                <div className="fixed top-0 left-0 font-Poppins w-screen h-screen z-50 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className='w-11/12 lg:w-9/12 bg-white rounded-xl p-4 flex flex-col'>
                    <span className='w-full text-center text-xl font-semibold'>{data.insuredName}</span>
                    <span className='w-full mt-5 text-start text-base'>{`No Polis: ${data.nPolis}`}</span>
                    <span className='w-full text-start text-base'>{`COB: ${data.COB}`}</span>
                    <span className='w-full text-start text-base'>{`Pertanggungan: ${data.polis}`}</span>
                    <span className='w-full text-start text-base'>{`Okupasi: ${data.okupasi}`}</span>
                    <span className='w-full text-start text-base'>{`Date of Loss : ${data.dol}`}</span>
                    <span className='w-full text-start text-base'>{`Keterangan:`}</span>
                    <span className='w-full text-start text-base'>&nbsp;</span>
                    <div className='w-full h-40 border-solid border-2 rounded-xl p-1 border-gray-300 text-start text-base overflow-y-auto'>{data.kronologi}</div>
                  <button className='text-sky-600 text-lg mt-2 font-medium transition-transform transform-gpu duration-300 active:scale-90' onClick={() => setShowModalK(-1)}>Close</button>
                  </div>
                </div>
              )}
                </div>
                )
              })}

              {endors.nPolis && (
                <div className="w-full flex flex-col lg:w-9/12 justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5">
                  <div className="grid grid-cols-2">
                    <span>{endors.addedDate}</span>
                    <span className="text-end">{endors.COB}</span>
                    <span>{endors.insuredName}</span>
                    <span className="text-end">{endors.polis}</span>
                    <span className="">{endors.type}</span>
                  </div>
                </div>

              )}

              
              </>
            ) : (
              <div className="flex justify-center items-center w-full">
                <span className="font-Poppins font-semibold text-2xl">No List</span>
              </div>
            )}
            <FabComponent />
          </>
        }
      />
      <Tab />
    </>
  );
};

export default Application;
