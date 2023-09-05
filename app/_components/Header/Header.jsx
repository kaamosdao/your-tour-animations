'use client';

import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';

import { setPlaying } from '@/store/slices/transitionSlice';
import selectPlayingTransition from '@/store/selectors/transitionSelectors';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import { links } from '@/data/index';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './Header.module.scss';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const playing = useSelector(selectPlayingTransition);

  const headerRef = useRef();

  const [active, setActive] = useState('/');

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

  const onClick = (path) => (e) => {
    e.preventDefault();

    if (playing) {
      return;
    }

    if (path === '/' && pathname === '/') {
      return;
    }

    setActive(path);

    dispatch(setPlaying(true));

    gsap.delayedCall(0.9, () => {
      router.push(`/${path}`);
    });
  };

  return (
    <header ref={headerRef} className={s.header}>
      <nav className={s.navigation}>
        <HoverCursor cursorType="pulse">
          <a className={s.logo} href="/" onClick={onClick('/')}>
            <YourTourIcon className={s.icon} />
          </a>
        </HoverCursor>
        <ul className={s.links}>
          {links.map(({ path, title }) => (
            <li key={path} className={s.item}>
              <HoverCursor cursorType="stuck" activeLink="linkActive">
                <a
                  className={active === path ? s.linkActive : s.link}
                  href={`/${path}`}
                  onClick={onClick(path)}
                >
                  {title}
                </a>
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
