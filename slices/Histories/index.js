import SectionHistories from '@/components/SectionHistories';

/**
 * @typedef {import("@prismicio/client").Content.HistoriesSlice} HistoriesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HistoriesSlice>} HistoriesProps
 * @param {HistoriesProps}
 */

const Histories = ({ slice }) => <SectionHistories slice={slice} />;

export default Histories;
