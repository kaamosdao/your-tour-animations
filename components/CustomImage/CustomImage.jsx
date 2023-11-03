import { PrismicNextImage } from '@prismicio/next';

const CustomImage = ({ image, imageRetina, devicePixelRatio }) =>
  devicePixelRatio === 1 ? (
    <PrismicNextImage field={image} />
  ) : (
    <PrismicNextImage field={imageRetina} />
  );

export default CustomImage;
