'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { setAnimation } from '@/store/slices/transitionSlice';
import selectTransitionAnimation from '@/store/selectors/transitionSelectors';

import { useAppDispatch, useAppSelector } from '@/hooks';

import TransitionAnimation from '@/types';

import s from './Curtain.module.scss';

const Curtain = () => {
  const curtain = useRef(null);
  const dispatch = useAppDispatch();
  const animation = useAppSelector(selectTransitionAnimation);

  useEffect(() => {
    if (!animation) {
      return;
    }
    const { Vertical } = TransitionAnimation;

    const startClip1 = animation === Vertical ? '--clipblY' : '--cliptrX';
    const startClip2 = animation === Vertical ? '--clipbrY' : '--clipbrX';
    const endClip1 = animation === Vertical ? '--cliptlY' : '--cliptlX';
    const endClip2 = animation === Vertical ? '--cliptrY' : '--clipblX';

    const initClip1 = animation === Vertical ? '--cliptrX' : '--clipbrY';
    const initClip2 = animation === Vertical ? '--clipbrX' : '--clipblY';

    gsap
      .timeline({
        onComplete: () => {
          dispatch(setAnimation(null));
        },
      })
      .set(curtain.current, {
        [initClip1]: '100%',
        [initClip2]: '100%',
      })
      .to(curtain.current, {
        [startClip1]: '100%',
        duration: 1,
      })
      .to(
        curtain.current,
        {
          [startClip2]: '100%',
          duration: 1,
          delay: 0.01,
        },
        '<'
      )
      .to(curtain.current, {
        [endClip1]: '100%',
        duration: 1,
      })
      .to(
        curtain.current,
        {
          [endClip2]: '100%',
          duration: 1,
          delay: 0.01,
        },
        '<'
      )
      .to(curtain.current, {
        '--cliptrX': '0%',
        '--clipbrX': '0%',
        '--cliptlX': '0%',
        '--clipblX': '0%',
        '--cliptrY': '0%',
        '--cliptlY': '0%',
        '--clipbrY': '0%',
        '--clipblY': '0%',
        duration: 0,
      });
  }, [animation, dispatch]);

  return <div ref={curtain} className={s.curtain} />;
};

export default Curtain;
