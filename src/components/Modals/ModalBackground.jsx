import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../slices/modalSlice';

function ModalBackground({ children }) {
  const isOpened = useSelector(({ modalInfo }) => modalInfo.isOpened);
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {
    if (e.target.id === 'modal-background') dispatch(closeModal());
  };
  if (!isOpened) return null;
  return (
    <div
      id='modal-background'
      onClick={(e) => handleCloseModal(e)}
      className='absolute z-30 py-16 px-2 bottom-1 backdrop-blur-sm  w-full h-full flex justify-center items-start bg-gray-500/[.12]'
    >
      {children}
    </div>
  );
}

export default ModalBackground;
