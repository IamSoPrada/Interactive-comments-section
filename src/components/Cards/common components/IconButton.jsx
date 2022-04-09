import React from 'react';

function IconButton({ children, classes }) {
  return (
    <button
      type='button'
      className={`${classes} w-10 h-10 text-purple-400 text-xl font-bold bg-slate-50 transition ease-in-out hover:bg-slate-100 rounded-full cursor-pointer text-center`}
    >
      {children}
    </button>
  );
}

export default IconButton;
