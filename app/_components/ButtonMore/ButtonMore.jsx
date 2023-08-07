import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import ArrowIcon from '@/public/img/svg-icons/arrow.svg';

import s from './ButtonMore.module.scss';

const cn = classnames.bind(s);

const ButtonMore = ({ isHovered, isClicked }) => (
  <p
    className={cn(s.button, {
      hovered: isHovered,
      clicked: isClicked,
    })}
  >
    <ArrowIcon className={s.arrow} />
    Подробнее
  </p>
);

ButtonMore.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  isClicked: PropTypes.bool.isRequired,
};

export default ButtonMore;
