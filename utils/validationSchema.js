import * as yup from 'yup';
import formatDate from './formatDate';

const phoneRegExp =
  /^([+]7)\s?(\([0-9]{3})\)([-\s])?([0-9]{3})([-])([0-9]{2})([-])([0-9]{2})/;

const dateRegExp =
  /^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

export const tourSchema = (directions) => {
  const directionValues = directions.map(
    ({ select_option_value: value }) => value
  );

  return yup.object().shape({
    name: yup
      .string()
      .min(3, 'Должно быть от 3 до 20 знаков')
      .max(20, 'Должно быть от 3 до 20 знаков')
      .required('Обязательно для заполнения'),
    direction: yup
      .string()
      .oneOf(directionValues, 'Несуществующее значение')
      .required('Обязательно для заполнения'),
    email: yup
      .string()
      .email('Невалидный email')
      .required('Обязательно для заполнения'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Неверный формат телефона')
      .required('Обязательно для заполнения'),
    dateFrom: yup
      .string()
      .matches(dateRegExp, 'Неверный формат даты')
      .required('Обязательно для заполнения')
      .test({
        name: 'dateFrom more than today',
        message: 'Выберите будущую дату',
        test: (value) => formatDate(value).getTime() > new Date().getTime(),
      })
      .test({
        name: 'dateTo more than dateFrom',
        message: 'Должна быть меньше даты до',
        test: (value, context) => {
          const formattedDateFrom = formatDate(value);
          const formattedDateTo = formatDate(context.parent.dateTo);

          if (formattedDateTo) {
            return formattedDateTo.getTime() > formattedDateFrom.getTime();
          }

          return true;
        },
      }),
    dateTo: yup
      .string()
      .matches(dateRegExp, 'Неверный формат даты')
      .required('Обязательно для заполнения')
      .test({
        name: 'dateFrom more than today',
        message: 'Выберите будущую дату',
        test: (value) => formatDate(value).getTime() > new Date().getTime(),
      })
      .test({
        name: 'dateTo more than dateFrom',
        message: 'Должна быть больше даты от',
        test: (value, context) => {
          const formattedDateTo = formatDate(value);
          const formattedDateFrom = formatDate(context.parent.dateFrom);

          if (formattedDateFrom) {
            return formattedDateTo.getTime() > formattedDateFrom.getTime();
          }

          return true;
        },
      }),
    ageConfirmed: yup.string().required('Обязательно для заполнения'),
    licenseConfirmed: yup.boolean().oneOf([true], 'Примите условия договора'),
    comment: yup.string(),
  });
};

export default tourSchema;
