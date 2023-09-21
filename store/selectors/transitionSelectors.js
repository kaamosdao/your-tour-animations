import { createSelector } from '@reduxjs/toolkit';

const selectTransitionAnimation = createSelector(
  (state) => state.transition.animation,
  (animation) => animation
);

export const selectActivePage = createSelector(
  (state) => state.transition.activePage,
  (activePage) => activePage
);

export default selectTransitionAnimation;
