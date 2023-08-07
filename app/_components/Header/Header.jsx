'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import { links } from '@/data/index';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './Header.module.scss';

const Header = () => {
  const pathname = usePathname();

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

  return (
    <header ref={headerRef} className={s.header}>
      <nav className={s.navigation}>
        <HoverCursor cursorType="pulse">
          <Link className={s.logo} href="/">
            <YourTourIcon className={s.icon} />
          </Link>
        </HoverCursor>
        <ul className={s.links}>
          {links.map(({ path, title }) => (
            <li key={path} className={s.item}>
              <HoverCursor cursorType="stuck" activeLink="linkActive">
                <Link
                  className={pathname === `/${path}` ? s.linkActive : s.link}
                  href={`/${path}`}
                >
                  {title}
                </Link>
              </HoverCursor>
            </li>
          ))}
        </ul>
        <HoverCursor cursorType="stuck">
          <a className={s.phone} href="tel:89999999999">
            +7 999 999 99 99
          </a>
        </HoverCursor>
      </nav>
    </header>
  );
};

export default Header;
