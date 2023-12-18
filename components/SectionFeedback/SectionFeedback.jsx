'use client';

import { useEffect, useRef, useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { isFilled } from '@prismicio/client';
import { createClient } from '@/prismicio';

import { axisType } from '@/utils/types';

import FeedbackContainer from './FeedbackContainer';
import { CustomScrollTrigger } from '../Animation';

import s from './SectionFeedback.module.scss';

const components = {
  heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
  paragraph: ({ children }) => <p className={s.description}>{children}</p>,
};

const SectionFeedback = ({ slice }) => {
  const feedbackRef = useRef(null);

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
        <CustomScrollTrigger
          shift="-105%"
          trigger={feedbackRef}
          scrollTriggerOptions={{
            start: '20% bottom',
            end: '20% 80%',
            toggleActions: 'restart play reverse reverse',
            invalidateOnRefresh: true,
          }}
          axis={axisType.vertical}
        >
          {feedbacks?.map(({ data, uid }) => (
            <FeedbackContainer key={uid} data={data} />
          ))}
        </CustomScrollTrigger>
      </ul>
    </section>
  );
};

export default SectionFeedback;
