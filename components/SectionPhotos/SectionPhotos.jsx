'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap/dist/gsap';
import { Draggable } from 'gsap/dist/Draggable';
import cn from 'classnames';

import Picture from './Picture';

import { pictures } from '@/data/index';
import HorizontalLoop from '@/utils/HorizontalLoop';
import getDeviceSize from '@/utils/getDeviceSize';
import { sizeType } from '@/utils/types';

import s from './SectionPhotos.module.scss';

const SectionPhotos = () => {
  const topCarousel = useRef(null);
  const midCarousel = useRef(null);
  const botCarousel = useRef(null);

  const topLoop = useRef(null);
  const midLoop = useRef(null);
  const botLoop = useRef(null);

  const [deviceSize, setDeviceSize] = useState(null);
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(Draggable);
  }, []);

  useEffect(() => {
    setDeviceSize(getDeviceSize(window.innerWidth));
    setDevicePixelRatio(window.devicePixelRatio);
  }, []);

  useEffect(() => {
    const resize = () => {
      const newSize = getDeviceSize(window.innerWidth);
      if (newSize !== deviceSize) {
        setDeviceSize(newSize);
      }
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, [deviceSize]);

  useEffect(() => {
    const top = gsap.utils.selector(topCarousel);
    const mid = gsap.utils.selector(midCarousel);
    const bot = gsap.utils.selector(botCarousel);

    const topPictures = gsap.utils.toArray(top('li'));
    const midPictures = gsap.utils.toArray(mid('li'));
    const botPictures = gsap.utils.toArray(bot('li'));

    if (deviceSize === sizeType.mobile) {
      gsap.set(topPictures, {
        x: (i) => i * topPictures[0].clientWidth + (i + 1) * 18,
      });

      gsap.set(midPictures, {
        x: (i) => i * midPictures[0].clientWidth + (i + 1) * 18,
      });

      gsap.set(botPictures, {
        x: (i) => i * botPictures[0].clientWidth + (i + 1) * 18,
      });
    }

    if (deviceSize === sizeType.tabletMd) {
      gsap.set(topPictures, {
        x: (i) => i * topPictures[0].clientWidth + (i + 1) * 20,
      });

      gsap.set(midPictures, {
        x: (i) => i * midPictures[0].clientWidth + (i + 1) * 20,
      });

      gsap.set(botPictures, {
        x: (i) => i * botPictures[0].clientWidth + (i + 1) * 20,
      });
    }

    if (deviceSize === sizeType.desktopLg) {
      gsap.set(topPictures, {
        x: (i) => i * topPictures[0].clientWidth + (i + 1) * 30,
      });

      gsap.set(midPictures, {
        x: (i) => i * midPictures[0].clientWidth + (i + 1) * 30,
      });

      gsap.set(botPictures, {
        x: (i) => i * botPictures[0].clientWidth + (i + 1) * 30,
      });
    }

    if (deviceSize) {
      topLoop.current = new HorizontalLoop(topPictures, {
        paused: false,
        reversed: true,
        repeat: -1,
        speed: 0.7,
      });

      midLoop.current = new HorizontalLoop(midPictures, {
        paused: false,
        repeat: -1,
        speed: 0.9,
      });

      botLoop.current = new HorizontalLoop(botPictures, {
        paused: false,
        reversed: true,
        repeat: -1,
        speed: 0.6,
      });
    }

    return () => {
      topLoop.current?.reset();
      midLoop.current?.reset();
      botLoop.current?.reset();
    };
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
            .filter(
              ({ position, variants }) =>
                position.includes('top') && variants[deviceSize]
            )
            .map(({ name, variants, alt, format }) => (
              <li key={name} className={cn(s.item, s[name])}>
                <Picture
                  img={variants[deviceSize]}
                  devicePixelRatio={devicePixelRatio}
                  alt={alt}
                  format={format}
                />
              </li>
            ))}
        </ul>
        <ul ref={midCarousel} className={s.mid}>
          {pictures
            .filter(
              ({ position, variants }) =>
                position.includes('mid') && variants[deviceSize]
            )
            .map(({ name, variants, alt, format }) => (
              <li key={name} className={cn(s.item, s[name])}>
                <Picture
                  img={variants[deviceSize]}
                  devicePixelRatio={devicePixelRatio}
                  alt={alt}
                  format={format}
                />
              </li>
            ))}
        </ul>
        <ul ref={botCarousel} className={s.bot}>
          {pictures
            .reverse()
            .filter(
              ({ position, variants }) =>
                position.includes('bot') && variants[deviceSize]
            )
            .map(({ name, variants, alt, format }) => (
              <li key={name} className={cn(s.item, s[name])}>
                <Picture
                  img={variants[deviceSize]}
                  devicePixelRatio={devicePixelRatio}
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
