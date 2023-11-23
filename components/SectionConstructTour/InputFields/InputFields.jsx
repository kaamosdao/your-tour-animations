/* eslint-disable camelcase */
/* eslint-disable no-octal-escape */

import cn from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import { createClient } from '@/prismicio';

import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './InputFields.module.scss';

const InputFields = ({ slice, formik }) => {
  const inputUIDs = useMemo(
    () =>
      slice.items
        .filter(({ input }) => input.uid)
        .map(({ input }) => input.uid),
    [slice]
  );

  const selectUIDs = useMemo(
    () =>
      slice.items
        .filter(({ select }) => select.uid)
        .map(({ select }) => select.uid),
    [slice]
  );

  const [inputs, setInputs] = useState(null);
  const [selects, setSelects] = useState(null);

  useEffect(() => {
    const client = createClient();
    const getData = async () => {
      const inputsData = await client.getAllByUIDs('input', inputUIDs);
      const selectsData = await client.getAllByUIDs('select', selectUIDs);
      setInputs(inputsData);
      setSelects(selectsData);
    };
    getData();
  }, [inputUIDs, selectUIDs]);

  return (
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                disabled={formik.isSubmitting}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.direction}
                disabled={formik.isSubmitting}
                required
              >
                <option value="" disabled hidden>
                  {slice.primary.select_default_option}
                </option>
                {slice.items.map(
                  ({ select_option_name, select_option_value }) => (
                    <option
                      key={select_option_value}
                      value={select_option_value}
                    >
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                disabled={formik.isSubmitting}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                disabled={formik.isSubmitting}
                required
              />
            </label>
          </HoverCursor>
        </li>
        <li className={s.item}>
          <HoverCursor cursorType="growDot">
            <label
              className={s.label}
              htmlFor={slice.primary.input_datefrom_id}
            >
              {slice.primary.input_datefrom_label}
              <input
                className={s.input}
                type="text"
                name={slice.primary.input_datefrom_id}
                id={slice.primary.input_datefrom_id}
                placeholder={slice.primary.input_datefrom_placeholder}
                pattern="^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dateFrom}
                disabled={formik.isSubmitting}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dateTo}
                disabled={formik.isSubmitting}
                required
              />
            </label>
          </HoverCursor>
        </li>
        {inputs?.map(({ data, uid }) => (
          <li key={uid} className={s.item}>
            <HoverCursor cursorType="growDot">
              <label className={s.label} htmlFor={data.name}>
                {data.label}
                <input
                  className={s.input}
                  type={data.type}
                  name={data.name}
                  id={data.name}
                  placeholder={data.placeholder}
                  pattern={data.pattern}
                  required
                />
              </label>
            </HoverCursor>
          </li>
        ))}
        {selects?.map(({ data, uid }) => (
          <li key={uid} className={cn(s.item, s.itemSelect)}>
            <HoverCursor cursorType="growDot">
              <label className={s.label} htmlFor={data.name}>
                {data.label}
                <select
                  className={s.select}
                  id={data.name}
                  name={data.name}
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden>
                    {data.default_option}
                  </option>
                  {data.options.map(({ value, value_label }) => (
                    <option key={value} value={value}>
                      {value_label}
                    </option>
                  ))}
                </select>
              </label>
            </HoverCursor>
          </li>
        ))}
        <li className={cn(s.item, s.itemTextarea)}>
          <HoverCursor cursorType="growDot">
            <label className={s.label} htmlFor="comment">
              {slice.primary.textarea_label}
              <textarea
                className={s.textarea}
                name={slice.primary.textarea_id}
                id={slice.primary.textarea_id}
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
            </label>
          </HoverCursor>
        </li>
      </ul>
    </fieldset>
  );
};

export default InputFields;
