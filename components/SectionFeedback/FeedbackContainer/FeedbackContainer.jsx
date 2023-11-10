import { useRef, useState } from 'react';
import gsap from 'gsap/dist/gsap';

import { modals } from '@/utils/types';

import FeedbackCard from '../FeedbackCard';
import Modal from '../../Modal';
import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './FeedbackContainer.module.scss';

const FeedbackContainer = ({ data }) => {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  const {
    feedback,
    user_image: userImage,
    user_image_retina: userImageRetina,
    user_name: userName,
    user_tour: userTour,
  } = data;

  return (
    <>
      <HoverCursor cursorType="pulse">
        <button
          className={s.button}
          type="button"
          onClick={() => setShow(true)}
        >
          <FeedbackCard
            name={userName}
            image={userImage}
            imageRetina={userImageRetina}
            tour={userTour}
            feedback={feedback}
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
          data={{
            name: userName,
            image: userImage,
            imageRetina: userImageRetina,
            tour: userTour,
            feedback,
          }}
          modalRef={modalRef}
        />
      )}
    </>
  );
};

export default FeedbackContainer;
