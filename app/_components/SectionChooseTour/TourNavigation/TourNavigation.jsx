import { useDispatch } from 'react-redux';
import classnames from 'classnames/bind';
import { gsap } from 'gsap';

import { setStuck } from '@/store/slices/cursorSlice';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import { navigation } from '@/data';

import s from './TourNavigation.module.scss';

const cn = classnames.bind(s);

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
      {navigation.map(({ name, current, link }) => (
        <li key={name} className={s.navItem}>
          <a
            className={cn(s.navLink, { navLinkCurrent: current })}
            href={link}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TourNavigation;
