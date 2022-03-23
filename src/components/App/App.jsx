import React from 'react';
import PageContainer from '../PageContainer';
import ReplyContainer from '../ReplyContainer';
import CommentCard from '../Cards/CommentCard';
import TextareaCard from '../Cards/TextareaCard';
import EditableCommentCard from '../Cards/EditableCommentCard';

function App() {
  return (
    <div className='bg-slate-100 mx-auto py-16'>
      <PageContainer>
        <CommentCard />
        <ReplyContainer>
          <CommentCard />
          <TextareaCard />
          <EditableCommentCard />
        </ReplyContainer>
        <TextareaCard />
      </PageContainer>
    </div>
  );
}

export default App;
