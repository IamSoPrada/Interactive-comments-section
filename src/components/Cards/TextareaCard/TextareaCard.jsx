import React, { useState, useContext } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AuthContext from '../../../contexts/authContext.jsx';
import IconButton from '../common components/IconButton';
import { addCommentToDB } from '../../../supabase/comments';
import { addReplyToDB } from '../../../supabase/replies';
import { addComment } from '../../../slices/commentsSlice';
import { addReply } from '../../../slices/repliesSlice';
import { closeModal } from '../../../slices/modalSlice';
import Textarea from '../common components/Textarea';
import ActionButton from '../common components/ActionButton';
import Avatar from '../common components/Avatar';
import avatarNicole from '../../../../images/avatars/image-amyrobson.png';
import CardContainer from '../common components/CardContainer';

import IconImage from '../../../../images/icon-image.svg';
import IconMention from '../../../../images/icon-mention.svg';
import IconSmile from '../../../../images/icon-smile.svg';

function TextareaCard({ reply }) {
  const dispatch = useDispatch();
  const { user_id, username } = useContext(AuthContext);
  const comment_id = useSelector(({ modalInfo }) => modalInfo.comment_id);

  const [inputText, setInputText] = useState('');

  const handleChangeInput = (e) => {
    const { value } = e.target;

    setInputText(value);
  };

  const onSubmitComment = async (e) => {
    e.preventDefault();
    const payload = {
      id: uuidv4(),
      author: username,
      user_id,
      nickname: username,
      text: inputText.trim(),
    };
    const data = await addCommentToDB(payload);
    setInputText('');
    dispatch(addComment(data));
  };

  const onSubmitReply = async (e) => {
    e.preventDefault();
    const payload = {
      id: uuidv4(),
      author: username,
      comment_id,
      user_id,
      nickname: username,
      text: inputText.trim(),
    };
    const data = await addReplyToDB(payload);
    setInputText('');
    batch(() => {
      dispatch(addReply(data));
      dispatch(closeModal());
    });
  };

  return (
    <CardContainer classes='z-60 bg-slate-50'>
      <div className='flex w-full flex-col gap-4 justify-between items-start'>
        <div className='flex w-full flex-row gap-4 justify-between items-start'>
          <Avatar
            avatar={avatarNicole}
            classes='hidden sm:block w-14 h-10'
            alt=''
          />
          <Textarea onChange={handleChangeInput} value={inputText} />
          <ActionButton
            onClick={reply ? onSubmitReply : onSubmitComment}
            classes='hidden sm:block'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
              />
            </svg>
          </ActionButton>
        </div>
        <div className='md:flex gap-6 md:relative left-12'>
          <IconButton>
            <img className='w-6 h-6 relative left-2' src={IconSmile} alt='' />
          </IconButton>
          <IconButton>
            <img className='w-6 h-6 relative left-2' src={IconImage} alt='' />
          </IconButton>
          <IconButton>
            <img className='w-6 h-6 relative left-2' src={IconMention} alt='' />
          </IconButton>
        </div>
        <div className='flex w-full gap-4 justify-between sm:hidden'>
          <Avatar avatar={avatarNicole} classes='w-12 h-12' alt='' />
          <ActionButton onClick={reply ? onSubmitReply : onSubmitComment}>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
              />
            </svg>
          </ActionButton>
        </div>
      </div>
    </CardContainer>
  );
}

export default TextareaCard;
