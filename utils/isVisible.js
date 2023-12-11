import { transitionState } from './types';

const isVisible = (status) => {
  const { entering, entered } = transitionState;

  return status === entering || status === entered;
};

export default isVisible;
