import Header from './_components/header/Header';
import HeaderFixed from './_components/header-fixed/HeaderFixed';
import Footer from './_components/Footer';

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
        <Header />
        <HeaderFixed />
        {children}
        <Footer />
      </body>
    </html>
  );
}
