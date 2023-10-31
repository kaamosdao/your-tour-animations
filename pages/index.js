// import SectionChooseTour from '@/components/SectionChooseTour';
// import SectionConstructTour from '@/components/SectionConstructTour';
// import SectionContact from '@/components/SectionContact';
// import SectionDescription from '@/components/SectionDescription';
// import SectionFeedback from '@/components/SectionFeedback';
// import SectionHistories from '@/components/SectionHistories';
// import SectionPhotos from '@/components/SectionPhotos';

// export default function Home() {
//   return (
//     <main>
//       <h1 className="visually-hidden">Выбери свой тур c YourTour</h1>
//       <SectionDescription />
//       <SectionChooseTour />
//       <SectionConstructTour />
//       <SectionFeedback />
//       <SectionPhotos />
//       <SectionHistories />
//       <SectionContact />
//     </main>
//   );
// }

import Head from 'next/head';
import { isFilled } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';

import { components } from '@/slices';
import { createClient } from '@/prismicio';

export default function Page({ page }) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepage');

  return {
    props: { page },
  };
}
