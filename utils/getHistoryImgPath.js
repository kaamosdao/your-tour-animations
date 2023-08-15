const getMediaVariableName = (width) => {
  if (width <= 360) {
    return 'mobile';
  }
  if (width <= 1024) {
    return 'desktop-md';
  }
  return 'desktop-lg';
};

const getHistoryImgPath = (name) => {
  const mediaString = getMediaVariableName(window.innerWidth);
  const ratioString = window.devicePixelRatio === 1 ? '' : '@2x';
  return `img/histories/${name}-${mediaString}${ratioString}.jpg`;
};

export default getHistoryImgPath;
