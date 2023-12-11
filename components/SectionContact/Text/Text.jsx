import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './Text.module.scss';

const Text = ({ slice, addRef }) => (
  <p ref={addRef} className={s.text}>
    {slice.primary.description[0].text}
    <HoverCursor cursorType="pulse">
      <a className={s.link} href={`mailto:${slice.primary.email}`}>
        {slice.primary.email}
      </a>
    </HoverCursor>
  </p>
);

export default Text;
