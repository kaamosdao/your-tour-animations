'use client';

import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { EaselPlugin } from 'gsap/EaselPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { Transition } from 'react-transition-group';

import selectStuckData, {
  selectCursorState,
} from '@/store/selectors/cursorSelectors';

import { getMoveX, getMoveY } from '@/utils/getMoveCoordinate';
import cursorStateType from '@/utils/types';
import CursorAnimation from '@/utils/CursorAnimation';

import s from './CustomCursor.module.scss';

const CustomCursor = () => {
  const cursor = useRef(null);
  const follower = useRef(null);
  const animation = useRef(null);

  const cursorState = useSelector(selectCursorState);
  const stuckCursorData = useSelector(selectStuckData);

  const [inTransition, setInTransition] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(EaselPlugin, TextPlugin);
    animation.current = new CursorAnimation(cursor, follower);
  }, []);

  useEffect(() => {
    setInTransition((prev) => !prev);
  }, [cursorState]);

  useEffect(() => {
    const moveXFollower = getMoveX(follower.current, 0.6);
    const moveYFollower = getMoveY(follower.current, 0.6);

    const moveCursor = (e) => {
      let xFollower;
      let yFollower;

      if (stuckCursorData) {
        const { left, top, width, height } = stuckCursorData;

        xFollower = Math.round(left + width / 2);
        yFollower = Math.round(top + height / 2);
      } else {
        xFollower = e.clientX;
        yFollower = e.clientY;
      }

      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.0,
      });

      moveXFollower(xFollower);
      moveYFollower(yFollower);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => window.removeEventListener('mousemove', moveCursor);
  }, [stuckCursorData, cursor, follower]);

  const onEnter = () => {
    animation.current.reset();
  };

  const onEntering = () => {
    switch (cursorState) {
      case cursorStateType.pulse:
        animation.current.pulse();
        break;

      case cursorStateType.stuck:
        animation.current.stuck(stuckCursorData);
        break;

      case cursorStateType.growDot:
        animation.current.growDot();
        break;

      case cursorStateType.text:
        animation.current.text();
        break;

      default:
        break;
    }
  };

  const onExit = onEnter;
  const onExiting = onEntering;

  return (
    <Transition
      in={inTransition}
      timeout={300}
      onEnter={onEnter}
      onExit={onExit}
      onEntering={onEntering}
      onExiting={onExiting}
    >
      {() => (
        <>
          <div ref={cursor} className={s.cursor} id="cursor" />
          <div ref={follower} className={s.follower} id="follower">
            <div className={s.circle} id="circle" />
            <div className={s.text} id="text" />
          </div>
        </>
      )}
    </Transition>
  );
};

export default CustomCursor;
