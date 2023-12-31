'use client';

/* eslint-disable react/no-array-index-key */

import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';

import { useTransition, useDevicePixelRatio } from '@/hooks';

import TourCard from '../TourCard/TourCard';

import s from './TourLinks.module.scss';

const TourLinks = ({ cards }) => {
  const cardsRef = useRef(null);
  const q = gsap.utils.selector(cardsRef);
  const isVisible = useTransition();

  const devicePixelRatio = useDevicePixelRatio();

  const handleExit = useCallback(() => {
    const cardItems = q('a');
    const width = window.innerWidth;
    const tl = gsap.timeline();

    const shift = '105%';

    if (width < 800) {
      return tl.to(cardItems, {
        x: `-${shift}`,
        ease: 'power1.inOut',
        duration: 0.5,
        stagger: 0.1,
      });
    }

    if (width >= 800 && width < 1400) {
      const leftCards = cardItems.filter((_, i) => !(i % 2));
      const rightCards = cardItems.filter((_, i) => i % 2);

      return tl
        .to(leftCards, {
          x: `-${shift}`,
          ease: 'power1.inOut',
          duration: 0.5,
          stagger: 0.1,
        })
        .to(
          rightCards,
          {
            x: shift,
            ease: 'power1.inOut',
            duration: 0.5,
            stagger: 0.1,
          },
          0
        );
    }

    const topCards = cardItems.filter((_, i) => i < 3);
    const bottomCards = cardItems.filter((_, i) => i > 2);

    return tl
      .to(topCards, {
        y: `-${shift}`,
        ease: 'power1.inOut',
        duration: 0.5,
        stagger: 0.1,
      })
      .to(
        bottomCards,
        {
          y: shift,
          ease: 'power1.inOut',
          duration: 0.5,
          stagger: 0.1,
        },
        0
      );
  }, [q]);

  const handleEnter = useCallback(() => {
    const cardItems = q('a');
    const width = window.innerWidth;
    const tl = gsap.timeline();

    const shift = 0;

    if (width < 800) {
      return tl.to(cardItems, {
        x: shift,
        ease: 'power1.inOut',
        duration: 0.5,
        stagger: 0.1,
      });
    }

    if (width >= 800 && width < 1400) {
      const leftCards = cardItems.filter((_, i) => !(i % 2));
      const rightCards = cardItems.filter((_, i) => i % 2);

      return tl
        .to(leftCards, {
          x: shift,
          ease: 'power1.inOut',
          duration: 0.5,
          stagger: 0.1,
        })
        .to(
          rightCards,
          {
            x: shift,
            ease: 'power1.inOut',
            duration: 0.5,
            stagger: 0.1,
          },
          0
        );
    }

    const topCards = cardItems.filter((_, i) => i < 3);
    const bottomCards = cardItems.filter((_, i) => i > 2);

    return tl
      .to(topCards, {
        y: shift,
        ease: 'power1.inOut',
        duration: 0.5,
        stagger: 0.1,
      })
      .to(
        bottomCards,
        {
          y: shift,
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
    } else {
      animation = handleExit();
    }

    return () => {
      animation?.kill();
    };
  }, [handleEnter, handleExit, isVisible]);

  return (
    <ul ref={cardsRef} className={s.links}>
      {cards?.map((card, i) => (
        <li key={i} className={s.linksItem}>
          <TourCard card={card} devicePixelRatio={devicePixelRatio} />
        </li>
      ))}
    </ul>
  );
};

export default TourLinks;
