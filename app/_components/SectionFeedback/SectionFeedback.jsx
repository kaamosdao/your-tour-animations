import FeedbackCard from './FeedbackCard/index';

import { feedbacks } from '@/data';

import s from './SectionFeedback.module.scss';

const SectionFeedback = () => (
  <section className={s.feedback}>
    <h2 className={s.title}>
      Отзывы наших
      <br />
      путешественников
    </h2>
    <p className={s.description}>
      Идейные соображения высшего порядка, а&nbsp;
      <br />
      также рамки и место обучения кадров
    </p>
    <ul className={s.list}>
      {feedbacks.map(({ name, user, tour, text }) => (
        <FeedbackCard
          name={name}
          user={user}
          tour={tour}
          text={text}
          key={user}
        />
      ))}
    </ul>
  </section>
);

export default SectionFeedback;
