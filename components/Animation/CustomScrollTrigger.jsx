'use client';

import { Children, cloneElement, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import { axisType } from '@/utils/types';
import { useArrayRef } from '@/hooks';

const CustomScrollTrigger = ({
  children,
  shift,
  trigger,
  target = null,
  scrollTriggerOptions = {
    start: '20% bottom',
    end: '20% 80%',
    toggleActions: 'restart play reverse reverse',
    invalidateOnRefresh: true,
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
        trigger: trigger.current,
        ...scrollTriggerOptions,
      },
    });

    if (axis === axisType.horizontal) {
      tl.fromTo(
        target ? target.current : refs.current,
        {
          x: shift,
          y: initialPosition,
        },
        {
          x: initialPosition,
          ...tweenOptions,
        }
      );
    } else if (axis === axisType.vertical) {
      tl.fromTo(
        target ? target.current : refs.current,
        {
          x: initialPosition,
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
  }, [axis, target, trigger, refs, scrollTriggerOptions, shift, tweenOptions]);

  return target
    ? children
    : Children.map(children, (child) => cloneElement(child, { addRef }));
};

export default CustomScrollTrigger;
