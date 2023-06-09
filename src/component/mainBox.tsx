import React from 'react'

type Props = {content:any}

const MainBox = (props: Props) => {
  return (
    <main className='font-Poppins rounded-30px px-8 py-6 bg-login mb-16  w-screen' >{props.content}</main>
  )
}

export default MainBox