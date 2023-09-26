'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import cn from 'classnames';

import Picture from '../Picture';

import { pictures } from '@/data/index';
import horizontalLoop from '@/utils/horizontalLoop';

import s from './SectionPhotos.module.scss';

const SectionPhotos = () => {
  const topCarousel = useRef();
  // const midCarousel = useRef();
  // const botCarousel = useRef();
  const loop = useRef();

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    const top = gsap.utils.selector(topCarousel);
    const topPictures = gsap.utils.toArray(top('li'));

    gsap.set(topPictures, {
      x: (i) => i * (topCarousel.current.clientWidth / 4),
    });

    loop.current = horizontalLoop(topPictures, {
      paused: false,
      draggable: true,
      repeat: -1,
    });
  });

  return (
    <section className={s.photos}>
      <h2 className={s.title}>Фотографии путешествий</h2>
      <p className={s.description}>
        Идейные соображения высшего порядка, а&nbsp;
        <br />
        также рамки и место обучения кадров
      </p>
      <div className={s.list}>
        <ul ref={topCarousel} className={s.top}>
          {pictures
            .filter(({ position }) => position.includes('top'))
            .map(({ name, desktopImg, tabletImg, defaultImg, alt, format }) => (
              <li key={name} className={cn(s.item, s[name])}>
                <Picture
                  desktopImg={desktopImg}
                  tabletImg={tabletImg}
                  defaultImg={defaultImg}
                  alt={alt}
                  format={format}
                />
              </li>
            ))}
        </ul>
        {/* <ul ref={midCarousel} className={s.mid}>
          {pictures
            .filter(({ position }) => position.includes('mid'))
            .map(({ name, desktopImg, tabletImg, defaultImg, alt, format }) => (
              <li key={name} className={cn(s.item, s[name])}>
                <Picture
                  desktopImg={desktopImg}
                  tabletImg={tabletImg}
                  defaultImg={defaultImg}
                  alt={alt}
                  format={format}
                />
              </li>
            ))}
        </ul>
        <ul ref={botCarousel} className={s.bot}>
          {pictures
            .filter(({ position }) => position.includes('bot'))
            .map(({ name, desktopImg, tabletImg, defaultImg, alt, format }) => (
              <li key={name} className={cn(s.item, s[name])}>
                <Picture
                  desktopImg={desktopImg}
                  tabletImg={tabletImg}
                  defaultImg={defaultImg}
                  alt={alt}
                  format={format}
                />
              </li>
            ))}
        </ul> */}
      </div>
    </section>
  );
};

export default SectionPhotos;
