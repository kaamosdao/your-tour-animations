'use client';

import { configureStore } from '@reduxjs/toolkit';

import cursorReducer from './slices/cursorSlice';
import transitionReducer from './slices/transitionSlice';

const store = configureStore({
  reducer: {
    cursor: cursorReducer,
    transition: transitionReducer,
  },
});

export default store;
