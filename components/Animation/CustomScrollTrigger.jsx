'use client';

import { Children, cloneElement, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import { axisType } from '@/utils/types';
import { useArrayRef } from '@/hooks';

const CustomScrollTrigger = ({
  children,
  shift,
  trigger,
  targetRef = null,
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
        targetRef ? targetRef.current : refs.current,
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
        targetRef ? targetRef.current : refs.current,
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
    refs,
    scrollTriggerOptions,
    shift,
    targetRef,
    trigger,
    tweenOptions,
  ]);

  return targetRef
    ? children
    : Children.map(children, (child) => cloneElement(child, { addRef }));
};

export default CustomScrollTrigger;
