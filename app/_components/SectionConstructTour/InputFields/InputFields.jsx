/* eslint-disable no-octal-escape */
import cn from 'classnames';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './InputFields.module.scss';

const InputFields = () => (
  <fieldset className={s.inputFields}>
    <legend className="visually-hidden">Заполните поля</legend>
    <ul className={s.list}>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor="name">
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
        </HoverCursor>
      </li>
      <li className={cn(s.item, s.itemSelect)}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor="direction">
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
        </HoverCursor>
      </li>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor="email">
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
        </HoverCursor>
      </li>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor="phone">
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
        </HoverCursor>
      </li>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor="dateFrom">
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
        </HoverCursor>
      </li>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor="dateTo">
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
        </HoverCursor>
      </li>
      <li className={cn(s.item, s.itemTextarea)}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor="comment">
            Комментарий
            <textarea className={s.textarea} name="comment" id="comment" />
          </label>
        </HoverCursor>
      </li>
    </ul>
  </fieldset>
);

export default InputFields;
