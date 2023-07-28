/* eslint-disable no-octal-escape */
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { setCursor } from '@/store/slices/cursorSlice';

import cursorState from '@/utils/types';

import s from './InputFields.module.scss';

const InputFields = () => {
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    dispatch(setCursor(cursorState.growDot));
  };

  const onMouseLeave = () => {
    dispatch(setCursor(cursorState.default));
  };

  return (
    <fieldset className={s.inputFields}>
      <legend className="visually-hidden">Заполните поля</legend>
      <ul className={s.list}>
        <li className={s.item}>
          <label
            className={s.label}
            htmlFor="name"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Имя
            <input
              className={s.input}
              type="text"
              name="name"
              id="name"
              placeholder="Введите Ваше имя"
              required
            />
          </label>
        </li>
        <li className={cn(s.item, s.itemSelect)}>
          <label
            className={s.label}
            htmlFor="direction"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Направление
            <select
              className={s.select}
              id="direction"
              name="direction"
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                Куда хотите ехать
              </option>
              <option value="popular">Gravity Falls</option>
              <option value="expensive">Hogwarts</option>
              <option value="expensive">To the Moon</option>
            </select>
          </label>
        </li>
        <li className={s.item}>
          <label
            className={s.label}
            htmlFor="email"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              required
            />
          </label>
        </li>
        <li className={s.item}>
          <label
            className={s.label}
            htmlFor="phone"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Телефон
            <input
              className={s.input}
              type="tel"
              name="phone"
              id="phone"
              placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
              pattern="^([+]7)\s(\([0-9]{3})\)([0-9]{3})([-])([0-9]{2})([-])([0-9]{2})"
              required
            />
          </label>
        </li>
        <li className={s.item}>
          <label
            className={s.label}
            htmlFor="dateFrom"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Дата от
            <input
              className={s.input}
              type="text"
              name="dateFrom"
              id="dateFrom"
              placeholder="ДД.ММ.ГГГГ"
              pattern="^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
              required
            />
          </label>
        </li>
        <li className={s.item}>
          <label
            className={s.label}
            htmlFor="dateTo"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Дата до
            <input
              className={s.input}
              type="text"
              name="dateTo"
              id="dateTo"
              placeholder="ДД.ММ.ГГГГ"
              pattern="^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
              required
            />
          </label>
        </li>
        <li className={cn(s.item, s.itemTextarea)}>
          <label
            className={s.label}
            htmlFor="comment"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Комментарий
            <textarea className={s.textarea} name="comment" id="comment" />
          </label>
        </li>
      </ul>
    </fieldset>
  );
};

export default InputFields;
