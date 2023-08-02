'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import HoverCursor from '../../CustomCursor/HoverCursor';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import { links } from '@/data/index';

import s from './NavigationFixed.module.scss';

const NavigationFixed = () => {
  const pathname = usePathname();

  return (
    <nav className={s.navigationFixed}>
      <HoverCursor cursorType="pulse">
        <Link className={s.logo} href="/">
          <YourTourIcon className={s.icon} />
        </Link>
      </HoverCursor>
      <ul className={s.links}>
        {links.map(({ path, title }) => (
          <li key={path} className={s.item}>
            <HoverCursor cursorType="stuck" activeLink="linkActive">
              <Link
                className={pathname === `/${path}` ? s.linkActive : s.link}
                href={`/${path}`}
              >
                {title}
              </Link>
            </HoverCursor>
          </li>
        ))}
      </ul>
      <HoverCursor cursorType="stuck">
        <a className={s.phone} href="tel:89999999999">
          +7 999 999 99 99
        </a>
      </HoverCursor>
    </nav>
  );
};

export default NavigationFixed;
