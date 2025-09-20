import Script from 'next/script'

interface SEOEnhancerProps {
  title?: string
  description?: string
  canonicalUrl?: string
}

export default function SEOEnhancer({ 
  title = "Ayan Pal | Full Stack Developer West Bengal", 
  description = "Ayan Pal - Who is Ayan Pal? Full stack software developer from Karimpur, West Bengal. MCA student at Adamas University. Expert in React, Next.js, AI integration.",
  canonicalUrl = "https://ayanpal.tech"
}: SEOEnhancerProps) {
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ayan Pal Portfolio",
    "url": "https://ayanpal.tech",
    "logo": "https://ayanpal.tech/icon.png",
    "sameAs": [
      "https://linkedin.com/in/ayanpal01",
      "https://github.com/ayanpal404", 
      "https://twitter.com/ayanpal01"
    ],
    "founder": {
      "@type": "Person",
      "name": "Ayan Pal"
    },
    "description": "Portfolio website of Ayan Pal, showcasing software development projects and technical expertise"
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "Person",
      "name": "Ayan Pal",
      "jobTitle": "Full Stack Software Developer",
      "worksFor": "Adamas University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karimpur",
        "addressRegion": "West Bengal",
        "addressCountry": "India"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ayanpal.tech"
        }
      ]
    }
  }

  return (
    <>
      {/* Additional meta tags for better targeting */}
      <Script id="seo-enhancer-meta" strategy="afterInteractive">
        {`
          // Additional targeting for Ayan Pal searches
          if (typeof document !== 'undefined') {
            const meta = document.createElement('meta');
            meta.name = 'subject';
            meta.content = 'Ayan Pal Software Developer Portfolio';
            document.head.appendChild(meta);
            
            const meta2 = document.createElement('meta');
            meta2.name = 'abstract';
            meta2.content = 'Professional portfolio of Ayan Pal, full-stack developer from West Bengal, India';
            document.head.appendChild(meta2);
            
            const meta3 = document.createElement('meta');
            meta3.name = 'topic';
            meta3.content = 'Software Development, Web Development, Ayan Pal';
            document.head.appendChild(meta3);
            
            const meta4 = document.createElement('meta');
            meta4.name = 'summary';
            meta4.content = 'Ayan Pal - MCA student at Adamas University, specializing in full-stack development and AI integration';
            document.head.appendChild(meta4);
          }
        `}
      </Script>

      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  )
}
