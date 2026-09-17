import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileDock } from '@/components/MobileDock';
import { JsonLd } from '@/components/JsonLd';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rivolending.com.au'),
  title: {
    default: 'Rivo Lending | Mortgage Broker Sydney & Australia-wide',
    template: '%s | Rivo Lending',
  },
  description:
    'Sydney mortgage broker providing expert home loan, refinancing, and commercial lending advice. Compare 30+ lenders with no broker fee in most standard cases. Free borrowing capacity assessment.',
  keywords: [
    'mortgage broker sydney',
    'sydney mortgage broker',
    'home loans sydney',
    'refinance home loan australia',
    'first home buyer grant nsw',
    'commercial loans sydney',
    'investment property loan',
    'low deposit home loan',
    'smsf property loan',
    'best mortgage broker sydney',
    'rivo lending',
    'mortgage broker parramatta',
    'mortgage broker inner west',
  ],
  authors: [{ name: 'Rivo Lending', url: 'https://www.rivolending.com.au' }],
  creator: 'Rivo Lending',
  publisher: 'Rivo Lending',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Rivo Lending | Mortgage Broker Sydney & Australia-wide',
    description:
      'Expert mortgage broking and property finance. Compare 30+ Australian lenders with no broker fee in most standard cases.',
    url: 'https://www.rivolending.com.au',
    siteName: 'Rivo Lending',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/logo_rivo.png',
        width: 1200,
        height: 630,
        alt: 'Rivo Lending - Mortgage & Property Finance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rivo Lending | Mortgage Broker Sydney & Australia-wide',
    description:
      'Expert mortgage broking and property finance in Sydney and across Australia.',
    images: ['/logo_rivo.png'],
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
  category: 'finance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased bg-brand-warm min-h-screen flex flex-col selection:bg-brand-teal/20 pb-[env(safe-area-inset-bottom)] md:pb-0`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileDock />
      </body>
    </html>
  );
}

