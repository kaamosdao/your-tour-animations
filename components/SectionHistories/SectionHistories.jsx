'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { createClient } from '@/prismicio';

import { axisType } from '@/utils/types';

import HistorySlider from './HistorySlider/index';
import { CustomScrollTrigger } from '../Animation';

import s from './SectionHistories.module.scss';

const components = {
  heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
  paragraph: ({ children }) => <p className={s.description}>{children}</p>,
};

const SectionHistories = ({ slice }) => {
  const sliderRef = useRef(null);

  const historyUIDs = useMemo(
    () => slice.items.map(({ history }) => history.uid),
    [slice]
  );
  const [histories, setHistories] = useState(null);

  useEffect(() => {
    const client = createClient();
    const getData = async () => {
      const data = await client.getAllByUIDs('history', historyUIDs);

      setHistories(data);
    };
    getData();
  }, [historyUIDs]);

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
        <CustomScrollTrigger
          shift="-105%"
          trigger={sliderRef.current}
          scrollTriggerOptions={{
            start: '80% bottom',
            toggleActions: 'restart play reverse reverse',
          }}
          axis={axisType.horizontal}
        >
          {histories && <HistorySlider histories={histories} />}
        </CustomScrollTrigger>
      </div>
    </section>
  );
};

export default SectionHistories;
