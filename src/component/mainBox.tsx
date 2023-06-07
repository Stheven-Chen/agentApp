import React from 'react'

type Props = {content:any}

const MainBox = (props: Props) => {
  return (
    <div className='font-Poppins rounded-30px px-8 py-6 bg-login h-screen  w-screen' >{props.content}</div>
  )
}

export default MainBox