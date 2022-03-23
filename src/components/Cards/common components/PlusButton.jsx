import React from 'react';
// import plusIcon from '../../../../images/icon-plus.svg';

function PlusButton() {
  return (
    <button
      type='button'
      className='px-4 py-1 text-purple-400 text-xl font-bold bg-slate-200 transition ease-in-out hover:bg-slate-300 rounded-l-lg sm:rounded-bl-none sm:rounded-tr-lg  cursor-pointer text-center'
    >
      +
    </button>
  );
}

export default PlusButton;
