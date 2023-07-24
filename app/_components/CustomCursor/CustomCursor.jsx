'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';

import selectStuck from '@/store/selectors/cursorSelectors';
import useCursorRef from '@/hooks/useCursorRef';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import s from './CustomCursor.module.scss';

const getMoveX = (cursor, duration, ease = 'power3') =>
  gsap.quickTo(cursor, 'x', { duration, ease });
const getMoveY = (cursor, duration, ease = 'power3') =>
  gsap.quickTo(cursor, 'y', { duration, ease });

const CustomCursor = () => {
  const cursorRef = useCursorRef();
  const cursorFollowerRef = useCursorFollowerRef();

  const isStuck = useSelector(selectStuck);

  useEffect(() => {
    const moveXFollower = getMoveX(cursorFollowerRef.current, 0.6);
    const moveYFollower = getMoveY(cursorFollowerRef.current, 0.6);

    const moveCursor = (e) => {
      let xFollower;
      let yFollower;

      if (isStuck) {
        const linkItem = e.target;
        const { left, top, width, height } = linkItem.getBoundingClientRect();

        xFollower = Math.round(left + width / 2);
        yFollower = Math.round(top + height / 2);
      } else {
        xFollower = e.clientX;
        yFollower = e.clientY;
      }

      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.0,
      });

      moveXFollower(xFollower);
      moveYFollower(yFollower);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => window.removeEventListener('mousemove', moveCursor);
  }, [isStuck, cursorRef, cursorFollowerRef]);

  return (
    <>
      <div ref={cursorRef} className={s.cursor} id="cursor" />
      <div ref={cursorFollowerRef} className={s.follower} id="follower">
        <div className={s.circle} id="circle" />
        <div className={s.text} id="text" />
      </div>
    </>
  );
};

export default CustomCursor;
