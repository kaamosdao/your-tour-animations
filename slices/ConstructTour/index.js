import SectionConstructTour from '@/components/SectionConstructTour';

/**
 * @typedef {import("@prismicio/client").Content.ConstructTourSlice} ConstructTourSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ConstructTourSlice>} ConstructTourProps
 * @param {ConstructTourProps}
 */

const ConstructTour = ({ slice }) => <SectionConstructTour slice={slice} />;

export default ConstructTour;
