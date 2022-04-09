/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpened: false,
    type: null,
    comment_id: null,
  },
  reducers: {
    openModal(state, { payload }) {
      (state.type = payload.type),
        (state.comment_id = payload.id),
        (state.isOpened = true);
    },
    closeModal(state) {
      state.type = null;
      state.isOpened = false;
      state.comment_id = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
