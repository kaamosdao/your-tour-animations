'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { PrismicRichText } from '@prismicio/react';

import HoverCursor from '../CustomCursor/HoverCursor';
import CustomImage from '../CustomImage';

import s from './SectionContact.module.scss';

const components = (titleRef) => ({
  heading2: ({ children }) => (
    <h2 ref={titleRef} className={s.title}>
      {children}
    </h2>
  ),
});

const SectionContact = ({ slice }) => {
  const sectionRef = useRef(null);
  const pictureRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const shift = '105%';
    const shiftTitle = '220%';
    const initialPosition = 0;

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '80% bottom',
          toggleActions: 'restart play reverse reverse',
        },
      })
      .fromTo(
        pictureRef.current,
        {
          x: `-${shift}`,
        },
        {
          x: initialPosition,
          ease: 'power3.out',
          duration: 0.7,
        }
      )
      .fromTo(
        titleRef.current,
        {
          y: `-${shiftTitle}`,
        },
        {
          y: 0,
          ease: 'power3.out',
          duration: 0.7,
        },
        0.2
      )
      .fromTo(
        textRef.current,
        {
          y: shift,
        },
        {
          y: initialPosition,
          ease: 'power3.out',
          duration: 0.7,
        },
        0.3
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={s.contact}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        ref={titleRef}
        field={slice.primary.title}
        components={components(titleRef)}
      />
      <p ref={textRef} className={s.text}>
        {slice.primary.description[0].text}
        <HoverCursor cursorType="pulse">
          <a className={s.link} href={`mailto:${slice.primary.email}`}>
            {slice.primary.email}
          </a>
        </HoverCursor>
      </p>
      <div ref={pictureRef} className={s.picture}>
        <CustomImage
          image={slice.primary.image}
          imageRetina={slice.primary.image_retina}
        />
      </div>
    </section>
  );
};

export default SectionContact;
