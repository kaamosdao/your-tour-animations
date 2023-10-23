import PropTypes from 'prop-types';

const Picture = ({
  desktopImg = null,
  tabletImg = null,
  defaultImg,
  alt,
  format = 'jpg',
}) => (
  <picture>
    {desktopImg && (
      <source
        type="image/webp"
        media="(min-width: 1920px)"
        srcSet={`
      ${desktopImg.url}.webp    1x,
      ${desktopImg.url}@2x.webp 2x
    `}
        width={desktopImg.width}
        height={desktopImg.height}
      />
    )}
    {tabletImg && (
      <source
        type="image/webp"
        media="(min-width: 500px)"
        srcSet={`
        ${tabletImg.url}.webp    1x,
        ${tabletImg.url}@2x.webp 2x
    `}
        width={tabletImg.width}
        height={tabletImg.height}
      />
    )}
    <source
      type="image/webp"
      srcSet={`
      ${defaultImg.url}.webp    1x,
      ${defaultImg.url}@2x.webp 2x
    `}
      width={defaultImg.width}
      height={defaultImg.height}
    />
    {desktopImg && (
      <source
        media="(min-width: 1920px)"
        srcSet={`
      ${desktopImg.url}.${format} 1x,
      ${desktopImg.url}@2x.${format} 2x
    `}
        width={desktopImg.width}
        height={desktopImg.height}
      />
    )}
    {tabletImg && (
      <source
        media="(min-width: 500px)"
        srcSet={`
        ${tabletImg.url}.${format} 1x,
        ${tabletImg.url}@2x.${format} 2x
    `}
        width={tabletImg.width}
        height={tabletImg.height}
      />
    )}
    <img
      src={`${defaultImg.url}.${format}`}
      srcSet={`${defaultImg.url}@2x.${format} 2x`}
      alt={alt}
      width={defaultImg.width}
      height={defaultImg.height}
      loading="lazy"
    />
  </picture>
);

Picture.propTypes = {
  desktopImg: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
  tabletImg: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
  defaultImg: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
  alt: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
};

export default Picture;
