import React, { useState, useContext } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AuthContext from '../../../contexts/authContext.jsx';
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
    dispatch(addComment(data));
    setInputText('');
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
    batch(() => {
      dispatch(addReply(data));
      setInputText('');
      dispatch(closeModal());
    });
  };

  return (
    <CardContainer classes='bg-slate-50'>
      <div className='flex w-full flex-col sm:flex-row gap-4 justify-between items-start'>
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
        <div className='flex w-full gap-4 justify-between sm:hidden'>
          <Avatar avatar={avatarNicole} classes='w-8 h-8' alt='' />
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
