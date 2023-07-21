import HistoryCard from './HistoryCard/index';

import s from './SectionHistories.module.scss';

const histories = [
  {
    title: 'Автостопом в Стамбул',
    name: 'camping',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    list: ['вкусная еда', 'дешевый транспорт', 'красивый город'],
    socials: ['instagram', 'facebook', 'YouTube'],
  },
  {
    title: 'Автостопом в Стамбул',
    name: 'fire',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
    list: [],
    socials: ['instagram', 'ВКонтакте'],
  },
  {
    title: 'Автостопом в Стамбул',
    name: 'shore',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
    list: [],
    socials: ['instagram', 'facebook', 'ВКонтакте'],
  },
];

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
