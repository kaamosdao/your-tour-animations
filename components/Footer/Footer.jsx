'use client';

import { socials } from '@/data';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './Footer.module.scss';

const Footer = () => (
  <footer className={s.footer}>
    <div className={s.container}>
      <p className={s.text}>Наши социальные сети</p>
      <ul className={s.socials}>
        {socials.map(({ name, link, icon }) => (
          <li key={name} className={s.socialsItem}>
            {icon}
            <HoverCursor cursorType="pulse">
              <a className={s.socialsLink} href={link}>
                {name}
              </a>
            </HoverCursor>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
