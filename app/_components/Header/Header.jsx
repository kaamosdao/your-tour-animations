'use client';

import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { setCursor, setStuck } from '@/store/slices/cursorSlice';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import { links } from '@/data/index';
import cursorState from '@/utils/types';

import s from './Header.module.scss';

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const headerRef = useRef();

  useEffect(() => {
    const distance = 450;

    if (window.scrollY <= distance) {
      headerRef.current.style.display = 'block';
    } else {
      headerRef.current.style.display = 'none';
    }

    const handleScroll = () => {
      if (window.scrollY <= distance) {
        headerRef.current.style.opacity = 1 - window.scrollY / distance;
        headerRef.current.style.display = 'block';
      } else {
        headerRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onMouseEnter = (e) => {
    const link = e.currentTarget;
    const { left, top, width, height } = link.getBoundingClientRect();

    if (!link.className.includes('linkActive')) {
      dispatch(setCursor(cursorState.stuck));

      dispatch(
        setStuck({
          left,
          top,
          width,
          height,
          borderRadius: '3px',
          padding: '4px',
        })
      );
    }
  };

  const onMouseLeave = () => {
    dispatch(setCursor(cursorState.default));
    dispatch(setStuck(null));
  };

  const onMouseEnterLogo = () => {
    dispatch(setCursor(cursorState.pulse));
  };

  const onMouseLeaveLogo = () => {
    dispatch(setCursor(cursorState.default));
  };

  return (
    <header ref={headerRef} className={s.header}>
      <nav className={s.navigation}>
        <Link
          className={s.logo}
          href="/"
          onMouseEnter={onMouseEnterLogo}
          onMouseLeave={onMouseLeaveLogo}
        >
          <YourTourIcon className={s.icon} />
        </Link>
        <ul className={s.links}>
          {links.map(({ path, title }) => (
            <li key={path} className={s.item}>
              <Link
                className={pathname === `/${path}` ? s.linkActive : s.link}
                href={`/${path}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <a
          className={s.phone}
          href="tel:89999999999"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          +7 999 999 99 99
        </a>
      </nav>
    </header>
  );
};

export default Header;
