import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../supabase/supabaseClient';

export const getUpvotes = createAsyncThunk(
  'upvotesInfo/setInitialState',
  async () => {
    try {
      const { data, error } = await supabase.from('upvotes').select();
      return data;
    } catch ({ message }) {
      throw new Error('Упс.. Что-то пошло не так.');
    }
  }
);

const initialState = {
  status: 'idle',
  error: null,
  upvotes: [],
};

const upvotesSlice = createSlice({
  name: 'upvotes',
  initialState,

  reducers: {
    addUpvote: (state, { payload }) => {
      state.upvotes.push(payload);
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
        state.upvotes = payload;
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
