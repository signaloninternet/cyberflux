import CustomCursor from '@/components/Cursor';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
      
      <body className='bg-black max-w-[2100px] mx-auto' >
      <CustomCursor />
        {children}</body>
    </html>
  );
}