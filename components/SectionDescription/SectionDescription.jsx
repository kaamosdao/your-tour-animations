'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './SectionDescription.module.scss';

const components = (titleRef, descriptionRef) => ({
  heading2: ({ children }) => (
    <h2 ref={titleRef} className={s.title}>
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p ref={descriptionRef} className={s.description}>
      {children}
    </p>
  ),
});

const SectionDescription = ({ slice }) => {
  const tagline = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const shift = '-105%';
    const initialPosition = 0;

    gsap.timeline().fromTo(
      [titleRef.current, descriptionRef.current, buttonRef.current],
      {
        x: shift,
      },
      {
        x: initialPosition,
        ease: 'power3.out',
        duration: 1,
        delay: 0.2,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section
      className={s.sectionDescription}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div ref={tagline} className={s.tagline}>
        <PrismicRichText
          field={slice.primary.title}
          components={components(titleRef, descriptionRef)}
        />
        <PrismicRichText
          field={slice.primary.description}
          components={components(titleRef, descriptionRef)}
        />
        <HoverCursor cursorType="pulse">
          <PrismicNextLink
            ref={buttonRef}
            field={slice.primary.button}
            className={s.button}
          >
            {slice.primary.button_label}
          </PrismicNextLink>
        </HoverCursor>
      </div>
    </section>
  );
};

export default SectionDescription;
