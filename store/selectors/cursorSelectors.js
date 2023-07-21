import { createSelector } from '@reduxjs/toolkit';

const selectStuck = createSelector(
  (state) => state.cursor.isStuck,
  (isStuck) => isStuck
);

export default selectStuck;
