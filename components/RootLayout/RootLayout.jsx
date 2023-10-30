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
