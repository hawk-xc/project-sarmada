import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sarmada - Empowering Business with Smart Solutions',
  description: 'Empowering Business with Smart Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/fav_icon.png" />
      <body className={inter.className}>
        {children}
        <ScrollToTopButton />
        <Analytics /> 
        <SpeedInsights />
      </body>
    </html>
  );
}