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

  const getTrigger = () => navRef.current;

  return (
    <ul ref={navRef} className={s.nav}>
      <CustomScrollTrigger
        shift="-105%"
        getTrigger={getTrigger}
        scrollTriggerOptions={{
          start: 'top bottom',
          end: '+=500',
          toggleActions: 'restart complete none reverse',
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
