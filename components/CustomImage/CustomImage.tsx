import { FC } from 'react';
import { PrismicNextImage } from '@prismicio/next';
import { ImageField } from '@prismicio/client';

import { useDevicePixelRatio } from '@/hooks';

interface ICustomImage {
  image: ImageField<never>;
  imageRetina: ImageField<never>;
}

const CustomImage: FC<ICustomImage> = ({ image, imageRetina }) => {
  const devicePixelRatio = useDevicePixelRatio();

  return devicePixelRatio === 1 ? (
    <PrismicNextImage field={image} />
  ) : (
    <PrismicNextImage field={imageRetina} />
  );
};

export default CustomImage;
