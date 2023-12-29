import { FC } from 'react';
import { ContactSlice } from '@/prismicio-types';

import CustomImage from '../../CustomImage';

import s from './Picture.module.scss';

interface IPicture {
  slice: ContactSlice;
  addRef: ((el: HTMLElement | null) => void) | null;
}

const Picture: FC<IPicture> = ({ slice, addRef }) => (
  <div ref={addRef} className={s.picture}>
    <CustomImage
      image={slice.primary.image}
      imageRetina={slice.primary.image_retina}
    />
  </div>
);

export default Picture;
