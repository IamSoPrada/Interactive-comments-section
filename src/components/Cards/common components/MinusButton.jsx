import React from 'react';
// import minusIcon from '../../../../images/icon-minus.svg';

function MinusButton() {
  return (
    <button
      type='button'
      className='px-4 py-1 text-purple-400 text-xl font-bold bg-slate-100 hover:bg-slate-300 rounded-r-lg sm:rounded-tr-none sm:rounded-bl-lg cursor-pointer text-center'
    >
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M20 12H4'
        />
      </svg>
    </button>
  );
}

export default MinusButton;
