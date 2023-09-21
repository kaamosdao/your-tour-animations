/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable arrow-body-style */

import React from 'react';
import PropTypes from 'prop-types';
import { Transition, TransitionGroup } from 'react-transition-group';

import VisiblePageContext from '@/hooks/context/VisiblePageContext';
import isVisible from '@/utils/isVisible';

const ReactTransitionGroup = ({
  transitionKey,
  classNames,
  timeout,
  children,
  onEnter,
  onExit,
  onExited,
  onEntered,
  disableProps,
  addEndListener,
  isVisible: parentIsVisible,
}) => {
  return (
    <TransitionGroup component={null}>
      <Transition
        key={transitionKey}
        classNames={classNames}
        timeout={timeout}
        onEnter={onEnter}
        onExit={onExit}
        onExited={onExited}
        onEntered={onEntered}
        addEndListener={addEndListener}
      >
        {(status) => {
          if (disableProps) {
            return children;
          }

          return (
            <VisiblePageContext.Provider
              value={
                parentIsVisible !== undefined
                  ? isVisible(status) && parentIsVisible
                  : isVisible(status)
              }
            >
              {children}
            </VisiblePageContext.Provider>
          );
        }}
      </Transition>
    </TransitionGroup>
  );
};

ReactTransitionGroup.propTypes = {
  transitionKey: PropTypes.any,
  onExit: PropTypes.func,
  addEndListener: PropTypes.func,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  onEntered: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  disableProps: PropTypes.bool,
  isVisible: PropTypes.bool,
  classNames: PropTypes.string,
};

ReactTransitionGroup.defaultProps = {
  classNames: 'reactTransitionGroup',
};

export default ReactTransitionGroup;
