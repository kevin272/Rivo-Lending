import type {Metadata} from 'next';
import { DM_Serif_Display, Manrope } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const serif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Rivo Lending | Mortgage & Property Finance — Sydney & Australia-wide',
  description: 'Your next move starts with the right loan. Rivo Lending helps you navigate your options and find a loan that fits your goals.',
  icons: {
    icon: '/logo_rivo.jpeg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.variable} ${serif.variable} font-sans antialiased bg-brand-warm min-h-screen flex flex-col selection:bg-brand-teal/20`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
