'use client';

import { useEffect, useState } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import { createClient } from '@/prismicio';

import socials from '@/data/socials';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './Footer.module.scss';

const Footer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const client = createClient();
    const getSettings = async () => {
      const { data: socialsData } = await client.getSingle('settings');
      setData(socialsData);
    };
    getSettings();
  }, []);

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <p className={s.text}>Наши социальные сети</p>
        <ul className={s.socials}>
          {socials.map(({ name, icon }) => (
            <li key={name} className={s.socialsItem}>
              {icon}
              <HoverCursor cursorType="pulse">
                <PrismicNextLink field={data?.[name]} className={s.socialsLink}>
                  {name}
                </PrismicNextLink>
              </HoverCursor>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
