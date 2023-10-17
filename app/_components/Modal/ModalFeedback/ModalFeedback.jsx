import React from 'react';
import PropTypes from 'prop-types';

import FeedbackCard from '../../SectionFeedback/FeedbackCard';
import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './ModalFeedback.module.scss';

const ModalFeedback = ({ onClose, data }) => {
  const { name, user, tour, text } = data;

  return (
    <div
      className={s.container}
      onClick={(e) => e.stopPropagation()}
      aria-hidden="true"
    >
      <HoverCursor cursorType="pulse">
        <button className={s.buttonClose} type="button" onClick={onClose}>
          <span className="visually-hidden">Close</span>+
        </button>
      </HoverCursor>
      <FeedbackCard name={name} user={user} tour={tour} text={text} />
    </div>
  );
};

ModalFeedback.propTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tour: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(
      PropTypes.shape({
        paragraph: PropTypes.string,
        id: PropTypes.number,
      })
    ).isRequired,
  }),
};

export default ModalFeedback;
