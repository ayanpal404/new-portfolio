import Script from 'next/script';

export default function AdvancedSEO() {
  return (
    <>
      {/* Rich Snippets for Social Proof */}
      <Script
        id="advanced-rich-snippets"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://ayanpal.tech/#person",
                "name": "Ayan Pal",
                "alternateName": ["ayanpal01", "Ayan Pal Karimpur", "Ayan from West Bengal"],
                "description": "Full-stack software developer specializing in React, Next.js, and AI integration",
                "url": "https://ayanpal.tech",
                "image": "https://avatars.githubusercontent.com/u/118439943?v=4",
                "sameAs": [
                  "https://github.com/ayanpal404",
                  "https://linkedin.com/in/ayanpal01",
                  "https://twitter.com/ayanpal01",
                  "https://instagram.com/ayanpal01",
                  "https://facebook.com/ayanpal01"
                ],
                "jobTitle": "Full Stack Software Developer",
                "worksFor": {
                  "@type": "EducationalOrganization",
                  "name": "Adamas University",
                  "location": "West Bengal, India"
                },
                "alumniOf": {
                  "@type": "EducationalOrganization", 
                  "name": "Adamas University"
                },
                "knowsAbout": [
                  "JavaScript", "TypeScript", "React", "Next.js", 
                  "Node.js", "Python", "AI Integration", "Web Development"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Karimpur",
                  "addressRegion": "West Bengal", 
                  "addressCountry": "India"
                },
                "birthPlace": {
                  "@type": "Place",
                  "name": "West Bengal, India"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://ayanpal.tech/#website",
                "url": "https://ayanpal.tech",
                "name": "Ayan Pal Portfolio",
                "description": "Professional portfolio of Ayan Pal - Full Stack Developer from West Bengal",
                "publisher": {
                  "@id": "https://ayanpal.tech/#person"
                },
                "potentialAction": [
                  {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://ayanpal.tech/projects?search={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                ],
                "inLanguage": "en-US"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://ayanpal.tech"
                  },
                  {
                    "@type": "ListItem", 
                    "position": 2,
                    "name": "About Ayan Pal",
                    "item": "https://ayanpal.tech/#about"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3, 
                    "name": "Projects",
                    "item": "https://ayanpal.tech/projects"
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Enhanced Knowledge Graph Markup */}
      <Script
        id="knowledge-graph-enhanced"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "dateCreated": "2024-01-01",
            "dateModified": new Date().toISOString(),
            "mainEntity": {
              "@type": "Person",
              "name": "Ayan Pal",
              "alternateName": "ayanpal01",
              "description": "Who is Ayan Pal? A passionate full-stack developer from Karimpur, West Bengal, currently pursuing MCA at Adamas University",
              "knowsLanguage": [
                {
                  "@type": "Language",
                  "name": "English",
                  "alternateName": "en"
                },
                {
                  "@type": "Language", 
                  "name": "Bengali",
                  "alternateName": "bn"
                },
                {
                  "@type": "Language",
                  "name": "Hindi", 
                  "alternateName": "hi"
                }
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Developer",
                "occupationalCategory": "15-1132.00",
                "skills": "React, Next.js, TypeScript, Node.js, Python, AI Integration"
              },
              "award": [
                "MCA Student at Adamas University",
                "Full Stack Development Expertise"
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "Developer Community"
              }
            }
          })
        }}
      />

      {/* Local Business Schema for Personal Branding */}
      <Script
        id="local-developer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Ayan Pal - Software Development Services",
            "image": "https://avatars.githubusercontent.com/u/118439943?v=4",
            "description": "Professional software development services by Ayan Pal from West Bengal, India",
            "provider": {
              "@type": "Person",
              "name": "Ayan Pal"
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "West Bengal"
              },
              {
                "@type": "Country", 
                "name": "India"
              },
              {
                "@type": "Place",
                "name": "Global"
              }
            ],
            "serviceType": [
              "Web Development",
              "Full Stack Development", 
              "React Development",
              "Next.js Development",
              "AI Integration"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Karimpur",
              "addressRegion": "West Bengal",
              "addressCountry": "IN"
            }
          })
        }}
      />

      {/* FAQ Schema for Common Questions */}
      <Script
        id="faq-schema-enhanced"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is Ayan Pal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ayan Pal is a passionate full-stack software developer from Karimpur, West Bengal, India. He is currently pursuing his MCA (Master of Computer Applications) at Adamas University and specializes in React, Next.js, TypeScript, and AI integration."
                }
              },
              {
                "@type": "Question", 
                "name": "What is ayanpal01?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ayanpal01 is the username handle used by Ayan Pal across various social media platforms and professional networks including GitHub, LinkedIn, Twitter, and Instagram."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Ayan Pal from?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Ayan Pal is from Karimpur, West Bengal, India. He is a local developer making a mark in the tech industry from this region."
                }
              },
              {
                "@type": "Question",
                "name": "What technologies does Ayan Pal work with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ayan Pal works with modern web technologies including React, Next.js, TypeScript, JavaScript, Node.js, Python, and specializes in AI integration and full-stack development."
                }
              },
              {
                "@type": "Question",
                "name": "Is Ayan Pal available for freelance work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As a skilled full-stack developer and MCA student, Ayan Pal is open to discussing project opportunities and collaborations in web development and AI integration."
                }
              }
            ]
          })
        }}
      />

      {/* Enhanced Meta Tags for Better Discoverability */}
      <Script id="advanced-meta-injection" strategy="afterInteractive">
        {`
          if (typeof document !== 'undefined') {
            // Geo-location meta tags
            const geoMetas = [
              { name: 'geo.region', content: 'IN-WB' },
              { name: 'geo.placename', content: 'Karimpur, West Bengal' },
              { name: 'geo.position', content: '23.8103;88.3431' },
              { name: 'ICBM', content: '23.8103, 88.3431' },
              { name: 'DC.coverage', content: 'West Bengal, India' },
              { name: 'DC.identifier', content: 'https://ayanpal.tech' },
              { name: 'DC.language', content: 'en' },
              { name: 'DC.publisher', content: 'Ayan Pal' },
              { name: 'DC.relation', content: 'https://github.com/ayanpal404' },
              { name: 'DC.rights', content: '© 2024 Ayan Pal' },
              { name: 'DC.source', content: 'https://ayanpal.tech' },
              { name: 'DC.subject', content: 'Software Development, Web Development, Ayan Pal' },
              { name: 'DC.type', content: 'Text.Homepage.Personal' }
            ];

            geoMetas.forEach(meta => {
              const metaElement = document.createElement('meta');
              metaElement.name = meta.name;
              metaElement.content = meta.content;
              document.head.appendChild(metaElement);
            });

            // Additional classification meta tags
            const classificationMetas = [
              { name: 'classification', content: 'Technology, Software Development, Portfolio' },
              { name: 'directory', content: 'submission' },
              { name: 'category', content: 'Technology' },
              { name: 'coverage', content: 'Worldwide' },
              { name: 'distribution', content: 'Global' },
              { name: 'rating', content: 'General' },
              { name: 'revisit-after', content: '7 days' },
              { name: 'expires', content: 'never' }
            ];

            classificationMetas.forEach(meta => {
              const metaElement = document.createElement('meta');
              metaElement.name = meta.name; 
              metaElement.content = meta.content;
              document.head.appendChild(metaElement);
            });
          }
        `}
      </Script>
    </>
  );
}
