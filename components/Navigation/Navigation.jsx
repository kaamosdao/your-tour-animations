'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { PrismicNextLink } from '@prismicio/next';
import { createClient } from '@/prismicio';

import { setActivePage, setAnimation } from '@/store/slices/transitionSlice';
import selectPlayingTransition, {
  selectActivePage,
} from '@/store/selectors/transitionSelectors';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import { transitionAnimation } from '@/utils/types';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './Navigation.module.scss';

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const playing = useSelector(selectPlayingTransition);
  const activePage = useSelector(selectActivePage);

  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const client = createClient();
    const getSettings = async () => {
      const { data } = await client.getSingle('settings');
      setSettings(data);
    };
    getSettings();
  }, []);

  const moveToRoute = (path) => (e) => {
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
        <Link className={s.logo} href="/" onClick={moveToRoute('/')}>
          <YourTourIcon className={s.icon} />
        </Link>
      </HoverCursor>
      <ul className={s.links}>
        {settings?.navigation.map(({ label, link }) => (
          <li key={label} className={s.item}>
            <HoverCursor cursorType="stuck" activeLink="linkActive">
              <PrismicNextLink
                className={
                  activePage === link.url ||
                  (!activePage && pathname === link.url)
                    ? s.linkActive
                    : s.link
                }
                field={link}
                onClick={moveToRoute(link.url)}
              >
                {label}
              </PrismicNextLink>
            </HoverCursor>
          </li>
        ))}
      </ul>
      <HoverCursor cursorType="stuck">
        <Link className={s.phone} href={`tel:${settings?.phone_number}`}>
          {settings?.phone_label}
        </Link>
      </HoverCursor>
    </nav>
  );
};

export default Navigation;
