'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import classnames from 'classnames/bind';

import { transitionState } from '@/utils/types';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './NavItem.module.scss';

const cn = classnames.bind(s);

const NavItem = ({ onClick, activeNav, name, id, transitionStatus }) => {
  const button = useRef(null);
  const line = useRef(null);

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
    if (id !== activeNav && transitionStatus === transitionState.exited) {
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
  }, [activeNav, id, transitionStatus]);

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
