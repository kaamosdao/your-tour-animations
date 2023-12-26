enum Direction {
  Vertical = 'Vertical',
  Horizontal = 'Horizontal',
}

export enum CursorType {
  Default = 'Default',
  Pulse = 'Pulse',
  Stuck = 'Stuck',
  Text = 'Text',
  GrowDot = 'GrowDot',
}

export type CursorData = {
  left: number;
  top: number;
  width: number;
  height: number;
  borderRadius: 'string';
  padding: 'string';
};

export enum TransitionState {
  Entering = 'entering',
  Entered = 'entered',
  Exiting = 'exiting',
  Exited = 'exited',
}

export enum ClipVar {
  TopRightX = '--cliptrX',
  TopLeftX = '--cliptlX',
  BottomRightX = '--clipbrX',
  BottomLeftX = '--clipblX',
  TopRightY = '--cliptrY',
  TopLeftY = '--cliptlY',
  BottomRightY = '--clipbrY',
  BottomLeftY = '--clipblY',
}

export default Direction;
