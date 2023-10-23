import React from 'react';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
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

export default Modal;
