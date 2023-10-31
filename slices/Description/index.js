/**
 * @typedef {import("@prismicio/client").Content.DescriptionSlice} DescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DescriptionSlice>} DescriptionProps
 * @param {DescriptionProps}
 */

import SectionDescription from '@/components/SectionDescription';

const Description = ({ slice }) => <SectionDescription slice={slice} />;

export default Description;
