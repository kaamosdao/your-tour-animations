import React, { FC, RefObject, useEffect } from 'react';
import gsap from 'gsap/dist/gsap';

import { CursorType, ModalData } from '@/types';

import FeedbackCard from '../../SectionFeedback/FeedbackCard';
import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './ModalFeedback.module.scss';

interface IModalFeedback {
  onClose: () => void;
  data: ModalData;
  modalRef: RefObject<HTMLDivElement>;
}

const ModalFeedback: FC<IModalFeedback> = ({ onClose, data, modalRef }) => {
  const { feedback, image, imageRetina, name, tour } = data;

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
        <HoverCursor type={CursorType.Pulse}>
          <button className={s.buttonClose} type="button" onClick={onClose}>
            <span className="visually-hidden">Close</span>+
          </button>
        </HoverCursor>
        <FeedbackCard
          name={name}
          image={image}
          imageRetina={imageRetina}
          tour={tour}
          feedback={feedback}
          isModal
        />
      </div>
    </div>
  );
};

export default ModalFeedback;
