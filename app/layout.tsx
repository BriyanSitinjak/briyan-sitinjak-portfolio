import type { Metadata, Viewport } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import './globals.css';
import HeaderWrapper from '@/src/layout/HeaderWrapper';
import PageTransition from '@/components/PageTransition';
import EffectEntrance from '@/components/EffectEntrance';
import ErrorBoundary from '@/components/ErrorBoundary';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-source-sans-3',
});

export const metadata: Metadata = {
  title: {
    default: 'Briyan Sitinjak - Frontend Developer & WordPress Developer',
    template: '%s | Briyan Sitinjak'
  },
  description: 'Experienced Frontend Developer and WordPress Developer specializing in React, Next.js, TypeScript, and modern web technologies. 4+ years of experience building scalable web applications.',
  keywords: [
    'Frontend Developer',
    'WordPress Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Web Developer',
    'JavaScript Developer',
    'UI/UX Developer'
  ],
  authors: [{ name: 'Briyan Sitinjak', url: 'https://briyansitinjak.com' }],
  creator: 'Briyan Sitinjak',
  publisher: 'Briyan Sitinjak',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://briyansitinjak.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://briyansitinjak.com',
    title: 'Briyan Sitinjak - Frontend Developer & WordPress Developer',
    description: 'Experienced Frontend Developer and WordPress Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    siteName: 'Briyan Sitinjak Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Briyan Sitinjak - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Briyan Sitinjak - Frontend Developer & WordPress Developer',
    description: 'Experienced Frontend Developer and WordPress Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1C1C22' },
    { media: '(prefers-color-scheme: dark)', color: '#1C1C22' },
  ],
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSans3.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1C1C22" />
      </head>
      <body className={`${sourceSans3.className} antialiased`}>
        <ErrorBoundary>
          <HeaderWrapper />
          <EffectEntrance />
          <PageTransition>{children}</PageTransition>
        </ErrorBoundary>
      </body>
    </html>
  );
}
