'use client';

import { Children, cloneElement, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import { axisType } from '@/utils/types';
import { useArrayRef } from '@/hooks';

const ScrollTrigger = ({
  children,
  shift,
  trigger,
  scrollTriggerOptions = {
    start: '20% bottom',
    end: '20% 80%',
    toggleActions: 'restart play reverse reverse',
  },
  tweenOptions = {
    ease: 'power3.out',
    duration: 0.7,
    stagger: 0.2,
  },
  axis,
}) => {
  const [refs, addRef] = useArrayRef();

  useEffect(() => {
    const initialPosition = 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        ...scrollTriggerOptions,
      },
    });

    if (axis === axisType.horizontal) {
      tl.fromTo(
        refs.current,
        {
          x: shift,
        },
        {
          x: initialPosition,
          ...tweenOptions,
        }
      );
    } else if (axis === axisType.vertical) {
      tl.fromTo(
        refs.current,
        {
          y: shift,
        },
        {
          y: initialPosition,
          ...tweenOptions,
        }
      );
    }

    return () => {
      tl.kill();
    };
  }, [axis, refs, scrollTriggerOptions, shift, trigger, tweenOptions]);

  return Children.map(children, (child) => cloneElement(child, { addRef }));
};

export default ScrollTrigger;
