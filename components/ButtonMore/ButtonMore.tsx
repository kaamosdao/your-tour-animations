import { FC } from 'react';
import classnames from 'classnames/bind';

import ArrowIcon from '@/public/img/svg-icons/arrow.svg';

import s from './ButtonMore.module.scss';

const cn = classnames.bind(s);

interface IButtonMore {
  isHovered: boolean;
  isClicked: boolean;
}

const ButtonMore: FC<IButtonMore> = ({ isHovered, isClicked }) => (
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

export default ButtonMore;
