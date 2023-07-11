import React from 'react';

interface Klaim {
  nPolis: any;
  insuredName: any;
  periode: any;
  polis: any;
  okupasi: any;
  dol: any;
  COB: any;
  type: any;
  kronologi: any;
  klaim: any;
  addedDate: any;
  status: any;
}

interface klaimProps {
  klaimData: Klaim[];
  modalK: any;
  setShowModalK: any;
  showModalK: any;
}

const ListKlaim: React.FC<klaimProps> = ({ klaimData, modalK, setShowModalK, showModalK }) => {
  return (
    <>
      {klaimData.map((data: Klaim, index: number) => {
        return (
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
                  <textarea className='w-full h-40 border-solid border-2 rounded-xl p-1 border-gray-300 text-start text-base overflow-y-auto' defaultValue={data.kronologi}></textarea>
                  <button className='text-sky-600 text-lg mt-2 font-medium transition-transform transform-gpu duration-300 active:scale-90' onClick={() => setShowModalK(-1)}>Close</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default ListKlaim;
