/* eslint-disable camelcase */
/* eslint-disable no-octal-escape */
import cn from 'classnames';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './InputFields.module.scss';

const InputFields = ({ slice }) => (
  <fieldset className={s.inputFields}>
    <legend className="visually-hidden">Заполните поля</legend>
    <ul className={s.list}>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor={slice.primary.input_name_id}>
            {slice.primary.input_name_label}
            <input
              className={s.input}
              type="text"
              name={slice.primary.input_name_id}
              id={slice.primary.input_name_id}
              placeholder={slice.primary.input_name_placeholder}
              required
            />
          </label>
        </HoverCursor>
      </li>
      <li className={cn(s.item, s.itemSelect)}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor={slice.primary.select_id}>
            {slice.primary.select_label}
            <select
              className={s.select}
              id={slice.primary.select_id}
              name={slice.primary.select_id}
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                {slice.primary.select_default_option}
              </option>
              {slice.items.map(
                ({ select_option_name, select_option_value }) => (
                  <option key={select_option_value} value={select_option_value}>
                    {select_option_name}
                  </option>
                )
              )}
            </select>
          </label>
        </HoverCursor>
      </li>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor={slice.primary.input_email_id}>
            {slice.primary.input_email_label}
            <input
              className={s.input}
              type="email"
              name={slice.primary.input_email_id}
              id={slice.primary.input_email_id}
              placeholder={slice.primary.input_email_placeholder}
              required
            />
          </label>
        </HoverCursor>
      </li>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor={slice.primary.input_phone_id}>
            {slice.primary.input_phone_label}
            <input
              className={s.input}
              type="tel"
              name={slice.primary.input_phone_id}
              id={slice.primary.input_phone_id}
              placeholder={slice.primary.input_phone_placeholder}
              pattern="^([+]7)\s(\([0-9]{3})\)([0-9]{3})([-])([0-9]{2})([-])([0-9]{2})"
              required
            />
          </label>
        </HoverCursor>
      </li>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor={slice.primary.input_datefrom_id}>
            {slice.primary.input_datefrom_label}
            <input
              className={s.input}
              type="text"
              name={slice.primary.input_datefrom_id}
              id={slice.primary.input_datefrom_id}
              placeholder={slice.primary.input_datefrom_placeholder}
              pattern="^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
              required
            />
          </label>
        </HoverCursor>
      </li>
      <li className={s.item}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor={slice.primary.input_dateto_id}>
            {slice.primary.input_dateto_label}
            <input
              className={s.input}
              type="text"
              name={slice.primary.input_dateto_id}
              id={slice.primary.input_dateto_id}
              placeholder={slice.primary.input_dateto_placeholder}
              pattern="^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
              required
            />
          </label>
        </HoverCursor>
      </li>
      <li className={cn(s.item, s.itemTextarea)}>
        <HoverCursor cursorType="growDot">
          <label className={s.label} htmlFor="comment">
            {slice.primary.textarea_label}
            <textarea
              className={s.textarea}
              name={slice.primary.textarea_id}
              id={slice.primary.textarea_id}
            />
          </label>
        </HoverCursor>
      </li>
    </ul>
  </fieldset>
);

export default InputFields;
