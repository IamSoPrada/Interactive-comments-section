import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../supabase/supabaseClient';

export const getUpvotes = createAsyncThunk(
  'upvotesInfo/setInitialState',
  async () => {
    try {
      const commentsUpvotes = await supabase.from('comments_upvotes').select();
      const repliesUpvotes = await supabase.from('replies_upvotes').select();
      const data = {
        commentsUpvotes,
        repliesUpvotes,
      };
      return data;
    } catch ({ message }) {
      throw new Error('Упс.. Что-то пошло не так.');
    }
  }
);

const initialState = {
  status: 'idle',
  error: null,
  commentsUpvotes: [],
  repliesUpvotes: [],
};

const upvotesSlice = createSlice({
  name: 'upvotes',
  initialState,

  reducers: {
    addUpvote: (state, { payload }) => {
      if (payload.comment_id) {
        state.commentsUpvotes.push(payload);
      } else {
        state.repliesUpvotes.push(payload);
      }
    },
    removeUpvote: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUpvotes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getUpvotes.fulfilled, (state, { payload }) => {
        state.commentsUpvotes = payload.commentsUpvotes.data;
        state.repliesUpvotes = payload.repliesUpvotes.data;
        state.status = 'success';
        state.error = null;
      })
      .addCase(getUpvotes.rejected, (state, { error }) => {
        state.status = 'error';
        state.error = error.message;
      });
  },
});

export const { addUpvote, removeUpvote } = upvotesSlice.actions;

export default upvotesSlice.reducer;
