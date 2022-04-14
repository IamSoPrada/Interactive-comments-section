import React, { Fragment, useEffect, useContext, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch, batch } from 'react-redux';
import { toast } from 'react-toastify';
import AuthContext from '../../contexts/authContext.jsx';
import { supabase } from '../../supabase/supabaseClient';
import {
  getComments,
  addComment,
  editComment,
  removeComment,
} from '../../slices/commentsSlice';
import {
  getReplies,
  addReply,
  editReply,
  removeReply,
} from '../../slices/repliesSlice';
import { addUpvote, getUpvotes, removeUpvote } from '../../slices/upvotesSlice';
import ModalBackground from '../Modals/ModalBackground';
import PageContainer from '../PageContainer';
import ReplyContainer from '../ReplyContainer';
import CommentCard from '../Cards/CommentCard';
import TextareaCard from '../Cards/TextareaCard';

function Comments() {
  const dispatch = useDispatch();

  const currentUserId = useContext(AuthContext).user_id;
  const { comments, status } = useSelector(({ commentsInfo }) => commentsInfo);
  const { commentsUpvotes, repliesUpvotes } = useSelector(
    ({ upvotesInfo }) => upvotesInfo
  );
  const { replies } = useSelector(({ repliesInfo }) => repliesInfo);

  const memoizedComments = useMemo(() => comments, [comments]);
  const memoizedReplies = useMemo(() => replies, [replies]);
  const memoizedCommentsUpvotes = useMemo(
    () => commentsUpvotes,
    [commentsUpvotes]
  );
  const memoizedRepliesUpvotes = useMemo(
    () => repliesUpvotes,
    [repliesUpvotes]
  );

  function upvotesQuantity(upvotes, id) {
    const filteredById = upvotes.filter((obj) =>
      obj.comment_id ? obj.comment_id === id : obj.reply_id === id
    );
    return filteredById.length;
  }

  const repliesOnComment = (id) =>
    memoizedReplies.filter((reply) => reply.comment_id === id);

  const handleStatus = (status) => {
    switch (status) {
      case 'idle':
        return batch(() => {
          dispatch(getComments());
          dispatch(getReplies());
          dispatch(getUpvotes());
        });
      case 'loading':
        return toast.info('loading');
      case 'success':
        toast.dismiss();
        return toast.success('success');
      case 'error':
        toast.dismiss();
        return toast.error('error');
      default:
        return null;
    }
  };

  useEffect(() => {
    let supabaseCommentsSubscription = null;
    let supabaseRepliesSubscription = null;
    let supabaseCommentsUpvotesSubscription = null;
    let supabaseRepliesUpvotesSubscription = null;
    handleStatus(status);
    supabaseCommentsSubscription = supabase
      .from('comments')
      .on('INSERT', (payload) => {
        if (currentUserId !== payload.new.user_id) {
          return dispatch(addComment(payload.new));
        }
      })
      .on('UPDATE', (payload) => {
        if (currentUserId !== payload.new.user_id) {
          return dispatch(editComment(payload.new));
        }
      })
      .on('DELETE', (payload) => {
        if (currentUserId !== payload.new.user_id) {
          return dispatch(removeComment(payload.old));
        }
      })
      .subscribe();
    supabaseRepliesSubscription = supabase
      .from('replies')
      .on('INSERT', (payload) => {
        if (currentUserId !== payload.new.user_id) {
          return dispatch(addReply(payload.new));
        }
      })
      .on('UPDATE', (payload) => {
        if (currentUserId !== payload.new.user_id) {
          return dispatch(editReply(payload.new));
        }
      })
      .on('DELETE', (payload) => {
        if (currentUserId !== payload.new.user_id) {
          return dispatch(removeReply(payload.old));
        }
      })
      .subscribe();
    supabaseCommentsUpvotesSubscription = supabase
      .from('comments_upvotes')
      .on('INSERT', (payload) => {
        if (currentUserId !== payload.new.user_id) {
          return dispatch(addUpvote(payload.new));
        }
      })
      .on('DELETE', (payload) => {
        const payloadWithUpvoteType = {
          type: payload.table === 'comments_upvotes' ? 'comment' : 'reply',
          id: payload.old.id,
        };
        if (currentUserId !== payload.new.user_id) {
          return dispatch(removeUpvote(payloadWithUpvoteType));
        }
      })
      .subscribe();
    supabaseRepliesUpvotesSubscription = supabase
      .from('replies_upvotes')
      .on('INSERT', (payload) => {
        if (currentUserId !== payload.new.user_id) {
          return dispatch(addUpvote(payload.new));
        }
      })

      .on('DELETE', (payload) => {
        if (currentUserId !== payload.new.user_id) {
          return dispatch(removeUpvote(payload.new));
        }
      })
      .subscribe();
    return () => {
      supabase.removeSubscription(supabaseCommentsSubscription);
      supabase.removeSubscription(supabaseRepliesSubscription);
      supabase.removeSubscription(supabaseCommentsUpvotesSubscription);
      supabase.removeSubscription(supabaseRepliesUpvotesSubscription);
    };
  }, [status]);
  useEffect(() => {}, [comments, commentsUpvotes, repliesUpvotes, replies]);

  return (
    <div className='min-h-screen  relative bg-slate-100 mx-auto py-4'>
      <ModalBackground>
        <TextareaCard reply />
      </ModalBackground>
      <PageContainer>
        <TextareaCard />
        {memoizedComments &&
          memoizedComments.map(({ nickname, date, text, id, user_id }) => (
            <Fragment key={uuidv4()}>
              <CommentCard
                key={id}
                id={id}
                upvotes={
                  upvotesQuantity(memoizedCommentsUpvotes, id)
                    ? upvotesQuantity(memoizedCommentsUpvotes, id)
                    : 0
                }
                nickname={nickname}
                date={date}
                text={text}
                userId={user_id}
              />

              {repliesOnComment(id).length > 0 && (
                <ReplyContainer>
                  {repliesOnComment(id).map((reply) => (
                    <Fragment key={uuidv4()}>
                      <CommentCard
                        key={reply.id}
                        id={reply.id}
                        comment_id={reply.comment_id}
                        upvotes={
                          upvotesQuantity(memoizedRepliesUpvotes, reply.id)
                            ? upvotesQuantity(memoizedRepliesUpvotes, reply.id)
                            : 0
                        }
                        nickname={reply.nickname}
                        date={reply.date}
                        userId={reply.user_id}
                        text={reply.text}
                      />
                    </Fragment>
                  ))}
                </ReplyContainer>
              )}
            </Fragment>
          ))}
      </PageContainer>
    </div>
  );
}

export default Comments;
