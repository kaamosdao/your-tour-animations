'use client';

import { useEffect, useRef } from 'react';

import { navStyle } from '@/utils/types';

import Navigation from '../Navigation';

import s from './Header.module.scss';

const Header = () => {
  const headerRef = useRef();

  useEffect(() => {
    const distance = 450;

    if (window.scrollY <= distance) {
      headerRef.current.style.display = 'flex';
    } else {
      headerRef.current.style.display = 'none';
    }

    const handleScroll = () => {
      if (window.scrollY <= distance) {
        headerRef.current.style.opacity = 1 - window.scrollY / distance;
        headerRef.current.style.display = 'flex';
      } else {
        headerRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={s.header}>
      <Navigation style={navStyle.main} />
    </header>
  );
};

export default Header;
