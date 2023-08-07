'use client';

import { configureStore } from '@reduxjs/toolkit';

import cursorReducer from './slices/cursorSlice';

const store = configureStore({
  reducer: {
    cursor: cursorReducer,
  },
});

export default store;
