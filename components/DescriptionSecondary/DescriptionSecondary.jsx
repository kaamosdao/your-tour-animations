'use client';

/* eslint-disable react/no-array-index-key */

import { PrismicRichText } from '@prismicio/react';
import cn from 'classnames';

import { useTransition, useArrayRef } from '@/hooks';

import OverflowWrapper from '../OverflowWrapper';

import s from './DescriptionSecondary.module.scss';
import AnimationAppearOnMount from '../AnimationAppearOnMount';

const components = (addRef) => ({
  heading2: ({ children }) => (
    <h2 ref={addRef} className={cn('title', s.title)}>
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p ref={addRef} className={cn('description', s.description)}>
      {children}
    </p>
  ),
});

const DescriptionSecondary = ({ slice }) => {
  const isVisible = useTransition();

  const [refs, addRef] = useArrayRef();

  return (
    <section
      className={s.sectionDescription}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={s.tagline}>
        <OverflowWrapper>
          <AnimationAppearOnMount
            shift="-105%"
            isVisible={isVisible}
            refs={refs}
          >
            <PrismicRichText
              field={slice.primary.title}
              components={components(addRef)}
            />
            <PrismicRichText
              field={slice.primary.description_1}
              components={components(addRef)}
            />
            <PrismicRichText
              field={slice.primary.description_2}
              components={components(addRef)}
            />
            <PrismicRichText
              field={slice.primary.description_3}
              components={components(addRef)}
            />
          </AnimationAppearOnMount>
        </OverflowWrapper>
      </div>
    </section>
  );
};

export default DescriptionSecondary;
