'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { PrismicRichText } from '@prismicio/react';
import { createClient } from '@/prismicio';

import HistorySlider from './HistorySlider/index';

import s from './SectionHistories.module.scss';

const components = {
  heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
  paragraph: ({ children }) => <p className={s.description}>{children}</p>,
};

const SectionHistories = ({ slice }) => {
  const sliderRef = useRef(null);

  const q = gsap.utils.selector(sliderRef);

  const historyUIDs = useMemo(
    () => slice.items.map(({ history }) => history.uid),
    [slice]
  );
  const [histories, setHistories] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const client = createClient();
    const getData = async () => {
      const data = await client.getAllByUIDs('history', historyUIDs);

      setHistories(data);
    };

    getData();
  }, [historyUIDs]);

  useEffect(() => {
    const description = q('div[class*="item"]');
    const button = q('div[class*="controls"]');

    const tl = gsap
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

    return () => {
      tl.kill();
    };
  }, [q]);

  return (
    <section
      className={s.histories}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} components={components} />
      <PrismicRichText
        field={slice.primary.description}
        components={components}
      />
      <div ref={sliderRef} className={s.list}>
        {histories && <HistorySlider histories={histories} />}
      </div>
    </section>
  );
};

export default SectionHistories;
