import React from "react";
import {useNavigate} from 'react-router-dom';

type Props = {};

const Tab = (props: Props) => {
    const navigate =useNavigate();

    const home = () =>{
        navigate('/home')
    }
    const application = () =>{
        navigate('/application')
        
    }
    const commision = () =>{
        navigate('/commision')

    }
  return (
    <div className="flex items-center justify-between  fixed bottom-0 left-0 w-full z-50 bg-primary h-14 p-5 font-Poppins rounded-t-30px">
      <div className="flex items-center justify-center flex-col w-20">
        <img onClick={home} className='w-5 h-5' src="./assets/home.svg" alt="home" />
        <span className="text-white">Home</span>
      </div>
      <div className="flex items-center justify-center flex-col w-20">
        <img onClick={application} className='w-5 h-5' src="./assets/application.svg" alt="application" />
        <span className="text-white">Application</span>
      </div>
      <div className="flex items-center justify-center flex-col w-20">
        <img onClick={commision} className='w-5 h-5' src="./assets/commision.svg" alt="commision" />
        <span className="text-white">Commision</span>
      </div>
    </div>
  );
};

export default Tab;
