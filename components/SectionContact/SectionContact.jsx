'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Picture from '../Picture';
import HoverCursor from '../CustomCursor/HoverCursor';

import s from './SectionContact.module.scss';

const SectionContact = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    const picture = q('div[class*="picture"]');
    const title = q('h2[class*="title"]');
    const text = q('p[class*="text"]');

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef?.current,
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
  }, [q]);

  return (
    <section ref={sectionRef} className={s.contact}>
      <h2 className={s.title}>
        Пора в путешествие
        <br />
        вместе с нами!
      </h2>
      <p className={s.text}>
        Напиши на почту и узнай подробности
        <br />
        на&nbsp;
        <HoverCursor cursorType="pulse">
          <a className={s.link} href="mailto:yourtour@gmail.com">
            yourtour@gmail.com
          </a>
        </HoverCursor>
      </p>
      <div className={s.picture}>
        <Picture
          desktopImg={{
            width: 370,
            height: 370,
            url: '/img/histories/icon-village-desktop-lg',
          }}
          tabletImg={{
            width: 370,
            height: 370,
            url: '/img/histories/icon-village-desktop-md',
          }}
          defaultImg={{
            width: 133,
            height: 130,
            url: '/img/histories/icon-village-mobile',
          }}
          alt="Деревня у озера в горах"
          format="png"
        />
      </div>
    </section>
  );
};

export default SectionContact;