'use client';

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import cursorState from '@/utils/types';

const initialState = {
  data: null,
  state: cursorState.default,
};

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setCursor: (state, { payload }) => {
      state.state = payload.type;
      state.data = payload.data;
    },
  },
});

export const { setStuck, setCursor } = cursorSlice.actions;

export default cursorSlice.reducer;
