import PropTypes from 'prop-types';

import s from './FeedbackCard.module.scss';

const FeedbackCard = ({ name, user, tour, text }) => (
  <li className={s.card}>
    {text.map(({ paragraph, id }) => (
      <p key={id} className={s.text}>
        {paragraph}
      </p>
    ))}
    <div className={s.user}>
      <p className={s.name}>{name}</p>
      <p className={s.tour}>
        Тур:&nbsp;
        {tour}
      </p>
      <picture className={s.avatarPicture}>
        <source
          type="image/webp"
          srcSet={`/img/avatars/${user}.webp`}
          width="75"
          height="75"
        />
        <source
          type="image/jpeg"
          srcSet={`/img/avatars/${user}.jpg`}
          width="75"
          height="75"
        />
        <img
          className={s.avatar}
          type="image/jpeg"
          src={`/img/avatars/${user}.jpg`}
          alt="Аватар"
          width="75"
          height="75"
        />
      </picture>
    </div>
  </li>
);

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tour: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(
    PropTypes.shape({
      paragraph: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};

export default FeedbackCard;
