'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ButtonMore from '../../ButtonMore/index';
import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './TourCard.module.scss';

const TourCard = ({ name, title, price }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  return (
    <HoverCursor
      cursorType="text"
      data="Подробнее"
      fnsOnEnter={[() => setHovered(true)]}
      fnsOnLeave={[() => setHovered(false), () => setClicked(false)]}
    >
      <a
        className={cn(s.tourCard, s[name])}
        href="/tour"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <h3 className={s.title}>{title}</h3>
        <p className={s.price}>{price}</p>
        <div className={cn(s.button)}>
          <ButtonMore isHovered={hovered} isClicked={clicked} />
        </div>
      </a>
    </HoverCursor>
  );
};

TourCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default TourCard;
