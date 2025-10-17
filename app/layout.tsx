import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import './globals.css';
import HeaderWrapper from '@/src/layout/HeaderWrapper';
import PageTransition from '@/components/PageTransition';
import EffectEntrance from '@/components/EffectEntrance';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900']
});

export const metadata: Metadata = {
  title: 'Briyan Sitinjak',
  description: 'This is Briyan Sitinjak Website'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans3.className}>
        <HeaderWrapper />
        <EffectEntrance />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
