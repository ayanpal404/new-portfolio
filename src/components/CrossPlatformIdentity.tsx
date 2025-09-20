import Script from 'next/script';

export default function CrossPlatformIdentity() {
  // Comprehensive identity mapping schema
  const identityMappingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ayanpal.tech/#ayanpal",
        "name": "Ayan Pal",
        "alternateName": [
          "ayanpal01",
          "@ayanpal01", 
          "Ayan Pal (@ayanpal01)",
          "ayanpal01 developer",
          "Ayan Pal ayanpal01"
        ],
        "identifier": [
          {
            "@type": "PropertyValue",
            "name": "Primary Username",
            "value": "ayanpal01",
            "description": "Main username across platforms"
          },
          {
            "@type": "PropertyValue",
            "name": "Social Handle", 
            "value": "@ayanpal01",
            "description": "Social media handle"
          },
          {
            "@type": "PropertyValue",
            "name": "GitHub Username",
            "value": "ayanpal404",
            "description": "GitHub profile identifier"
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
        ],
        "owns": [
          {
            "@type": "WebSite",
            "name": "ayanpal.tech",
            "url": "https://ayanpal.tech"
          }
        ]
      },
      {
        "@type": "Brand",
        "@id": "https://ayanpal.tech/#brand-ayanpal01",
        "name": "ayanpal01",
        "alternateName": "Ayan Pal",
        "description": "Professional brand identity of Ayan Pal",
        "founder": {
          "@id": "https://ayanpal.tech/#ayanpal"
        },
        "owns": {
          "@id": "https://ayanpal.tech/#ayanpal"
        }
      },
      {
        "@type": "SocialMediaPosting",
        "author": {
          "@id": "https://ayanpal.tech/#ayanpal"
        },
        "headline": "ayanpal01 is Ayan Pal - Software Developer",
        "articleBody": "ayanpal01 is the username and professional identity of Ayan Pal, a full-stack software developer from West Bengal, India.",
        "url": "https://ayanpal.tech"
      }
    ]
  };

  // Username-to-name verification
  const usernameVerificationSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage", 
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is ayanpal01 the same person as Ayan Pal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ayanpal01 is the username of Ayan Pal. They are the same person - a software developer from West Bengal, India."
        }
      },
      {
        "@type": "Question",
        "name": "What is ayanpal01's full name?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "ayanpal01's full name is Ayan Pal. He is a full-stack software developer and MCA student at Adamas University."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find ayanpal01 profiles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can find ayanpal01 (Ayan Pal) on LinkedIn at linkedin.com/in/ayanpal01, GitHub at github.com/ayanpal404, Twitter @ayanpal01, and his portfolio at ayanpal.tech"
        }
      }
    ]
  };

  return (
    <>
      {/* Identity mapping schema */}
      <Script
        id="identity-mapping-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(identityMappingSchema) }}
      />
      
      {/* Username verification schema */}
      <Script
        id="username-verification-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(usernameVerificationSchema) }}
      />

      {/* Hidden content for search engine indexing */}
      <div style={{ 
        position: 'absolute', 
        left: '-10000px', 
        width: '1px', 
        height: '1px', 
        overflow: 'hidden',
        fontSize: '1px',
        color: 'transparent'
      }}>
        <h1>ayanpal01 is Ayan Pal</h1>
        <p>ayanpal01 Ayan Pal software developer West Bengal MCA Adamas University</p>
        <p>@ayanpal01 Ayan Pal LinkedIn GitHub Twitter Facebook</p>
        <p>ayanpal01 real name Ayan Pal full stack developer</p>
        <p>Ayan Pal ayanpal01 portfolio ayanpal.tech</p>
        <p>who is ayanpal01 Ayan Pal West Bengal developer</p>
        <p>ayanpal01 profile Ayan Pal social media</p>
        <p>LinkedIn ayanpal01 Ayan Pal professional</p>
        <p>GitHub ayanpal404 Ayan Pal projects</p>
        <p>Twitter @ayanpal01 Ayan Pal tech</p>
        <p>Facebook Ayan Pal ayanpal01 social</p>
        <p>ayanpal01 developer profile Ayan Pal MCA student</p>
      </div>
    </>
  );
}
