'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { setCursor, setStuck } from '@/store/slices/cursorSlice';

import cursorState from '@/utils/types';

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

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseEnterSocials = (e) => {
    const link = e.currentTarget;
    const { left, top, width, height } = link.getBoundingClientRect();

    dispatch(setCursor(cursorState.stuck));

    dispatch(
      setStuck({
        left,
        top,
        width,
        height,
        borderRadius: '3px',
        padding: '4px',
      })
    );
  };

  const onMouseLeaveSocials = () => {
    dispatch(setCursor(cursorState.default));
    dispatch(setStuck(null));
  };

  const onMouseEnterCard = () => {
    setHovered(true);
    dispatch(setCursor(cursorState.default));
    dispatch(setCursor(cursorState.text));
  };

  const onMouseLeaveCard = () => {
    setHovered(false);
    setClicked(false);
    dispatch(setCursor(cursorState.default));
  };

  return (
    <li className={s.item}>
      <div className={s.socials}>
        {socials.map((social) => (
          <a
            className={s.socialLink}
            key={social}
            href="/"
            onMouseEnter={onMouseEnterSocials}
            onMouseLeave={onMouseLeaveSocials}
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
