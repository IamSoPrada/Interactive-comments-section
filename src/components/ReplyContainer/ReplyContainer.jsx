import React from 'react';

function ReplyContainer({ children }) {
  return (
    <div className='flex relative flex-col pl-12 gap-4 max-w-3xl '>
      <div className='absolute w-1 left-6 h-full bg-gray-300' />
      {children}
    </div>
  );
}

export default ReplyContainer;
