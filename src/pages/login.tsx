import React, { useState } from 'react';
import Input from '../component/input';
import Button from '../component/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/userSlice';
import ReCAPTCHA from "react-google-recaptcha";

const Login: React.FC = () => {
  const [username, setUsername] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const clickHandle = async () => {
    if(!isCaptchaVerified){
      alert("Please verify CAPTCHA!");
      return
    }
    try{
        // const res = await fetch('http://192.168.137.1:3001/users');
        const res = await fetch('https://agentserver-production.up.railway.app/users');
        const data = await res.json();
        const trimUsername = username.trim();
        const filterUser = data.find((item:{user:string})=>item.user===trimUsername);
        
        if(!filterUser){
            alert("Username atau Password Salah");
        }
        if(filterUser.pass!==password){
            alert("Username atau Password Salah");
        }else{
             dispatch(login({username, nama:filterUser.nama}));
            navigate('/agent/home');
        }
    }catch(e){
        console.error(e);
    }
  };

  
  

  const handleCaptchaVerify = () => {
    setIsCaptchaVerified(true);
  };
  return (
    <div className="min-h-screen overflow-x-hidden bg-login flex p-2 lg:p-4 flex-col items-center justify-center">
      <img
        src="/agent/assets/login.svg"
        alt="login"
        className="mx-auto mb-5 lg:mt-5 max-w-full w-full lg:w-1/3 h-auto"
      />
      <div className="rounded-xl bg-gray-400 w-10/12 max-w-sm h-72 p-3">
        <span className="text-white text-2xl font-bold font-Poppins">Welcome</span>
  
        <Input
          placeholder="Input Username"
          isPassword={false}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          additionalStyles="rounded-full bg-gray-600 text-white text-center"
        />
        <Input
          placeholder="Password"
          isPassword={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          additionalStyles="rounded-full bg-gray-600 text-white text-center"
        />
  
  
        <Button
          text="Login"
          buttonWidth="w-full"
          buttonColor="bg-sky-600"
          buttonHeight="h-18"
          onClick={clickHandle}
        />
      </div>
        <div className="w-full mt-5">
          <div className="flex justify-center flex-col items-center mb-2">
            <ReCAPTCHA
              sitekey="6Le04pcmAAAAAF8_5HoD8FTJ61lpfYhwaYcCv4zs"
              onChange={handleCaptchaVerify}
            />
          </div>
        </div>
    </div>
  );
  
};

export default Login;
