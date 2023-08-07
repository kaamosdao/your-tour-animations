import HistoryCard from './HistoryCard/index';

import { histories } from '@/data';

import s from './SectionHistories.module.scss';

const SectionHistories = () => (
  <section className={s.histories}>
    <h2 className={s.title}>Истории путешествий</h2>
    <p className={s.description}>
      Идейные соображения высшего порядка, а&nbsp;
      <br />
      также рамки и место обучения кадров
    </p>
    <ul className={s.list}>
      {histories.map(({ title, name, text, list, socials }) => (
        <HistoryCard
          title={title}
          name={name}
          text={text}
          list={list}
          socials={socials}
          key={name}
        />
      ))}
    </ul>
  </section>
);

export default SectionHistories;
