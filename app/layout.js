import Providers from '@/providers/providers';

import Header from './_components/Header/index';
import HeaderFixed from './_components/HeaderFixed/index';
import Footer from './_components/Footer/index';
import CustomCursor from './_components/CustomCursor/index';

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
          <CustomCursor />
          <Header />
          <HeaderFixed />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
