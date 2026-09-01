//app/layout.js
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'M Sciences — Industrial water performance',
  description:
    'A brownfield pathway to better treatment economics, fit-for-purpose reuse and operating resilience — evaluated against your site, your baseline and your economics before you scale.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<link href="https://fonts.googleapis.com/css2?family=Caladea:wght@400;700&family=Carlito&family=IBM+Plex+Mono&display=swap" rel="stylesheet" />

      </head>
      <body>
        <Nav />
        <main className="view-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
