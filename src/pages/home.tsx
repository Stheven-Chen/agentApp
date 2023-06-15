import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/userSlice';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import BarChart from '../component/barChart';
import PieChart from '../component/pieChart';

const Home: React.FC = () => {
  const [data, setData] = useState({
    premiumMinggu: '',
    premiumBulan: '',
    premiumTahun: '',
    baruMinggu: '',
    baruBulan: '',
    baruTahun: '',
    polis: '',
    showPremi: '',
    showBaru: ''
  });
  const { nama, username } = useSelector((state: RootState) => state.username);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://192.168.137.1:3001/${username}`);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      setData({
        premiumMinggu: data[0].data.premi.mingguan,
        premiumBulan: data[0].data.premi.bulanan,
        premiumTahun: data[0].data.premi.tahunan,
        baruMinggu: data[0].data.pengajuan_baru.mingguan,
        baruBulan: data[0].data.pengajuan_baru.bulanan,
        baruTahun: data[0].data.pengajuan_baru.tahunan,
        polis: data[0].data.total_polis,
        showPremi: data[0].data.premi.mingguan,
        showBaru: data[0].data.pengajuan_baru.mingguan
      });
    } catch (e) {
      console.error(`Ada error ni ${e}`);
      // Handle error here (e.g., show error message)
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const { premiumMinggu, premiumBulan, premiumTahun, baruMinggu, baruBulan, baruTahun, polis, showPremi, showBaru } = data;

  return (
    <div className="overflow-hidden">
      <Nav />
      <MainBox
        content={
          <>
            <span className="text-xl font-semibold font-Poppins">Welcome, {nama}</span>
            <div className="flex flex-col mt-5 justify-center items-center">
              {premiumTahun && (
                <div className="bg-white w-full rounded-xl shadow-lg p-4">
                  <span className="text-2xl font-semibold font-Poppins text-dark">Premi</span>
                  <div className="flex justify-between items-center my-2 space-x-4">
                    <button
                      className="bg-sky-500 rounded-full w-16 text-sm text-white"
                      onClick={() => setData({ ...data, showPremi: premiumMinggu })}
                    >
                      Week
                    </button>
                    <button
                      className="bg-sky-500 rounded-full w-16 text-sm text-white"
                      onClick={() => setData({ ...data, showPremi: premiumBulan })}
                    >
                      Month
                    </button>
                    <button
                      className="bg-sky-500 rounded-full w-16 text-sm text-white"
                      onClick={() => setData({ ...data, showPremi: premiumTahun })}
                    >
                      Year
                    </button>
                  </div>
                  <div className="mt-4 mx-auto max-w-lg ">
                    <BarChart
                      data={{
                        labels: Object.keys(showPremi),
                        datasets: [
                          {
                            label: 'Premi',
                            data: Object.values(showPremi),
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
            <div className="flex flex-col mt-5 justify-center items-center">
              {baruTahun && (
                <div className="bg-white w-full rounded-xl shadow-lg p-4">
                  <span className="text-2xl font-semibold font-Poppins text-dark">Pengajuan Baru</span>
                  <div className="flex justify-between items-center my-2 space-x-4">
                    <button
                      className="bg-sky-500 rounded-full w-16 text-sm text-white"
                      onClick={() => setData({ ...data, showBaru: baruMinggu })}
                    >
                      Week
                    </button>
                    <button
                      className="bg-sky-500 rounded-full w-16 text-sm text-white"
                      onClick={() => setData({ ...data, showBaru: baruBulan })}
                    >
                      Month
                    </button>
                    <button
                      className="bg-sky-500 rounded-full w-16 text-sm text-white"
                      onClick={() => setData({ ...data, showBaru: baruTahun })}
                    >
                      Year
                    </button>
                  </div>
                  <div className="mt-4 mx-auto max-w-lg">
                    <BarChart
                      data={{
                        labels: Object.keys(showBaru),
                        datasets: [
                          {
                            label: 'Pengajuan Baru',
                            data: Object.values(showBaru),
                            backgroundColor: 
                              // '#FF5733', // Merah
                              // '#FFC300', // Kuning
                              // '#4CAF50', // Hijau
                              // '#2196F3', // Biru
                              // '#9C27B0', // Ungu
                              // '#FF9800', // Jingga
                              // '#E91E63', // Merah Muda
                              //'#00BCD4', // Cyan
                              // '#FFEB3B', // Kuning Cerah
                              '#8BC34A', // Hijau Limau
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
            <div className="flex flex-col mt-5 justify-center items-center">
              {polis && (
                <div className="bg-white w-full rounded-xl shadow-lg p-4">
                  <span className="text-2xl font-semibold font-Poppins text-dark">Total Polis</span>
                  <div className="mt-4 mx-auto max-w-lg">
                    <PieChart
                      data={{
                        labels: Object.keys(polis),
                        datasets: [
                          {
                            label: 'Total Polis',
                            data: Object.values(polis),
                            backgroundColor: ['#00BCD4', '#4CAF50', '#3F51B5'],
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
      <Tab />
    </div>
  );
};

export default Home;
