import React from 'react';
import { useSelector } from 'react-redux';

function ModalBackground({ children }) {
  const isOpened = useSelector(({ modalInfo }) => modalInfo.isOpened);
  if (!isOpened) return null;
  return (
    <div className='z-50 p-16 backdrop-blur-sm absolute w-full h-full flex justify-center items-start bg-gray-500/[.12]'>
      {children}
    </div>
  );
}

export default ModalBackground;
