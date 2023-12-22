enum TransitionAnimation {
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

export default TransitionAnimation;
