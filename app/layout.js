import Header from '@/app/_components/Header';

import { Josefin_Sans } from 'next/font/google';

import '@/app/_styles/globals.css';
import ReservationProvider from './_components/ReservationContext';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s / The Whild Oasis',
    default: 'Welcome / The Whild Oasis',
  },

  description:
    'Luxuries cabin hotel, located in the heart of the Italian Dolmoties , sorrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr'>
      <body
        className={`${josefin.className} text-primary-100 bg-primary-950 min-h-dvh flex flex-col antialiased relative`}
      >
        <Header />

        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl w-full mx-auto'>
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
