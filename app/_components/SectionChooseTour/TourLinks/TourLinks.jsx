'use client';

import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { tours } from '@/data';

import TourCard from '../TourCard/TourCard';

import s from './TourLinks.module.scss';

const TourLinks = ({ type, isVisible }) => {
  const cardsRef = useRef(null);
  const q = gsap.utils.selector(cardsRef);

  const handleExit = useCallback(() => {
    const cards = q('a');
    const width = window.innerWidth;
    const tl = gsap.timeline();

    if (width < 800) {
      return tl.to(cards, {
        x: -2000,
        ease: 'power1.inOut',
        duration: 0.5,
        stagger: 0.1,
      });
    }

    if (width >= 800 && width < 1400) {
      const leftCards = cards.filter((_, i) => !(i % 2));
      const rightCards = cards.filter((_, i) => i % 2);

      return tl
        .to(leftCards, {
          x: -2000,
          ease: 'power1.inOut',
          duration: 0.5,
          stagger: 0.1,
        })
        .to(
          rightCards,
          {
            x: 2000,
            ease: 'power1.inOut',
            duration: 0.5,
            stagger: 0.1,
          },
          0
        );
    }

    const topCards = cards.filter((_, i) => i < 3);
    const bottomCards = cards.filter((_, i) => i > 2);

    return tl
      .to(topCards, {
        y: -2000,
        ease: 'power1.inOut',
        duration: 0.5,
        stagger: 0.1,
      })
      .to(
        bottomCards,
        {
          y: 2000,
          ease: 'power1.inOut',
          duration: 0.5,
          stagger: 0.1,
        },
        0
      );
  }, [q]);

  const handleEnter = useCallback(() => {
    const cards = q('a');
    const width = window.innerWidth;
    const tl = gsap.timeline();

    if (width < 800) {
      return tl.to(cards, {
        x: 0,
        ease: 'power1.inOut',
        duration: 0.5,
        stagger: 0.1,
      });
    }

    if (width >= 800 && width < 1400) {
      const leftCards = cards.filter((_, i) => !(i % 2));
      const rightCards = cards.filter((_, i) => i % 2);

      return tl
        .to(leftCards, {
          x: 0,
          ease: 'power1.inOut',
          duration: 0.5,
          stagger: 0.1,
        })
        .to(
          rightCards,
          {
            x: 0,
            ease: 'power1.inOut',
            duration: 0.5,
            stagger: 0.1,
          },
          0
        );
    }

    const topCards = cards.filter((_, i) => i < 3);
    const bottomCards = cards.filter((_, i) => i > 2);

    return tl
      .to(topCards, {
        y: 0,
        ease: 'power1.inOut',
        duration: 0.5,
        stagger: 0.1,
      })
      .to(
        bottomCards,
        {
          y: 0,
          ease: 'power1.inOut',
          duration: 0.5,
          stagger: 0.1,
        },
        0
      );
  }, [q]);

  useEffect(() => {
    let animation;

    if (isVisible) {
      animation = handleEnter();
    }
    if (!isVisible) {
      animation = handleExit();
    }

    return () => {
      animation?.kill();
    };
  }, [handleEnter, handleExit, isVisible]);

  return (
    <ul ref={cardsRef} className={s.links}>
      {tours[type].map(({ name, title, price }) => (
        <li key={name} className={s.linksItem}>
          <TourCard name={name} title={title} price={price} />
        </li>
      ))}
    </ul>
  );
};

export default TourLinks;
