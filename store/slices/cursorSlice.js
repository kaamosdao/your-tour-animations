'use client';

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isStuck: false,
};

const cursorSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setStuck: (state, { payload }) => {
      state.isStuck = payload;
    },
  },
});

export const { setStuck } = cursorSlice.actions;

export default cursorSlice.reducer;
