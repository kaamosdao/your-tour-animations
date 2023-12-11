import { PrismicRichText } from '@prismicio/react';

import s from './Title.module.scss';

const components = (addRef) => ({
  heading2: ({ children }) => (
    <h2 ref={addRef} className={s.title}>
      {children}
    </h2>
  ),
});

const Title = ({ slice, addRef }) => (
  <PrismicRichText
    field={slice.primary.title}
    components={components(addRef)}
  />
);

export default Title;
