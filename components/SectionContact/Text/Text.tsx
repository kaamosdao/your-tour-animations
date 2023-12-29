import { FC } from 'react';
import { ContactSlice } from '@/prismicio-types';

import { CursorType } from '@/types';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './Text.module.scss';

interface IText {
  slice: ContactSlice;
  addRef: ((el: HTMLElement | null) => void) | null;
}

const Text: FC<IText> = ({ slice, addRef }) => (
  <p ref={addRef} className={s.text}>
    {slice.primary.text}&nbsp;
    <HoverCursor type={CursorType.Pulse}>
      <a className={s.link} href={`mailto:${slice.primary.email}`}>
        {slice.primary.email}
      </a>
    </HoverCursor>
  </p>
);

export default Text;
