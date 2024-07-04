import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import EffectEntrance from '@/components/EffectEntrance';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
      <body className={inter.className}>
        <Header />
        <EffectEntrance />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
