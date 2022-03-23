import React from 'react';
import deleteIcon from '../../../../images/icon-delete.svg';
import editIcon from '../../../../images/icon-edit.svg';
import avatarNicole from '../../../../images/avatars/image-amyrobson.png';
import Upvotes from '../common components/Upvotes';
import PlusButton from '../common components/PlusButton';
import MinusButton from '../common components/MinusButton';
import Avatar from '../common components/Avatar';
import CardContainer from '../common components/CardContainer';
import Tag from '../common components/Tag';
import Author from '../common components/Author';
import PostDate from '../common components/PostDate';
import Textarea from '../common components/Textarea';
import ActionButton from '../common components/ActionButton';
import SettingsButton from '../common components/SettingsButton';

function EditableCommentCard() {
  return (
    <CardContainer>
      <div className='flex sm:flex-col'>
        <PlusButton />
        <Upvotes>18</Upvotes>
        <MinusButton />
      </div>
      <div className='flex flex-col w-full gap-4'>
        <div className='flex gap-4 justify-between'>
          <div className='flex gap-4 items-center justify-center'>
            <Avatar avatar={avatarNicole} classes='w-8 h-8' />
            <Author>nicole</Author>
            <Tag>you</Tag>
            <PostDate>1 month ago</PostDate>
          </div>

          <div className='flex gap-4'>
            <SettingsButton
              icon={editIcon}
              classes='bottom-12 right-12 text-blue-500'
            >
              Edit
            </SettingsButton>
            <SettingsButton
              icon={deleteIcon}
              classes='bottom-6 right-8 text-red-500'
            >
              Delete
            </SettingsButton>
          </div>
        </div>
        <Textarea />
        <div className='flex flex-row-reverse sm:hidden '>
          <ActionButton>update</ActionButton>
        </div>
        <div className='hidden sm:flex flex-row-reverse'>
          <ActionButton>update</ActionButton>
        </div>
      </div>
    </CardContainer>
  );
}

export default EditableCommentCard;