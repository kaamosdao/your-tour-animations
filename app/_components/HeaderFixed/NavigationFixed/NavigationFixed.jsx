'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useDispatch } from 'react-redux';

import { setStuck } from '@/store/slices/cursorSlice';
import useCursorRef from '@/hooks/useCursorRef';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import s from './NavigationFixed.module.scss';

const NavigationFixed = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const cursor = useCursorRef();
  const cursorFollower = useCursorFollowerRef();

  const pulseAnimation = useRef();

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
    <nav className={s.navigationFixed}>
      <Link
        className={s.logo}
        href="/"
        onMouseEnter={onMouseEnterLogo}
        onMouseLeave={onMouseLeaveLogo}
      >
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/img/svg-icons/yourtour-mobile-black.svg"
            width="181"
            height="32"
          />
          <img
            src="/img/svg-icons/yourtour-mobile-black.svg"
            alt="YourTour logo"
            width="133"
            height="22"
            loading="lazy"
          />
        </picture>
      </Link>
      <ul className={s.links}>
        <li className={s.item}>
          <Link
            className={pathname === '/tours' ? s.linkActive : s.link}
            href="/tours"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Туры
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={pathname === '/create' ? s.linkActive : s.link}
            href="/create"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Создать тур
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={pathname === '/feedback' ? s.linkActive : s.link}
            href="/feedback"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Отзывы
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={pathname === '/stories' ? s.linkActive : s.link}
            href="/stories"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Истории
          </Link>
        </li>
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
  );
};

export default NavigationFixed;
