'use client';

import PropTypes from 'prop-types';

import s from './CardList.module.scss';

const CardList = ({ items }) => (
  <ul className={s.historyCardList}>
    {items.map(({ text }) => (
      <li className={s.historyCardItem} key={text}>
        {text}
      </li>
    ))}
  </ul>
);

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string }))
    .isRequired,
};

export default CardList;
