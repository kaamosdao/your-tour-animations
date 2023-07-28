'use client';

import { useDispatch } from 'react-redux';

import { setCursor } from '@/store/slices/cursorSlice';

import cursorState from '@/utils/types';

import AgeConfirm from './AgeConfirm/index';
import InputFields from './InputFields/index';
import LicenseConfirm from './LicenseConfirm/index';

import s from './SectionConstructTour.module.scss';

const SectionConstructTour = () => {
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    dispatch(setCursor(cursorState.pulse));
  };

  const onMouseLeave = () => {
    dispatch(setCursor(cursorState.default));
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
