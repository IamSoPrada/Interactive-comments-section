import React from 'react';

function ReplyContainer({ children }) {
  return (
    <div className='flex relative flex-col pl-6 md:pl-12 gap-4 max-w-3xl w-full'>
      <div className='absolute w-1 left-20 bottom-10 h-full bg-gray-200 z-10' />
      {children}
    </div>
  );
}

export default ReplyContainer;
