'use client';

import { useRef, useEffect } from 'react';

import NavigationFixed from './NavigationFixed/index';

import s from './HeaderFixed.module.scss';

const HeaderFixed = () => {
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const distance = 450;
      const position = window.scrollY;

      if (window.scrollY === 0) {
        headerRef.current.style.display = 'none';
      } else {
        headerRef.current.style.display = 'flex';
      }

      if (window.scrollY <= distance) {
        headerRef.current.style.opacity = position / distance;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={s.headerFixed}>
      <NavigationFixed />
    </header>
  );
};

export default HeaderFixed;
