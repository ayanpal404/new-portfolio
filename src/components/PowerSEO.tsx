import Script from 'next/script';

export default function PowerSEO() {
  // Advanced entity linking schema
  const entityLinkingSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "ayanpal01",
    "alternateName": "Ayan Pal",
    "url": "https://ayanpal.tech",
    "logo": "https://ayanpal.tech/icon.png",
    "sameAs": [
      "https://in.linkedin.com/in/ayanpal01",
      "https://github.com/ayanpal404", 
      "https://twitter.com/ayanpal01",
      "https://www.facebook.com/share/1EnB9u9RND/"
    ],
    "founder": {
      "@type": "Person",
      "name": "Ayan Pal",
      "alternateName": ["ayanpal01", "@ayanpal01"]
    },
    "description": "ayanpal01 is the brand identity of Ayan Pal, a full-stack software developer from West Bengal, India"
  };

  // Knowledge graph entity
  const knowledgeGraphSchema = {
    "@context": "https://schema.org",
    "@type": "Thing",
    "name": "ayanpal01",
    "alternateName": "Ayan Pal",
    "description": "ayanpal01 is the professional identity of Ayan Pal, a software developer from Karimpur, West Bengal",
    "mainEntityOfPage": "https://ayanpal.tech",
    "url": "https://ayanpal.tech",
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "username", 
        "value": "ayanpal01"
      },
      {
        "@type": "PropertyValue",
        "name": "handle",
        "value": "@ayanpal01"  
      }
    ],
    "sameAs": [
      "https://in.linkedin.com/in/ayanpal01",
      "https://github.com/ayanpal404",
      "https://twitter.com/ayanpal01", 
      "https://www.facebook.com/share/1EnB9u9RND/"
    ]
  };

  // Professional profile linking
  const professionalProfileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Ayan Pal",
      "alternateName": ["ayanpal01", "@ayanpal01", "Ayan Pal (@ayanpal01)"],
      "identifier": "ayanpal01",
      "jobTitle": "Full Stack Software Developer",
      "worksFor": {
        "@type": "EducationalOrganization", 
        "name": "Adamas University"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karimpur",
        "addressRegion": "West Bengal",
        "addressCountry": "India"
      }
    },
    "about": {
      "@type": "Person",
      "name": "Ayan Pal",
      "alternateName": "ayanpal01"
    }
  };

  // Social media verification schema
  const socialVerificationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ayan Pal",
    "alternateName": "ayanpal01",
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "LinkedIn",
        "value": "ayanpal01",
        "url": "https://in.linkedin.com/in/ayanpal01"
      },
      {
        "@type": "PropertyValue", 
        "name": "Twitter",
        "value": "@ayanpal01",
        "url": "https://twitter.com/ayanpal01"
      },
      {
        "@type": "PropertyValue",
        "name": "GitHub",
        "value": "ayanpal404", 
        "url": "https://github.com/ayanpal404"
      },
      {
        "@type": "PropertyValue",
        "name": "Facebook",
        "value": "Ayan Pal",
        "url": "https://www.facebook.com/share/1EnB9u9RND/"
      }
    ],
    "sameAs": [
      "https://in.linkedin.com/in/ayanpal01",
      "https://linkedin.com/in/ayanpal01", 
      "https://www.linkedin.com/in/ayanpal01",
      "https://github.com/ayanpal404",
      "https://twitter.com/ayanpal01",
      "https://www.facebook.com/share/1EnB9u9RND/",
      "https://ayanpal.tech"
    ]
  };

  return (
    <>
      {/* Entity linking for username recognition */}
      <Script
        id="entity-linking-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entityLinkingSchema) }}
      />
      
      {/* Knowledge graph entity */}
      <Script
        id="knowledge-graph-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraphSchema) }}
      />
      
      {/* Professional profile linking */}
      <Script
        id="professional-profile-schema"
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalProfileSchema) }}
      />
      
      {/* Social media verification */}
      <Script
        id="social-verification-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialVerificationSchema) }}
      />

      {/* Advanced meta tags for username association */}
      <Script id="username-association" strategy="beforeInteractive">
        {`
          if (typeof document !== 'undefined') {
            // Username brand association
            const meta1 = document.createElement('meta');
            meta1.name = 'brand';
            meta1.content = 'ayanpal01, Ayan Pal';
            document.head.appendChild(meta1);
            
            // Entity recognition 
            const meta2 = document.createElement('meta');
            meta2.name = 'entity';
            meta2.content = 'Ayan Pal (ayanpal01)';
            document.head.appendChild(meta2);
            
            // Identity verification
            const meta3 = document.createElement('meta');
            meta3.name = 'identity-verification';
            meta3.content = 'ayanpal01 is Ayan Pal';
            document.head.appendChild(meta3);
            
            // Cross-platform identity
            const meta4 = document.createElement('meta');
            meta4.name = 'cross-platform-identity';
            meta4.content = 'ayanpal01@linkedin,@ayanpal01@twitter,ayanpal404@github';
            document.head.appendChild(meta4);
            
            // Canonical name
            const meta5 = document.createElement('meta');
            meta5.name = 'canonical-name';
            meta5.content = 'Ayan Pal';
            document.head.appendChild(meta5);
            
            // Username canonical
            const meta6 = document.createElement('meta');
            meta6.name = 'username-canonical';
            meta6.content = 'ayanpal01';
            document.head.appendChild(meta6);
          }
        `}
      </Script>
    </>
  );
}
