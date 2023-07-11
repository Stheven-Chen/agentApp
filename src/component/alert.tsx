import React from 'react';

interface modalAlert {
  text?: string;
  onClick?: () => void;
  onCancel?: () => void;
  handleClose?: () => void;
}

const Alert: React.FC<modalAlert> = ({ text, handleClose, onClick, onCancel }) => {
  

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-600 bg-opacity-50"
      onClick={handleClose}
    >
      <div className="bg-white w-80 h-72 rounded-lg overflow-hidden flex flex-col justify-center items-center">
        <div className="py-2">
          <h3 className="text-black text-center font-bold text-2xl">COB</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="bg-sky-600 text-white font-bold text-lg w-32 h-14 rounded-xl mt-5" onClick={onClick}>
            Properti
          </button>
          {onCancel && (
            <button className="bg-amber-400 text-white font-bold text-lg w-32 h-14 rounded-xl mt-5" onClick={onCancel}>
              MV
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
