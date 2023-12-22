'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { PrismicNextLink } from '@prismicio/next';
import { createClient } from '@/prismicio';

import { setActivePage, setAnimation } from '@/store/slices/transitionSlice';
import selectPlayingTransition, {
  selectActivePage,
} from '@/store/selectors/transitionSelectors';

import { useAppDispatch, useAppSelector } from '@/hooks';

import TransitionAnimation, { CursorType } from '@/types';

import YourTourIcon from '@/public/img/svg-icons/yourtour.svg';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './Navigation.module.scss';

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const playing = useAppSelector(selectPlayingTransition);
  const activePage = useAppSelector(selectActivePage);

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
        ? TransitionAnimation.Vertical
        : TransitionAnimation.Horizontal;

    dispatch(setActivePage(path));
    dispatch(setAnimation(animation));

    router.push(path);
  };

  return (
    <nav className={s.navigation}>
      <HoverCursor type={CursorType.Pulse}>
        <Link className={s.logo} href="/" onClick={moveToRoute('/')}>
          <YourTourIcon className={s.icon} />
        </Link>
      </HoverCursor>
      <ul className={s.links}>
        {settings?.navigation.map(({ label, link }) => (
          <li key={label} className={s.item}>
            <HoverCursor type={CursorType.Stuck} activeLink="linkActive">
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
      <HoverCursor type={CursorType.Stuck}>
        <Link className={s.phone} href={`tel:${settings?.phone_number}`}>
          {settings?.phone_label}
        </Link>
      </HoverCursor>
    </nav>
  );
};

export default Navigation;
