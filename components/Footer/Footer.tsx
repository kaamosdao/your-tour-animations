'use client';

import { useEffect, useRef, useState } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import { createClient } from '@/prismicio';
import { AllDocumentTypes } from '@/prismicio-types';
import type { SettingsDocumentData } from '@/prismicio-types';

import socials from '@/data/socials';

import Direction, { CursorType } from '@/types';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import HoverCursor from '../CustomCursor/HoverCursor';
import { CustomScrollTrigger } from '../Animation';

import s from './Footer.module.scss';

const Footer = () => {
  const footerRef = useRef(null);
  const backfaceRef = useRef(null);

  const [data, setData] = useState<SettingsDocumentData | null>(null);

  useEffect(() => {
    const client = createClient();
    const getSettings = async (): Promise<void> => {
      const { data: socialsData } = await client.getSingle<
        AllDocumentTypes,
        'settings'
      >('settings');
      setData(socialsData);
    };

    void getSettings();
  }, []);

  return (
    <footer ref={footerRef} className={s.footer}>
      <CustomScrollTrigger
        scrollTriggerOptions={{
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 2,
          invalidateOnRefresh: true,
        }}
        tweenOptions={{
          ease: 'none',
        }}
        axis={Direction.Vertical}
        shift="-80%"
        target={backfaceRef}
        trigger={footerRef}
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
                  <HoverCursor type={CursorType.Pulse}>
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
