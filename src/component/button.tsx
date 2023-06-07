import React from 'react';

type Props = {
  text: string;
  buttonWidth: string;
  buttonColor: string;
  buttonHeight: string;
  onClick: () => void
};

const Button = (props: Props) => {
  const { text, buttonWidth, buttonColor, buttonHeight } = props;
  const buttonClass = `${buttonWidth} ${buttonColor} ${buttonHeight} text-white  font-Poppins font-semibold py-2 text-center mt-10 rounded-full transition-transform duration-300 transform-gpu active:scale-90`;

  return (
    <button onClick={props.onClick} className={buttonClass}>{text}</button>
  );
};

export default Button;
