'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './SectionDescription.module.scss';

const SectionDescription = () => {
  const tagline = useRef(null);
  const q = gsap.utils.selector(tagline);

  useEffect(() => {
    const title = q('h2[class*="title"]');
    const description = q('p[class*="description"]');
    const button = q('button[class*="button"]');

    gsap.timeline().fromTo(
      [title, description, button],
      {
        x: -1000,
      },
      {
        x: 0,
        ease: 'back.out(1.0)',
        duration: 1,
        delay: 0.3,
        stagger: 0.2,
      }
    );
  }, [q]);

  return (
    <section className={s.sectionDescription}>
      <div ref={tagline} className={s.tagline}>
        <h2 className={s.title}>Идеальные путешествия существуют</h2>
        <p className={s.description}>
          Идейные соображения высшего порядка, а&nbsp;
          <br />
          также рамки и&nbsp;
          <br />
          место обучения кадров
        </p>
        <HoverCursor cursorType="pulse">
          <button className={s.button} type="button">
            Найти тур
          </button>
        </HoverCursor>
      </div>
    </section>
  );
};

export default SectionDescription;
