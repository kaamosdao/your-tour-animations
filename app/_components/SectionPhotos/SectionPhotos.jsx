'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import cn from 'classnames';

import Picture from '../Picture';

import { pictures } from '@/data/index';
import horizontalLoop from '@/utils/horizontalLoop';
import getDeviceSize from '@/utils/getDeviceSize';
import { sizeType } from '@/utils/types';

import s from './SectionPhotos.module.scss';

const SectionPhotos = () => {
  const topCarousel = useRef();
  const midCarousel = useRef();
  const botCarousel = useRef();

  const topLoop = useRef();
  const midLoop = useRef();
  const botLoop = useRef();

  const [deviceSize, setDeviceSize] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);
  }, []);

  useEffect(() => {
    setDeviceSize(getDeviceSize(window.innerWidth));

    const onResize = () => {
      setDeviceSize(getDeviceSize(window.innerWidth));
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const top = gsap.utils.selector(topCarousel);
    const mid = gsap.utils.selector(midCarousel);
    const bot = gsap.utils.selector(botCarousel);

    const topPictures = gsap.utils.toArray(top('li'));
    const midPictures = gsap.utils.toArray(mid('li'));
    const botPictures = gsap.utils.toArray(bot('li'));

    if (deviceSize === sizeType.mobile) {
      gsap.set(topPictures, {
        x: (i) => i * (topCarousel.current.clientWidth / 2),
      });

      gsap.set(midPictures, {
        x: (i) => i * (midCarousel.current.clientWidth / 3),
      });

      gsap.set(botPictures, {
        x: (i) => i * (botCarousel.current.clientWidth / 2),
      });
    }

    if (deviceSize === sizeType.desktopMd) {
      gsap.set(topPictures, {
        x: (i) => i * (topCarousel.current.clientWidth / 3),
      });

      gsap.set(midPictures, {
        x: (i) => i * (midCarousel.current.clientWidth / 4),
      });

      gsap.set(botPictures, {
        x: (i) => i * (botCarousel.current.clientWidth / 3),
      });
    }

    if (deviceSize === sizeType.desktopLg) {
      gsap.set(topPictures, {
        x: (i) => i * (topCarousel.current.clientWidth / 4),
      });

      gsap.set(midPictures, {
        x: (i) => i * (midCarousel.current.clientWidth / 5),
      });

      gsap.set(botPictures, {
        x: (i) => i * (botCarousel.current.clientWidth / 4),
      });
    }

    topLoop.current = horizontalLoop(topPictures, {
      paused: false,
      draggable: true,
      reversed: true,
      repeat: -1,
      speed: 0.7,
    });

    midLoop.current = horizontalLoop(midPictures, {
      paused: false,
      draggable: true,
      repeat: -1,
      speed: 0.9,
    });

    botLoop.current = horizontalLoop(botPictures, {
      paused: false,
      draggable: true,
      reversed: true,
      repeat: -1,
      speed: 0.6,
    });
  }, [deviceSize]);

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
        <ul ref={midCarousel} className={s.mid}>
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
            .reverse()
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
        </ul>
      </div>
    </section>
  );
};

export default SectionPhotos;
