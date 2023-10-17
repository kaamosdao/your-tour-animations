import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ClientOnlyPortal from '../ClientOnlyPortal';
import ModalFeedback from './ModalFeedback';

import s from './Modal.module.scss';

const cn = classNames.bind(s);

const modals = {
  feedback: (onClose, data = null) => (
    <ModalFeedback onClose={onClose} data={data} />
  ),
};

const Modal = ({ onClose, type, data }) => (
  <ClientOnlyPortal selector="body">
    <div className={cn('modal')} onClick={onClose} aria-hidden="true">
      {modals[type](onClose, data)}
    </div>
    ,
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
