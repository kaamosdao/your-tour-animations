import ChooseTourNavigation from './TourNavigation';
import TourLinks from './TourLinks';

import s from './SectionChooseTour.module.scss';

const SectionChooseTour = () => (
  <section className={s.chooseTour}>
    <h2 className={s.title}>Выбери свой тур</h2>
    <ChooseTourNavigation />
    <TourLinks />
  </section>
);

export default SectionChooseTour;
