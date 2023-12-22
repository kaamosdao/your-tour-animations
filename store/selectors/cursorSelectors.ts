import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/store';

const selectCursorData = createSelector(
  (state: RootState) => state.cursor.data,
  (isStuck) => isStuck
);

export const selectCursorState = createSelector(
  (state: RootState) => state.cursor.type,
  (state) => state
);

export default selectCursorData;
