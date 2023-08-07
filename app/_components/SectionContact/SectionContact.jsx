'use client';

import Picture from '../Picture';
import HoverCursor from '../CustomCursor/HoverCursor';

import s from './SectionContact.module.scss';

const SectionContact = () => (
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
      <HoverCursor cursorType="pulse">
        <a className={s.link} href="mailto:yourtour@gmail.com">
          yourtour@gmail.com
        </a>
      </HoverCursor>
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

export default SectionContact;
