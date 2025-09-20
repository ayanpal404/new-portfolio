import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Roboto } from "next/font/google";
import ThemeToggle from '@/components/ThemeToggle';
import BottomAnimation from '@/components/buttomAnimation';
import { DataProvider } from '@/context/DataContext';
import JsonLd from '@/components/JsonLd';
import SEOEnhancer from '@/components/SEOEnhancer';
import MicrodataSEO from '@/components/MicrodataSEO';
import PerformanceSEO from '@/components/PerformanceSEO';
import PowerSEO from '@/components/PowerSEO';
import CrossPlatformIdentity from '@/components/CrossPlatformIdentity';
import SEOAudit from '@/components/SEOAudit';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose as needed
  variable: "--font-roboto", // optional: CSS variable
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ayan Pal | Full Stack Developer West Bengal | MCA Adamas University | Software Engineer Karimpur',
  description: 'Ayan Pal - Who is Ayan Pal? A passionate full-stack software developer from West Bengal, Karimpur. MCA student at Adamas University specializing in React.js, Next.js, AI integration, cloud computing. Aspiring software engineer building modern web applications and AI solutions. Portfolio showcasing real-world projects and technical expertise.',
  keywords: 'Ayan Pal, ayanpal01, @ayanpal01, ayanpal01 Ayan Pal, who is ayanpal01, ayanpal01 developer, ayanpal01 software developer, ayanpal01 github, ayanpal01 linkedin, ayanpal01 twitter, ayanpal01 facebook, Ayan Pal ayanpal01, ayanpal01 profile, ayanpal01 portfolio, ayanpal01 West Bengal, ayanpal01 MCA, ayanpal01 Adamas University, Ayan Pal software developer, Ayan Pal West Bengal, Ayan Pal Karimpur, full stack developer West Bengal, software developer Karimpur, MCA Adamas University, Ayan Pal portfolio, Ayan Pal developer, software engineer West Bengal, React developer West Bengal, Next.js developer Bengal, AI developer India, Ayan Pal projects, Ayan Pal GitHub, fullstack developer Adamas University, tech enthusiast Bengal, web developer Karimpur, Ayan Pal ayanpal.tech, software development Bengal, programming West Bengal, Ayan Pal LinkedIn, Ayan Pal Twitter, Ayan Pal Facebook, aspiring software engineer India, modern web applications developer, AI integration specialist Bengal, cloud computing enthusiast West Bengal, problem solver developer, technology innovator Bengal, Ayan Pal technical skills, Ayan Pal education Adamas, Ayan Pal social media, Ayan Pal contact, ayanpal01 real name, ayanpal01 full name, ayanpal01 identity',
  authors: [{ name: 'Ayan Pal', url: 'https://ayanpal.tech' }],
  creator: 'Ayan Pal - Full Stack Developer West Bengal',
  publisher: 'Ayan Pal Portfolio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ayanpal.tech'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en-IN': '/',
      'en-GB': '/',
    }
  },
  category: 'Technology',
  classification: 'Software Development Portfolio',
  openGraph: {
    title: 'Ayan Pal | Who is Ayan Pal? ayanpal01 Full Stack Software Developer from West Bengal',
    description: 'Discover Ayan Pal (ayanpal01) - A passionate full-stack developer from Karimpur, West Bengal. MCA student at Adamas University creating innovative web applications, AI solutions, and modern software. Connect with @ayanpal01 on social media.',
    url: 'https://ayanpal.tech',
    siteName: 'Ayan Pal - ayanpal01 Software Developer Portfolio',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Ayan Pal (ayanpal01) - Full Stack Software Developer from West Bengal, MCA Student at Adamas University',
        type: 'image/png',
      },
      {
        url: 'https://in.linkedin.com/in/ayanpal01',
        width: 400,
        height: 400,
        alt: 'Ayan Pal ayanpal01 LinkedIn Profile Photo',
        type: 'image/jpeg',
      },
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'ayanpal01 Portfolio - Ayan Pal Software Development Projects',
        type: 'image/png',
      }
    ],
    locale: 'en_US',
    type: 'profile',
    countryName: 'India',
    emails: ['contact@ayanpal.tech'],
    phoneNumbers: [],
    faxNumbers: [],
    alternateLocale: ['en_IN', 'en_GB'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ayanpal01',
    creator: '@ayanpal01',
    title: 'Ayan Pal | Software Developer West Bengal | MCA Adamas University',
    description: 'Who is Ayan Pal? Full-stack developer from Karimpur, West Bengal. MCA at Adamas University. Specializing in React, Next.js, AI, and cloud computing. Building innovative web solutions.',
    images: {
      url: '/icon.png',
      alt: 'Ayan Pal - Software Developer Portfolio',
      width: 1200,
      height: 630,
    },
  },
  verification: {
    google: '', // Add your Google Search Console verification code
    yandex: '', // Add Yandex verification code
    yahoo: '', // Add Yahoo verification code
    other: {
      'msvalidate.01': '', // Bing verification
      'p:domain_verify': '', // Pinterest verification
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon.png', sizes: '64x64', type: 'image/png' },
      { url: '/icon.png', sizes: '128x128', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icon.png',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Ayan Pal Portfolio',
  },
  applicationName: 'Ayan Pal Portfolio',
  referrer: 'origin-when-cross-origin',
  appLinks: {
    web: {
      url: 'https://ayanpal.tech',
      should_fallback: true,
    },
  },
  archives: ['https://ayanpal.tech'],
  assets: ['https://ayanpal.tech'],
  bookmarks: ['https://ayanpal.tech'],
  other: {
    // Advanced SEO meta tags
    'theme-color': '#000000',
    'color-scheme': 'light dark',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    
    // Dublin Core Metadata
    'DC.title': 'Ayan Pal - Full Stack Developer West Bengal',
    'DC.creator': 'Ayan Pal',
    'DC.subject': 'Software Development, Web Development, AI, Technology',
    'DC.description': 'Portfolio of Ayan Pal, full-stack developer from West Bengal specializing in modern web technologies',
    'DC.publisher': 'Ayan Pal',
    'DC.contributor': 'Ayan Pal',
    'DC.date': '2025-09-20',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://ayanpal.tech',
    'DC.language': 'en-US',
    'DC.coverage': 'West Bengal, India',
    'DC.rights': '© 2025 Ayan Pal',
    
    // Geographic targeting
    'geo.region': 'IN-WB',
    'geo.placename': 'Karimpur, West Bengal, India',
    'geo.position': '23.0225;88.3639',
    'ICBM': '23.0225, 88.3639',
    
    // Professional metadata
    'profession': 'Full Stack Software Developer',
    'specialization': 'Web Development, AI Integration, Cloud Computing',
    'location': 'West Bengal, India',
    'education': 'Master of Computer Applications - Adamas University',
    'experience-level': 'Aspiring Professional',
    'expertise': 'React.js, Next.js, JavaScript, TypeScript, Node.js, AI Integration',
    
    // Content classification
    'content-type': 'Portfolio Website',
    'content-language': 'en-US',
    'content-script-type': 'text/javascript',
    'content-style-type': 'text/css',
    'distribution': 'global',
    'rating': 'general',
    'robots': 'index,follow,noodp,noydir',
    'revisit-after': '3 days',
    
    // Social and professional verification
    'linkedin:profile': 'https://in.linkedin.com/in/ayanpal01',
    'github:profile': 'https://github.com/ayanpal404',
    'twitter:profile': 'https://twitter.com/ayanpal01',
    'facebook:profile': 'https://www.facebook.com/share/1EnB9u9RND/',
    
    // Username association
    'username': 'ayanpal01',
    'handle': '@ayanpal01',
    'social-username': 'ayanpal01',
    'brand-name': 'Ayan Pal',
    'real-name': 'Ayan Pal',
    'full-name': 'Ayan Pal',
    'display-name': 'Ayan Pal (@ayanpal01)',
    
    // Cross-platform identity
    'twitter:username': 'ayanpal01',
    'linkedin:username': 'ayanpal01', 
    'github:username': 'ayanpal404',
    'facebook:username': 'Ayan Pal',
    
    // Technical specifications
    'HandheldFriendly': 'true',
    'MobileOptimized': 'width',
    'viewport-fit': 'cover',
    
    // SEO enhancement tags
    'page-topic': 'Ayan Pal Software Developer Portfolio',
    'page-type': 'Personal Portfolio Website',
    'audience': 'Recruiters, Tech Companies, Developers, Students, Professionals',
    'target-audience': 'Technology Professionals, Hiring Managers, Fellow Developers',
    'intended-audience': 'Professional',
    
    // News and article metadata
    'news_keywords': 'Ayan Pal, Software Developer, West Bengal, MCA Student, Tech Portfolio',
    'article:author': 'Ayan Pal',
    'article:publisher': 'https://ayanpal.tech',
    'article:section': 'Technology',
    'article:tag': 'Software Development, Web Development, AI, Portfolio',
    
    // Additional Open Graph
    'og:locality': 'Karimpur',
    'og:region': 'West Bengal',
    'og:country-name': 'India',
    'og:postal-code': '',
    'og:street-address': 'Karimpur, West Bengal',
    
    // Schema.org hints
    'schema:Person': 'Ayan Pal',
    'schema:jobTitle': 'Full Stack Developer',
    'schema:worksFor': 'Adamas University',
    'schema:alumniOf': 'Adamas University',
  }
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
          <ThemeToggle />
          </DataProvider>
          <BottomAnimation />
        </Providers>
        <JsonLd />
        <SEOEnhancer />
        <MicrodataSEO />
        <PerformanceSEO />
        <PowerSEO />
        <CrossPlatformIdentity />
        <SEOAudit />
      </body>
    </html>
  )
}
