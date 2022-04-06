import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AuthContext from '../../../contexts/authContext.jsx';
import { addCommentToDB } from '../../../supabase/comments';
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
  const commentId = useSelector(({ modalInfo }) => modalInfo.commentId);

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
      date: new Date().getTime(),
    };
    const data = await addCommentToDB(payload);
    dispatch(addComment(data));
    setInputText('');
  };

  const onSubmitReply = (e) => {
    e.preventDefault();
    const payload = {
      id: uuidv4(),
      author: 'nick',
      commentId,
      userId: uuidv4(),
      nickname: 'Nicole_LOL',
      text: inputText.trim(),
      date: new Date().getTime(),
    };
    dispatch(addReply(payload));
    dispatch(closeModal());
    setInputText('');
  };

  return (
    <CardContainer>
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
          send
        </ActionButton>
        <div className='flex w-full gap-4 justify-between sm:hidden'>
          <Avatar avatar={avatarNicole} classes='w-8 h-8' alt='' />
          <ActionButton onClick={reply ? onSubmitReply : onSubmitComment}>
            Reply
          </ActionButton>
        </div>
      </div>
    </CardContainer>
  );
}

export default TextareaCard;
