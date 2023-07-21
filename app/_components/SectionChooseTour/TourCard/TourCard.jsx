import PropTypes from 'prop-types';
import cn from 'classnames';
import { gsap } from 'gsap';

import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import s from './TourCard.module.scss';

const TourCard = ({ name, title, price }) => {
  const cursorFollower = useCursorFollowerRef();

  const onMouseEnter = () => {
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

  const onMouseLeave = () => {
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
    <a
      className={cn(s.tourCard, s[name])}
      href="/tour"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h3 className={s.title}>{title}</h3>
      <p className={s.price}>{price}</p>
      <p className={cn(s.button, 'button-more')}>Подробнее</p>
    </a>
  );
};

TourCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default TourCard;
