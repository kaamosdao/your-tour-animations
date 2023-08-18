import HistorySlider from './HistorySlider/index';

import s from './SectionHistories.module.scss';

const SectionHistories = () => (
  <section className={s.histories}>
    <h2 className={s.title}>Истории путешествий</h2>
    <p className={s.description}>
      Идейные соображения высшего порядка, а&nbsp;
      <br />
      также рамки и место обучения кадров
    </p>
    <div className={s.list}>
      <HistorySlider />
    </div>
  </section>
);

export default SectionHistories;
