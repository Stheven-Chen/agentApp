import React, {useState, useEffect} from 'react'
import Nav from '../component/nav'
import Tab from '../component/tab'
import MainBox from '../component/mainBox';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/userSlice';
import BarChart from '../component/barChart';
import formatCurrency from '../component/function/formatcurrency';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {setCom} from '../reducers/comSlice';



const Commision:React.FC = () => {
  const [data, setData] = useState({
    minggu:'',
    bulan:'',
    tahun:'',
    showCom:''
    });
  const { username } = useSelector((state: RootState) => state.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(()=>{

    const fetchCom = async () =>{
      
      // const res = await fetch(`http://192.168.137.1:3001/${username}/commision`);
      const res = await fetch(`https://agentserver-production.up.railway.app/${username}/commision`);
      const com = await res.json();
      setData({
        minggu: com[0].commission.mingguan,
        bulan: com[0].commission.bulanan,
        tahun: com[0].commission.tahunan,
        showCom:com[0].commission.mingguan,
      })
      // console.log(com[0].commission.tahunan)
    }
    fetchCom()
  },[username])

  const {minggu, bulan, tahun, showCom} = data;
  

  const onClick = () =>{
    dispatch(setCom({jumlah:Object.values(minggu).flatMap(arr => arr).reduce((acc, cur) => acc + Number(cur), 0).toString()}))
    navigate('withdraw')
  }
  return (
    <>
    <Nav/>
    <MainBox
    content={
      <>
        <span className="text-xl font-semibold font-Poppins" >Commision</span>

        <div className='text-xl font-semibold flex justify-between items-center mt-5 font-Poppins'>
          {minggu ? (
            <div className='flex flex-col'>
              <span>{`${formatCurrency(Object.values(minggu).flatMap(arr => arr).reduce((acc, cur) => acc + Number(cur), 0).toString())}`}</span>
              <span className='text-sm text-gray-500'>Commision This Month</span>
            </div>
          ):<span>-</span>}

          <button onClick={onClick} className='bg-emerald-500 text-white rounded-xl p-2 text-lg shadow-lg transform-gpu transition-transform duration-300 active:scale-90'>Withdraw</button>
        </div>





        <div className="flex flex-col mt-5 justify-center items-center font-Poppins">
        {tahun && (
                <div className="bg-white w-full rounded-xl shadow-lg p-4">
                  <span className="text-2xl font-semibold font-Poppins text-dark">Premi</span>
                  <div className="flex justify-between items-center my-2 space-x-4">
                    <button
                      className="bg-sky-500 rounded-full w-16 text-sm text-white"
                      onClick={() => setData({ ...data, showCom: minggu })}
                    >
                      Week
                    </button>
                    <button
                      className="bg-sky-500 rounded-full w-16 text-sm text-white"
                      onClick={() => setData({ ...data, showCom: bulan })}
                    >
                      Month
                    </button>
                    <button
                      className="bg-sky-500 rounded-full w-16 text-sm text-white"
                      onClick={() => setData({ ...data, showCom: tahun })}
                    >
                      Year
                    </button>
                  </div>
                  <div className="mt-4 mx-auto max-w-lg ">
                    <BarChart
                      data={{
                        labels: Object.keys(showCom),
                        datasets: [
                          {
                            label: 'Commision',
                            data: Object.values(showCom),
                            backgroundColor: 
                              // '#FF5733', // Merah
                              // '#FFC300', // Kuning
                              // '#4CAF50', // Hijau
                              // '#2196F3', // Biru
                              // '#9C27B0', // Ungu
                              // '#FF9800', // Jingga
                              '#E91E63', // Merah Muda
                              // '#00BCD4', // Cyan
                              // '#FFEB3B', // Kuning Cerah
                              // '#8BC34A', // Hijau Limau
                              // '#3F51B5', // Biru Tua
                              // '#673AB7', // Ungu Tua
                            
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                      }}
                    />
                  </div>
                </div>
              )}
        </div>
      
      </>
    }
    />
    <Tab/>
    </>  )
}

export default Commision