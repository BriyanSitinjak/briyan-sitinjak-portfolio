import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderWrapper from '@/src/layout/HeaderWrapper';
import FooterWrapper from '@/src/layout/FooterWrapper';
import PageTransition from '@/components/PageTransition';
import EffectEntrance from '@/components/EffectEntrance';
import { EntranceProvider } from '@/src/context/EntranceContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Briyan Sitinjak - Frontend Engineer (Remote)',
    template: '%s | Briyan Sitinjak'
  },
  description:
    'Frontend Engineer with 5+ years building EdTech and production web apps with Next.js, TypeScript, Jest, and Cypress. Remote experience in UK, Australia, and Germany. Open to contract, freelance, and full-time roles.',
  keywords: [
    'Frontend Engineer',
    'Remote Frontend Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'React Developer',
    'Freelance Web Developer',
    'Contract Frontend Developer',
    'EdTech Developer',
    'Cypress',
    'Jest',
    'WordPress Developer',
  ],
  authors: [{ name: 'Briyan Sitinjak', url: 'https://briyan-sitinjak-portfolio.vercel.app/' }],
  creator: 'Briyan Sitinjak',
  publisher: 'Briyan Sitinjak',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://briyan-sitinjak-portfolio.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://briyan-sitinjak-portfolio.vercel.app/',
    title: 'Briyan Sitinjak - Frontend Engineer (Remote)',
    description:
      'Frontend Engineer with 5+ years in Next.js, TypeScript, and automated testing. Remote-ready—open to contract, freelance, and full-time opportunities.',
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
    title: 'Briyan Sitinjak - Frontend Engineer (Remote)',
    description:
      'Frontend Engineer with 5+ years in Next.js, TypeScript, and automated testing. Remote-ready—open to contract, freelance, and full-time opportunities.',
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-primary font-sans text-white antialiased">
        <EntranceProvider>
          <HeaderWrapper />
          <EffectEntrance />
          <PageTransition>
            <main className="flex-1 w-full">{children}</main>
          </PageTransition>
          <FooterWrapper />
        </EntranceProvider>
      </body>
    </html>
  );
}
