import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTime } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { addComment } from '../../../slices/commentsSlice';
import Textarea from '../common components/Textarea';
import ActionButton from '../common components/ActionButton';
import Avatar from '../common components/Avatar';
import avatarNicole from '../../../../images/avatars/image-amyrobson.png';
import CardContainer from '../common components/CardContainer';

function TextareaCard() {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setInputText(value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const payload = {
      id: uuidv4(),
      author: 'nick',
      userId: uuidv4(),
      nickname: 'Nicole_LOL',
      text: inputText.trim(),
      date: new Date().getTime(),
    };
    console.log(payload);
    dispatch(addComment(payload));
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
        <ActionButton onClick={onSubmitForm} classes='hidden sm:block'>
          send
        </ActionButton>
        <div className='flex w-full gap-4 justify-between sm:hidden'>
          <Avatar avatar={avatarNicole} classes='w-8 h-8' alt='' />
          <ActionButton onClick={onSubmitForm}>Reply</ActionButton>
        </div>
      </div>
    </CardContainer>
  );
}

export default TextareaCard;
