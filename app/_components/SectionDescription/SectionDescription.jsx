'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import HoverCursor from '../CustomCursor/HoverCursor';
import OverflowWrapper from '../OverflowWrapper';

import s from './SectionDescription.module.scss';

const SectionDescription = () => {
  const tagline = useRef(null);
  const q = gsap.utils.selector(tagline);
  const width = window.innerWidth;

  useEffect(() => {
    const title = q('span[class*="line"]');
    const description = q('p[class*="line"]');
    const button = q('button[class*="button"]');

    gsap.timeline().fromTo(
      [title, description, button],
      {
        y: -1000,
      },
      {
        y: 0,
        ease: 'power3.out',
        duration: 1,
        delay: 0.2,
        stagger: 0.2,
      }
    );
  }, [q]);

  return (
    <section className={s.sectionDescription}>
      <div ref={tagline} className={s.tagline}>
        <div className={s.title}>
          <OverflowWrapper>
            <span className={s.line}>Идеальные</span>
          </OverflowWrapper>
          <OverflowWrapper>
            <span className={s.line}>путешествия</span>
          </OverflowWrapper>
          <OverflowWrapper>
            <span className={s.line}>существуют</span>
          </OverflowWrapper>
        </div>
        <div className={s.description}>
          {width >= 800 ? (
            <>
              <OverflowWrapper>
                <p className={s.line}>
                  Идейные соображения высшего порядка, а&nbsp;
                </p>
              </OverflowWrapper>
              <OverflowWrapper>
                <p className={s.line}>также рамки и место обучения кадров</p>
              </OverflowWrapper>
            </>
          ) : (
            <>
              <OverflowWrapper>
                <p className={s.line}>Идейные соображения высшего</p>
              </OverflowWrapper>
              <OverflowWrapper>
                <p className={s.line}>порядка, также рамки и место</p>
              </OverflowWrapper>
              <OverflowWrapper>
                <p className={s.line}>обучения кадров</p>
              </OverflowWrapper>
            </>
          )}
        </div>
        <HoverCursor cursorType="pulse">
          <OverflowWrapper>
            <button className={s.button} type="button">
              Найти тур
            </button>
          </OverflowWrapper>
        </HoverCursor>
      </div>
    </section>
  );
};

export default SectionDescription;
