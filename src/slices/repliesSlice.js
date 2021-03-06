import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../supabase/supabaseClient';

export const getReplies = createAsyncThunk(
  'repliesInfo/setInitialState',
  async () => {
    try {
      const { data, error } = await supabase.from('replies').select();

      return data;
    } catch ({ message }) {
      throw new Error('Упс.. Что-то пошло не так.');
    }
  }
);

const initialState = {
  status: 'idle',
  error: null,
  replies: [],
};

const repliesSlice = createSlice({
  name: 'replies',
  initialState,

  reducers: {
    addReply: (state, { payload }) => {
      state.replies.push(payload);
    },
    removeReply: (state, { payload }) => {
      state.replies = state.replies.filter((reply) => reply.id !== payload.id);
    },
    editReply: (state, { payload }) => {
      state.replies = state.replies.map((reply) =>
        reply.id === payload.id ? payload : reply
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReplies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getReplies.fulfilled, (state, { payload }) => {
        state.replies = payload;
        state.status = 'success';
        state.error = null;
      })
      .addCase(getReplies.rejected, (state, { error }) => {
        state.status = 'error';
        state.error = error.message;
      });
  },
});

export const { addReply, removeReply, editReply } = repliesSlice.actions;

export default repliesSlice.reducer;
