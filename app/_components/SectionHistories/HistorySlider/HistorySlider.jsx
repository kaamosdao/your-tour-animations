'use client';

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ButtonMore from '../../ButtonMore';
import HoverCursor from '../../CustomCursor/HoverCursor';

import Left from '@/public/img/svg-icons/arrow-left.svg';
import Right from '@/public/img/svg-icons/arrow-right.svg';

import { histories } from '@/data';

import s from './HistorySlider.module.scss';
import Scene from '@/utils/Scene';

const List = ({ items }) => (
  <ul className={s.historyCardList}>
    {items.map((name) => (
      <li className={s.historyCardItem} key={name}>
        {name}
      </li>
    ))}
  </ul>
);

const HistorySlider = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [number, setNumber] = useState(0);

  const canvas = useRef(null);
  const canvasHolder = useRef(null);
  const scene = useRef(null);

  useEffect(() => {
    scene.current?.moveSlide(number);
  }, [number]);

  useEffect(() => {
    scene.current = new Scene(canvas.current, canvasHolder.current);

    scene.current.addResize();

    return scene.current.removeResize();
  }, []);

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onRightClick = () => {
    setNumber(number + 1 > histories.length - 1 ? 0 : number + 1);
  };

  const onLeftClick = () => {
    setNumber(number - 1 < 0 ? histories.length - 1 : number - 1);
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
        {histories[number].list && <List items={histories[number].list} />}
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

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HistorySlider;
