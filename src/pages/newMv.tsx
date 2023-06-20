import React, { useState } from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import FabComponent from '../component/fab';
import Input from '../component/input';
import {useNavigate} from 'react-router-dom';

const NewAppMv: React.FC = () => {
  const [data, setData] = useState({
    insuredName: '',
    nik: '',
    alamat: '',
    telp: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };


  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`:${data.nik}`, {state:{
      insuredName:data.insuredName,
      NIK:data.nik,
      address:data.alamat,
      phone:data.telp,
      email:data.email,
      COB: "MV"
    }})

  };



  return (
    <>
      <Nav />
      <Tab />
      <MainBox
        content={
          <>
            <span className="font-semibold text-xl mb-5">New Application</span>
            <form onSubmit={submit}>

              <div className={` relative my-5 `}>
                <label
                  htmlFor="insuredName"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  Insured Name
                </label>
                <Input
                  id="insuredName"
                  name="insuredName"
                  placeholder=""
                  value={data.insuredName}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"

                />
              </div>
              <div className={` relative mb-5 `}>
                <label
                  htmlFor="nik"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  NIK
                </label>
                <Input
                  id="nik"
                  name="nik"
                  placeholder=""
                  value={data.nik}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"

                />

              </div>
              <div className={` relative mb-5 `}>
                <label
                  htmlFor="alamat"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  Alamat
                </label>
                <Input
                  id="alamat"
                  name="alamat"
                  placeholder=""
                  value={data.alamat}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"

                />

              </div>
              <div className={` relative mb-5 `}>
                <label
                  htmlFor="telp"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  No Telp
                </label>
                <Input
                  id="telp"
                  name="telp"
                  placeholder=""
                  value={data.telp}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"

                />

              </div>
              <div className={` relative mb-5 `}>
                <label
                  htmlFor="email"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  placeholder=""
                  value={data.email}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"
                />

              </div>
              <div className="flex justify-center">

                <button type='submit' className="bg-sky-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90">Send</button>
              </div>
            </form>
          </>
        }
      />
      <FabComponent />
    </>
  );
};

export default NewAppMv;
