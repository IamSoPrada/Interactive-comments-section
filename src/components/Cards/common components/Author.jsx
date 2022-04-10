import React from 'react';

function Author({ children }) {
  return (
    <h3 className='w-fit text-ellipsis overflow-hidden text-xs font-bold md:text-lg text-gray-800 '>
      {children}
    </h3>
  );
}

export default Author;
