import { PrismicNextImage } from '@prismicio/next';

import { useDevicePixelRatio } from '@/hooks';

const CustomImage = ({ image, imageRetina }) => {
  const devicePixelRatio = useDevicePixelRatio();

  return devicePixelRatio === 1 ? (
    <PrismicNextImage field={image} />
  ) : (
    <PrismicNextImage field={imageRetina} />
  );
};

export default CustomImage;
