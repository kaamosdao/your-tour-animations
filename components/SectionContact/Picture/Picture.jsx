import CustomImage from '../../CustomImage';

import s from './Picture.module.scss';

const Picture = ({ slice, addRef }) => (
  <div ref={addRef} className={s.picture}>
    <CustomImage
      image={slice.primary.image}
      imageRetina={slice.primary.image_retina}
    />
  </div>
);

export default Picture;
