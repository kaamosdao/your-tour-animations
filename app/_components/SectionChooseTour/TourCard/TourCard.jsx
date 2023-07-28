'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { setCursor } from '@/store/slices/cursorSlice';

import cursorState from '@/utils/types';

import ButtonMore from '../../ButtonMore/index';

import s from './TourCard.module.scss';

const TourCard = ({ name, title, price }) => {
  const dispatch = useDispatch();

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseEnter = () => {
    setHovered(true);
    dispatch(setCursor(cursorState.text));
  };

  const onMouseLeave = () => {
    setHovered(false);
    setClicked(false);
    dispatch(setCursor(cursorState.default));
  };

  return (
    <a
      className={cn(s.tourCard, s[name])}
      href="/tour"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <h3 className={s.title}>{title}</h3>
      <p className={s.price}>{price}</p>
      <div className={cn(s.button)}>
        <ButtonMore isHovered={hovered} isClicked={clicked} />
      </div>
    </a>
  );
};

TourCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default TourCard;
