'use client';

import { PrismicRichText } from '@prismicio/react';

import AgeConfirm from './AgeConfirm/index';
import InputFields from './InputFields/index';
import LicenseConfirm from './LicenseConfirm/index';

import HoverCursor from '../CustomCursor/HoverCursor';

import s from './SectionConstructTour.module.scss';

const components = {
  heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
  paragraph: ({ children }) => <p className={s.description}>{children}</p>,
};

const SectionConstructTour = ({ slice }) => (
  <section
    className={s.constructTour}
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    <PrismicRichText field={slice.primary.title} components={components} />
    <PrismicRichText
      field={slice.primary.description}
      components={components}
    />
    <form className={s.form}>
      <InputFields slice={slice} />
      <AgeConfirm slice={slice} />
      <LicenseConfirm slice={slice} />
      <div className={s.buttons}>
        <HoverCursor cursorType="pulse">
          <button className={s.buttonFind} type="submit">
            {slice.primary.submit_button_label}
          </button>
        </HoverCursor>
        <HoverCursor cursorType="pulse">
          <button className={s.buttonClear} type="button">
            {slice.primary.reset_button_label}
          </button>
        </HoverCursor>
      </div>
    </form>
  </section>
);

export default SectionConstructTour;
