import Head from 'next/head';

export default function PerformanceSEO() {
  return (
    <Head>
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//twitter.com" />
      
      {/* Preconnect for critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/icon.png" as="image" type="image/png" />
      <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link rel="preload" href="/fonts/Roboto.woff2" as="font" type="font/woff2" crossOrigin="" />
      
      {/* Resource hints for better performance */}
      <link rel="prefetch" href="/projects" />
      <link rel="prefetch" href="/api/data" />
      
      {/* Security and privacy headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Cache control for better performance */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      
      {/* Optimize for mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      
      {/* PWA optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Ayan Pal" />
      
      {/* Browser optimization */}
      <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="color-scheme" content="light dark" />
      
      {/* Performance hints */}
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
      <meta name="supported-color-schemes" content="light dark" />
    </Head>
  );
}
