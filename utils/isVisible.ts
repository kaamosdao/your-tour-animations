import { TransitionState } from '@/types';

const isVisible = (status: TransitionState): boolean =>
  status === TransitionState.Entering || status === TransitionState.Entered;

export default isVisible;
