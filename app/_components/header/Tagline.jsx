import s from './Tagline.module.scss';

const Tagline = () => (
  <div className={s.tagline}>
    <h2 className={s.title}>Идеальные путешествия существуют</h2>
    <p className={s.description}>
      Идейные соображения высшего порядка, а&nbsp;
      <br />
      также рамки и&nbsp;
      <br />
      место обучения кадров
    </p>
    <button className={s.button} type="button">
      Найти тур
    </button>
  </div>
);

export default Tagline;
