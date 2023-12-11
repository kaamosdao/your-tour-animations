import { sizeType } from './types';

const getPictureShift = (deviceSize) => {
  if (deviceSize === sizeType.mobile) {
    return 18;
  }

  if (deviceSize === sizeType.tabletMd) {
    return 20;
  }

  return 30;
};

export default getPictureShift;
