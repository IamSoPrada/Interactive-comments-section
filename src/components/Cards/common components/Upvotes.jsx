import React from 'react';

function Upvotes({ children }) {
  return (
    <span className='bg-slate-50 flex p-2 justify-center items-center transition ease-in-out text-purple-400 text-center align-middle font-bold'>
      {children}
    </span>
  );
}

export default Upvotes;
