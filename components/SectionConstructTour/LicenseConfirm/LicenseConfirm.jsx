import cn from 'classnames';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './LicenseConfirm.module.scss';

const LicenseConfirm = () => (
  <fieldset className={s.licenseConfirm}>
    <legend className="visually-hidden">
      Принятие условий Лицензионного договора.
    </legend>
    <HoverCursor cursorType="growDot">
      <label className={s.checkbox} htmlFor="yep">
        <input
          className={cn('visually-hidden', s.checkboxInput)}
          type="checkbox"
          id="yep"
          name="yep"
          required
        />
        <span className={s.checkboxMark} />
        <span className={s.checkboxLabel}>
          Нажимая кнопку, я принимаю условия&nbsp;
          <a className={s.checkboxLink} href="/license">
            Лицензионного договора
          </a>
        </span>
      </label>
    </HoverCursor>
  </fieldset>
);

export default LicenseConfirm;