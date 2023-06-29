import SectionChooseTour from './section-choose-tour/SectionChooseTour';
import SectionConstructTour from './section-construct-tour/SectionConstructTour';
import SectionContact from './SectionContact';
import SectionFeedback from './section-feedback/SectionFeedback';
import SectionHistories from './section-histories/SectionHistories';
import SectionPhotos from './SectionPhotos';

const Main = () => (
  <main>
    <h1 className="visually-hidden">Выбери свой тур c YourTour</h1>
    <SectionChooseTour />
    <SectionConstructTour />
    <SectionFeedback />
    <SectionPhotos />
    <SectionHistories />
    <SectionContact />
  </main>
);

export default Main;
