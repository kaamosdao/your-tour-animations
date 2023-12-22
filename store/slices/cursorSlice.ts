'use client';

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import { CursorType, CursorData } from '@/types';

interface CursorState {
  data: null | CursorData;
  type: CursorType;
}

const initialState: CursorState = {
  data: null,
  type: CursorType.Default,
};

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setCursor: (state, action: PayloadAction<CursorState>) => {
      const { type, data } = action.payload;

      state.type = type;
      state.data = data;
    },
  },
});

export const { setCursor } = cursorSlice.actions;

export default cursorSlice.reducer;
