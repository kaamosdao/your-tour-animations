'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ButtonMore from '../../ButtonMore';
import HoverCursor from '../../CustomCursor/HoverCursor';

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
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  return (
    <li className={s.item}>
      <div className={s.socials}>
        {socials.map((social) => (
          <HoverCursor key={social} cursorType="stuck">
            <a className={s.socialLink} href="/">
              {social}
            </a>
          </HoverCursor>
        ))}
      </div>
      <HoverCursor
        cursorType="text"
        data="Подробнее"
        fnsOnEnter={[() => setHovered(true)]}
        fnsOnLeave={[() => setHovered(false), () => setClicked(false)]}
      >
        <a
          className={cn(s.historyCard, s[name])}
          href="/"
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
      </HoverCursor>
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
