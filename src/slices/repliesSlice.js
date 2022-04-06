import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  replies: [
    {
      id: '88c9b542-101e-41d3-9d58-3b1a89f8fe11',
      comment_id: 'ec59a881-f1e7-450a-a7c6-680189a762ec',
      user_id: '64885231-1837-4dbb-9ee6-c8a42f71878b',
      date: 1647429725123,
      nickname: 'Peter_Hater3',
      author: 'Peter',
      text: 'Disagree to that bs',
    },
    {
      id: '4e9f5fd5-e017-452c-9516-8c9144d9f7e8',
      comment_id: 'ec59a891-f1e7-500a-a7c6-680189a762ez',
      user_id: '64885231-1837-4dbb-9ee6-c8a42f71878b',
      date: 1637129725123,
      nickname: 'John_Potter',
      author: 'John',
      text: 'Duck you',
    },
    {
      id: 'd52edd44-b7eb-4092-a9f9-7ea5e8c706e2',
      comment_id: 'ec59a891-f1e7-500a-a7c6-680189a762ez',
      user_id: '64885231-1837-4dbb-9ee6-c8a42f71878b',
      date: 1247529725123,
      nickname: 'harryClark',
      author: 'Harry',
      text: 'Nice post',
    },
    {
      id: 'b7e6b737-446c-4104-8e75-9867845c494d',
      comment_id: 'ec59a891-f1e7-500a-a7c6-680189a762ez',
      user_id: '64885231-1837-4dbb-9ee6-c8a42f71878b',
      date: 1642729725123,
      nickname: 'Smith_Will',
      author: 'Smith',
      text: 'I love play chess',
    },
  ],
};

const repliesSlice = createSlice({
  name: 'replies',
  initialState,

  reducers: {
    addReply: (state, { payload }) => {
      state.replies.push(payload);
    },
    removeReply: (state) => {
      state.value -= 1;
    },
    editReply: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addReply, removeReply, editReply } = repliesSlice.actions;

export default repliesSlice.reducer;
