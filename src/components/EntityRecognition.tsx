import Script from 'next/script';

export default function EntityRecognition() {
  return (
    <>
      {/* Entity Linking for Better Recognition */}
      <Script
        id="entity-linking"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://ayanpal.tech/#ayan-pal-person",
                "name": "Ayan Pal",
                "alternateName": [
                  "ayanpal01",
                  "Ayan Pal Developer", 
                  "Ayan Pal West Bengal",
                  "Ayan Pal Karimpur",
                  "Ayan Pal MCA",
                  "Ayan Pal Adamas University",
                  "Ayan Pal Full Stack Developer",
                  "Ayan Pal Software Engineer"
                ],
                "disambiguatingDescription": "Full-stack software developer from Karimpur, West Bengal, specializing in React and Next.js",
                "mainEntityOfPage": "https://ayanpal.tech",
                "identifier": [
                  {
                    "@type": "PropertyValue",
                    "name": "GitHub",
                    "value": "ayanpal404"
                  },
                  {
                    "@type": "PropertyValue", 
                    "name": "LinkedIn",
                    "value": "ayanpal01"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Twitter",
                    "value": "ayanpal01"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Portfolio",
                    "value": "https://ayanpal.tech"
                  }
                ],
                "brand": {
                  "@type": "Brand",
                  "name": "Ayan Pal",
                  "alternateName": "ayanpal01"
                },
                "owns": {
                  "@type": "WebSite",
                  "name": "Ayan Pal Portfolio",
                  "url": "https://ayanpal.tech"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://ayanpal.tech/#webpage",
                "name": "Ayan Pal - Full Stack Developer Portfolio",
                "about": {
                  "@id": "https://ayanpal.tech/#ayan-pal-person"
                },
                "mentions": [
                  {
                    "@type": "EducationalOrganization",
                    "name": "Adamas University",
                    "location": "West Bengal, India"
                  },
                  {
                    "@type": "Place", 
                    "name": "Karimpur",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "West Bengal"
                    }
                  },
                  {
                    "@type": "Thing",
                    "name": "React Development"
                  },
                  {
                    "@type": "Thing",
                    "name": "Next.js Development"
                  },
                  {
                    "@type": "Thing", 
                    "name": "Full Stack Development"
                  }
                ]
              },
              {
                "@type": "Article",
                "@id": "https://ayanpal.tech/#about-article",
                "headline": "About Ayan Pal - Full Stack Developer from West Bengal",
                "about": {
                  "@id": "https://ayanpal.tech/#ayan-pal-person"
                },
                "author": {
                  "@id": "https://ayanpal.tech/#ayan-pal-person"
                },
                "publisher": {
                  "@id": "https://ayanpal.tech/#ayan-pal-person"
                },
                "datePublished": "2024-01-01",
                "dateModified": new Date().toISOString(),
                "mainEntityOfPage": "https://ayanpal.tech",
                "articleSection": "Biography",
                "keywords": [
                  "Ayan Pal", "ayanpal01", "Full Stack Developer", 
                  "West Bengal Developer", "React Developer", "Next.js Developer",
                  "MCA Student", "Adamas University", "Karimpur", "Software Engineer"
                ]
              }
            ]
          })
        }}
      />

      {/* Comprehensive Keyword and Entity Mapping */}
      <Script id="keyword-entity-mapping" strategy="afterInteractive">
        {`
          if (typeof document !== 'undefined') {
            // Create hidden semantic content for entity recognition
            const semanticDiv = document.createElement('div');
            semanticDiv.style.cssText = 'position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;';
            semanticDiv.innerHTML = \`
              <span itemscope itemtype="http://schema.org/Person">
                <span itemprop="name">Ayan Pal</span> also known as 
                <span itemprop="alternateName">ayanpal01</span> is a 
                <span itemprop="jobTitle">Full Stack Software Developer</span> from 
                <span itemprop="homeLocation">Karimpur, West Bengal, India</span>.
                
                <span itemprop="description">
                  Ayan Pal specializes in React development, Next.js applications, 
                  TypeScript programming, and AI integration. Currently pursuing 
                  MCA at Adamas University, West Bengal.
                </span>
                
                <span itemprop="knowsAbout">JavaScript</span>
                <span itemprop="knowsAbout">TypeScript</span> 
                <span itemprop="knowsAbout">React</span>
                <span itemprop="knowsAbout">Next.js</span>
                <span itemprop="knowsAbout">Node.js</span>
                <span itemprop="knowsAbout">Python</span>
                <span itemprop="knowsAbout">AI Integration</span>
                <span itemprop="knowsAbout">Full Stack Development</span>
                
                <span itemprop="alumniOf">Adamas University</span>
                <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                  <span itemprop="addressLocality">Karimpur</span>
                  <span itemprop="addressRegion">West Bengal</span>
                  <span itemprop="addressCountry">India</span>
                </span>
                
                <span itemprop="url">https://ayanpal.tech</span>
                <span itemprop="sameAs">https://github.com/ayanpal404</span>
                <span itemprop="sameAs">https://linkedin.com/in/ayanpal01</span>
                <span itemprop="sameAs">https://twitter.com/ayanpal01</span>
              </span>
            \`;
            
            document.body.appendChild(semanticDiv);

            // Enhanced keyword density for search engines
            const keywordMeta = document.createElement('meta');
            keywordMeta.name = 'keywords';
            keywordMeta.content = 'Ayan Pal, who is Ayan Pal, ayanpal01, ayanpal01 developer, Ayan Pal West Bengal, Ayan Pal Karimpur, Ayan Pal software developer, Ayan Pal full stack developer, Ayan Pal React developer, Ayan Pal Next.js developer, Ayan Pal MCA student, Ayan Pal Adamas University, West Bengal developer, Karimpur developer, React developer West Bengal, Next.js developer India, full stack developer West Bengal, MCA Adamas University, ayanpal01 portfolio, Ayan Pal portfolio, software engineer West Bengal, web developer Karimpur';
            document.head.appendChild(keywordMeta);

            // Topic clustering for semantic understanding
            const topicMeta = document.createElement('meta');
            topicMeta.name = 'article:tag';
            topicMeta.content = 'Ayan Pal, Full Stack Development, React Development, Next.js, TypeScript, West Bengal Tech, Indian Developers, MCA Students, Adamas University, Software Engineering, Web Development, AI Integration, JavaScript Developer, Node.js Developer';
            document.head.appendChild(topicMeta);
          }
        `}
      </Script>

      {/* Social Proof and Authority Signals */}
      <Script
        id="authority-signals"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ayan Pal",
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Master of Computer Applications (MCA)",
                "credentialCategory": "degree",
                "recognizedBy": {
                  "@type": "EducationalOrganization",
                  "name": "Adamas University"
                }
              }
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Full Stack Software Developer",
              "occupationalCategory": {
                "@type": "CategoryCode",
                "codeValue": "15-1132",
                "codingSystem": "O*NET-SOC",
                "name": "Software Developers, Applications"
              },
              "skills": [
                "React Development",
                "Next.js Framework", 
                "TypeScript Programming",
                "JavaScript Development",
                "Node.js Backend Development",
                "Python Programming", 
                "AI Integration",
                "Full Stack Architecture",
                "Web Application Development",
                "Modern Frontend Frameworks"
              ],
              "responsibilities": [
                "Developing scalable web applications",
                "Implementing modern React patterns",
                "Building Next.js applications",
                "Integrating AI technologies",
                "Creating responsive user interfaces"
              ]
            },
            "performerIn": [
              {
                "@type": "Event",
                "name": "Software Development Projects",
                "description": "Various full-stack development projects showcasing expertise in React, Next.js, and modern web technologies"
              }
            ],
            "seeks": {
              "@type": "Demand",
              "name": "Software Development Opportunities",
              "description": "Open to collaborations and projects in full-stack development, React applications, and AI integration"
            }
          })
        }}
      />
    </>
  );
}
