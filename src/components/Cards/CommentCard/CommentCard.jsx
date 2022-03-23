import React from 'react';
import CardContainer from '../common components/CardContainer';
import CardText from '../common components/CardText';
import Author from '../common components/Author';
import Avatar from '../common components/Avatar';
import Upvotes from '../common components/Upvotes';
import PostDate from '../common components/PostDate';
import ReplyButton from '../common components/ReplyButton';
import avatarNicole from '../../../../images/avatars/image-amyrobson.png';
import PlusButton from '../common components/PlusButton';
import MinusButton from '../common components/MinusButton';

function CommentCard() {
  return (
    <CardContainer>
      <div className='flex sm:flex-col'>
        <PlusButton />
        <Upvotes>18</Upvotes>
        <MinusButton />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 justify-between'>
          <div className='flex gap-4 items-center justify-center'>
            <Avatar avatar={avatarNicole} classes='w-8 h-8' />
            <Author>nicole</Author>
            <PostDate>1 month ago</PostDate>
          </div>
          <ReplyButton />
        </div>
        <CardText>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You have nailed the design and the
          responsiveness at various breakpoints works really well.
        </CardText>
      </div>
      <div />
    </CardContainer>
  );
}

export default CommentCard;