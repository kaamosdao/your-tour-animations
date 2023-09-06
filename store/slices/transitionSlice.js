'use client';

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playing: false,
  activePage: false,
};

const transitionSlice = createSlice({
  name: 'transition',
  initialState,
  reducers: {
    setPlaying: (state, { payload }) => {
      state.playing = payload;
    },
    setActivePage: (state, { payload }) => {
      state.activePage = payload;
    },
  },
});

export const { setPlaying, setActivePage } = transitionSlice.actions;

export default transitionSlice.reducer;
