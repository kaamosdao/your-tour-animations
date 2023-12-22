'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EaselPlugin } from 'gsap/dist/EaselPlugin';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { Transition, TransitionGroup } from 'react-transition-group';

import selectCursorData, {
  selectCursorState,
} from '@/store/selectors/cursorSelectors';

import { useAppSelector } from '@/hooks';
import { getMoveX, getMoveY } from '@/utils/getMoveCoordinate';
import CursorAnimation from '@/utils/CursorAnimation';

import { CursorType } from '@/types';

import s from './CustomCursor.module.scss';

const CustomCursor = () => {
  const cursor = useRef(null);
  const follower = useRef(null);
  const animation = useRef(null);

  const cursorState = useAppSelector(selectCursorState);
  const cursorData = useAppSelector(selectCursorData);

  useEffect(() => {
    gsap.registerPlugin(EaselPlugin, TextPlugin);
    animation.current = new CursorAnimation(cursor, follower);
  }, []);

  useEffect(() => {
    const moveXFollower = getMoveX(follower.current, 0.6);
    const moveYFollower = getMoveY(follower.current, 0.6);

    const moveCursor = (e) => {
      let xFollower;
      let yFollower;

      if (cursorState === CursorType.Stuck) {
        const { left, top, width, height } = cursorData;

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
  }, [cursorData, cursorState, cursor, follower]);

  const onEnter = () => {
    switch (cursorState) {
      case CursorType.Pulse:
        animation.current.pulse();
        break;

      case CursorType.Stuck:
        animation.current.stuck(cursorData);
        break;

      case CursorType.GrowDot:
        animation.current.growDot();
        break;

      case CursorType.Text:
        animation.current.text(cursorData);
        break;
      case CursorType.Default:
        animation.current.reset();
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div ref={cursor} className={s.cursor} id="cursor" />
      <div ref={follower} className={s.follower} id="follower">
        <TransitionGroup component={null}>
          <Transition key={cursorState} timeout={0} onEnter={onEnter}>
            {cursorState === CursorType.Text ? (
              <div className={s.text} id="text" />
            ) : (
              <div className={s.circle} id="circle" />
            )}
          </Transition>
        </TransitionGroup>
      </div>
    </>
  );
};

export default CustomCursor;
