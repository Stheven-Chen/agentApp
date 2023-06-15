import React, { useState } from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import { ComState } from '../reducers/comSlice';
import { useSelector } from 'react-redux';
import formatCurrency from '../component/function/formatcurrency';

const Withdraw: React.FC = () => {
  const { jumlah } = useSelector((state: ComState) => state.com);
  const [data, setData] = useState({
    nominal: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onClick = () =>{
    alert('OK')
  }

  return (
    <>
      <Nav />
      <Tab />
      <MainBox
        content={
          <div className="text-xl font-semibold flex flex-col justify-between items-center mt-5 font-Poppins">
            <div className="flex flex-col gap-2 items-center justify-center">
              <span>{formatCurrency(jumlah)}</span>
              <span className="text-sm text-gray-500">Commission This Month</span>
            </div>
            <div className="relative mt-14">
              <label htmlFor="nominal" className="absolute text-base left-3 -top-2.5 transition-all duration-200">
                Nominal
              </label>
              <input
                id="nominal"
                name="nominal"
                placeholder="Rp"
                max={jumlah}
                value={formatCurrency(data.nominal)}
                onChange={handleInputChange}
                className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                type="text"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
              <div onClick={onClick} className="rounded-lg shadow-lg bg-white flex justify-start items-center p-3 transition-transform transform-gpu duration-100 active:scale-90">
                <img className="h-20 w-auto" src="/agent/assets/LBCA.svg" alt="BCA" />
              </div>
              <div onClick={onClick} className="rounded-lg shadow-lg bg-white flex justify-start items-center p-3 transition-transform transform-gpu duration-100 active:scale-90">
                <img className="h-20 w-auto" src="/agent/assets/LOvo.svg" alt="Ovo" />
              </div>
              <div onClick={onClick} className="rounded-lg shadow-lg bg-white flex justify-start items-center p-3 transition-transform transform-gpu duration-100 active:scale-90">
                <img className="h-20 w-auto" src="/agent/assets/LDana.svg" alt="Dana" />
              </div>
              <div onClick={onClick} className="rounded-lg shadow-lg bg-white flex justify-start items-center p-3 transition-transform transform-gpu duration-100 active:scale-90">
                <img className="h-20 w-auto" src="/agent/assets/LGopay.svg" alt="Gopay" />
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Withdraw;
