'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';

import useCursorRef from '@/hooks/useCursorRef';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import AgeConfirm from './AgeConfirm/index';
import InputFields from './InputFields/index';
import LicenseConfirm from './LicenseConfirm/index';

import s from './SectionConstructTour.module.scss';

const SectionConstructTour = () => {
  const cursor = useCursorRef();
  const cursorFollower = useCursorFollowerRef();

  const pulseAnimation = useRef();

  const onMouseEnter = () => {
    pulseAnimation.current = gsap.timeline().fromTo(
      [cursorFollower.current, cursor.current],
      {
        scale: 1.0,
      },
      {
        scale: 1.2,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.in',
      }
    );
  };

  const onMouseLeave = () => {
    pulseAnimation.current.kill();

    gsap.to([cursorFollower.current, cursor.current], {
      scale: 1,
      duration: 0.3,
      ease: 'power1.in',
    });
  };

  return (
    <section className={s.constructTour}>
      <h2 className={s.title}>Собери свой тур</h2>
      <p className={s.description}>
        Идейные соображения высшего порядка,&nbsp;
        <br />а также рамки и место обучения кадров
      </p>
      <form className={s.form}>
        <InputFields />
        <AgeConfirm />
        <LicenseConfirm />
        <div className={s.buttons}>
          <button
            className={s.buttonFind}
            type="submit"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Найти тур
          </button>
          <button
            className={s.buttonClear}
            type="button"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Сбросить
          </button>
        </div>
      </form>
    </section>
  );
};

export default SectionConstructTour;
