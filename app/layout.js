import Providers from '@/providers/providers';

import Header from './_components/Header/index';
import Footer from './_components/Footer/index';
import CustomCursor from './_components/CustomCursor/index';
import Curtain from './_components/Curtain';
import Transition from './_components/Transition';

import './_styles/style.scss';

export const metadata = {
  title: 'Your Tour',
  description: 'Travel agency',
  keywords: ['travel', 'tours', 'tour', 'adventure', 'hitchhiking', 'hiking'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Curtain />
          <CustomCursor />
          <Header />
          <Transition>{children}</Transition>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
