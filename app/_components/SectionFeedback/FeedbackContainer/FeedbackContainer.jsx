import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { modals } from '@/utils/types';

import FeedbackCard from '../FeedbackCard';
import Modal from '../../Modal';
import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './FeedbackContainer.module.scss';

const FeedbackContainer = ({ name, user, tour, text }) => {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  return (
    <>
      <HoverCursor cursorType="pulse">
        <button
          className={s.button}
          type="button"
          onClick={() => setShow(true)}
        >
          <FeedbackCard
            name={name}
            user={user}
            tour={tour}
            text={text}
            isModal={false}
          />
        </button>
      </HoverCursor>
      {show && (
        <Modal
          onClose={() => {
            gsap.to(modalRef.current, {
              '--cliptrX': '50%',
              '--cliptlX': '50%',
              '--clipbrX': '50%',
              '--clipblX': '50%',
              duration: 0.5,
              onComplete: () => {
                setShow(false);
              },
            });
          }}
          type={modals.feedback}
          data={{ name, user, tour, text }}
          modalRef={modalRef}
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
