import { useState } from 'react';
import PropTypes from 'prop-types';

import { modals } from '@/utils/types';

import FeedbackCard from '../FeedbackCard';
import Modal from '../../Modal';

import s from './FeedbackContainer.module.scss';
import HoverCursor from '../../CustomCursor/HoverCursor';

const FeedbackContainer = ({ name, user, tour, text }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <HoverCursor cursorType="pulse">
        <button
          className={s.button}
          type="button"
          onClick={() => setShow(true)}
        >
          <FeedbackCard name={name} user={user} tour={tour} text={text} />
        </button>
      </HoverCursor>
      {show && (
        <Modal
          onClose={() => setShow(false)}
          type={modals.feedback}
          data={{ name, user, tour, text }}
        />
      )}
    </>
  );
};

FeedbackContainer.propTypes = {
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

export default FeedbackContainer;
