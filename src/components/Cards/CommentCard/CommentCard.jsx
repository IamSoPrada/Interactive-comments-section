import React, { useContext } from 'react';
import { formatDistanceToNow } from 'date-fns';
import AuthContext from '../../../contexts/authContext.jsx';
import CardContainer from '../common components/CardContainer';
import Tag from '../common components/Tag';
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
  const { nickname, upvotes, date, text, id, userId } = props;
  const currentUserId = useContext(AuthContext).user_id;
  const dateToWords = formatDistanceToNow(new Date(date), {
    // addSuffix: true,
  });
  return (
    <CardContainer classes='bg-slate-50'>
      <div className='flex sm:flex-col'>
        <PlusButton />
        <Upvotes>{upvotes}</Upvotes>
        <MinusButton />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex gap-4 justify-between'>
          <div className='flex gap-4 items-center justify-center'>
            <Avatar avatar={avatarNicole} classes='w-12 h-12' />
            <Author>{nickname}</Author>
            {currentUserId === userId && <Tag>you</Tag>}
            {dateToWords && <PostDate>{dateToWords}</PostDate>}
          </div>
          <ReplyButton comment_id={id} />
        </div>
        <CardText>{text}</CardText>
        <div className='hidden md:flex gap-6 justify-between w-full'>
          <button
            type='button'
            className='w-10 h-10 text-purple-400 text-xl font-bold bg-slate-50 transition ease-in-out hover:bg-slate-100 rounded-full cursor-pointer text-center'
          >
            <svg
              className='w-6 h-6 relative left-2 '
              fill='none'
              stroke='#B8B8B8'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
              />
            </svg>
          </button>
          <button
            type='button'
            className='w-10 h-10 text-purple-400 text-xl font-bold bg-slate-50 transition ease-in-out hover:bg-slate-100 rounded-full cursor-pointer text-center'
          >
            <svg
              className='w-6 h-6 relative left-2 '
              fill='none'
              stroke='#B8B8B8'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
              />
            </svg>
          </button>
          <button
            type='button'
            className='w-10 h-10 text-purple-400 text-xl font-bold bg-slate-50 transition ease-in-out hover:bg-slate-100 rounded-full cursor-pointer text-center'
          >
            <svg
              className='w-6 h-6 relative left-2 '
              fill='none'
              stroke='#B8B8B8'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              />
            </svg>
          </button>
        </div>
      </div>
    </CardContainer>
  );
}

export default CommentCard;
