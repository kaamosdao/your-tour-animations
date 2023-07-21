import cn from 'classnames';
import { gsap } from 'gsap';
import { useRef } from 'react';

import useCursorRef from '@/hooks/useCursorRef';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import s from './AgeConfirm.module.scss';

const AgeConfirm = () => {
  const cursor = useCursorRef();
  const cursorFollower = useCursorFollowerRef();

  const cursorAnimation = useRef();

  const onMouseEnter = () => {
    cursorAnimation.current = gsap
      .timeline()
      .to([cursorFollower.current], {
        scale: 0,
        duration: 0.3,
        ease: 'power1.in',
      })
      .fromTo(
        [cursor.current],
        {
          scale: 1.0,
        },
        {
          scale: 2.0,
          duration: 0.3,
          opacity: 0.6,
          ease: 'power1.in',
        },
        '<'
      )
      .to([cursor.current], {
        scale: 1.8,
        duration: 0.2,
        ease: 'power1.in',
      })
      .to([cursor.current], {
        scale: 3.0,
        duration: 0.3,
        delay: 0.1,
        ease: 'power1.in',
      });
  };

  const onMouseLeave = () => {
    cursorAnimation.current.kill();

    gsap.to([cursorFollower.current, cursor.current], {
      scale: 1,
      duration: 0.3,
      opacity: 1,
      ease: 'power1.in',
    });
  };

  return (
    <fieldset className={s.ageConfirm}>
      <legend className={s.title}>Вам есть 18 лет?</legend>
      <ul className={s.list}>
        <li className={s.item}>
          <label
            className={s.radio}
            htmlFor="yes"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <input
              className={cn('visually-hidden', s.radioInput)}
              type="radio"
              name="age-confirmation"
              id="yes"
              value="yep"
              required
            />
            <span className={s.radioMark} />
            <span className={s.radioLabel}>Да</span>
          </label>
        </li>
        <li className={s.item}>
          <label
            className={s.radio}
            htmlFor="nope"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <input
              className={cn('visually-hidden', s.radioInput)}
              type="radio"
              name="age-confirmation"
              id="nope"
              value="nope"
              required
            />
            <span className={s.radioMark} />
            <span className={s.radioLabel}>Нет</span>
          </label>
        </li>
      </ul>
    </fieldset>
  );
};

export default AgeConfirm;
