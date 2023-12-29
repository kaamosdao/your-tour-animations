import React, { FC, RefObject } from 'react';

import { ModalData, ModalType } from '@/types';

import ClientOnlyPortal from '../ClientOnlyPortal';
import ModalFeedback from './ModalFeedback';

interface IModal {
  onClose: () => void;
  type: ModalType;
  data: ModalData;
  modalRef: RefObject<HTMLDivElement>;
}

const modals = {
  feedback: (
    onClose: () => void,
    modalRef: RefObject<HTMLDivElement>,
    data: ModalData
  ): JSX.Element => (
    <ModalFeedback onClose={onClose} data={data} modalRef={modalRef} />
  ),
};

const Modal: FC<IModal> = ({ onClose, type, data, modalRef }) => (
  <ClientOnlyPortal selector="body">
    {modals[type](onClose, modalRef, data)}
  </ClientOnlyPortal>
);

export default Modal;
