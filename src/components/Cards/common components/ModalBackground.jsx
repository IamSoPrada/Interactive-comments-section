import React from 'react';

function ModalBackground({ children }) {
  return (
    <div className='z-50 p-16 backdrop-blur-sm absolute w-full h-full flex justify-center items-start bg-gray-500/[.12]'>
      {children}
    </div>
  );
}

export default ModalBackground;
