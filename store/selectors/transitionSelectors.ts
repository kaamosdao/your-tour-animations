import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/store';

const selectTransitionAnimation = createSelector(
  (state: RootState) => state.transition.animation,
  (animation) => animation
);

export const selectActivePage = createSelector(
  (state: RootState) => state.transition.activePage,
  (activePage) => activePage
);

export default selectTransitionAnimation;
