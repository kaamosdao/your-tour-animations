import React from 'react';

import ClientOnlyPortal from '../ClientOnlyPortal';
import ModalFeedback from './ModalFeedback';

const modals = {
  feedback: (onClose, modalRef, data = null) => (
    <ModalFeedback onClose={onClose} data={data} modalRef={modalRef} />
  ),
};

const Modal = ({ onClose, type, data, modalRef }) => (
  <ClientOnlyPortal selector="body">
    {modals[type](onClose, modalRef, data)}
  </ClientOnlyPortal>
);

export default Modal;
