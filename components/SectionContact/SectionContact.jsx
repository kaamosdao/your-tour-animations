'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { PrismicRichText } from '@prismicio/react';

import useDevicePixelRatio from '@/hooks/useDevicePixelRatio';

import HoverCursor from '../CustomCursor/HoverCursor';
import CustomImage from '../CustomImage';

import s from './SectionContact.module.scss';

const components = {
  heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
};

const SectionContact = ({ slice }) => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  const devicePixelRatio = useDevicePixelRatio();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const picture = q('div[class*="picture"]');
    const title = q('h2[class*="title"]');
    const text = q('p[class*="text"]');

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '80% bottom',
          toggleActions: 'restart play reverse reverse',
        },
      })
      .fromTo(
        picture,
        {
          x: -2000,
        },
        {
          x: 0,
          ease: 'power3.out',
          duration: 0.7,
        }
      )
      .fromTo(
        title,
        {
          y: -2000,
        },
        {
          y: 0,
          ease: 'power3.out',
          duration: 0.7,
        },
        0.2
      )
      .fromTo(
        text,
        {
          y: 2000,
        },
        {
          y: 0,
          ease: 'power3.out',
          duration: 0.7,
        },
        0.3
      );

    return () => {
      tl.kill();
    };
  }, [q]);

  return (
    <section
      ref={sectionRef}
      className={s.contact}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} components={components} />
      <p className={s.text}>
        {slice.primary.description[0].text}
        <HoverCursor cursorType="pulse">
          <a className={s.link} href={`mailto:${slice.primary.email}`}>
            {slice.primary.email}
          </a>
        </HoverCursor>
      </p>
      <div className={s.picture}>
        <CustomImage
          image={slice.primary.image}
          imageRetina={slice.primary.image_retina}
          devicePixelRatio={devicePixelRatio}
        />
      </div>
    </section>
  );
};

export default SectionContact;
