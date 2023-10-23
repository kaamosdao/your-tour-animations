'use client';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';

import { setActivePage, setAnimation } from '@/store/slices/transitionSlice';
import selectPlayingTransition, {
  selectActivePage,
} from '@/store/selectors/transitionSelectors';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import { links } from '@/data/index';
import { transitionAnimation } from '@/utils/types';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './Navigation.module.scss';

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const playing = useSelector(selectPlayingTransition);
  const activePage = useSelector(selectActivePage);

  const onClick = (path) => (e) => {
    e.preventDefault();

    if (playing) {
      return;
    }

    if (path === '/' && pathname === '/') {
      return;
    }

    const animation =
      path === '/'
        ? transitionAnimation.vertical
        : transitionAnimation.horizontal;

    dispatch(setActivePage(path));
    dispatch(setAnimation(animation));

    router.push(path);
  };

  return (
    <nav className={s.navigation}>
      <HoverCursor cursorType="pulse">
        <Link className={s.logo} href="/" onClick={onClick('/')}>
          <YourTourIcon className={s.icon} />
        </Link>
      </HoverCursor>
      <ul className={s.links}>
        {links.map(({ path, title }) => (
          <li key={path} className={s.item}>
            <HoverCursor cursorType="stuck" activeLink="linkActive">
              <Link
                className={
                  activePage === path || (!activePage && pathname === path)
                    ? s.linkActive
                    : s.link
                }
                href={path}
                onClick={onClick(path)}
              >
                {title}
              </Link>
            </HoverCursor>
          </li>
        ))}
      </ul>
      <HoverCursor cursorType="stuck">
        <Link className={s.phone} href="tel:89999999999">
          +7 999 999 99 99
        </Link>
      </HoverCursor>
    </nav>
  );
};

export default Navigation;
