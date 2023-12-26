'use client';

import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { setAnimation } from '@/store/slices/transitionSlice';
import selectTransitionAnimation from '@/store/selectors/transitionSelectors';

import { useAppDispatch, useAppSelector } from '@/hooks';

import Direction, { ClipVar } from '@/types';

import s from './Curtain.module.scss';

const Curtain: FC = () => {
  const curtain = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const animation = useAppSelector(selectTransitionAnimation);

  useEffect(() => {
    if (!animation) {
      return;
    }
    const { Vertical } = Direction;

    const startClip1: ClipVar =
      animation === Vertical ? ClipVar.BottomLeftY : ClipVar.TopRightX;
    const startClip2: ClipVar =
      animation === Vertical ? ClipVar.BottomRightY : ClipVar.BottomRightX;
    const endClip1: ClipVar =
      animation === Vertical ? ClipVar.TopLeftY : ClipVar.TopLeftX;
    const endClip2: ClipVar =
      animation === Vertical ? ClipVar.TopRightY : ClipVar.BottomLeftX;

    const initClip1: ClipVar =
      animation === Vertical ? ClipVar.TopRightX : ClipVar.BottomRightY;
    const initClip2: ClipVar =
      animation === Vertical ? ClipVar.BottomRightX : ClipVar.BottomLeftY;

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
