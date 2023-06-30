import SectionDescription from './_components/section-description/SectionDescription';
import SectionChooseTour from './_components/section-choose-tour/SectionChooseTour';
import SectionConstructTour from './_components/section-construct-tour/SectionConstructTour';
import SectionContact from './_components/SectionContact';
import SectionFeedback from './_components/section-feedback/SectionFeedback';
import SectionHistories from './_components/section-histories/SectionHistories';
import SectionPhotos from './_components/SectionPhotos';

const Home = () => (
  <main>
    <h1 className="visually-hidden">Выбери свой тур c YourTour</h1>
    <SectionDescription />
    <SectionChooseTour />
    <SectionConstructTour />
    <SectionFeedback />
    <SectionPhotos />
    <SectionHistories />
    <SectionContact />
  </main>
);

export default Home;
