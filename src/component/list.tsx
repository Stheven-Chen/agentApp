import React from 'react';
import formatCurrency from './function/formatcurrency'

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
    rate:any;
    ktp?:any;
    agentName?:any;
    potentialPremi:any;
    bangunan:any;
    content:any
  }

interface listNew{
    modal:any
    showModal:any
    setShowModal:any
    newData:any;
}
const List: React.FC<listNew> = ({newData,  modal, showModal, setShowModal}) =>{
    return(
        <>
            
            {
                newData.map((data:New, index:number)=>{
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

                        data.COB === 'MV' ? (

                          <div className="fixed top-0 left-0 font-Poppins w-screen h-screen z-50 bg-black bg-opacity-50 flex items-center justify-center">
                          <div className='w-11/12 h-3/4 overflow-y-auto lg:w-9/12 bg-white rounded-xl p-4 flex flex-col'>
                            <span className='w-full text-center text-xl font-semibold'>{data.insuredName}</span>
                            <span className='w-full mt-5 text-start text-base'>{`NIK: ${data.NIK}`}</span>
                            <span className='w-full text-start text-base'>{`Phone: ${data.phone}`}</span>
                            <span className='w-full text-start text-base'>{`Email: ${data.email}`}</span>
                            <span className='w-full text-start text-base'>{`Alamat:`}</span>
                            <span className='w-full text-start text-base'>{`${data.address}`}</span>
                            <span className='w-full text-start text-base'>{`COB: ${data.COB}`}</span>
                            <span>&nbsp;</span>
                            <span className='w-full text-start text-base'>{`Okupasi: ${data.okupasi}`}</span>
                            <span className='w-full text-start text-base'>{`TSI: ${formatCurrency(data.tsi.toString())}`}</span>
                            <span className='w-full text-start text-base'>{`Pertanggungan: ${data.polis}`}</span>
                            <span className='w-full text-start text-base'>{`Periode: ${data.periode}`}</span>
                            <span className='w-full text-start text-base'>{`Merek: ${data.merek}`}</span>
                            <span className='w-full text-start text-base'>{`Model: ${data.model}`}</span>
                            <span className='w-full text-start text-base'>{`No Polisi: ${data.plat}`}</span>
                            <span className='w-full text-start text-base'>{`No Mesin: ${data.mesin}`}</span>
                            <span className='w-full text-start text-base'>{`No rangka: ${data.rangka}`}</span>
                            <span className='w-full text-start text-base'>{`Perluasan: ${data.perluasan.map((item:string) => item).join(" || ").toUpperCase()}`}</span>
                            <span className='w-full text-start text-base'>{`Diskon: ${data.diskon}%`}</span>
                            <span className='w-full text-start text-base'>{`Potential Premi: ${formatCurrency(data.potentialPremi.toString())}`}</span>
                            <img src={data.sign} alt="sign" className='' />
                          <button className='text-sky-600 text-lg font-medium transition-transform transform-gpu duration-300 active:scale-90' onClick={()=>setShowModal(-1)}>Close</button>
                          </div>
                        </div>):(
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
                        <span className='w-full text-start text-base'>{`Rate: ${`${parseFloat(data.rate)*1000}‰`}`}</span>
                        <span className='w-full text-start text-base'>{`Bangunan: ${formatCurrency(data.bangunan.toString())}`}</span>
                        <span className='w-full text-start text-base'>{`Content: ${formatCurrency(data.content.toString())}`}</span>
                        <span className='w-full text-start text-base'>{`TSI: ${formatCurrency(data.tsi.toString())}`}</span>
                        <span className='w-full text-start text-base'>{`Pertanggungan: ${data.polis}`}</span>
                        <span className='w-full text-start text-base'>{`Periode: ${data.periode}`}</span>
                        <span className='w-full text-start text-base'>{`Kelas: ${data.kelas}`}</span>
                        <span className='w-full text-start text-base'>{`Perluasan: ${data.perluasan.map((item:string) => item).join(" || ").toUpperCase()}`}</span>
                        <span className='w-full text-start text-base'>{`Diskon: ${data.diskon}%`}</span>
                        <span className='w-full text-start text-base'>{`Potential Premi: ${formatCurrency(data.potentialPremi.toString())}`}</span>
                        {/* <div className='w-full text-start text-base' onClick={()=>downloadFile()}>{`KTP: ${data?.ktp[0].name}`}</div> */}
                        <img src={data.sign} alt="sign" className='' />
                      <button className='text-sky-600 text-lg pt-3 font-medium transition-transform transform-gpu duration-300 active:scale-90' onClick={() => setShowModal(-1)}>Close</button>
                      </div>
                    </div>
                    )
                      )}
                   </div>
                  
                  )
                })
              }
                  
        </>
    )
}

export default List