/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable arrow-body-style */

import React from 'react';
import PropTypes from 'prop-types';
import { Transition, SwitchTransition } from 'react-transition-group';

import isVisible from '@/utils/isVisible';

const ReactSwitchTransition = ({
  mode,
  transitionKey,
  classNames = 'reactSwitchTransition',
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
    <SwitchTransition mode={mode}>
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
          if (typeof children === 'function') {
            return children({
              transitionStatus: status,
              isVisible:
                parentIsVisible !== undefined
                  ? isVisible(status) && parentIsVisible
                  : isVisible(status),
            });
          }

          if (disableProps) {
            return children;
          }

          return React.cloneElement(children, {
            transitionStatus: status,
            isVisible:
              parentIsVisible !== undefined
                ? isVisible(status) && parentIsVisible
                : isVisible(status),
          });
        }}
      </Transition>
    </SwitchTransition>
  );
};

ReactSwitchTransition.propTypes = {
  mode: PropTypes.string,
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

export default ReactSwitchTransition;
