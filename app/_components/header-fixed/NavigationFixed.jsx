'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import s from './NavigationFixed.module.scss';

const NavigationFixed = () => {
  const pathname = usePathname();

  return (
    <nav className={s.navigationFixed}>
      <a className={s.logo} href="https://your-tour-test-task.vercel.app/">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/img/svg-icons/yourtour-mobile-black.svg"
            width="181"
            height="32"
          />
          <img
            src="/img/svg-icons/yourtour-mobile-black.svg"
            alt="YourTour logo"
            width="133"
            height="22"
            loading="lazy"
          />
        </picture>
      </a>
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
  );
};

export default NavigationFixed;
