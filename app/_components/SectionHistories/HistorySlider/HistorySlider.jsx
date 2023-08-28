'use client';

import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';

import Scene from '@/utils/Scene';
import getLoopedNumber from '@/utils/getLoopedNumber';
import { histories } from '@/data';

import CardList from './CardList';
import ButtonMore from '../../ButtonMore';
import HoverCursor from '../../CustomCursor/HoverCursor';

import Left from '@/public/img/svg-icons/arrow-left.svg';
import Right from '@/public/img/svg-icons/arrow-right.svg';

import s from './HistorySlider.module.scss';

const HistorySlider = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [number, setNumber] = useState(0);

  const canvas = useRef(null);
  const canvasHolder = useRef(null);
  const scene = useRef(null);

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

    scene.current?.moveSlide(number);
  }, [number]);

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
    setNumber(getLoopedNumber(number + 1, histories.length));
  };

  const onLeftClick = () => {
    setNumber(getLoopedNumber(number - 1, histories.length));
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
          <canvas
            ref={canvas}
            className={s.canvas}
            href="/"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          />
        </HoverCursor>
        <h3 className={s.historyCardTitle}>{histories[number].title}</h3>
        <p className={s.historyCardText}>{histories[number].text}</p>
        {histories[number].list && <CardList items={histories[number].list} />}
        <footer className={s.historyCardFooter}>
          <div className={cn(s.historyCardButton)}>
            <ButtonMore isHovered={hovered} isClicked={clicked} />
          </div>
        </footer>
        <div className={s.socials}>
          {histories[number].socials.map((social) => (
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
