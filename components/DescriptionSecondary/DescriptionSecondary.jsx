'use client';

/* eslint-disable react/no-array-index-key */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PrismicRichText } from '@prismicio/react';

import useTransition from '@/hooks';

import OverflowWrapper from '../OverflowWrapper';

import s from './DescriptionSecondary.module.scss';

const components = {
  heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
  paragraph: ({ children }) => <p className={s.description}>{children}</p>,
};

const DescriptionSecondary = ({ slice }) => {
  const tagline = useRef(null);
  const q = gsap.utils.selector(tagline);
  const isVisible = useTransition();

  useEffect(() => {
    const title = q('h2[class*="title"]');
    const description = q('p[class*="description"]');

    const shift = '-100%';
    const initialPosition = 0;

    if (isVisible) {
      gsap.set([title, description], {
        x: shift,
      });
    } else {
      gsap.set([title, description], {
        x: initialPosition,
      });
    }
  }, [q, isVisible]);

  useEffect(() => {
    const title = q('h2[class*="title"]');
    const description = q('p[class*="description"]');

    const shift = '-105%';
    const initialPosition = 0;

    const animation = gsap.timeline();

    if (isVisible) {
      animation.fromTo(
        [title, description],
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
    }
    return () => {
      animation?.kill();
    };
  }, [isVisible, q]);

  return (
    <section
      className={s.sectionDescription}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div ref={tagline} className={s.tagline}>
        <OverflowWrapper>
          <PrismicRichText
            field={slice.primary.title}
            components={components}
          />
        </OverflowWrapper>
        <OverflowWrapper>
          <PrismicRichText
            field={slice.primary.description_1}
            components={components}
          />
        </OverflowWrapper>
        <OverflowWrapper>
          <PrismicRichText
            field={slice.primary.description_2}
            components={components}
          />
        </OverflowWrapper>
        <OverflowWrapper>
          <PrismicRichText
            field={slice.primary.description_3}
            components={components}
          />
        </OverflowWrapper>
      </div>
    </section>
  );
};

export default DescriptionSecondary;
