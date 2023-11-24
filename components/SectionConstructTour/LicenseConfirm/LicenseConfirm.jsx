import cn from 'classnames';
import { PrismicNextLink } from '@prismicio/next';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './LicenseConfirm.module.scss';

const LicenseConfirm = ({ slice, touched, error, ...props }) => (
  <fieldset className={s.licenseConfirm}>
    <legend className="visually-hidden">
      {slice.primary.checkbox_hidden_legend[0].text}
    </legend>
    <HoverCursor cursorType="growDot">
      <label className={s.checkbox} htmlFor={slice.primary.checkbox_id}>
        <input
          className={cn('visually-hidden', s.checkboxInput)}
          type="checkbox"
          id={slice.primary.checkbox_id}
          {...props}
        />
        <span className={s.checkboxMark} />
        <span className={s.checkboxLabel}>
          {slice.primary.checkbox_label}&nbsp;
          <PrismicNextLink
            field={slice.primary.checkbox_link}
            className={s.checkboxLink}
          >
            {slice.primary.checkbox_link_label}
          </PrismicNextLink>
        </span>
      </label>
    </HoverCursor>
    <div className={s.invalidTooltip}>{touched && error}</div>
  </fieldset>
);

export default LicenseConfirm;
