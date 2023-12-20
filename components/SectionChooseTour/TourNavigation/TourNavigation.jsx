'use client';

import { useRef } from 'react';

import { axisType } from '@/utils/types';

import { CustomScrollTrigger } from '@/components/Animation';
import NavItem from './NavItem';

import s from './TourNavigation.module.scss';

const TourNavigation = ({ tours, activeNav, setActiveNav }) => {
  const navRef = useRef(null);

  const onClick = (e) => {
    setActiveNav(e.target.name);
  };

  return (
    <ul ref={navRef} className={s.nav}>
      <CustomScrollTrigger
        shift="-105%"
        trigger={navRef}
        scrollTriggerOptions={{
          start: 'top bottom',
          end: '+=500',
          toggleActions: 'restart complete none reverse',
          invalidateOnRefresh: true,
        }}
        axis={axisType.vertical}
      >
        {tours?.map(({ data, uid }) => (
          <NavItem
            key={uid}
            onClick={onClick}
            activeNav={activeNav}
            name={data.name}
            id={uid}
          />
        ))}
      </CustomScrollTrigger>
    </ul>
  );
};

export default TourNavigation;
