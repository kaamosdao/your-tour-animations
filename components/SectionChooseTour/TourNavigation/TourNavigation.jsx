'use client';

import { useEffect, useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
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
          trigger: navRef?.current,
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
      <TransitionGroup component={null}>
        {tours?.map(({ data, uid }) => (
          <Transition
            key={`${uid}${uid === activeNav ? '-active' : ''}`}
            timeout={0}
            exit={false}
          >
            {(status) => (
              <NavItem
                onClick={onClick}
                activeNav={activeNav}
                name={data.name}
                id={uid}
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
