import { useRef } from 'react';
import { gsap } from 'gsap';

import useCursorRef from '@/hooks/useCursorRef';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

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
      <picture className={s.picture}>
        <source
          type="image/webp"
          media="(min-width: 1920px)"
          srcSet="
            /img/histories/icon-village-desktop-lg.webp    1x,
            /img/histories/icon-village-desktop-lg@2x.webp 2x
          "
          width="370"
          height="370"
        />
        <source
          type="image/webp"
          media="(min-width: 500px)"
          srcSet="
            /img/histories/icon-village-desktop-md.webp    1x,
            /img/histories/icon-village-desktop-md@2x.webp 2x
          "
          width="370"
          height="370"
        />
        <source
          type="image/webp"
          srcSet="
            /img/histories/icon-village-mobile.webp    1x,
            /img/histories/icon-village-mobile@2x.webp 2x
          "
          width="133"
          height="130"
        />
        <source
          media="(min-width: 1920px)"
          srcSet="
            /img/histories/icon-village-desktop-lg.png    1x,
            /img/histories/icon-village-desktop-lg@2x.png 2x
          "
          width="370"
          height="370"
        />
        <source
          media="(min-width: 500px)"
          srcSet="
            /img/histories/icon-village-desktop-md.png    1x,
            /img/histories/icon-village-desktop-md@2x.png 2x
          "
          width="370"
          height="370"
        />
        <img
          src="/img/histories/icon-village-mobile.png"
          srcSet="/img/histories/icon-village-mobile@2x.png 2x"
          alt="Самолет в небе"
          width="133"
          height="130"
          loading="lazy"
        />
      </picture>
    </section>
  );
};

export default SectionContact;
