import Head from 'next/head';

import Providers from '@/providers/index';

import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import CustomCursor from '@/components/CustomCursor/index';
import Curtain from '@/components/Curtain';

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Your Tour</title>
        <meta name="description" content="Travel agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="travel, tours, tour, adventure, hitchhiking, hiking"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Providers>
        <CustomCursor />
        <Curtain />
        <Header />
        {children}
        <Footer />
      </Providers>
    </>
  );
}
