import React from 'react';

function Author({ children }) {
  return (
    <h3 className='w-24 md:w-60 text-ellipsis overflow-hidden text-xs font-bold md:text-lg text-gray-800 '>
      {children}
    </h3>
  );
}

export default Author;
