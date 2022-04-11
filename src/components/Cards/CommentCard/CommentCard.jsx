import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import IconButton from '../common components/IconButton';
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
import { addUpvoteOnCommentToDB } from '../../../supabase/upvotes';
import { addUpvote } from '../../../slices/upvotesSlice';
import RepliesIcon from '../../../../images/icon-replies.svg';
import ShareIcon from '../../../../images/icon-share.svg';
import EyesIcon from '../../../../images/icon-eyes.svg';
import PointsIcon from '../../../../images/icon-point.svg';
import BookmarkIcon from '../../../../images/icon-bookmark.svg';

function CommentCard(props) {
  const dispatch = useDispatch();
  const { nickname, upvotes, date, text, id, userId, comment_id } = props;
  const currentUserId = useContext(AuthContext).user_id;
  const dateToWords = formatDistanceToNow(new Date(date), {
    // addSuffix: true,
  });
  const addUpvoteToDB = async () => {
    const payload = {
      type: comment_id ? 'reply' : 'comment',
      user_id: currentUserId,
      id,
    };
    const data = await addUpvoteOnCommentToDB(payload);
    dispatch(addUpvote(data));
  };

  return (
    <CardContainer classes='bg-slate-50'>
      <div className='flex sm:flex-col'>
        <PlusButton onClick={addUpvoteToDB} />
        <Upvotes>{upvotes}</Upvotes>
        <MinusButton />
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <div className='flex gap-4 justify-between'>
          <div className='flex gap-4 items-center justify-between w-full'>
            <div className='flex gap-2 items-center '>
              <Avatar avatar={avatarNicole} classes='w-10 h-10' />
              <Author>{nickname}</Author>
              {currentUserId === userId && <Tag>you</Tag>}
            </div>

            {dateToWords && <PostDate>{dateToWords}</PostDate>}
          </div>
          <ReplyButton comment_id={comment_id || id} />
        </div>
        <CardText>{text}</CardText>
        <div className='absolute bottom-4 left-32 sm:relative sm:bottom-0 sm:left-0 flex justify-between'>
          <IconButton classes='hidden sm:block'>
            <img className='w-6 h-6 relative left-2' src={RepliesIcon} alt='' />
          </IconButton>
          <IconButton classes='hidden sm:block'>
            <img className='w-6 h-6 relative left-2' src={ShareIcon} alt='' />
          </IconButton>
          <IconButton classes='hidden sm:block'>
            <img className='w-6 h-6 relative left-2' src={EyesIcon} alt='' />
          </IconButton>
          <IconButton classes='hidden sm:block'>
            <img
              className='w-6 h-6 relative left-2'
              src={BookmarkIcon}
              alt=''
            />
          </IconButton>
          {currentUserId === userId && (
            <IconButton>
              <img
                className='w-6 h-6 relative left-2'
                src={PointsIcon}
                alt=''
              />
            </IconButton>
          )}
        </div>
      </div>
    </CardContainer>
  );
}

export default CommentCard;
