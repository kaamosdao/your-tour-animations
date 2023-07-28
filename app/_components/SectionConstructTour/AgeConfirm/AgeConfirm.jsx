import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { setCursor } from '@/store/slices/cursorSlice';

import cursorState from '@/utils/types';

import s from './AgeConfirm.module.scss';

const radios = [
  { value: 'yes', label: 'Да' },
  { value: 'nope', label: 'Нет' },
];

const AgeConfirm = () => {
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    dispatch(setCursor(cursorState.growDot));
  };

  const onMouseLeave = () => {
    dispatch(setCursor(cursorState.default));
  };

  return (
    <fieldset className={s.ageConfirm}>
      <legend className={s.title}>Вам есть 18 лет?</legend>
      <ul className={s.list}>
        {radios.map(({ value, label }) => (
          <li key={value} className={s.item}>
            <label
              className={s.radio}
              htmlFor={value}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
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
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default AgeConfirm;
