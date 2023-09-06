'use client';

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playing: false,
};

const transitionSlice = createSlice({
  name: 'transition',
  initialState,
  reducers: {
    setPlaying: (state, { payload }) => {
      state.playing = payload;
    },
  },
});

export const { setPlaying } = transitionSlice.actions;

export default transitionSlice.reducer;
