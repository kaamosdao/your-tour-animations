import SectionPhotos from '@/components/SectionPhotos';

/**
 * @typedef {import("@prismicio/client").Content.PhotosSlice} PhotosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PhotosSlice>} PhotosProps
 * @param {PhotosProps}
 */

const Photos = ({ slice }) => <SectionPhotos slice={slice} />;

export default Photos;
