import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../reducers/userSlice';
import {useNavigate} from 'react-router-dom'

type Props = {}

const Nav = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/agent/');

  };

  return (
    <>
      <nav className="flex items-center justify-between bg-primary w-full h-14 lg:h-78px font-Poppins px-4 lg:px-2">
        <span className="text-xl font-bold text-white">BCA Insurance</span>
        <img className="w-10 h-7" src="/agent/assets/logout.svg" alt="logout" onClick={handleLogout} />
      </nav>
    </>
  );
}

export default Nav;
