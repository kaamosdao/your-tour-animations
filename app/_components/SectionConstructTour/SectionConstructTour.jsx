'use client';

import AgeConfirm from './AgeConfirm/index';
import InputFields from './InputFields/index';
import LicenseConfirm from './LicenseConfirm/index';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './SectionConstructTour.module.scss';

const SectionConstructTour = () => (
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
        <HoverCursor cursorType="pulse">
          <button className={s.buttonFind} type="submit">
            Найти тур
          </button>
        </HoverCursor>
        <HoverCursor cursorType="pulse">
          <button className={s.buttonClear} type="button">
            Сбросить
          </button>
        </HoverCursor>
      </div>
    </form>
  </section>
);

export default SectionConstructTour;
