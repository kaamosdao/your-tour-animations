'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { PrismicRichText } from '@prismicio/react';
import { isFilled } from '@prismicio/client';
import { createClient } from '@/prismicio';

import FeedbackContainer from './FeedbackContainer';

import s from './SectionFeedback.module.scss';

const components = {
  heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
  paragraph: ({ children }) => <p className={s.description}>{children}</p>,
};

const SectionFeedback = ({ slice }) => {
  const feedbackRef = useRef(null);
  const q = gsap.utils.selector(feedbackRef);

  const [feedbacks, setFeedbacks] = useState(null);

  useEffect(() => {
    const client = createClient();

    const getData = async () => {
      const data = await Promise.all(
        slice.items.map((item) => {
          if (isFilled.contentRelationship(item.card) && item.card.uid) {
            return client.getByUID('feedback_card', item.card.uid);
          }
          return null;
        })
      );

      setFeedbacks(data);
    };
    getData();
  }, [slice.items]);

  useEffect(() => {
    const feedbackItems = q('button');

    const shift = '-105%';
    const initialPosition = 0;

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: feedbackRef.current,
          start: '20% bottom',
          end: '20% 80%',
          toggleActions: 'restart play reverse reverse',
        },
      })
      .fromTo(
        feedbackItems,
        {
          y: shift,
        },
        {
          y: initialPosition,
          ease: 'power3.out',
          duration: 0.7,
          stagger: 0.2,
        }
      );

    return () => {
      tl.kill();
    };
  }, [q]);

  return (
    <section
      className={s.feedback}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} components={components} />
      <PrismicRichText
        field={slice.primary.description}
        components={components}
      />
      <ul ref={feedbackRef} className={s.list}>
        {feedbacks?.map(({ data, uid }) => (
          <FeedbackContainer key={uid} data={data} />
        ))}
      </ul>
    </section>
  );
};

export default SectionFeedback;
