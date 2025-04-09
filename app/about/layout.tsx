import CustomCursor from '@/components/Cursor';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ChangedCursor from '@/components/ChangedCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cyberflux - Creative Tech Agency',
  description: 'Innovating digital brands to the future',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className='bg-white'>
      <ChangedCursor />
        {children}</body>
    </html>
  );
}