import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  upvotes: [
    {
      id: 1,
      userId: 'ec59a881-f1e7-450a-a7c6-680189a762eb',
      upvotes: 18,
    },
    {
      id: 2,
      userId: 'ec59a881-f1e7-450a-a7c6-680189a762eb',
      upvotes: 39,
    },
    {
      id: 'd52edd44-b7eb-4092-a9f9-7ea5e8c706e2',
      userId: 'ec59a881-f1e7-450a-a7c6-680189a762eb',
      upvotes: 3,
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
