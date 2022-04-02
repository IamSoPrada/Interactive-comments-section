import React from 'react';
import { useSelector } from 'react-redux';
import PageContainer from '../PageContainer';
import ReplyContainer from '../ReplyContainer';
import CommentCard from '../Cards/CommentCard';
import TextareaCard from '../Cards/TextareaCard';
import EditableCommentCard from '../Cards/EditableCommentCard';

function App() {
  const { comments } = useSelector(({ commentsInfo }) => commentsInfo);
  const { upvotes } = useSelector(({ upvotesInfo }) => upvotesInfo);
  const { replies } = useSelector(({ repliesInfo }) => repliesInfo);

  const upvotesQuantity = (id) => upvotes.find((obj) => obj.id === id);

  const repliesOnComment = (id) =>
    replies.filter((reply) => reply.commentId === id);

  return (
    <div className='bg-slate-100 mx-auto py-16'>
      <PageContainer>
        <TextareaCard />
        {comments &&
          comments.map(({ nickname, date, text, commentId }) => (
            <>
              <CommentCard
                key={commentId}
                id={commentId}
                upvotes={
                  upvotesQuantity(commentId)
                    ? upvotesQuantity(commentId).upvotes
                    : 0
                }
                nickname={nickname}
                date={date}
                text={text}
              />
              {repliesOnComment(commentId) && (
                <ReplyContainer>
                  {repliesOnComment(commentId).map(
                    ({ nickname, date, text, commentId, id }) => (
                      <CommentCard
                        key={id}
                        id={commentId}
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
            </>
          ))}
      </PageContainer>
    </div>
  );
}

export default App;
