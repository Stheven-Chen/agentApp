import React from 'react';
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

              <div className="w-full flex flex-col justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5">
                <div className="grid grid-cols-2">
                  <span>{newApp.addedDate}</span>
                  <span className="text-end">{newApp.COB}</span>
                  <span>{newApp.insuredName}</span>
                  <span className="text-end">{newApp.polis}</span>
                  <span className="">{newApp.type}</span>
                </div>
              </div>
              )}

              {klaim.nPolis&&(

              <div className="w-full flex flex-col justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5">
                <div className="grid grid-cols-2">
                  <span>{klaim.addedDate}</span>
                  <span className="text-end">{klaim.COB}</span>
                  <span>{klaim.insuredName}</span>
                  <span className="text-end">{klaim.polis}</span>
                  <span className="">{klaim.type}</span>
                </div>
              </div>
              )}

              {endors.nPolis && (
                <div className="w-full flex flex-col justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5">
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
