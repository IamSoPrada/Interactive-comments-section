/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpened: false,
    type: null,
    commentId: null,
  },
  reducers: {
    openModal(state, { payload }) {
      (state.type = payload.type),
        (state.commentId = payload.id),
        (state.isOpened = true);
    },
    closeModal(state) {
      state.type = null;
      state.isOpened = false;
      state.commentId = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
