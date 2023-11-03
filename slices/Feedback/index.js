import SectionFeedback from '@/components/SectionFeedback';

/**
 * @typedef {import("@prismicio/client").Content.FeedbackSlice} FeedbackSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeedbackSlice>} FeedbackProps
 * @param {FeedbackProps}
 */

const Feedback = ({ slice }) => <SectionFeedback slice={slice} />;

export default Feedback;
