import { createSelector } from '@reduxjs/toolkit';

const selectCursorData = createSelector(
  (state) => state.cursor.data,
  (isStuck) => isStuck
);

export const selectCursorState = createSelector(
  (state) => state.cursor.state,
  (state) => state
);

export default selectCursorData;
