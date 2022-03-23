import React from 'react';
// import minusIcon from '../../../../images/icon-minus.svg';

function MinusButton() {
  return (
    <button
      type='button'
      className='px-4 py-1 text-purple-400 text-xl font-bold bg-slate-200 hover:bg-slate-300 rounded-r-lg sm:rounded-tr-none sm:rounded-bl-lg cursor-pointer text-center'
    >
      -
    </button>
  );
}

export default MinusButton;
