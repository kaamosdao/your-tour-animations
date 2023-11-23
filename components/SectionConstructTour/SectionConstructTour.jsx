'use client';

import { PrismicRichText } from '@prismicio/react';
import { useFormik } from 'formik';

import tourSchema from '@/utils/validationSchema';

import AgeConfirm from './AgeConfirm/index';
import InputFields from './InputFields/index';
import LicenseConfirm from './LicenseConfirm/index';
import HoverCursor from '../CustomCursor/HoverCursor';

import s from './SectionConstructTour.module.scss';

const components = {
  heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
  paragraph: ({ children }) => <p className={s.description}>{children}</p>,
};

const SectionConstructTour = ({ slice }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      direction: '',
      email: '',
      phone: '',
      dateFrom: '',
      dateTo: '',
      ageConfirmed: '',
      licenseConfirmed: false,
      comment: '',
    },
    validationSchema: tourSchema(slice.items),
    // onSubmit: async (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

  return (
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
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <InputFields slice={slice} formik={formik} />
        <AgeConfirm
          slice={slice}
          name="ageConfirmed"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <LicenseConfirm
          slice={slice}
          name="licenseConfirmed"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className={s.buttons}>
          <HoverCursor cursorType="pulse">
            <button className={s.buttonFind} type="submit">
              {slice.primary.submit_button_label}
            </button>
          </HoverCursor>
          <HoverCursor cursorType="pulse">
            <button
              className={s.buttonClear}
              type="button"
              disabled={formik.isSubmitting}
              onClick={formik.handleReset}
            >
              {slice.primary.reset_button_label}
            </button>
          </HoverCursor>
        </div>
      </form>
    </section>
  );
};

export default SectionConstructTour;
