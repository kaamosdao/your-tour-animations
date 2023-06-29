import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './TourCard.module.scss';

const TourCard = ({ name, title, price }) => (
  <a className={cn(s.tourCard, s[name])} href="/tour">
    <h3 className={s.title}>{title}</h3>
    <p className={s.price}>{price}</p>
    <p className={cn(s.button, 'button-more')}>Подробнее</p>
  </a>
);

TourCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default TourCard;
