import { createSelector } from '@reduxjs/toolkit';

const selectStuckData = createSelector(
  (state) => state.cursor.stuckData,
  (isStuck) => isStuck
);

export const selectCursorState = createSelector(
  (state) => state.cursor.state,
  (state) => state
);

export default selectStuckData;
