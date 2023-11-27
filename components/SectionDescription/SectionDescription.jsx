'use client';

import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

import { useArrayRef, useTransition } from '@/hooks';

import HoverCursor from '../CustomCursor/HoverCursor';
import AnimationAppearOnMount from '../AnimationAppearOnMount';

import s from './SectionDescription.module.scss';

const components = (addRef) => ({
  heading2: ({ children }) => (
    <h2 ref={addRef} className={s.title}>
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p ref={addRef} className={s.description}>
      {children}
    </p>
  ),
});

const SectionDescription = ({ slice }) => {
  const isVisible = useTransition();

  const [refs, addRef] = useArrayRef();

  return (
    <section
      className={s.sectionDescription}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={s.tagline}>
        <AnimationAppearOnMount shift="-400%" isVisible={isVisible} refs={refs}>
          <PrismicRichText
            field={slice.primary.title}
            components={components(addRef)}
          />
          <PrismicRichText
            field={slice.primary.description}
            components={components(addRef)}
          />
          <HoverCursor cursorType="pulse">
            <PrismicNextLink
              ref={addRef}
              field={slice.primary.button}
              className={s.button}
            >
              {slice.primary.button_label}
            </PrismicNextLink>
          </HoverCursor>
        </AnimationAppearOnMount>
      </div>
    </section>
  );
};

export default SectionDescription;
