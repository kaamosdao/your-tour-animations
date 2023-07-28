'use client';

import { useDispatch } from 'react-redux';

import { setCursor } from '@/store/slices/cursorSlice';

import { socials } from '@/data';
import cursorState from '@/utils/types';

import s from './Footer.module.scss';

const Footer = () => {
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    dispatch(setCursor(cursorState.pulse));
  };

  const onMouseLeave = () => {
    dispatch(setCursor(cursorState.default));
  };

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <p className={s.text}>Наши социальные сети</p>
        <ul className={s.socials}>
          {socials.map(({ name, link, icon }) => (
            <li key={name} className={s.socialsItem}>
              {icon}
              <a
                className={s.socialsLink}
                href={link}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
