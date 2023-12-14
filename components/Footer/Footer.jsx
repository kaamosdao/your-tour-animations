'use client';

import { useEffect, useRef, useState } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { createClient } from '@/prismicio';

import socials from '@/data/socials';

import { axisType } from '@/utils/types';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import HoverCursor from '../CustomCursor/HoverCursor';
import { CustomScrollTrigger } from '../Animation';

import s from './Footer.module.scss';

const Footer = () => {
  const footerRef = useRef(null);
  const backfaceRef = useRef(null);

  const [data, setData] = useState(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const client = createClient();
    const getSettings = async () => {
      const { data: socialsData } = await client.getSingle('settings');
      setData(socialsData);
    };
    getSettings();
  }, []);

  return (
    <footer ref={footerRef} className={s.footer}>
      <CustomScrollTrigger
        scrollTriggerOptions={{
          start: '15% bottom',
          end: 'bottom bottom',
          scrub: 2,
        }}
        tweenOptions={{
          ease: 'none',
        }}
        axis={axisType.vertical}
        targetRef={backfaceRef}
        shift="-190px"
        trigger={footerRef.current}
      >
        <div ref={backfaceRef} className={s.backface}>
          <div className={s.iconContainer}>
            <YourTourIcon className={s.icon} />
          </div>
          <div className={s.container}>
            <p className={s.text}>Наши социальные сети</p>
            <ul className={s.socials}>
              {socials.map(({ name, icon }) => (
                <li key={name} className={s.socialsItem}>
                  {icon}
                  <HoverCursor cursorType="pulse">
                    <PrismicNextLink
                      field={data?.[name]}
                      className={s.socialsLink}
                    >
                      {name}
                    </PrismicNextLink>
                  </HoverCursor>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CustomScrollTrigger>
    </footer>
  );
};

export default Footer;
