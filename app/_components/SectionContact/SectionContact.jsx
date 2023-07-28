'use client';

import { useDispatch } from 'react-redux';

import { setCursor } from '@/store/slices/cursorSlice';

import cursorState from '@/utils/types';

import Picture from '../Picture';

import s from './SectionContact.module.scss';

const SectionContact = () => {
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    dispatch(setCursor(cursorState.pulse));
  };

  const onMouseLeave = () => {
    dispatch(setCursor(cursorState.default));
  };

  return (
    <section className={s.contact}>
      <h2 className={s.title}>
        Пора в путешествие
        <br />
        вместе с нами!
      </h2>
      <p className={s.text}>
        Напиши на почту и узнай подробности
        <br />
        на&nbsp;
        <a
          className={s.link}
          href="mailto:yourtour@gmail.com"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          yourtour@gmail.com
        </a>
      </p>
      <div className={s.picture}>
        <Picture
          desktopImg={{
            width: 370,
            height: 370,
            url: '/img/histories/icon-village-desktop-lg',
          }}
          tabletImg={{
            width: 370,
            height: 370,
            url: '/img/histories/icon-village-desktop-md',
          }}
          defaultImg={{
            width: 133,
            height: 130,
            url: '/img/histories/icon-village-mobile',
          }}
          alt="Деревня у озера в горах"
          format="png"
        />
      </div>
    </section>
  );
};

export default SectionContact;
