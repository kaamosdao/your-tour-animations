'use client';

import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';
import { useSwipeable } from 'react-swipeable';
import { clamp } from 'three/src/math/MathUtils';

import Scene from '@/utils/Scene';
import getLoopedNumber from '@/utils/getLoopedNumber';
import { histories } from '@/data';
import { sliderEvent } from '@/utils/types';

import CardList from './CardList';
import ButtonMore from '../../ButtonMore';
import HoverCursor from '../../CustomCursor/HoverCursor';

import Left from '@/public/img/svg-icons/arrow-left.svg';
import Right from '@/public/img/svg-icons/arrow-right.svg';

import s from './HistorySlider.module.scss';

const HistorySlider = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [slide, setSlide] = useState({
    number: 0,
    directionSign: 1,
    event: sliderEvent.click,
  });

  const canvas = useRef(null);
  const canvasHolder = useRef(null);
  const scene = useRef(null);

  const handlers = useSwipeable({
    onSwipeStart: ({ dir }) => {
      const directionSign = dir === 'Right' ? 1 : -1;

      scene.current.onSwipeStart(
        directionSign,
        getLoopedNumber(slide.number + directionSign, histories.length)
      );
    },
    onSwiping: ({ absX }) => {
      scene.current.onSwiping(absX);
    },
    onSwiped: ({ dir, absX }) => {
      const normalizedCoeff = 2.35 / scene.current.width;
      const distance = clamp(absX * normalizedCoeff, 0, 1);
      const directionSign = dir === 'Right' ? 1 : -1;

      if (distance > 0.5) {
        setSlide({
          number: getLoopedNumber(
            slide.number + directionSign,
            histories.length
          ),
          directionSign,
          event: sliderEvent.swipe,
        });
      } else {
        scene.current.onSwiped();
      }
    },
    trackMouse: true,
  });

  useEffect(() => {
    const q = gsap.utils.selector(canvasHolder);

    const title = q('h3[class*="historyCardTitle"]');
    const text = q('p[class*="historyCardText"]');
    const list = q('ul[class*="historyCardList"]');
    const socials = q('a[class*="socialLink"]');

    gsap
      .timeline()
      .fromTo(
        [title, text, list],
        {
          x: 1000,
        },
        {
          x: 0,
          ease: 'back.out(1.0)',
          duration: 1,
          stagger: 0.1,
        }
      )
      .fromTo(
        socials,
        { y: -1000 },
        { y: 0, ease: 'elastic.out(1.0, 1.0)', stagger: 0.1, duration: 1 },
        '<'
      );

    const { number, directionSign, event } = slide;

    if (event === sliderEvent.click) {
      scene.current?.moveSlide(number, directionSign);
    } else {
      scene.current.onSwiped(slide.number);
    }
  }, [slide]);

  useEffect(() => {
    scene.current?.scale(hovered ? 1.2 : 1.0);
  }, [hovered]);

  useEffect(() => {
    scene.current = new Scene(canvas.current, canvasHolder.current);

    const resize = () => scene.current.resize();
    window.addEventListener('resize', resize.bind(scene.current));

    const onUnmount = () => {
      window.removeEventListener('resize', resize);
      scene.current.dismiss();
    };

    return onUnmount;
  }, []);

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onRightClick = () => {
    setSlide({
      number: getLoopedNumber(slide.number + 1, histories.length),
      directionSign: 1,
      event: sliderEvent.click,
    });
  };

  const onLeftClick = () => {
    setSlide({
      number: getLoopedNumber(slide.number - 1, histories.length),
      directionSign: -1,
      event: sliderEvent.click,
    });
  };

  return (
    <>
      <div ref={canvasHolder} className={s.item}>
        <HoverCursor
          cursorType="text"
          data="Подробнее"
          fnsOnEnter={[() => setHovered(true)]}
          fnsOnLeave={[() => setHovered(false), () => setClicked(false)]}
        >
          <div {...handlers}>
            <canvas
              ref={canvas}
              className={s.canvas}
              href="/"
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
            />
          </div>
        </HoverCursor>
        <h3 className={s.historyCardTitle}>{histories[slide.number].title}</h3>
        <p className={s.historyCardText}>{histories[slide.number].text}</p>
        {histories[slide.number].list && (
          <CardList items={histories[slide.number].list} />
        )}
        <footer className={s.historyCardFooter}>
          <div className={cn(s.historyCardButton)}>
            <ButtonMore isHovered={hovered} isClicked={clicked} />
          </div>
        </footer>
        <div className={s.socials}>
          {histories[slide.number].socials.map((social) => (
            <HoverCursor key={social} cursorType="stuck">
              <a className={s.socialLink} href="/">
                {social}
              </a>
            </HoverCursor>
          ))}
        </div>
      </div>
      <div className={s.controls}>
        <HoverCursor cursorType="pulse">
          <button onClick={onLeftClick} type="button" className={s.button}>
            <Left type="button" className={s.arrow} />
          </button>
        </HoverCursor>
        <HoverCursor cursorType="pulse">
          <button onClick={onRightClick} type="button" className={s.button}>
            <Right type="button" className={s.arrow} />
          </button>
        </HoverCursor>
      </div>
    </>
  );
};

export default HistorySlider;
