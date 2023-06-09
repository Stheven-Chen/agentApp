import React from 'react'
import Nav from '../component/nav'
import Tab from '../component/tab'
import MainBox from '../component/mainBox';
import FabComponent from '../component/fab';


type Props = {}

const Application = (props: Props) => {
  return (
    <>
    <Nav/>
    <MainBox
    content={
    <>
      <span className="text-xl font-semibold" >Ini application</span>
      <FabComponent/>
    </>  
  }

    />
    <Tab/>
    </>  )
}

export default Application