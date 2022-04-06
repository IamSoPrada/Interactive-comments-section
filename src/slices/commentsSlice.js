import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../supabase/supabaseClient';

export const getComments = createAsyncThunk(
  'commentsInfo/setInitialState',
  async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select()
        .order('date', { ascending: false });
      return data;
    } catch ({ message }) {
      throw new Error('Упс.. Что-то пошло не так.');
    }
  }
);

const initialState = {
  status: 'idle',
  error: null,
  comments: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getComments.fulfilled, (state, { payload }) => {
        state.comments = payload;
        state.status = 'success';
        state.error = null;
      })
      .addCase(getComments.rejected, (state, { error }) => {
        state.status = 'error';
        state.error = error.message;
      });
  },
});

export const { addComment, removeComment, editComment } = commentsSlice.actions;

export default commentsSlice.reducer;
