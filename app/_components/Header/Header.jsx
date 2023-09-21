'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from '../Navigation';

import s from './Header.module.scss';

const Header = () => {
  const headerRef = useRef();
  const q = gsap.utils.selector(headerRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const logo = q('svg[class*="icon"]');
    const nav = q('nav');

    gsap
      .timeline({
        scrollTrigger: {
          start: 'top top',
          end: '+=450',
          scrub: true,
        },
      })
      .to(headerRef?.current, {
        backgroundColor: gsap.getProperty('html', '--header-bg-color'),
        backdropFilter: 'blur(27px)',
      })
      .to(
        logo,
        {
          fill: gsap.getProperty('html', '--main-text-color'),
        },
        0
      )
      .to(
        nav,
        {
          color: gsap.getProperty('html', '--main-text-color'),
        },
        0
      );
  }, [q]);

  return (
    <header ref={headerRef} className={s.header}>
      <Navigation />
    </header>
  );
};

export default Header;
