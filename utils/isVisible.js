import { transitionState } from './types';

/* eslint-disable no-console */
const isVisible = (status) => {
  const { entering, entered } = transitionState;
  console.log(status);
  return !!(status === entering || status === entered);
};

export default isVisible;
