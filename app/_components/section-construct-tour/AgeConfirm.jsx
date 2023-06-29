import cn from 'classnames';

import s from './AgeConfirm.module.scss';

const AgeConfirm = () => (
  <fieldset className={s.ageConfirm}>
    <legend className={s.title}>Вам есть 18 лет?</legend>
    <ul className={s.list}>
      <li className={s.item}>
        <label className={s.radio} htmlFor="yes">
          <input
            className={cn('visually-hidden', s.radioInput)}
            type="radio"
            name="age-confirmation"
            id="yes"
            value="yep"
            required
          />
          <span className={s.radioMark} />
          <span className={s.radioLabel}>Да</span>
        </label>
      </li>
      <li className={s.item}>
        <label className={s.radio} htmlFor="nope">
          <input
            className={cn('visually-hidden', s.radioInput)}
            type="radio"
            name="age-confirmation"
            id="nope"
            value="nope"
            required
          />
          <span className={s.radioMark} />
          <span className={s.radioLabel}>Нет</span>
        </label>
      </li>
    </ul>
  </fieldset>
);

export default AgeConfirm;
