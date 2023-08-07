'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setCursor } from '@/store/slices/cursorSlice';

import cursorState from '@/utils/types';

const HoverCursor = ({
  children,
  cursorType,
  data,
  activeLink,
  fnsOnEnter,
  fnsOnLeave,
}) => {
  const dispatch = useDispatch();

  const onMouseEnter = (e) => {
    if (fnsOnEnter) {
      fnsOnEnter.forEach((fn) => fn());
    }

    if (cursorType !== cursorState.stuck) {
      dispatch(setCursor({ type: cursorState[cursorType], data }));
      return;
    }

    const link = e.currentTarget;
    const { left, top, width, height } = link.getBoundingClientRect();

    if ((activeLink && !link.className.includes(activeLink)) || !activeLink) {
      dispatch(
        setCursor({
          type: cursorState[cursorType],
          data: {
            left,
            top,
            width,
            height,
            borderRadius: '3px',
            padding: '4px',
          },
        })
      );
    }
  };

  const onMouseLeave = () => {
    if (fnsOnLeave) {
      fnsOnLeave.forEach((fn) => fn());
    }

    dispatch(setCursor({ type: cursorState.default, data: null }));
  };

  return React.cloneElement(children, {
    onMouseEnter,
    onMouseLeave,
  });
};

HoverCursor.propTypes = {
  children: PropTypes.element.isRequired,
  cursorType: PropTypes.string.isRequired,
  data: PropTypes.string,
  activeLink: PropTypes.string,
  fnsOnEnter: PropTypes.arrayOf(PropTypes.func),
  fnsOnLeave: PropTypes.arrayOf(PropTypes.func),
};

export default HoverCursor;
