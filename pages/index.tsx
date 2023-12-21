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
