'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import classnames from 'classnames/bind';

import { navigation } from '@/data';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './TourNavigation.module.scss';

const cn = classnames.bind(s);

const TourNavigation = () => {
  const navRef = useRef(null);
  const q = gsap.utils.selector(navRef);

  useEffect(() => {
    const links = q('li');

    gsap
      .timeline({
        scrollTrigger: {
          trigger: navRef?.current,
          start: 'top bottom',
          end: '+=200',
          toggleActions: 'restart play reverse pause',
        },
      })
      .fromTo(
        links,
        {
          y: -1000,
        },
        {
          y: 0,
          ease: 'power3.out',
          duration: 0.5,
          stagger: 0.2,
        }
      );
  }, [q]);

  return (
    <ul ref={navRef} className={s.nav}>
      {navigation.map(({ name, current, link }) => (
        <li key={name}>
          <HoverCursor cursorType="stuck" activeLink="navLinkCurrent">
            <a
              className={cn(s.navLink, { navLinkCurrent: current })}
              href={link}
            >
              {name}
            </a>
          </HoverCursor>
        </li>
      ))}
    </ul>
  );
};

export default TourNavigation;
