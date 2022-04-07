import React from 'react';
// import minusIcon from '../../../../images/icon-minus.svg';

function MinusButton() {
  return (
    <button
      type='button'
      className='w-10 h-10 text-purple-400 text-xl font-bold bg-slate-100 hover:bg-slate-300 rounded-full cursor-pointer text-center'
    >
      <svg
        className='w-6 h-6 relative left-2'
        fill='none'
        stroke='#B8B8B8'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    </button>
  );
}

export default MinusButton;
