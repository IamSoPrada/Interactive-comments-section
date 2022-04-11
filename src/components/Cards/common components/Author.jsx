import React from 'react';
import { Link } from 'react-router-dom';

function Author({ children }) {
  return (
    <div className='flex items-center '>
      <Link
        to='profile'
        className='w-fit text-ellipsis overflow-hidden text-xs font-bold md:text-lg text-gray-800 '
      >
        {children}
      </Link>
    </div>
  );
}

export default Author;
