'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';

import useCursorRef from '@/hooks/useCursorRef';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import s from './SectionDescription.module.scss';

const SectionDescription = () => {
  const cursor = useCursorRef();
  const cursorFollower = useCursorFollowerRef();

  const pulseAnimation = useRef();

  const onMouseEnter = () => {
    pulseAnimation.current = gsap
      .timeline()
      .to([cursorFollower.current, cursor.current], {
        scale: 1.2,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.in',
      });
  };

  const onMouseLeave = () => {
    pulseAnimation.current.kill();

    gsap.to([cursorFollower.current, cursor.current], {
      scale: 1,
      duration: 0.5,
      ease: 'power1.in',
    });
  };

  return (
    <section className={s.sectionDescription}>
      <div className={s.tagline}>
        <h2 className={s.title}>Идеальные путешествия существуют</h2>
        <p className={s.description}>
          Идейные соображения высшего порядка, а&nbsp;
          <br />
          также рамки и&nbsp;
          <br />
          место обучения кадров
        </p>
        <button
          className={s.button}
          type="button"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Найти тур
        </button>
      </div>
    </section>
  );
};

export default SectionDescription;
