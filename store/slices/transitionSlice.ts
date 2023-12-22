'use client';

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import TransitionAnimation from '@/types';

type Animation = null | TransitionAnimation;
type ActivePage = null | string;

interface TransitionState {
  animation: Animation;
  activePage: ActivePage;
}

const initialState: TransitionState = {
  animation: null,
  activePage: null,
};

const transitionSlice = createSlice({
  name: 'transition',
  initialState,
  reducers: {
    setAnimation: (state, action: PayloadAction<Animation>) => {
      state.animation = action.payload;
    },
    setActivePage: (state, action: PayloadAction<ActivePage>) => {
      state.activePage = action.payload;
    },
  },
});

export const { setAnimation, setActivePage } = transitionSlice.actions;

export default transitionSlice.reducer;
