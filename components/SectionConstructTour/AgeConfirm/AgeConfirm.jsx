import cn from 'classnames';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './AgeConfirm.module.scss';

const AgeConfirm = ({ slice, ...props }) => (
  <fieldset className={s.ageConfirm}>
    <legend className={s.title}>{slice.primary.radio_legend}</legend>
    <ul className={s.list}>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.radio} htmlFor={slice.primary.radio_id_1}>
            <input
              className={cn('visually-hidden', s.radioInput)}
              type="radio"
              id={slice.primary.radio_id_1}
              value={slice.primary.radio_value_1}
              {...props}
              required
            />
            <span className={s.radioMark} />
            <span className={s.radioLabel}>{slice.primary.radio_label_1}</span>
          </label>
        </HoverCursor>
      </li>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.radio} htmlFor={slice.primary.radio_id_2}>
            <input
              className={cn('visually-hidden', s.radioInput)}
              type="radio"
              id={slice.primary.radio_id_2}
              value={slice.primary.radio_value_2}
              {...props}
              required
            />
            <span className={s.radioMark} />
            <span className={s.radioLabel}>{slice.primary.radio_label_2}</span>
          </label>
        </HoverCursor>
      </li>
    </ul>
  </fieldset>
);

export default AgeConfirm;
