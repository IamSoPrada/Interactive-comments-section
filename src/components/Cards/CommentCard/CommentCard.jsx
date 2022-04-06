import React from 'react';
import { formatDistanceToNow } from 'date-fns';
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

function CommentCard(props) {
  const { nickname, upvotes, date, text, id } = props;
  const dateToWords = formatDistanceToNow(+date, { addSuffix: true });
  return (
    <CardContainer>
      <div className='flex sm:flex-col'>
        <PlusButton />
        <Upvotes>{upvotes}</Upvotes>
        <MinusButton />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex gap-4 justify-between'>
          <div className='flex gap-4 items-center justify-center'>
            <Avatar avatar={avatarNicole} classes='w-8 h-8' />
            <Author>{nickname}</Author>
            <PostDate>{dateToWords}</PostDate>
          </div>
          <ReplyButton comment_id={id} />
        </div>
        <CardText>{text}</CardText>
      </div>
      <div />
    </CardContainer>
  );
}

export default CommentCard;
