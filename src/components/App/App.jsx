import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import ModalBackground from '../Cards/common components/ModalBackground';
import PageContainer from '../PageContainer';
import ReplyContainer from '../ReplyContainer';
import CommentCard from '../Cards/CommentCard';
import TextareaCard from '../Cards/TextareaCard';
// import EditableCommentCard from '../Cards/EditableCommentCard';

function App() {
  const { comments } = useSelector(({ commentsInfo }) => commentsInfo);
  const { upvotes } = useSelector(({ upvotesInfo }) => upvotesInfo);
  const { replies } = useSelector(({ repliesInfo }) => repliesInfo);

  const upvotesQuantity = (id) => upvotes.find((obj) => obj.commentId === id);

  const repliesOnComment = (id) =>
    replies.filter((reply) => reply.commentId === id);

  return (
    <div className='relative bg-slate-100 mx-auto py-16'>
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
            </Fragment>
          ))}
      </PageContainer>
    </div>
  );
}

export default App;
