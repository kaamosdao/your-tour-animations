'use client';

import { useMemo, useRef } from 'react';

import { axisType } from '@/utils/types';

import { CustomScrollTrigger } from '../Animation';
import Title from './Title';
import Text from './Text';
import Picture from './Picture';

import s from './SectionContact.module.scss';

const SectionContact = ({ slice }) => {
  const sectionRef = useRef(null);

  const scrollTriggerOptions = useMemo(
    () => ({
      start: '80% bottom',
      toggleActions: 'restart play reverse reverse',
    }),
    []
  );

  return (
    <section
      ref={sectionRef}
      className={s.contact}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CustomScrollTrigger
        shift="-380%"
        trigger={sectionRef.current}
        scrollTriggerOptions={scrollTriggerOptions}
        tweenOptions={{
          ease: 'power3.out',
          duration: 0.7,
          delay: 0.2,
        }}
        axis={axisType.vertical}
      >
        <Title slice={slice} />
      </CustomScrollTrigger>
      <CustomScrollTrigger
        shift="205%"
        trigger={sectionRef.current}
        scrollTriggerOptions={scrollTriggerOptions}
        tweenOptions={{
          ease: 'power3.out',
          duration: 0.7,
          delay: 0.4,
        }}
        axis={axisType.vertical}
      >
        <Text slice={slice} />
      </CustomScrollTrigger>
      <CustomScrollTrigger
        shift="-205%"
        trigger={sectionRef.current}
        scrollTriggerOptions={scrollTriggerOptions}
        tweenOptions={{
          ease: 'power3.out',
          duration: 0.7,
        }}
        axis={axisType.horizontal}
      >
        <Picture slice={slice} />
      </CustomScrollTrigger>
    </section>
  );
};

export default SectionContact;
