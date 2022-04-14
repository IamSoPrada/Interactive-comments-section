import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import IconButton from '../common components/IconButton';
import AuthContext from '../../../contexts/authContext.jsx';
import CardContainer from '../common components/CardContainer';
import Tag from '../common components/Tag';
import CardText from '../common components/CardText';
import Author from '../common components/Author';
import Avatar from '../common components/Avatar';
import Upvotes from '../common components/Upvotes';
import TextareaCard from '../TextareaCard';
import PostDate from '../common components/PostDate';
import ReplyButton from '../common components/ReplyButton';
import DropDownMenu from '../common components/DropDownMenu';
import ActionButton from '../common components/ActionButton';
import avatarNicole from '../../../../images/avatars/image-amyrobson.png';
import PlusButton from '../common components/PlusButton';
import MinusButton from '../common components/MinusButton';
import {
  addUpvoteOnCommentToDB,
  removeUpvoteOnCommentToDB,
} from '../../../supabase/upvotes';
import { removeCommentFromDB } from '../../../supabase/comments';
import { addUpvote, removeUpvote } from '../../../slices/upvotesSlice';
import { removeComment } from '../../../slices/commentsSlice';
import RepliesIcon from '../../../../images/icon-replies.svg';
import ShareIcon from '../../../../images/icon-share.svg';
import EyesIcon from '../../../../images/icon-eyes.svg';
import PointsIcon from '../../../../images/icon-point.svg';
import BookmarkIcon from '../../../../images/icon-bookmark.svg';

function CommentCard(props) {
  const [isDropDownOpened, setDropDownOpened] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { commentsUpvotes, repliesUpvotes } = useSelector(
    ({ upvotesInfo }) => upvotesInfo
  );
  const dispatch = useDispatch();
  const { nickname, upvotes, date, text, id, userId, comment_id } = props;
  const currentUserId = useContext(AuthContext).user_id;
  const dateToWords = formatDistanceToNow(new Date(date), {
    // addSuffix: true,
  });
  const isAlreadyLikedPost = (arr) =>
    arr.filter((obj) =>
      obj.comment_id
        ? obj.comment_id === id && obj.user_id === currentUserId
        : obj.reply_id === id && obj.user_id === currentUserId
    );

  const hasLiked = comment_id
    ? isAlreadyLikedPost(repliesUpvotes)
    : isAlreadyLikedPost(commentsUpvotes);

  const addUpvoteToDB = async () => {
    const payload = {
      type: comment_id ? 'reply' : 'comment',
      user_id: currentUserId,
      id: hasLiked.length > 0 ? hasLiked[0].id : id,
    };

    if (hasLiked.length === 0) {
      const data = await addUpvoteOnCommentToDB(payload);
      dispatch(addUpvote(data));
    } else {
      const data = await removeUpvoteOnCommentToDB(payload);
      dispatch(removeUpvote(payload));
    }
  };

  const handleRemoveComment = async () => {
    const payload = {
      type: comment_id ? 'reply' : 'comment',
      user_id: currentUserId,
      id,
    };

    const data = await removeCommentFromDB(payload);
    dispatch(removeComment(payload));
  };

  const handleEditComment = () => {
    setIsEditOpen(!isEditOpen);
    setDropDownOpened(false);
  };

  return (
    <CardContainer classes='bg-slate-50 shadow-sm'>
      <div className='flex sm:flex-col'>
        <PlusButton onClick={addUpvoteToDB} />
        <Upvotes>{upvotes}</Upvotes>
        <MinusButton />
      </div>
      <div className='flex flex-col gap-4 w-full justify-between'>
        <div className='flex gap-4 justify-between'>
          <div className='flex gap-4 items-center justify-between w-full'>
            <div className='flex gap-4 items-center '>
              <Avatar avatar={avatarNicole} classes='w-10 h-10' />
              <Author>{nickname}</Author>
              {currentUserId === userId && <Tag>you</Tag>}
            </div>

            {dateToWords && <PostDate>{dateToWords}</PostDate>}
          </div>
          <ReplyButton comment_id={comment_id || id} />
        </div>
        {isEditOpen || <CardText>{text}</CardText>}
        {isEditOpen && (
          <TextareaCard
            id={id}
            editMode={isEditOpen}
            textToEdit={text}
            reply={comment_id && true}
          />
        )}
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
            <IconButton onClick={() => setDropDownOpened(!isDropDownOpened)}>
              <img
                className='w-6 h-6 relative left-2'
                src={PointsIcon}
                alt=''
              />
            </IconButton>
          )}
          {isDropDownOpened && (
            <DropDownMenu classes='z-30 p-2 absolute -right-28 md:-right-32 bg-slate-50 rounded-md shadow-sm'>
              <div className='flex flex-col gap-2 w-20'>
                <ActionButton
                  onClick={handleEditComment}
                  classes='block w-full hover:bg-slate-200  rounded-md'
                >
                  Edit
                </ActionButton>
                <ActionButton
                  onClick={handleRemoveComment}
                  classes='hover:bg-slate-200 px-6 rounded-md w-full'
                >
                  Delete
                </ActionButton>
              </div>
            </DropDownMenu>
          )}
        </div>
      </div>
    </CardContainer>
  );
}

export default CommentCard;
