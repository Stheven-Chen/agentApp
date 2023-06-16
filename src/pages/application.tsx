import React,{useState} from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import FabComponent from '../component/fab';
import { useSelector } from 'react-redux';
import { NewState } from '../reducers/newSlice';
import { KlaimState } from '../reducers/klaimSlice';
import {EndorsState} from '../reducers/endorsSlice';

const Application: React.FC = () => {
  const newApp = useSelector((state: NewState) => state.newApp);
  const klaim = useSelector((state: KlaimState) => state.klaim);
  const endors = useSelector((state: EndorsState) => state.endors);
  const [showModal, setShowModal]=useState<boolean>(false);
  const [showModalK, setShowModalK]=useState<boolean>(false);

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

  console.log(JSON.stringify(newApp, null, 2 ))
  console.log(JSON.stringify(klaim, null, 2 ))
  console.log(JSON.stringify(endors, null, 2 ))

  const modal = () =>{
    setShowModal(true)
  }

  return (
    <>
      <Nav />
      <MainBox
        content={
          <>
            <span className="text-xl font-semibold">Application List</span>
            {newApp.NIK |klaim.nPolis|endors.nPolis ? (

              <>
              {newApp.NIK && (
              <>
              <div className="w-full lg:w-9/12 flex flex-col justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5">
                <div className="grid grid-cols-2">
                  <span>{newApp.addedDate}</span>
                  <span className="text-end">{newApp.COB}</span>
                  <span>{newApp.insuredName}</span>
                  <span className="text-end">{newApp.polis}</span>
                  <span className="">{newApp.type}</span>
                </div>
                <img className='h-5 w-5 self-center' onClick={modal} src="/agent/assets/arrow.svg" alt="arrow" />
              </div>
              {showModal && (
                <div className="fixed top-0 left-0 font-Poppins w-screen h-screen z-50 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className='w-11/12 lg:w-9/12 bg-white rounded-xl p-4 flex flex-col'>
                    <span className='w-full text-center text-xl font-semibold'>{newApp.insuredName}</span>
                    <span className='w-full mt-5 text-start text-base'>{`NIK: ${newApp.NIK}`}</span>
                    <span className='w-full text-start text-base'>{`Phone: ${newApp.phone}`}</span>
                    <span className='w-full text-start text-base'>{`Email: ${newApp.email}`}</span>
                    <span className='w-full text-start text-base'>{`Alamat Objek Pertanggungan: ${newApp.alamatObj}`}</span>
                    <span className='w-full text-start text-base'>{`COB: ${newApp.COB}`}</span>
                    <span>&nbsp;</span>
                    <span className='w-full text-start text-base'>{`Okupasi: ${newApp.okupasi}`}</span>
                    <span className='w-full text-start text-base'>{`TSI: ${newApp.tsi}`}</span>
                    <span className='w-full text-start text-base'>{`Pertanggungan: ${newApp.polis}`}</span>
                    <span className='w-full text-start text-base'>{`Periode: ${newApp.periode}`}</span>
                    <span className='w-full text-start text-base'>{`Kelas: ${newApp.kelas}`}</span>
                    <span className='w-full text-start text-base'>{`Perluasan: ${newApp.perluasan}`}</span>
                    <span className='w-full text-start text-base'>{`Diskon: ${newApp.diskon}%`}</span>
                  <button className='text-sky-600 text-lg font-medium transition-transform transform-gpu duration-300 active:scale-90' onClick={()=>setShowModal(false)}>Close</button>
                  </div>
                </div>
              )}
              </>
              )}

              {klaim.nPolis&&(
                <>
                <div className="w-full flex flex-col lg:w-9/12 justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5">
                  <div className="grid grid-cols-2">
                    <span>{klaim.addedDate}</span>
                    <span className="text-end">{klaim.COB}</span>
                    <span>{klaim.insuredName}</span>
                    <span className="text-end">{klaim.polis}</span>
                    <span className="">{klaim.type}</span>
                  </div>
                  <img className='h-5 w-5 self-center' onClick={()=>setShowModalK(true)} src="/agent/assets/arrow.svg" alt="arrow" />

                </div>
                {showModalK && (
                <div className="fixed top-0 left-0 font-Poppins w-screen h-screen z-50 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className='w-11/12 lg:w-9/12 bg-white rounded-xl p-4 flex flex-col'>
                    <span className='w-full text-center text-xl font-semibold'>{klaim.insuredName}</span>
                    <span className='w-full mt-5 text-start text-base'>{`No Polis: ${klaim.nPolis}`}</span>
                    <span className='w-full text-start text-base'>{`COB: ${klaim.COB}`}</span>
                    <span className='w-full text-start text-base'>{`Pertanggungan: ${klaim.polis}`}</span>
                    <span className='w-full text-start text-base'>{`Okupasi: ${klaim.okupasi}`}</span>
                    <span className='w-full text-start text-base'>{`Date of Loss : ${klaim.dol}`}</span>
                    <span className='w-full text-start text-base'>{`Keterangan:`}</span>
                    <span className='w-full text-start text-base'>&nbsp;</span>
                    <div className='w-full h-40 border-solid border-2 rounded-xl p-1 border-gray-300 text-start text-base overflow-y-auto'>{klaim.kronologi}</div>
                  <button className='text-sky-600 text-lg mt-2 font-medium transition-transform transform-gpu duration-300 active:scale-90' onClick={()=>setShowModalK(false)}>Close</button>
                  </div>
                </div>
              )}
                </>
              )}

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
