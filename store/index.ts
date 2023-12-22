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

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
