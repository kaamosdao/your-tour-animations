import PropTypes from 'prop-types';
import cn from 'classnames';

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

const HistoryCard = ({ title, name, text, list, socials }) => (
  <li className={s.item}>
    <div className={s.socials}>
      {socials.map((social) => (
        <a className={s.socialLink} key={social} href="/">
          {social}
        </a>
      ))}
    </div>
    <a className={cn(s.historyCard, s[name])} href="/">
      <h3 className={s.historyCardTitle}>{title}</h3>
      <p className={s.historyCardText}>{text}</p>
      {list && <List items={list} />}
      <footer className={s.historyCardFooter}>
        <p className={cn(s.historyCardButton, 'button-more')}>Подробнее</p>
      </footer>
    </a>
  </li>
);

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
