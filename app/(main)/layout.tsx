// app/layout.tsx or app/pages/_app.tsx (whichever you're using)
import CustomCursor from '@/components/Cursor';
import '../globals.css';
import type { Metadata } from 'next';
import { Montserrat, Manrope } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

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
    <html lang="en" className={`${montserrat.variable} ${manrope.variable}`}>
      <body className="bg-black max-w-[2100px] mx-auto">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
