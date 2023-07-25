'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';

import useCursorRef from '@/hooks/useCursorRef';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import { socials } from '@/data';

import s from './Footer.module.scss';

const Footer = () => {
  const cursor = useCursorRef();
  const cursorFollower = useCursorFollowerRef();

  const pulseAnimation = useRef();

  const onMouseEnter = () => {
    pulseAnimation.current = gsap.timeline().fromTo(
      [cursorFollower.current, cursor.current],
      {
        scale: 1.0,
      },
      {
        scale: 1.2,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.in',
      }
    );
  };

  const onMouseLeave = () => {
    pulseAnimation.current.kill();

    gsap.to([cursorFollower.current, cursor.current], {
      scale: 1,
      duration: 0.3,
      ease: 'power1.in',
    });
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
