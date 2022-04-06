import React, { Fragment, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import AuthContext from '../../contexts/authContext.jsx';
import { supabase } from '../../supabase/supabaseClient';
import { getComments, addComment } from '../../slices/commentsSlice';
import ModalBackground from '../Modals/ModalBackground';
import PageContainer from '../PageContainer';
import ReplyContainer from '../ReplyContainer';
import CommentCard from '../Cards/CommentCard';
import TextareaCard from '../Cards/TextareaCard';
// import EditableCommentCard from '../Cards/EditableCommentCard';

function Comments() {
  const dispatch = useDispatch();
  const { user_id, token, username } = useContext(AuthContext);
  const { comments, status } = useSelector(({ commentsInfo }) => commentsInfo);
  const { upvotes } = useSelector(({ upvotesInfo }) => upvotesInfo);
  const { replies } = useSelector(({ repliesInfo }) => repliesInfo);

  const upvotesQuantity = (id) => upvotes.find((obj) => obj.comment_id === id);

  const repliesOnComment = (id) =>
    replies.filter((reply) => reply.comment_id === id);

  const handleStatus = (status) => {
    switch (status) {
      case 'idle':
        return dispatch(getComments());
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
    supabase
      .from('comments')
      .on('*', (payload) => {
        switch (payload.eventType) {
          case 'INSERT':
            if (user_id !== payload.new.user_id) {
              return dispatch(addComment(payload.new));
            }
            return null;
          default:
            return null;
        }
      })
      .subscribe();
    return () => {
      supabase.removeSubscription();
    };
  }, [status, comments]);

  return (
    <div className='relative bg-slate-100 mx-auto py-4'>
      <ModalBackground>
        <TextareaCard reply />
      </ModalBackground>
      <PageContainer>
        <TextareaCard />
        {comments &&
          comments.map(({ nickname, date, text, id }) => (
            <Fragment key={uuidv4()}>
              <CommentCard
                key={id}
                id={id}
                upvotes={upvotesQuantity(id) ? upvotesQuantity(id).upvotes : 0}
                nickname={nickname}
                date={date}
                text={text}
              />
              {repliesOnComment(id).length > 0 && (
                <ReplyContainer>
                  {repliesOnComment(id).map(
                    ({ nickname, date, text, comment_id, id }) => (
                      <CommentCard
                        key={id}
                        id={comment_id}
                        upvotes={
                          upvotesQuantity(id) ? upvotesQuantity(id).upvotes : 0
                        }
                        nickname={nickname}
                        date={date}
                        text={text}
                      />
                    )
                  )}

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
