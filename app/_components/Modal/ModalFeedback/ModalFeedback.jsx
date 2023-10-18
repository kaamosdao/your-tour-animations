import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import FeedbackCard from '../../SectionFeedback/FeedbackCard';
import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './ModalFeedback.module.scss';

const ModalFeedback = ({ onClose, data, modalRef }) => {
  const { name, user, tour, text } = data;

  useEffect(() => {
    gsap.to(modalRef?.current, {
      '--cliptrX': '100%',
      '--cliptlX': '0%',
      '--clipbrX': '100%',
      '--clipblX': '0%',
      duration: 0.5,
    });
  }, [modalRef]);

  return (
    <div
      ref={modalRef}
      className={s.modal}
      onClick={onClose}
      aria-hidden="true"
    >
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
        <FeedbackCard name={name} user={user} tour={tour} text={text} isModal />
      </div>
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
