'use client';

import { useRef, useEffect } from 'react';

import { navStyle } from '@/utils/types';

import Navigation from '../Navigation';

import s from './HeaderFixed.module.scss';

const HeaderFixed = () => {
  const headerRef = useRef();

  useEffect(() => {
    if (window.scrollY === 0) {
      headerRef.current.style.display = 'none';
    } else {
      headerRef.current.style.display = 'flex';
      headerRef.current.style.opacity = 1;
    }

    const handleScroll = () => {
      const distance = 450;

      if (window.scrollY <= distance) {
        headerRef.current.style.display = 'flex';
        headerRef.current.style.opacity = window.scrollY / distance;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={s.headerFixed}>
      <Navigation style={navStyle.fixed} />
    </header>
  );
};

export default HeaderFixed;
