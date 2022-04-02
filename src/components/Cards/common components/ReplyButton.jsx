import React from 'react';
import replyIcon from '../../../../images/icon-reply.svg';

function ReplyButton() {
  return (
    <button
      type='button'
      className='absolute bottom-10 right-8 sm:static text-purple-800 font-bold flex gap-2 items-center'
    >
      <img src={replyIcon} className='App-logo' alt='logo' />
      <span className='text-xs md:text-lg'>Reply</span>
    </button>
  );
}

export default ReplyButton;
