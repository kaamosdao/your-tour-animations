'use client';

import {
  Children,
  cloneElement,
  useEffect,
  ReactNode,
  RefObject,
  ReactElement,
} from 'react';
import { gsap } from 'gsap/dist/gsap';

import { useArrayRef } from '@/hooks';

import Direction from '@/types';

interface ICustomScrollTrigger {
  children: ReactNode;
  shift: string | number;
  trigger: RefObject<HTMLElement>;
  target: RefObject<HTMLElement> | null;
  scrollTriggerOptions: ScrollTrigger.Vars;
  tweenOptions: GSAPTweenVars;
  axis: Direction;
}

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
}: ICustomScrollTrigger): ReactNode => {
  const [refs, addRef] = useArrayRef();

  useEffect(() => {
    const initialPosition: number = 0;

    const tl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        ...scrollTriggerOptions,
      },
    });

    if (axis === Direction.Horizontal) {
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
    } else if (axis === Direction.Vertical) {
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
    : Children.map(children, (child) =>
        cloneElement(child as ReactElement, { addRef })
      );
};

export default CustomScrollTrigger;
