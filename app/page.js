import SectionDescription from './_components/SectionDescription/SectionDescription';
import SectionChooseTour from './_components/SectionChooseTour/SectionChooseTour';
import SectionConstructTour from './_components/SectionConstructTour/SectionConstructTour';
import SectionContact from './_components/SectionContact/SectionContact';
import SectionFeedback from './_components/SectionFeedback/SectionFeedback';
import SectionHistories from './_components/SectionHistories/SectionHistories';
import SectionPhotos from './_components/SectionPhotos/SectionPhotos';

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
