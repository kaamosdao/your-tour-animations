import AgeConfirm from './AgeConfirm';
import InputFields from './InputFields';
import LicenseConfirm from './LicenseConfirm';

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
        <button className={s.buttonFind} type="submit">
          Найти тур
        </button>
        <button className={s.buttonClear} type="button">
          Сбросить
        </button>
      </div>
    </form>
  </section>
);

export default SectionConstructTour;
