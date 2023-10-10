'use client';

import { useEffect, useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import gsap from 'gsap';

import { navigation } from '@/data';

import NavItem from './NavItem';

import s from './TourNavigation.module.scss';

const TourNavigation = ({ activeNav, setActiveNav }) => {
  const navRef = useRef(null);

  const q = gsap.utils.selector(navRef);

  useEffect(() => {
    const links = q('li');

    gsap
      .timeline({
        scrollTrigger: {
          trigger: navRef?.current,
          start: 'top bottom',
          end: '+=400',
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
  }, [q]);

  const onClick = (e) => {
    setActiveNav(e.target.name);
  };

  return (
    <ul ref={navRef} className={s.nav}>
      <TransitionGroup component={null}>
        {navigation.map(({ name, id }) => (
          <Transition
            key={`${name}${id === activeNav ? '-active' : ''}`}
            timeout={0}
            exit={false}
          >
            {(status) => (
              <NavItem
                onClick={onClick}
                activeNav={activeNav}
                name={name}
                id={id}
                transitionStatus={status}
              />
            )}
          </Transition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default TourNavigation;
