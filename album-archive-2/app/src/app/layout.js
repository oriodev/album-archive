import React from 'react';

import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/providers';
import Navbar from '@/components/navigation/Navbar';

// config/metadata

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'album archive',
  description: 'album tracking app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
