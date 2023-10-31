'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './SectionDescription.module.scss';

const components = {
  heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
  paragraph: ({ children }) => <p className={s.description}>{children}</p>,
};

const SectionDescription = ({ slice }) => {
  const tagline = useRef(null);
  const q = gsap.utils.selector(tagline);

  useEffect(() => {
    const title = q('h2[class*="title"]');
    const description = q('p[class*="description"]');
    const button = q('a[class*="button"]');

    gsap.timeline().fromTo(
      [title, description, button],
      {
        x: -1000,
      },
      {
        x: 0,
        ease: 'power3.out',
        duration: 1,
        delay: 0.2,
        stagger: 0.2,
      }
    );
  }, [q]);

  return (
    <section
      className={s.sectionDescription}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div ref={tagline} className={s.tagline}>
        <PrismicRichText field={slice.primary.title} components={components} />
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />
        <HoverCursor cursorType="pulse">
          <PrismicNextLink field={slice.primary.button} className={s.button}>
            {slice.primary.button_label}
          </PrismicNextLink>
        </HoverCursor>
      </div>
    </section>
  );
};

export default SectionDescription;
