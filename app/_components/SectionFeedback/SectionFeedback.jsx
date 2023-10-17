'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { feedbacks } from '@/data';

import FeedbackContainer from './FeedbackContainer';

import s from './SectionFeedback.module.scss';

const SectionFeedback = () => {
  const feedbackRef = useRef(null);
  const q = gsap.utils.selector(feedbackRef);

  useEffect(() => {
    const feedbackItems = q('li');

    gsap
      .timeline({
        scrollTrigger: {
          trigger: feedbackRef?.current,
          start: '20% bottom',
          end: '20% 80%',
          toggleActions: 'restart play reverse reverse',
        },
      })
      .fromTo(
        feedbackItems,
        {
          y: -1000,
        },
        {
          y: 0,
          ease: 'power3.out',
          duration: 0.7,
          stagger: 0.2,
        }
      );
  }, [q]);

  return (
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
      <ul ref={feedbackRef} className={s.list}>
        {feedbacks.map(({ name, user, tour, text }) => (
          <FeedbackContainer
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
};

export default SectionFeedback;
