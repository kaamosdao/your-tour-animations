import s from './SectionDescription.module.scss';

const SectionDescription = () => (
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
      <button className={s.button} type="button">
        Найти тур
      </button>
    </div>
  </section>
);

export default SectionDescription;
