'use client';

/* eslint-disable no-console */
import { Component, createRef } from 'react';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { tours } from '@/data';
import { transitionState } from '@/utils/types';

import TourCard from '../TourCard/TourCard';

import s from './TourLinks.module.scss';

class TourLinks extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRender: props.isVisible };
    this.cardsRef = createRef();
    this.timeout = 500;
  }

  static getDerivedStateFromProps(props, state) {
    const { transitionStatus, isVisible } = props;
    console.log(
      'getDerivedStateFromProps',
      props.type,
      props.transitionStatus,
      state
    );

    if (transitionStatus === transitionState.exited) {
      return { shouldRender: !isVisible };
    }

    if (transitionStatus === transitionState.entering) {
      return { shouldRender: !isVisible };
    }

    return state;
  }

  componentDidMount() {
    const { type, transitionStatus } = this.props;
    console.log('componentDidMount', type, transitionStatus);
  }

  componentDidUpdate() {
    const { transitionStatus } = this.props;
    const { shouldRender } = this.state;

    if (transitionStatus === transitionState.entered && !shouldRender) {
      setTimeout(() => {
        this.setState({ shouldRender: true });
      }, this.timeout);
    }

    if (shouldRender) {
      if (transitionStatus === transitionState.entered) {
        this.handleEnter();
      }
    }
  }

  componentWillUnmount() {
    this.handleExit();
  }

  handleExit() {
    const q = gsap.utils.selector(this.cardsRef);
    const cards = q('a');
    const width = window.innerWidth;

    if (width < 800) {
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

    if (width >= 800 && width < 1400) {
      const leftCards = cards.filter((_, i) => !(i % 2));
      const rightCards = cards.filter((_, i) => i % 2);

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

    if (width >= 1400) {
      const topCards = cards.filter((_, i) => i < 3);
      const bottomCards = cards.filter((_, i) => i > 2);

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
  }

  handleEnter() {
    const q = gsap.utils.selector(this.cardsRef);
    const cards = q('a');
    const width = window.innerWidth;

    if (width < 800) {
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

    if (width >= 800 && width < 1400) {
      const leftCards = cards.filter((_, i) => !(i % 2));
      const rightCards = cards.filter((_, i) => i % 2);

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

    if (width >= 1400) {
      const topCards = cards.filter((_, i) => i < 3);
      const bottomCards = cards.filter((_, i) => i > 2);

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

  render() {
    const { type } = this.props;
    const { shouldRender } = this.state;
    console.log('render', type, shouldRender);
    return (
      shouldRender && (
        <ul ref={this.cardsRef} className={s.links}>
          {tours[type].map(({ name, title, price }) => (
            <li key={name} className={s.linksItem}>
              <TourCard name={name} title={title} price={price} />
            </li>
          ))}
        </ul>
      )
    );
  }
}

export default TourLinks;
