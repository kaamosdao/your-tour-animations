import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { setCursor } from '@/store/slices/cursorSlice';

import cursorState from '@/utils/types';

import s from './LicenseConfirm.module.scss';

const LicenseConfirm = () => {
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    dispatch(setCursor(cursorState.growDot));
  };

  const onMouseLeave = () => {
    dispatch(setCursor(cursorState.default));
  };

  return (
    <fieldset className={s.licenseConfirm}>
      <legend className="visually-hidden">
        Принятие условий Лицензионного договора.
      </legend>
      <label
        className={s.checkbox}
        htmlFor="yep"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
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
    </fieldset>
  );
};

export default LicenseConfirm;
