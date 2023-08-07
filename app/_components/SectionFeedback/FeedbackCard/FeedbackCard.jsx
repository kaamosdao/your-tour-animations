import PropTypes from 'prop-types';

import Picture from '../../Picture';

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
      <div className={s.avatarContainer}>
        <div className={s.avatarPicture}>
          <Picture
            defaultImg={{
              width: 75,
              height: 75,
              url: `/img/avatars/${user}`,
            }}
            alt="Аватар"
            format="jpg"
          />
        </div>
      </div>
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
