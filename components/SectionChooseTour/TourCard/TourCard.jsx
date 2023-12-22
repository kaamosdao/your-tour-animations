'use client';

import { useState } from 'react';
import cn from 'classnames';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

import { CursorType } from '@/types';

import ButtonMore from '../../ButtonMore/index';
import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './TourCard.module.scss';

const components = {
  heading3: ({ children }) => <h3 className={s.title}>{children}</h3>,
  paragraph: ({ children }) => <p className={s.price}>{children}</p>,
};

const TourCard = ({ card, devicePixelRatio }) => {
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
      type={CursorType.Text}
      data="Подробнее"
      fnsOnEnter={[() => setHovered(true)]}
      fnsOnLeave={[() => setHovered(false), () => setClicked(false)]}
    >
      <PrismicNextLink
        field={card.link}
        className={s.tourCard}
        style={{
          backgroundImage: `linear-gradient(
            360deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.06) 48.44%,
            rgba(0, 0, 0, 0.5) 100%
          ),
          url(${devicePixelRatio === 1 ? card.image.url : card.image2x.url})`,
          backgroundRepeat: 'no-repeat',
        }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <PrismicRichText field={card.title} components={components} />
        <PrismicRichText field={card.price} components={components} />
        <div className={cn(s.button)}>
          <ButtonMore isHovered={hovered} isClicked={clicked} />
        </div>
      </PrismicNextLink>
    </HoverCursor>
  );
};

export default TourCard;
