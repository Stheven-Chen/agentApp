import React from 'react'
import Nav from '../component/nav'
import Tab from '../component/tab'
import MainBox from '../component/mainBox';


type Props = {}

const Commision = (props: Props) => {
  return (
    <>
    <Nav/>
    <MainBox
    content={

      <span className="text-xl font-semibold" >Ini commision</span>
    }
    />
    <Tab/>
    </>  )
}

export default Commision