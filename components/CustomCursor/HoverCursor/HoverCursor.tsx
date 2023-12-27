'use client';

import React, { ReactNode, ReactElement, MouseEvent } from 'react';

import { setCursor } from '@/store/slices/cursorSlice';

import { useAppDispatch } from '@/hooks';
import { CursorData, CursorType } from '@/types';

interface IHoverCursor {
  children: ReactNode;
  type: CursorType;
  data?: CursorData;
  activeLink?: string;
  fnsOnEnter?: (() => void)[];
  fnsOnLeave?: (() => void)[];
}

const HoverCursor = ({
  children,
  type,
  data = null,
  activeLink,
  fnsOnEnter,
  fnsOnLeave,
}: IHoverCursor): ReactNode => {
  const dispatch = useAppDispatch();

  const onMouseEnter = (e: MouseEvent<HTMLElement>): void => {
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

  return React.cloneElement(children as ReactElement, {
    onMouseEnter,
    onMouseLeave,
  });
};

export default HoverCursor;
