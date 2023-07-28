'use client';

import { useDispatch } from 'react-redux';

import { setCursor } from '@/store/slices/cursorSlice';

import cursorState from '@/utils/types';

import s from './SectionDescription.module.scss';

const SectionDescription = () => {
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    dispatch(setCursor(cursorState.pulse));
  };

  const onMouseLeave = () => {
    dispatch(setCursor(cursorState.default));
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
