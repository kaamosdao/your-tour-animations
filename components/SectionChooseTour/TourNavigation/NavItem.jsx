'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap/dist/gsap';
import classnames from 'classnames/bind';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './NavItem.module.scss';

const cn = classnames.bind(s);

const NavItem = ({ onClick, activeNav, name, id }) => {
  const button = useRef(null);
  const line = useRef(null);

  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    setIsActive(id === activeNav);
  }, [activeNav, id]);

  useEffect(() => {
    if (id === activeNav) {
      gsap
        .timeline()
        .fromTo(
          button.current,
          {
            color: gsap.getProperty('html', '--main-text-color'),
          },
          {
            color: gsap.getProperty('html', '--active-link-color'),
            duration: 0.5,
          }
        )
        .fromTo(
          line.current,
          {
            right: 200,
          },
          {
            right: 0,
            duration: 0.5,
          },
          0
        );
    }
    if (id !== activeNav && isActive) {
      gsap
        .timeline()
        .fromTo(
          button.current,
          {
            color: gsap.getProperty('html', '--active-link-color'),
          },
          {
            color: gsap.getProperty('html', '--main-text-color'),
            duration: 1.5,
          }
        )
        .fromTo(
          line.current,
          {
            right: 0,
          },
          {
            right: 200,
            duration: 0.5,
          },
          0
        );
    }
  }, [activeNav, id, isActive]);

  return (
    <li className={s.navItem} key={name}>
      <HoverCursor cursorType="stuck" activeLink="navLinkCurrent">
        <button
          ref={button}
          className={cn(s.navLink, {
            navLinkCurrent: id === activeNav,
          })}
          onClick={onClick}
          type="button"
          name={id}
        >
          {name}
        </button>
      </HoverCursor>
      <div ref={line} className={s.line} />
    </li>
  );
};

export default NavItem;
