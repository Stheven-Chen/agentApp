import React from 'react';

type Props = {
  placeholder: string;
  isPassword?: boolean;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  additionalStyles?: string; // Properti tambahan untuk mengontrol gaya
  id?:string;
  name?:string;
  pattern?:string
};

const Input = (props: Props) => {
  const inputType = props.isPassword ? 'password' : 'text';

  const inputStyles = `w-full  h-10 mt-5  p-3  font-Poppins font-semibold ${props.additionalStyles}`;

  return (
    <input
      onChange={props.onChange}
      type={inputType}
      className={inputStyles}
      placeholder={props.placeholder}
      value={props.value}
      id={props.id}
      name={props.name}
      pattern={props.pattern}
    />
  );
};

export default Input;
