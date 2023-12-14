import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { PrismicNextImage } from '@prismicio/next';

import { useDevicePixelRatio } from '@/hooks';

const CustomImage = ({ image, imageRetina }) => {
  const devicePixelRatio = useDevicePixelRatio();

  const refreshScrollTrigger = () => {
    ScrollTrigger.refresh();
  };

  return devicePixelRatio === 1 ? (
    <PrismicNextImage onLoad={refreshScrollTrigger} field={image} />
  ) : (
    <PrismicNextImage onLoad={refreshScrollTrigger} field={imageRetina} />
  );
};

export default CustomImage;
