import React from 'react'

type Props = {
  placeholder: string;
  isPassword: boolean;
  value?: string;
  onChange:React.ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: Props) => {
  const inputType = props.isPassword ? 'password' : 'text';

  return (
    <input
      onChange={props.onChange}
      type={inputType}
      className='w-full rounded-full h-10 mt-5 bg-gray-600 p-3 text-white font-Poppins text-center font-semibold'
      placeholder={props.placeholder}
      value={props.value}
    />
  )
}

export default Input
