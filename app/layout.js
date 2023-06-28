import './globals.css';

export const metadata = {
  title: 'Your Tour',
  description: 'Travel agency',
  keywords: ['travel', 'tours', 'tour', 'adventure', 'hitchhiking', 'hiking'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
