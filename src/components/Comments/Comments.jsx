import React, { Fragment, useEffect, useContext, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch, batch } from 'react-redux';
import { toast } from 'react-toastify';
import AuthContext from '../../contexts/authContext.jsx';
import { supabase } from '../../supabase/supabaseClient';
import { getComments, addComment } from '../../slices/commentsSlice';
import { getReplies, addReply } from '../../slices/repliesSlice';
import { addUpvote, getUpvotes } from '../../slices/upvotesSlice';
import ModalBackground from '../Modals/ModalBackground';
import PageContainer from '../PageContainer';
import ReplyContainer from '../ReplyContainer';
import CommentCard from '../Cards/CommentCard';
import TextareaCard from '../Cards/TextareaCard';

function Comments() {
  let supabaseCommentsSubscription = null;
  let supabaseRepliesSubscription = null;
  let supabaseUpvotesSubscription = null;
  const dispatch = useDispatch();
  const currentUserId = useContext(AuthContext).user_id;
  const { comments, status } = useSelector(({ commentsInfo }) => commentsInfo);
  const { upvotes } = useSelector(({ upvotesInfo }) => upvotesInfo);
  const { replies } = useSelector(({ repliesInfo }) => repliesInfo);

  const memoizedComments = useMemo(() => comments, [comments]);
  const memoizedReplies = useMemo(() => replies, [replies]);
  const memoizedUpvotes = useMemo(() => upvotes, [upvotes]);

  function upvotesQuantity(id) {
    const filteredById = memoizedUpvotes.filter((obj) => obj.comment_id === id);
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
    handleStatus(status);
    supabaseCommentsSubscription = supabase
      .from('comments')
      .on('*', (payload) => {
        switch (payload.eventType) {
          case 'INSERT':
            if (currentUserId !== payload.new.user_id) {
              return dispatch(addComment(payload.new));
            }
            return null;
          default:
            return null;
        }
      })
      .subscribe();
    supabaseRepliesSubscription = supabase
      .from('replies')
      .on('*', (payload) => {
        switch (payload.eventType) {
          case 'INSERT':
            if (currentUserId !== payload.new.user_id) {
              return dispatch(addReply(payload.new));
            }
            return null;
          default:
            return null;
        }
      })
      .subscribe();
    supabaseUpvotesSubscription = supabase
      .from('upvotes')
      .on('*', (payload) => {
        switch (payload.eventType) {
          case 'INSERT':
            if (currentUserId !== payload.new.user_id) {
              return dispatch(addUpvote(payload.new));
            }
            return null;
          default:
            return null;
        }
      })
      .subscribe();
    return () => {
      supabase.removeSubscription(supabaseCommentsSubscription);
      supabase.removeSubscription(supabaseRepliesSubscription);
    };
  }, [status]);

  return (
    <div className='relative bg-slate-100 mx-auto py-4'>
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
                upvotes={upvotesQuantity(id) ? upvotesQuantity(id) : 0}
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
                          upvotesQuantity(reply.id)
                            ? upvotesQuantity(reply.id)
                            : 0
                        }
                        nickname={nickname}
                        date={reply.date}
                        userId={reply.user_id}
                        text={reply.text}
                      />
                    </Fragment>
                  ))}

                  {/* <TextareaCard /> */}
                  {/* <EditableCommentCard /> */}
                </ReplyContainer>
              )}
            </Fragment>
          ))}
      </PageContainer>
    </div>
  );
}

export default Comments;
