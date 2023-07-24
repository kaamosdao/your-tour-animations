'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { gsap } from 'gsap';

import { setStuck } from '@/store/slices/cursorSlice';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import ButtonMore from '../../ButtonMore/index';

import s from './HistoryCard.module.scss';

const List = ({ items }) => (
  <ul className={s.historyCardList}>
    {items.map((name) => (
      <li className={s.historyCardItem} key={name}>
        {name}
      </li>
    ))}
  </ul>
);

const HistoryCard = ({ title, name, text, list, socials }) => {
  const dispatch = useDispatch();

  const cursorFollower = useCursorFollowerRef();

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseEnter = (e) => {
    const link = e.currentTarget;
    const linkBox = link.getBoundingClientRect();
    const cursorCircle = cursorFollower.current.querySelector('#circle');

    dispatch(setStuck(true));

    gsap.to(cursorCircle, {
      width: linkBox.width,
      height: linkBox.height,
      borderRadius: '3px',
      padding: '4px',
      duration: 0.5,
    });
  };

  const onMouseLeave = () => {
    const cursorCircle = cursorFollower.current.querySelector('#circle');

    dispatch(setStuck(false));

    gsap.to(cursorCircle, {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      padding: '0',
      duration: 0.5,
    });
  };

  const onMouseEnterCard = () => {
    setHovered(true);

    const cursorText = cursorFollower.current.querySelector('#text');
    const cursorCircle = cursorFollower.current.querySelector('#circle');

    gsap.to(cursorFollower.current, {
      mixBlendMode: 'normal',
      duration: 0.0,
    });

    gsap.to(cursorText, {
      color: 'var(--third-text-color)',
      text: 'Подробнее',
      opacity: 1,
      duration: 0.5,
      ease: 'sine.in',
    });

    gsap.to(cursorCircle, {
      scale: 0,
      duration: 0.3,
    });
  };

  const onMouseLeaveCard = () => {
    setHovered(false);
    setClicked(false);

    const cursorText = cursorFollower.current.querySelector('#text');
    const cursorCircle = cursorFollower.current.querySelector('#circle');

    gsap.to(cursorFollower.current, {
      mixBlendMode: 'difference',
      duration: 0.0,
    });

    gsap.to(cursorText, {
      text: '',
      opacity: 0,
      duration: 0.5,
      ease: 'sine.in',
    });

    gsap.to(cursorCircle, {
      scale: 1,
      duration: 0.3,
    });
  };

  return (
    <li className={s.item}>
      <div className={s.socials}>
        {socials.map((social) => (
          <a
            className={s.socialLink}
            key={social}
            href="/"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {social}
          </a>
        ))}
      </div>
      <a
        className={cn(s.historyCard, s[name])}
        href="/"
        onMouseEnter={onMouseEnterCard}
        onMouseLeave={onMouseLeaveCard}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <h3 className={s.historyCardTitle}>{title}</h3>
        <p className={s.historyCardText}>{text}</p>
        {list && <List items={list} />}
        <footer className={s.historyCardFooter}>
          <div className={cn(s.historyCardButton)}>
            <ButtonMore isHovered={hovered} isClicked={clicked} />
          </div>
        </footer>
      </a>
    </li>
  );
};

HistoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  socials: PropTypes.arrayOf(PropTypes.string).isRequired,
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HistoryCard;
