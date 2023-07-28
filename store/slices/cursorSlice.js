'use client';

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import cursorState from '@/utils/types';

const initialState = {
  stuckData: null,
  state: cursorState.default,
};

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setStuck: (state, { payload }) => {
      state.stuckData = payload;
    },
    setCursor: (state, { payload }) => {
      state.state = payload;
    },
  },
});

export const { setStuck, setCursor } = cursorSlice.actions;

export default cursorSlice.reducer;
