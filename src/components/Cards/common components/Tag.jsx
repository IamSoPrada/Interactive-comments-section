import React from 'react';

function Tag({ children }) {
  return (
    <div className='text-gray-100 text-bold text-xs bg-purple-400 p-1 uppercase'>
      {children}
    </div>
  );
}

export default Tag;
