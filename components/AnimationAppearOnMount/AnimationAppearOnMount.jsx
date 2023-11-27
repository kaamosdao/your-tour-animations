'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

const AnimationAppearOnMount = ({ children, shift, isVisible, refs }) => {
  useEffect(() => {
    const initialPosition = 0;

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
    const initialPosition = 0;

    const animation = gsap.timeline();

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

export default AnimationAppearOnMount;
