import { transitionState } from './types';

const isVisible = (status) => {
  const { entering, entered, exiting, exited } = transitionState;

  if (status === entering || status === entered) {
    return true;
  }

  if (status === exiting || status === exited) {
    return false;
  }

  return undefined;
};

export default isVisible;
