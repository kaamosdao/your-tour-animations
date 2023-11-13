'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';

import NavItem from './NavItem';

import s from './TourNavigation.module.scss';

const TourNavigation = ({ tours, activeNav, setActiveNav }) => {
  const navRef = useRef(null);

  const q = gsap.utils.selector(navRef);

  useEffect(() => {
    const links = q('li');

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: navRef.current,
          start: 'top bottom',
          end: '+=500',
          toggleActions: 'restart complete none reverse',
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

    return () => {
      tl.kill();
    };
  }, [q]);

  const onClick = (e) => {
    setActiveNav(e.target.name);
  };

  return (
    <ul ref={navRef} className={s.nav}>
      {tours?.map(({ data, uid }) => (
        <NavItem
          key={uid}
          onClick={onClick}
          activeNav={activeNav}
          name={data.name}
          id={uid}
        />
      ))}
    </ul>
  );
};

export default TourNavigation;
