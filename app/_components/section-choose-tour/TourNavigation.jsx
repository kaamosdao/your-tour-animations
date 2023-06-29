import cn from 'classnames';

import s from './TourNavigation.module.scss';

const TourNavigation = () => (
  <ul className={s.nav}>
    <li className={s.navItem}>
      <a className={cn(s.navLink, s.navLinkCurrent)} href="/">
        Популярные
      </a>
    </li>
    <li className={s.navItem}>
      <a className={s.navLink} href="/">
        Авторские
      </a>
    </li>
    <li className={s.navItem}>
      <a className={s.navLink} href="/">
        Походы
      </a>
    </li>
    <li className={s.navItem}>
      <a className={s.navLink} href="/">
        Сплавы
      </a>
    </li>
    <li className={s.navItem}>
      <a className={s.navLink} href="/">
        Велопрогулки
      </a>
    </li>
  </ul>
);

export default TourNavigation;
