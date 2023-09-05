'use client';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gsap } from 'gsap';

import { setPlaying } from '@/store/slices/transitionSlice';
import selectPlayingTransition from '@/store/selectors/transitionSelectors';

import s from './Curtain.module.scss';

const Curtain = () => {
  const curtain = useRef(null);
  const dispatch = useDispatch();
  const playing = useSelector(selectPlayingTransition);

  useEffect(() => {
    if (!playing) {
      return;
    }

    gsap
      .timeline({
        onComplete: () => {
          dispatch(setPlaying(false));
        },
      })
      .to(curtain.current, {
        '--cliptr': '100%',
        duration: 1,
      })
      .to(
        curtain.current,
        {
          '--clipbr': '100%',
          duration: 1,
          delay: 0.01,
        },
        '<'
      )
      .to(curtain.current, {
        '--cliptl': '100%',
        duration: 1,
      })
      .to(
        curtain.current,
        {
          '--clipbl': '100%',
          duration: 1,
          delay: 0.01,
        },
        '<'
      )
      .to(curtain.current, {
        '--cliptr': '0%',
        '--clipbr': '0%',
        '--cliptl': '0%',
        '--clipbl': '0%',
        duration: 0,
      });
  }, [playing, dispatch]);

  return <div ref={curtain} className={s.curtain} />;
};

export default Curtain;
