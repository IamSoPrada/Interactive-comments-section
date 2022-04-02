import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  upvotes: [
    {
      commentId: 1,
      userId: 'ec59a881-f1e7-450a-a7c6-680189a762eb',
      upvotes: 18,
    },
    {
      commentId: 2,
      userId: 'ec59a881-f1e7-450a-a7c6-680189a762eb',
      upvotes: 39,
    },
    {
      commentId: 'd52edd44-b7eb-4092-a9f9-7ea5e8c706e2',
      userId: 'ec59a881-f1e7-450a-a7c6-680189a762eb',
      upvotes: 3,
    },
    {
      commentId: 'ec59a891-f1e7-500a-a7c6-680189a762ev',
      userId: 'ec59a881-f1e7-450a-a7c6-680189a762eb',
      upvotes: 566,
    },
  ],
};

const upvotesSlice = createSlice({
  name: 'upvotes',
  initialState,

  reducers: {
    addUpvote: (state) => {
      state.value += 1;
    },
    removeUpvote: (state) => {
      state.value -= 1;
    },
  },
});

export const { addUpvote, removeUpvote } = upvotesSlice.actions;

export default upvotesSlice.reducer;
