import { createSelector } from '@reduxjs/toolkit';

export const selectPlayingTransition = createSelector(
  (state) => state.transition.playing,
  (playing) => playing
);

export default selectPlayingTransition;
