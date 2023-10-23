import Image from 'next/image';
import PropTypes from 'prop-types';

const Picture = ({ img, devicePixelRatio, alt, format = 'webp' }) => (
  <Image
    src={`${img.url}${devicePixelRatio === 1 ? '' : '@2x'}.${format}`}
    alt={alt}
    width={img.width}
    height={img.height}
    loading="lazy"
  />
);

Picture.propTypes = {
  img: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  devicePixelRatio: PropTypes.number,
  alt: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
};

export default Picture;
