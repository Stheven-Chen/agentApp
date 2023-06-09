import React, { useState } from 'react';

function FabComponent() {
  const [showBulatans, setShowBulatans] = useState(false);

  const handleFabClick = () => {
    setShowBulatans(!showBulatans);
  };

  return (
    <div className="fixed bottom-16 right-4">
      {/* FAB Button */}
      <button
        className="bg-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-md"
        onClick={handleFabClick}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>

      {/* Bulatan Klaim */}
      {showBulatans && (
        <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center absolute right-2 bottom-24">
          <span className="text-xs font-bold">Klaim</span>
        </div>
      )}

      {/* Bulatan Endorsement */}
      {showBulatans && (
        <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center absolute right-2 bottom-44">
          <span className="text-xs font-bold">Endorsement</span>
        </div>
      )}

      {/* Bulatan New */}
      {showBulatans && (
        <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center absolute right-2 bottom-64">
          <span className="text-xs font-bold">New</span>
        </div>
      )}
    </div>
  );
}

export default FabComponent;
