import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sarmanda',
  description: 'Sarmanda modern web interface',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}