/**
 * @typedef {import("@prismicio/client").Content.DescriptionSlice} DescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DescriptionSlice>} DescriptionProps
 * @param {DescriptionProps}
 */

import DescriptionSecondary from '@/components/DescriptionSecondary';
import SectionDescription from '@/components/SectionDescription';

const Description = ({ slice }) =>
  slice.variation === 'withoutButton' ? (
    <DescriptionSecondary slice={slice} />
  ) : (
    <SectionDescription slice={slice} />
  );

export default Description;
