import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Roboto } from "next/font/google";
import ThemeToggle from '@/components/ThemeToggle';
import BottomAnimation from '@/components/buttomAnimation';
import { DataProvider } from '@/context/DataContext';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose as needed
  variable: "--font-roboto", // optional: CSS variable
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${roboto.className}`} suppressHydrationWarning>
      <body>
        <Providers>
          <DataProvider>
            {children}
          </DataProvider>
          <ThemeToggle />
          <BottomAnimation />
        </Providers>
      </body>
    </html>
  )
}
