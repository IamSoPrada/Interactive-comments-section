import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [
    {
      commentId: 1,
      userId: 'ec59a881-f1e7-450a-a7c6-680189a762eb',
      date: '2022-01-01 00:00:00',
      nickname: 'nicoleSuper_333',
      author: 'Nicole',
      text: 'Impressive! ',
    },
    {
      commentId: 2,
      userId: 'ec59a891-f1e7-500a-a7c6-680189a762eb',
      date: '2022-01-01 00:00:00',
      nickname: 'hero_123',
      author: 'Greg',
      text: 'bored af who wanna talk, dm',
    },
  ],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,

  reducers: {
    addComment: (state) => {
      state.value += 1;
    },
    removeComment: (state) => {
      state.value -= 1;
    },
    editComment: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  commentsSlice.actions;

export default commentsSlice.reducer;
