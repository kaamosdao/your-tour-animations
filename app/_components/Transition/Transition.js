'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import ReactTransitionGroup from './ReactTransitionGroup';

const Transition = ({ children }) => {
  const path = usePathname();

  // const onEnter = () => {
  //   console.log('onEnter', path);
  // };

  // const onExit = () => {
  //   console.log('onExit', path);
  // };

  // const onEntered = () => {
  //   console.log('onEntered', path);
  // };

  // const onExited = () => {
  //   console.log('onExited', path);
  // };

  return (
    <ReactTransitionGroup
      // onEnter={onEnter}
      // onExit={onExit}
      // onExited={onExited}
      // onEntered={onEntered}
      timeout={0}
      transitionKey={path}
    >
      {children}
    </ReactTransitionGroup>
  );
};

export default Transition;
