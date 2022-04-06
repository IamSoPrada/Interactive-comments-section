import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../slices/modalSlice';
import replyIcon from '../../../../images/icon-reply.svg';

function ReplyButton({ comment_id }) {
  const dispatch = useDispatch();

  const handleOpenModal = ({ type, id = null }) => {
    dispatch(openModal({ type, id: comment_id }));
  };

  return (
    <button
      onClick={handleOpenModal}
      type='button'
      className='absolute bottom-10 right-8 sm:static text-purple-800 font-bold flex gap-2 items-center'
    >
      <img src={replyIcon} className='App-logo' alt='logo' />
      <span className='text-xs md:text-lg'>Reply</span>
    </button>
  );
}

export default ReplyButton;
