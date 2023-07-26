'use client';

import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { gsap } from 'gsap';

import { setStuck } from '@/store/slices/cursorSlice';
import useCursorRef from '@/hooks/useCursorRef';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import { links } from '@/data/index';

import s from './Header.module.scss';

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const cursor = useCursorRef();
  const cursorFollower = useCursorFollowerRef();
  const headerRef = useRef();

  const pulseAnimation = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const distance = 450;
      const position = window.scrollY;

      if (window.scrollY <= distance) {
        headerRef.current.style.opacity = 1 - position / distance;
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
    const linkBox = link.getBoundingClientRect();

    const cursorCircle = cursorFollower.current.querySelector('#circle');

    if (!link.className.includes('linkActive')) {
      dispatch(setStuck(true));

      gsap.to(cursorCircle, {
        width: linkBox.width,
        height: linkBox.height,
        borderRadius: '3px',
        padding: '4px',
        duration: 0.5,
      });
    }
  };

  const onMouseLeave = () => {
    const cursorCircle = cursorFollower.current.querySelector('#circle');

    dispatch(setStuck(false));

    gsap.to(cursorCircle, {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      padding: '0',
      duration: 0.5,
    });
  };

  const onMouseEnterLogo = () => {
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

  const onMouseLeaveLogo = () => {
    pulseAnimation.current.kill();

    gsap.to([cursorFollower.current, cursor.current], {
      scale: 1,
      duration: 0.3,
      ease: 'power1.in',
    });
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
