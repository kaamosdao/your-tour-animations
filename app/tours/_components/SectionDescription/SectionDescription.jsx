'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import s from './SectionDescription.module.scss';

const SectionDescription = () => {
  const tagline = useRef(null);
  const q = gsap.utils.selector(tagline);

  useEffect(() => {
    const title = q('h2[class*="title"]');
    const description = q('p[class*="description"]');

    gsap.timeline().fromTo(
      [title, description],
      {
        y: 1000,
      },
      {
        y: 0,
        ease: 'back.out(1.0)',
        duration: 1,
        stagger: 0.1,
      }
    );
  }, [q]);

  return (
    <section className={s.sectionDescription}>
      <div ref={tagline} className={s.tagline}>
        <h2 className={s.title}>Туры</h2>
        <p className={s.description}>
          A robot may not injure a human being or, through inaction, allow a
          human being to come to harm.
        </p>
        <p className={s.description}>
          A robot must obey the orders given it by human beings except where
          such orders would conflict with the First Law.
        </p>
        <p className={s.description}>
          A robot must protect its own existence as long as such protection does
          not conflict with the First or Second Law.
        </p>
      </div>
    </section>
  );
};

export default SectionDescription;
