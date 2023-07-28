'use client';

import { useDispatch } from 'react-redux';
import classnames from 'classnames/bind';

import { setCursor, setStuck } from '@/store/slices/cursorSlice';

import { navigation } from '@/data';
import cursorState from '@/utils/types';

import s from './TourNavigation.module.scss';

const cn = classnames.bind(s);

const TourNavigation = () => {
  const dispatch = useDispatch();

  const onMouseEnter = (e) => {
    const link = e.currentTarget;
    const { left, top, width, height } = link.getBoundingClientRect();

    if (!link.className.includes('navLinkCurrent')) {
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

  return (
    <ul className={s.nav}>
      {navigation.map(({ name, current, link }) => (
        <li key={name} className={s.navItem}>
          <a
            className={cn(s.navLink, { navLinkCurrent: current })}
            href={link}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TourNavigation;
