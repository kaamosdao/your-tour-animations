'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from '../Navigation';

import s from './Header.module.scss';

const Header = () => {
  const headerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          start: 'top top',
          end: '+=450',
          scrub: true,
        },
      })
      .to(headerRef?.current, {
        backdropFilter: 'blur(27px)',
      })
      .to(
        'html',
        {
          '--nav-text-color': gsap.getProperty('html', '--main-text-color'),
          '--nav-bg-color': gsap.getProperty('html', '--header-bg-color'),
        },
        0
      );
  }, []);

  return (
    <header ref={headerRef} className={s.header}>
      <Navigation />
    </header>
  );
};

export default Header;
