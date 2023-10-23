'use client';

import PropTypes from 'prop-types';

import s from './CardList.module.scss';

const CardList = ({ items }) => (
  <ul className={s.historyCardList}>
    {items.map((name) => (
      <li className={s.historyCardItem} key={name}>
        {name}
      </li>
    ))}
  </ul>
);

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardList;
