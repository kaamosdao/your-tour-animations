'use client';

import { useEffect, useState } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import { createClient } from '@/prismicio';
import { FacebookIcon, InstagramIcon, VkIcon } from '@/components/Footer/Icons';

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
          <li className={s.socialsItem}>
            <InstagramIcon />
            <HoverCursor cursorType="pulse">
              <PrismicNextLink
                field={data?.instagram}
                className={s.socialsLink}
              >
                instagram
              </PrismicNextLink>
            </HoverCursor>
          </li>
          <li className={s.socialsItem}>
            <FacebookIcon />
            <HoverCursor cursorType="pulse">
              <PrismicNextLink field={data?.facebook} className={s.socialsLink}>
                facebook
              </PrismicNextLink>
            </HoverCursor>
          </li>
          <li className={s.socialsItem}>
            <VkIcon />
            <HoverCursor cursorType="pulse">
              <PrismicNextLink
                field={data?.vkontakte}
                className={s.socialsLink}
              >
                vkontakte
              </PrismicNextLink>
            </HoverCursor>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
