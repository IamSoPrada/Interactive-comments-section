import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './commentsSlice.js';
import repliesSlice from './repliesSlice.js';
import upvotesSlice from './upvotesSlice.js';

export default configureStore({
  reducer: {
    commentsInfo: commentsReducer,
    repliesInfo: repliesSlice,
    upvotesInfo: upvotesSlice,
  },
});
