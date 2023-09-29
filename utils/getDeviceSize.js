import { sizeType } from './types';

const getDeviceSize = (width) => {
  if (width >= 1920) {
    return sizeType.desktopLg;
  }
  if (width >= 500) {
    return sizeType.tabletMd;
  }
  return sizeType.mobile;
};

export default getDeviceSize;
