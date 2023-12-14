'use client';

import { Children, cloneElement, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import { axisType } from '@/utils/types';
import { useArrayRef } from '@/hooks';

const CustomScrollTrigger = ({
  children,
  shift,
  getTrigger,
  getTarget = null,
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
        trigger: getTrigger(),
        ...scrollTriggerOptions,
      },
    });

    if (axis === axisType.horizontal) {
      tl.fromTo(
        getTarget ? getTarget() : refs.current,
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
        getTarget ? getTarget() : refs.current,
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
  }, [
    axis,
    getTarget,
    getTrigger,
    refs,
    scrollTriggerOptions,
    shift,
    tweenOptions,
  ]);

  return getTarget
    ? children
    : Children.map(children, (child) => cloneElement(child, { addRef }));
};

export default CustomScrollTrigger;
