import cn from 'classnames';

import Picture from '../Picture';

import { pictures } from '@/data/index';

import s from './SectionPhotos.module.scss';

const SectionPhotos = () => (
  <section className={s.photos}>
    <h2 className={s.title}>Фотографии путешествий</h2>
    <p className={s.description}>
      Идейные соображения высшего порядка, а&nbsp;
      <br />
      также рамки и место обучения кадров
    </p>
    <ul className={s.list}>
      {pictures.map(
        ({ name, desktopImg, tabletImg, defaultImg, alt, format }) => (
          <li key={name} className={cn(s.item, s[name])}>
            <Picture
              desktopImg={desktopImg}
              tabletImg={tabletImg}
              defaultImg={defaultImg}
              alt={alt}
              format={format}
            />
          </li>
        )
      )}
    </ul>
  </section>
);

export default SectionPhotos;
