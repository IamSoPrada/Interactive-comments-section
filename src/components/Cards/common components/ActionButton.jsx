import React from 'react';

function ActionButton({ children, classes, onClick }) {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`${classes} text-gray-50 border-gray-100 text-center`}
    >
      <span className='text-xs md:text-md text-purple-800'>{children}</span>
    </button>
  );
}

export default ActionButton;
