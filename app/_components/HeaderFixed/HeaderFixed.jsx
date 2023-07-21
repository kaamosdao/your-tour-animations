'use client';

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import NavigationFixed from './NavigationFixed/index';

import s from './HeaderFixed.module.scss';

const cn = classNames.bind(s);

const HeaderFixed = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const distance = 450;
      if (window.scrollY >= distance && !show) {
        setShow(true);
      } else if (window.scrollY < distance && show) {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [show]);

  return (
    <header className={cn('headerFixed', { showHeaderFixed: show })}>
      <NavigationFixed />
    </header>
  );
};

export default HeaderFixed;
