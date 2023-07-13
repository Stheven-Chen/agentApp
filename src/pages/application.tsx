import React,{useState, useEffect} from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import FabComponent from '../component/fab';
import { useSelector } from 'react-redux';
// import { NewState } from '../reducers/newSlice';
// import { KlaimState } from '../reducers/klaimSlice';
// import {EndorsState} from '../reducers/endorsSlice';
import {RootState} from '../reducers/userSlice';
import List from '../component/list';
import ListKlaim from '../component/listKlaim';
// import Blob from '../component/blob';





const Application: React.FC = () => {
  // const newApp = useSelector((state: NewState) => state.newApp);
  // const klaim = useSelector((state: KlaimState) => state.klaim);
  // const endors = useSelector((state: EndorsState) => state.endors);
  const {username} = useSelector((state: RootState) => state.username);
  const [showModal, setShowModal] = useState<number>(-1);
  const [showModalK, setShowModalK] = useState<number>(-1);
  const [newData, setNewData] = useState([]);
  const [klaimData, setKlaimData] = useState([]);

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


  // const arr: New[] = [];
  // const arrK: Klaim[] = [];
  // for(let i = 0; i < klaim.nPolis.length;i++){
  //   const obj = {
  //     nPolis:Array.isArray(klaim.nPolis) ? [klaim.nPolis[i]] : [],
  //     insuredName:Array.isArray(klaim.insuredName) ? [klaim.insuredName[i]] : [],
  //     periode:Array.isArray(klaim.periode) ? [klaim.periode[i]] : [],
  //     polis:Array.isArray(klaim.polis) ? [klaim.polis[i]] : [],
  //     okupasi:Array.isArray(klaim.okupasi) ? [klaim.okupasi[i]] : [],
  //     dol:Array.isArray(klaim.dol) ? [klaim.dol[i]] : [],
  //     COB:Array.isArray(klaim.COB) ? [klaim.COB[i]] : [],
  //     type:Array.isArray(klaim.type) ? [klaim.type[i]] : [],
  //     kronologi:Array.isArray(klaim.kronologi) ? [klaim.kronologi[i]] : [],
  //     klaim:Array.isArray(klaim.klaim) ? [klaim.klaim[i]] : [],      
  //     addedDate:Array.isArray(klaim.addedDate) ? [klaim.addedDate[i]] : [],
  //     status:Array.isArray(klaim.status) ? [klaim.status[i]] : []
  //   }
  //   arrK.push(obj);
  // }

  // for(let i = 0; i < newApp.NIK.length;i++){
  //   const obj = {
  //     addedDate: Array.isArray(newApp.addedDate) ? [newApp.addedDate[i]] : [],
  //     type: Array.isArray(newApp.type) ? [newApp.type[i]] : [],
  //     insuredName: Array.isArray(newApp.insuredName) ? [newApp.insuredName[i]] : [],
  //     COB: Array.isArray(newApp.COB) ? [newApp.COB[i]] : [],
  //     NIK: Array.isArray(newApp.NIK) ? [newApp.NIK[i]] : [],
  //     address: Array.isArray(newApp.address) ? [newApp.address[i]] : [],
  //     phone: Array.isArray(newApp.phone) ? [newApp.phone[i]] : [],
  //     email: Array.isArray(newApp.email) ? [newApp.email[i]] : [],
  //     polis: Array.isArray(newApp.polis) ? [newApp.polis[i]] : [],
  //     merek: Array.isArray(newApp.merek) ? [newApp.merek[i]] : [],
  //     model: Array.isArray(newApp.model) ? [newApp.model[i]] : [],
  //     year: Array.isArray(newApp.year) ? [newApp.year[i]] : [],
  //     rangka: Array.isArray(newApp.rangka) ? [newApp.rangka[i]] : [],
  //     mesin: Array.isArray(newApp.mesin) ? [newApp.mesin[i]] : [],
  //     plat: Array.isArray(newApp.plat) ? [newApp.plat[i]] : [],
  //     okupasi: Array.isArray(newApp.okupasi) ? [newApp.okupasi[i]] : [],
  //     perluasan: Array.isArray(newApp.perluasan) ? [newApp.perluasan[i]] : [],
  //     tsi: Array.isArray(newApp.tsi) ? [newApp.tsi[i]] : [],
  //     periode: Array.isArray(newApp.periode) ? [newApp.periode[i]] : [],
  //     kelas: Array.isArray(newApp.kelas) ? [newApp.kelas[i]] : [],
  //     alamatObj: Array.isArray(newApp.alamatObj) ? [newApp.alamatObj[i]] : [],
  //     newApp: Array.isArray(newApp.newApp) ? [newApp.newApp[i]] : [],
  //     komisi: Array.isArray(newApp.komisi) ? [newApp.komisi[i]] : [],
  //     diskon: Array.isArray(newApp.diskon) ? [newApp.diskon[i]] : [],
  //     sign: Array.isArray(newApp.sign) ? [newApp.sign[i]] : [],
  //     status: Array.isArray(newApp.status) ? [newApp.status[i]] : [],
  //     rate: Array.isArray(newApp.rate) ? [newApp.rate[i]] : [],
  //     ktp: Array.isArray(newApp.ktp) ? [newApp.ktp[i]] : [],
  //     agentname: Array.isArray(newApp.agentname) ? [newApp.agentname[i]] : [],
  //     potentialPremi: Array.isArray(newApp.potentialPremi) ? [newApp.potentialPremi[i]] : [],
  //   };
    
  //   arr.push(obj);
    

  // }

  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const res = await fetch(`https://agentserver-production.up.railway.app/${username}/list`);
        const data = await res.json()
        setNewData(data)
      }catch(e){
        throw e
      }
    } 
    fetchData()
  },[username])
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const res = await fetch(`https://agentserver-production.up.railway.app/${username}/listklaim`);
        const data = await res.json()
        setKlaimData(data)
      }catch(e){
        throw e
      }
    } 
    fetchData()
  },[username])

  console.log(newData)


  const modal = (index: number) => {
    setShowModal(index);
  };
  const modalK = (index: number) => {
    setShowModalK(index);
  };

  // const downloadFile = () =>{

  // }

  return (
    <>
      <Nav />
      <MainBox
        content={
          <>
            <span className="text-xl font-semibold">Application List</span>
            
            {newData.length > 0 ||klaimData.length > 0 ? (
              <>
               <List
               modal={modal}
               showModal={showModal}
               setShowModal={setShowModal}
               newData={newData}
               />
              <ListKlaim
              klaimData={klaimData}
              modalK={modalK}
              setShowModalK={setShowModalK}
              showModalK={showModalK}
              />              
              {/* {endors.nPolis && (
                <div className="w-full flex flex-col lg:w-9/12 justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5">
                  <div className="grid grid-cols-2">
                    <span>{endors.addedDate}</span>
                    <span className="text-end">{endors.COB}</span>
                    <span>{endors.insuredName}</span>
                    <span className="text-end">{endors.polis}</span>
                    <span className="">{endors.type}</span>
                  </div>
                </div>

              )} */}
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
