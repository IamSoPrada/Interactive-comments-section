import React from 'react';
import Textarea from '../common components/Textarea';
import ActionButton from '../common components/ActionButton';
import Avatar from '../common components/Avatar';
import avatarNicole from '../../../../images/avatars/image-amyrobson.png';
import CardContainer from '../common components/CardContainer';

function TextareaCard() {
  return (
    <CardContainer>
      <div className='flex w-full flex-col sm:flex-row gap-4 justify-between items-start'>
        <Avatar
          avatar={avatarNicole}
          classes='hidden sm:block w-14 h-10'
          alt=''
        />
        <Textarea />
        <ActionButton classes='hidden sm:block'>send</ActionButton>
        <div className='flex w-full gap-4 justify-between sm:hidden'>
          <Avatar avatar={avatarNicole} classes='w-8 h-8' alt='' />
          <ActionButton>Reply</ActionButton>
        </div>
      </div>
    </CardContainer>
  );
}

export default TextareaCard;
