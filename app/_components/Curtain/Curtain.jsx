'use client';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gsap } from 'gsap';

import { setAnimation } from '@/store/slices/transitionSlice';
import selectTransitionAnimation from '@/store/selectors/transitionSelectors';

import s from './Curtain.module.scss';
import { transitionAnimation } from '@/utils/types';

const Curtain = () => {
  const curtain = useRef(null);
  const dispatch = useDispatch();
  const animation = useSelector(selectTransitionAnimation);

  useEffect(() => {
    if (!animation) {
      return;
    }

    const startPoint1 =
      animation === transitionAnimation.vertical ? '--clipblY' : '--cliptrX';
    const startPoint2 =
      animation === transitionAnimation.vertical ? '--clipbrY' : '--clipbrX';
    const endPoint1 =
      animation === transitionAnimation.vertical ? '--cliptlY' : '--cliptlX';
    const endPoint2 =
      animation === transitionAnimation.vertical ? '--cliptrY' : '--clipblX';

    const initPoint1 =
      animation === transitionAnimation.vertical ? '--cliptrX' : '--clipbrY';
    const initPoint2 =
      animation === transitionAnimation.vertical ? '--clipbrX' : '--clipblY';

    gsap
      .timeline({
        onComplete: () => {
          dispatch(setAnimation(null));
        },
      })
      .set(curtain.current, {
        [initPoint1]: '100%',
        [initPoint2]: '100%',
      })
      .to(curtain.current, {
        [startPoint1]: '100%',
        duration: 1,
      })
      .to(
        curtain.current,
        {
          [startPoint2]: '100%',
          duration: 1,
          delay: 0.01,
        },
        '<'
      )
      .to(curtain.current, {
        [endPoint1]: '100%',
        duration: 1,
      })
      .to(
        curtain.current,
        {
          [endPoint2]: '100%',
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
