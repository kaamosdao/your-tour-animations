'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { tours } from '@/data';

import TourCard from '../TourCard/TourCard';

import s from './TourLinks.module.scss';
import { transitionState } from '@/utils/types';

const TourLinks = ({ type, transitionStatus, isVisible }) => {
  const cardsRef = useRef(null);
  const q = gsap.utils.selector(cardsRef);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`${type} ${transitionStatus} ${isVisible}`);
  }, [type, transitionStatus, isVisible]);

  useEffect(() => {
    const cards = q('a');
    const width = window.innerWidth;

    if (width < 800) {
      if (transitionStatus === transitionState.exited) {
        gsap.timeline().fromTo(
          cards,
          {
            x: 0,
          },
          {
            x: -2000,
            ease: 'power1.inOut',
            duration: 0.5,
            stagger: 0.1,
          }
        );
      }

      if (transitionStatus === transitionState.entered) {
        gsap.timeline().fromTo(
          cards,
          {
            x: 2000,
          },
          {
            x: 0,
            ease: 'power1.inOut',
            duration: 0.5,
            stagger: 0.1,
          }
        );
      }
      return;
    }

    if (width < 1400) {
      const leftCards = cards.filter((_, i) => !(i % 2));
      const rightCards = cards.filter((_, i) => i % 2);

      if (transitionStatus === transitionState.exited) {
        gsap
          .timeline()
          .fromTo(
            leftCards,
            {
              x: 0,
            },
            {
              x: -2000,
              ease: 'power1.inOut',
              duration: 0.5,
              stagger: 0.1,
            }
          )
          .fromTo(
            rightCards,
            {
              x: 0,
            },
            {
              x: 2000,
              ease: 'power1.inOut',
              duration: 0.5,
              stagger: 0.1,
            },
            0
          );
      }

      if (transitionStatus === transitionState.entered) {
        gsap
          .timeline()
          .fromTo(
            leftCards,
            {
              x: -2000,
            },
            {
              x: 0,
              ease: 'power1.inOut',
              duration: 0.5,
              stagger: 0.1,
            }
          )
          .fromTo(
            rightCards,
            {
              x: 2000,
            },
            {
              x: 0,
              ease: 'power1.inOut',
              duration: 0.5,
              stagger: 0.1,
            },
            0
          );
      }
      return;
    }

    if (width >= 1400) {
      const topCards = cards.filter((_, i) => i < 3);
      const bottomCards = cards.filter((_, i) => i > 2);

      if (transitionStatus === transitionState.exited) {
        gsap
          .timeline()
          .fromTo(
            topCards,
            {
              y: 0,
            },
            {
              y: -2000,
              ease: 'power1.inOut',
              duration: 0.5,
              stagger: 0.1,
            }
          )
          .fromTo(
            bottomCards,
            {
              y: 0,
            },
            {
              y: 2000,
              ease: 'power1.inOut',
              duration: 0.5,
              stagger: 0.1,
            },
            0
          );
      }

      if (transitionStatus === transitionState.entered) {
        gsap
          .timeline()
          .fromTo(
            topCards,
            {
              y: -2000,
            },
            {
              y: 0,
              ease: 'power1.inOut',
              duration: 0.5,
              stagger: 0.1,
            }
          )
          .fromTo(
            bottomCards,
            {
              y: 2000,
            },
            {
              y: 0,
              ease: 'power1.inOut',
              duration: 0.5,
              stagger: 0.1,
            },
            0
          );
      }
    }
  }, [q, transitionStatus]);

  // useEffect(() => {
  //   console.log(`${type}`, transitionStatus, isVisible);
  // }, [type, transitionStatus, isVisible]);

  // useEffect(() => {
  //   const cards = q('a');

  //   gsap.set(cards, { y: -700 });

  //   ScrollTrigger.batch(cards, {
  //     start: '30% bottom',
  //     onEnter: (batch) =>
  //       gsap.to(batch, {
  //         y: 0,
  //         ease: 'power3.out',
  //         duration: 0.4,
  //         stagger: 0.2,
  //       }),
  //     onLeaveBack: (batch) =>
  //       gsap.to(batch, {
  //         y: -700,
  //         ease: 'power3.out',
  //         duration: 0.4,
  //         stagger: 0.2,
  //       }),
  //   });

  //   // cards.forEach((card) => {
  //   //   gsap.fromTo(
  //   //     card,
  //   //     {
  //   //       y: -2000,
  //   //     },
  //   //     {
  //   //       y: 0,
  //   //       ease: 'power1.inOut',
  //   //       scrollTrigger: {
  //   //         trigger: card,
  //   //         start: 'top bottom',
  //   //         end: '20% center',
  //   //         scrub: true,
  //   //       },
  //   //     }
  //   //   );
  //   // });
  // }, [q]);

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
