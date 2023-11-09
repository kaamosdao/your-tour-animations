import SectionContact from '@/components/SectionContact';

/**
 * @typedef {import("@prismicio/client").Content.ContactSlice} ContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSlice>} ContactProps
 * @param {ContactProps}
 */

const Contact = ({ slice }) => <SectionContact slice={slice} />;

export default Contact;
