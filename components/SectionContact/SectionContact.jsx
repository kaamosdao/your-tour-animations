'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

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
      end: 'bottom bottom',
      toggleActions: 'restart play reverse reverse',
      invalidateOnRefresh: true,
    }),
    []
  );

  const [moreThanTabletLg, setMoreThanTabletLg] = useState(true);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 800 && !moreThanTabletLg) {
        setMoreThanTabletLg(true);
      } else if (window.innerWidth < 800 && moreThanTabletLg) {
        setMoreThanTabletLg(false);
      }
    };

    resize();

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, [moreThanTabletLg]);

  return (
    <section
      ref={sectionRef}
      className={s.contact}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CustomScrollTrigger
        shift="-380%"
        trigger={sectionRef}
        scrollTriggerOptions={scrollTriggerOptions}
        tweenOptions={{
          ease: 'power3.out',
          duration: 0.7,
          delay: 0.2,
        }}
        axis={moreThanTabletLg ? axisType.vertical : axisType.horizontal}
      >
        <Title slice={slice} />
      </CustomScrollTrigger>

      <CustomScrollTrigger
        shift="205%"
        trigger={sectionRef}
        scrollTriggerOptions={scrollTriggerOptions}
        tweenOptions={{
          ease: 'power3.out',
          duration: 0.7,
          delay: 0.4,
        }}
        axis={moreThanTabletLg ? axisType.vertical : axisType.horizontal}
      >
        <Text slice={slice} />
      </CustomScrollTrigger>

      <CustomScrollTrigger
        shift="-205%"
        trigger={sectionRef}
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
