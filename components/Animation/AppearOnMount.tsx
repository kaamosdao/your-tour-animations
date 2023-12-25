'use client';

import { useEffect, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap/dist/gsap';

interface AppearOnMountProps {
  children: ReactNode;
  shift: string | number;
  isVisible: boolean;
  refs: RefObject<Array<HTMLElement>>;
}

const AppearOnMount = ({
  children,
  shift,
  isVisible,
  refs,
}: AppearOnMountProps): ReactNode => {
  useEffect(() => {
    const initialPosition: number = 0;

    if (isVisible) {
      gsap.set(refs.current, {
        x: shift,
      });
    } else {
      gsap.set(refs.current, {
        x: initialPosition,
      });
    }
  }, [isVisible, refs, shift]);

  useEffect(() => {
    const initialPosition: number = 0;

    const animation: GSAPTimeline = gsap.timeline();

    if (isVisible) {
      animation.to(refs.current, {
        x: initialPosition,
        ease: 'power3.out',
        duration: 1,
        delay: 0.2,
        stagger: 0.2,
      });
    }
    return () => {
      animation?.kill();
    };
  }, [isVisible, refs, shift]);

  return children;
};

export default AppearOnMount;
