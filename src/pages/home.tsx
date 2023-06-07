import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/userSlice';
import Nav from '../component/nav'
import Tab from '../component/tab';
import MainBox from '../component/mainBox';

const Home: React.FC = () => {
  const { nama} = useSelector((state: RootState) => state.username);

  return (
    <>
    <Nav/>
    <MainBox
    content={
      <span className="text-xl font-semibold" >Welcome, {nama}</span>
    }
    />
    <Tab/>
    </>
    
  )
};

export default Home;
