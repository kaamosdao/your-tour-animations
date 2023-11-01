import SectionChooseTour from '@/components/SectionChooseTour';

/**
 * @typedef {import("@prismicio/client").Content.ChooseTourSlice} ChooseTourSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ChooseTourSlice>} ChooseTourProps
 * @param {ChooseTourProps}
 */

const ChooseTour = ({ slice }) => <SectionChooseTour slice={slice} />;

export default ChooseTour;
