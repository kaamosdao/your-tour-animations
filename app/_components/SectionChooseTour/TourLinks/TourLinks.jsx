'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { tours } from '@/data';

import TourCard from '../TourCard/TourCard';

import s from './TourLinks.module.scss';

const TourLinks = () => {
  const cardsRef = useRef(null);
  const q = gsap.utils.selector(cardsRef);

  useEffect(() => {
    const cards = q('a');

    // gsap.set(cards, {y: -700});

    // ScrollTrigger.batch(cards, {
    //   start: "30% bottom",
    //   onEnter: (batch) =>
    //     gsap.to(
    //       batch,
    //       {
    //         y: 0,
    //         ease: 'power3.out',
    //         duration: 0.4,
    //         stagger: 0.2,
    //       }
    //     ),
    //   onLeaveBack: (batch) =>
    //     gsap.to(
    //       batch,
    //       {
    //         y: -700,
    //         ease: 'power3.out',
    //         duration: 0.4,
    //         stagger: 0.2,
    //       }
    //     ),
    // });

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: -1000,
        },
        {
          y: 0,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: '20% center',
            scrub: true,
          },
        }
      );
    });
  }, [q]);

  return (
    <ul ref={cardsRef} className={s.links}>
      {tours.map(({ name, title, price }) => (
        <li key={name} className={s.linksItem}>
          <TourCard name={name} title={title} price={price} />
        </li>
      ))}
    </ul>
  );
};

export default TourLinks;
