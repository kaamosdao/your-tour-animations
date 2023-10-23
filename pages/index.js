import SectionChooseTour from '@/components/SectionChooseTour';
import SectionConstructTour from '@/components/SectionConstructTour';
import SectionContact from '@/components/SectionContact';
import SectionDescription from '@/components/SectionDescription';
import SectionFeedback from '@/components/SectionFeedback';
import SectionHistories from '@/components/SectionHistories';
import SectionPhotos from '@/components/SectionPhotos';

export default function Home() {
  return (
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
}
