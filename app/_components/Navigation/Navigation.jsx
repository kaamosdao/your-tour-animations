'use client';

import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';

import { setActivePage, setAnimation } from '@/store/slices/transitionSlice';
import selectPlayingTransition, {
  selectActivePage,
} from '@/store/selectors/transitionSelectors';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import { links } from '@/data/index';
import { navStyle, transitionAnimation } from '@/utils/types';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './Navigation.module.scss';

const Navigation = ({ style }) => {
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

    gsap.delayedCall(0.9, () => {
      router.push(`/${path}`);
    });
  };

  return (
    <nav
      className={`${s.navigation} ${
        style === navStyle.main ? s.navMain : s.navFixed
      }`}
    >
      <HoverCursor cursorType="pulse">
        <a className={s.logo} href="/" onClick={onClick('/')}>
          <YourTourIcon
            className={style === navStyle.main ? s.iconMain : s.iconFixed}
          />
        </a>
      </HoverCursor>
      <ul className={s.links}>
        {links.map(({ path, title }) => (
          <li key={path} className={s.item}>
            <HoverCursor cursorType="stuck" activeLink="linkActive">
              <a
                className={
                  activePage === path ||
                  (!activePage && pathname === `/${path}`)
                    ? s.linkActive
                    : s.link
                }
                href={`/${path}`}
                onClick={onClick(path)}
              >
                {title}
              </a>
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

export default Navigation;
