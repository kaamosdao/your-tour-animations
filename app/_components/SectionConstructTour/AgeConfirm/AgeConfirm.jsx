import cn from 'classnames';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './AgeConfirm.module.scss';

const radios = [
  { value: 'yes', label: 'Да' },
  { value: 'nope', label: 'Нет' },
];

const AgeConfirm = () => (
  <fieldset className={s.ageConfirm}>
    <legend className={s.title}>Вам есть 18 лет?</legend>
    <ul className={s.list}>
      {radios.map(({ value, label }) => (
        <li key={value} className={s.item}>
          <HoverCursor cursorType="growDot">
            <label className={s.radio} htmlFor={value}>
              <input
                className={cn('visually-hidden', s.radioInput)}
                type="radio"
                name="age-confirmation"
                id={value}
                value={value}
                required
              />
              <span className={s.radioMark} />
              <span className={s.radioLabel}>{label}</span>
            </label>
          </HoverCursor>
        </li>
      ))}
    </ul>
  </fieldset>
);

export default AgeConfirm;
