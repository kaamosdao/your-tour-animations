import { useRef } from 'react';
import { gsap } from 'gsap';

import useCursorRef from '@/hooks/useCursorRef';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import Picture from '../Picture';

import s from './SectionContact.module.scss';

const SectionContact = () => {
  const cursor = useCursorRef();
  const cursorFollower = useCursorFollowerRef();

  const pulseAnimation = useRef();

  const onMouseEnter = () => {
    pulseAnimation.current = gsap.timeline().fromTo(
      [cursorFollower.current, cursor.current],
      {
        scale: 1.0,
      },
      {
        scale: 1.2,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.in',
      }
    );
  };

  const onMouseLeave = () => {
    pulseAnimation.current.kill();

    gsap.to([cursorFollower.current, cursor.current], {
      scale: 1,
      duration: 0.3,
      ease: 'power1.in',
    });
  };

  return (
    <section className={s.contact}>
      <h2 className={s.title}>
        Пора в путешествие
        <br />
        вместе с нами!
      </h2>
      <p className={s.text}>
        Напиши на почту и узнай подробности
        <br />
        на&nbsp;
        <a
          className={s.link}
          href="mailto:yourtour@gmail.com"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          yourtour@gmail.com
        </a>
      </p>
      <div className={s.picture}>
        <Picture
          desktopImg={{
            width: 370,
            height: 370,
            url: '/img/histories/icon-village-desktop-lg',
          }}
          tabletImg={{
            width: 370,
            height: 370,
            url: '/img/histories/icon-village-desktop-md',
          }}
          defaultImg={{
            width: 133,
            height: 130,
            url: '/img/histories/icon-village-mobile',
          }}
          alt="Деревня у озера в горах"
          format="png"
        />
      </div>
    </section>
  );
};

export default SectionContact;
