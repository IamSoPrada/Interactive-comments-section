import React from 'react';

function ActionButton({ children, classes, onClick }) {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`${
        classes && classes
      } bg-purple-800 block max-w-max text-gray-50 rounded-full px-6 py-3 md:px-3 md:py-3 font-bold uppercase text-center`}
    >
      <span className='text-xs md:text-lg'>{children}</span>
    </button>
  );
}

export default ActionButton;
