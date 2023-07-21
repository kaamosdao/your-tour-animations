import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { gsap } from 'gsap';

import { setStuck } from '@/store/slices/cursorSlice';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import s from './TourNavigation.module.scss';

const TourNavigation = () => {
  const dispatch = useDispatch();

  const cursorFollower = useCursorFollowerRef();

  const onMouseEnter = (e) => {
    const link = e.currentTarget;
    const linkBox = link.getBoundingClientRect();

    const cursorCircle = cursorFollower.current.querySelector('#circle');

    if (!link.className.includes('navLinkCurrent')) {
      dispatch(setStuck(true));

      gsap.to(cursorCircle, {
        width: linkBox.width,
        height: linkBox.height,
        borderRadius: '3px',
        padding: '4px',
        duration: 0.5,
      });
    }
  };

  const onMouseLeave = () => {
    const cursorCircle = cursorFollower.current.querySelector('#circle');

    dispatch(setStuck(false));

    gsap.to(cursorCircle, {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      padding: '0',
      duration: 0.5,
    });
  };

  return (
    <ul className={s.nav}>
      <li className={s.navItem}>
        <a
          className={cn(s.navLink, s.navLinkCurrent)}
          href="/"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Популярные
        </a>
      </li>
      <li className={s.navItem}>
        <a
          className={s.navLink}
          href="/"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Авторские
        </a>
      </li>
      <li className={s.navItem}>
        <a
          className={s.navLink}
          href="/"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Походы
        </a>
      </li>
      <li className={s.navItem}>
        <a
          className={s.navLink}
          href="/"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Сплавы
        </a>
      </li>
      <li className={s.navItem}>
        <a
          className={s.navLink}
          href="/"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Велопрогулки
        </a>
      </li>
    </ul>
  );
};

export default TourNavigation;
