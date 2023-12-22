'use client';

import React from 'react';
import PropTypes from 'prop-types';

import { setCursor } from '@/store/slices/cursorSlice';

import { useAppDispatch } from '@/hooks';
import { CursorType } from '@/types';

const HoverCursor = ({
  children,
  type,
  data = null,
  activeLink,
  fnsOnEnter,
  fnsOnLeave,
}) => {
  const dispatch = useAppDispatch();

  const onMouseEnter = (e) => {
    if (fnsOnEnter) {
      fnsOnEnter.forEach((fn) => fn());
    }

    if (type !== CursorType.Stuck) {
      dispatch(setCursor({ type: CursorType[type], data }));
      return;
    }

    const link = e.currentTarget;
    const { left, top, width, height } = link.getBoundingClientRect();

    if ((activeLink && !link.className.includes(activeLink)) || !activeLink) {
      dispatch(
        setCursor({
          type: CursorType[type],
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

    dispatch(setCursor({ type: CursorType.Default, data: null }));
  };

  return React.cloneElement(children, {
    onMouseEnter,
    onMouseLeave,
  });
};

HoverCursor.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.string,
  activeLink: PropTypes.string,
  fnsOnEnter: PropTypes.arrayOf(PropTypes.func),
  fnsOnLeave: PropTypes.arrayOf(PropTypes.func),
};

export default HoverCursor;
