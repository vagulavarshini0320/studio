import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google'

export const metadata: Metadata = {
  title: 'VV Software Solutions',
  description: 'Building Smart Solutions for a Smarter Future',
  icons: {
    icon: '/logo.png',
  },
};

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const fontHeadline = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
})

const fontMono = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontBody.variable, fontHeadline.variable, fontMono.variable, "font-body antialiased")}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
