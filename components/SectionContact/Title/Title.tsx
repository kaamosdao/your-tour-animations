import { FC } from 'react';
import { PrismicRichText } from '@prismicio/react';

import { ContactSlice } from '@/prismicio-types';

import { SerializerReturnType } from '@/types';

import s from './Title.module.scss';

interface ITitle {
  slice: ContactSlice;
  addRef: ((el: HTMLElement | null) => void) | null;
}

const components = (
  addRef: ((el: HTMLElement | null) => void) | null
): SerializerReturnType => ({
  heading2: ({ children }) => (
    <h2 ref={addRef} className={s.title}>
      {children}
    </h2>
  ),
});

const Title: FC<ITitle> = ({ slice, addRef }) => (
  <PrismicRichText
    field={slice.primary.title}
    components={components(addRef)}
  />
);

export default Title;
