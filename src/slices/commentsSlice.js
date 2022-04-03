import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [
    {
      id: 'ec59a881-f1e7-450a-a7c6-680189a762ec',
      userId: 'ec59a881-f1e7-450a-a7c6-680189a762ec',
      date: 1546124305123,
      nickname: 'nicoleSuper_333',
      author: 'Nicole',
      text: 'Impressive! ',
    },
    {
      id: 'ec59a891-f1e7-500a-a7c6-680189a762ez',
      userId: 'ec59a891-f1e7-500a-a7c6-680189a762eb',
      date: 1647429725123,
      nickname: 'hero_123',
      author: 'Greg',
      text: 'bored af who wanna talk, dm',
    },
    {
      id: 'ec59a891-f1e7-500a-a7c6-680189a762ev',
      userId: 'ec59a891-f1e7-500a-a7c6-680189a762ev',
      date: 1347429725123,
      nickname: 'victim',
      author: 'Ivan',
      text: 'welcome my friends',
    },
  ],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,

  reducers: {
    addComment: (state, { payload }) => {
      state.comments.unshift(payload);
    },
    removeComment: (state) => {
      state.value -= 1;
    },
    editComment: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addComment, removeComment, editComment } = commentsSlice.actions;

export default commentsSlice.reducer;
