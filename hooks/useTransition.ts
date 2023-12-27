import { useContext } from 'react';

import TransitionContext from '@/context/TransitionContext';

const useTransition = () => useContext(TransitionContext);

export default useTransition;
