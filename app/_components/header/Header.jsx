'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import s from './Header.module.scss';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <Link className={s.logo} href="/">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/img/svg-icons/yourtour-mobile.svg"
              width="181"
              height="32"
            />
            <img
              src="/img/svg-icons/yourtour-mobile.svg"
              alt="YourTour logo"
              width="133"
              height="22"
              loading="lazy"
            />
          </picture>
        </Link>
        <ul className={s.links}>
          <li className={s.item}>
            <Link
              className={pathname === '/tours' ? s.linkActive : s.link}
              href="/tours"
            >
              Туры
            </Link>
          </li>
          <li className={s.item}>
            <a
              className={pathname === '/create' ? s.linkActive : s.link}
              href="/create"
            >
              Создать тур
            </a>
          </li>
          <li className={s.item}>
            <a
              className={pathname === '/feedback' ? s.linkActive : s.link}
              href="/feedback"
            >
              Отзывы
            </a>
          </li>
          <li className={s.item}>
            <a
              className={pathname === '/stories' ? s.linkActive : s.link}
              href="/stories"
            >
              Истории
            </a>
          </li>
        </ul>
        <a className={s.phone} href="tel:89999999999">
          +7 999 999 99 99
        </a>
      </nav>
    </header>
  );
};

export default Header;
