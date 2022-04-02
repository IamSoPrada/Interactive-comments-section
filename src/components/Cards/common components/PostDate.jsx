import React from 'react';

function PostDate({ children }) {
  return (
    <span className='text-xs md:text-md text-gray-600 text-bold  text-center'>
      {children}
    </span>
  );
}

export default PostDate;
