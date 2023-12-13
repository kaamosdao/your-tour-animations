'use client';

import { useEffect, useRef, useState } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { createClient } from '@/prismicio';

import socials from '@/data/socials';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import HoverCursor from '../CustomCursor/HoverCursor';

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

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: '15% bottom',
          end: 'bottom bottom',
          scrub: 2,
          markers: true,
        },
      })
      .to(backfaceRef?.current, {
        y: 0,
      });
  }, []);

  return (
    <footer ref={footerRef} className={s.footer}>
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
    </footer>
  );
};

export default Footer;
