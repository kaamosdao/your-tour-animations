'use client';

/* eslint-disable react/no-array-index-key */

import { FC } from 'react';
import { PrismicRichText } from '@prismicio/react';
import cn from 'classnames';
import { DescriptionSliceWithoutButton } from '@/prismicio-types';
import { SharedSlice } from '@prismicio/client';

import { useTransition, useArrayRef } from '@/hooks';

import { SerializerReturnType } from '@/types';

import OverflowWrapper from '../OverflowWrapper';
import { AppearOnMount } from '../Animation';

import s from './DescriptionSecondary.module.scss';

type SliceType = SharedSlice<'description', DescriptionSliceWithoutButton>;

interface IDescriptionSecondary {
  slice: SliceType;
}

const components = (
  addRef: (el: HTMLElement | null) => void
): SerializerReturnType => ({
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

const DescriptionSecondary: FC<IDescriptionSecondary> = ({ slice }) => {
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
          <AppearOnMount shift="-105%" isVisible={isVisible} refs={refs}>
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
          </AppearOnMount>
        </OverflowWrapper>
      </div>
    </section>
  );
};

export default DescriptionSecondary;
