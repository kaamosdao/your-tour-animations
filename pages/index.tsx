import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { isFilled } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';

import { components } from '@/slices';
import { createClient } from '@/prismicio';
import { HomepageDocument } from '@/prismicio-types';

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  // The query fetches the page's data based on the current URL.
  const page: HomepageDocument = await client.getSingle('homepage');

  return {
    props: { page },
  };
}

export default function Page({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
