import { createSelector } from '@reduxjs/toolkit';

const selectPlayingTransition = createSelector(
  (state) => state.transition.playing,
  (playing) => playing
);

export const selectActivePage = createSelector(
  (state) => state.transition.activePage,
  (activePage) => activePage
);

export default selectPlayingTransition;
