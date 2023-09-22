'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import HistorySlider from './HistorySlider/index';

import s from './SectionHistories.module.scss';

const SectionHistories = () => {
  const sliderRef = useRef(null);
  const q = gsap.utils.selector(sliderRef);

  useEffect(() => {
    const description = q('div[class*="item"]');
    const button = q('div[class*="controls"]');

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sliderRef?.current,
          start: '80% bottom',
          toggleActions: 'restart play reverse reverse',
        },
      })
      .fromTo(
        [description, button],
        {
          x: -2000,
        },
        {
          x: 0,
          ease: 'power3.out',
          duration: 0.7,
          stagger: 0.2,
        }
      );
  }, [q]);

  return (
    <section className={s.histories}>
      <h2 className={s.title}>Истории путешествий</h2>
      <p className={s.description}>
        Идейные соображения высшего порядка, а&nbsp;
        <br />
        также рамки и место обучения кадров
      </p>
      <div ref={sliderRef} className={s.list}>
        <HistorySlider />
      </div>
    </section>
  );
};

export default SectionHistories;
