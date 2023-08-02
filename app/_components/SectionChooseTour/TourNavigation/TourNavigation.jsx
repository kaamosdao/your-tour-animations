'use client';

import classnames from 'classnames/bind';

import { navigation } from '@/data';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './TourNavigation.module.scss';

const cn = classnames.bind(s);

const TourNavigation = () => (
  <ul className={s.nav}>
    {navigation.map(({ name, current, link }) => (
      <li key={name} className={s.navItem}>
        <HoverCursor cursorType="stuck" activeLink="navLinkCurrent">
          <a className={cn(s.navLink, { navLinkCurrent: current })} href={link}>
            {name}
          </a>
        </HoverCursor>
      </li>
    ))}
  </ul>
);

export default TourNavigation;
