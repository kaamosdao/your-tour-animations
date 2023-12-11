'use client';

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animation: null,
  activePage: false,
};

const transitionSlice = createSlice({
  name: 'transition',
  initialState,
  reducers: {
    setAnimation: (state, { payload }) => {
      state.animation = payload;
    },
    setActivePage: (state, { payload }) => {
      state.activePage = payload;
    },
  },
});

export const { setAnimation, setActivePage } = transitionSlice.actions;

export default transitionSlice.reducer;
