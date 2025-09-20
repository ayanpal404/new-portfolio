import Script from 'next/script';

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ayanpal.tech/#person",
    "name": "Ayan Pal",
    "givenName": "Ayan",
    "familyName": "Pal",
    "alternateName": ["Ayan Pal Developer", "Ayan Pal Software Engineer", "ayanpal01", "@ayanpal01", "Ayan Pal (@ayanpal01)"],
    "url": "https://ayanpal.tech",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://ayanpal.tech/icon.png",
        "caption": "Ayan Pal - Full Stack Software Developer",
        "width": 800,
        "height": 600
      },
      {
        "@type": "ImageObject", 
        "url": "https://in.linkedin.com/in/ayanpal01",
        "caption": "Ayan Pal LinkedIn Profile Photo",
        "name": "Professional headshot of Ayan Pal"
      }
    ],
    "sameAs": [
      "https://in.linkedin.com/in/ayanpal01",
      "https://github.com/ayanpal404",
      "https://twitter.com/ayanpal01",
      "https://www.facebook.com/share/1EnB9u9RND/",
      "https://ayanpal.tech",
      "https://linkedin.com/in/ayanpal01",
      "https://www.linkedin.com/in/ayanpal01"
    ],
    "jobTitle": [
      "Full Stack Developer",
      "Software Developer",
      "Web Developer",
      "AI Enthusiast",
      "MCA Student"
    ],
    "description": "Ayan Pal is a passionate full-stack software developer from Karimpur, West Bengal, India. Currently pursuing Master of Computer Applications (MCA) at Adamas University. Specializes in modern web development, AI integration, cloud computing, and building innovative software solutions that solve real-world problems.",
    "disambiguatingDescription": "Software developer from West Bengal, India, MCA student at Adamas University specializing in React.js and Next.js development",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karimpur",
      "addressRegion": "West Bengal",
      "addressCountry": "IN",
      "postalCode": "741165"
    },
    "nationality": {
      "@type": "Country",
      "name": "India"
    },
    "birthPlace": {
      "@type": "Place",
      "name": "West Bengal, India"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Adamas University",
        "url": "https://adamasuniversity.ac.in/",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "addressCountry": "IN"
        }
      }
    ],
    "educationalCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Master of Computer Applications",
        "educationalLevel": "Graduate",
        "credentialCategory": "Degree",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "Adamas University"
        }
      }
    ],
    "knowsAbout": [
      "Full Stack Development",
      "Web Development",
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Software Engineering",
      "Problem Solving",
      "System Design",
      "Database Management",
      "API Development",
      "Frontend Development",
      "Backend Development",
      "Mobile App Development",
      "DevOps",
      "Git Version Control",
      "Agile Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Developer",
      "description": "Develops full-stack web applications using modern technologies",
      "occupationLocation": {
        "@type": "Place",
        "name": "West Bengal, India"
      },
      "skills": [
        "Full Stack Development",
        "React Development",
        "Next.js Development",
        "JavaScript Programming",
        "Web Application Development",
        "AI Integration",
        "Cloud Computing"
      ],
      "qualifications": "Currently pursuing MCA from Adamas University"
    },
    "memberOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Adamas University",
        "description": "MCA Student"
      }
    ],
    "seeks": [
      "Software Development Opportunities",
      "Full Stack Development Roles",
      "Internship Opportunities",
      "Tech Industry Collaboration"
    ],
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "Username",
        "value": "ayanpal01"
      },
      {
        "@type": "PropertyValue", 
        "name": "Handle",
        "value": "@ayanpal01"
      },
      {
        "@type": "PropertyValue",
        "name": "LinkedIn",
        "value": "ayanpal01"
      },
      {
        "@type": "PropertyValue",
        "name": "Twitter",
        "value": "@ayanpal01"
      },
      {
        "@type": "PropertyValue",
        "name": "GitHub", 
        "value": "ayanpal404"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://ayanpal.tech/#organization",
    "name": "Ayan Pal - Software Development Services",
    "alternateName": "Ayan Pal Portfolio",
    "url": "https://ayanpal.tech",
    "logo": "https://ayanpal.tech/icon.png",
    "image": "https://ayanpal.tech/icon.png",
    "description": "Professional portfolio and software development services by Ayan Pal, a full-stack developer from West Bengal specializing in modern web technologies and AI integration.",
    "founder": {
      "@id": "https://ayanpal.tech/#person"
    },
    "employee": {
      "@id": "https://ayanpal.tech/#person"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karimpur",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "areaServed": [
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
      "Full Stack Web Development",
      "Frontend Development",
      "Backend Development", 
      "AI Integration",
      "Web Application Development"
    ],
    "knowsAbout": [
      "React.js Development",
      "Next.js Development",
      "JavaScript Programming",
      "Web Development",
      "AI Integration"
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ayanpal.tech/#website",
    "url": "https://ayanpal.tech",
    "name": "Ayan Pal Portfolio - Software Developer",
    "alternateName": "Ayan Pal Developer Portfolio",
    "description": "Official portfolio website of Ayan Pal - Full Stack Software Developer from West Bengal, India, showcasing projects, skills, and professional journey in web development and AI.",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "isFamilyFriendly": true,
    "copyrightYear": 2025,
    "copyrightHolder": {
      "@id": "https://ayanpal.tech/#person"
    },
    "author": {
      "@id": "https://ayanpal.tech/#person"
    },
    "creator": {
      "@id": "https://ayanpal.tech/#person"
    },
    "publisher": {
      "@id": "https://ayanpal.tech/#person"
    },
    "mainEntity": {
      "@id": "https://ayanpal.tech/#person"
    },
    "about": {
      "@id": "https://ayanpal.tech/#person"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Technology Professionals, Recruiters, Students, Fellow Developers"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ayanpal.tech/?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Enhanced FAQ Schema with more questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is ayanpal01?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ayanpal01 is the username of Ayan Pal, a passionate full-stack software developer from Karimpur, West Bengal, India. Ayan Pal uses the handle @ayanpal01 across social media platforms including LinkedIn, Twitter, and other professional networks.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      },
      {
        "@type": "Question",
        "name": "What is ayanpal01 real name?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ayanpal01's real name is Ayan Pal. He is a software developer and MCA student at Adamas University, West Bengal, India. You can find him on LinkedIn as linkedin.com/in/ayanpal01 and on GitHub as github.com/ayanpal404.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      },
      {
        "@type": "Question",
        "name": "ayanpal01 developer profile",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ayanpal01 (Ayan Pal) is a full-stack software developer specializing in React.js, Next.js, AI integration, and modern web technologies. His professional portfolio is available at ayanpal.tech and his development work can be seen on GitHub at github.com/ayanpal404.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      },
      {
        "@type": "Question",
        "name": "Who is Ayan Pal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ayan Pal is a passionate full-stack software developer and tech enthusiast from Karimpur, West Bengal, India. He is currently pursuing his Master of Computer Applications (MCA) 1st Year at Adamas University and specializes in building modern web applications, AI integration, and cloud computing solutions.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      },
      {
        "@type": "Question",
        "name": "What does Ayan Pal do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ayan Pal is a full-stack developer who creates modern web applications, system management tools, and AI-integrated solutions. He works with technologies like React.js, Next.js, TypeScript, and specializes in solving real-world problems through innovative software development.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      },
      {
        "@type": "Question",
        "name": "Where is Ayan Pal from?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ayan Pal is from Karimpur, West Bengal, India. He is currently studying at Adamas University in Kolkata, West Bengal, pursuing his Master of Computer Applications degree.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      },
      {
        "@type": "Question",
        "name": "What are Ayan Pal's technical skills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ayan Pal's technical skills include Full Stack Development, React.js, Next.js, JavaScript, TypeScript, Node.js, AI integration, Cloud Computing, Database Management, and modern web development frameworks. He also has expertise in problem-solving and software engineering practices.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      },
      {
        "@type": "Question",
        "name": "Where does Ayan Pal study?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ayan Pal is currently pursuing his Master of Computer Applications (MCA) 1st Year at Adamas University, located in Kolkata, West Bengal, India.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      },
      {
        "@type": "Question",
        "name": "How to contact Ayan Pal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can connect with Ayan Pal through his portfolio website at ayanpal.tech, LinkedIn at linkedin.com/in/ayanpal01, GitHub at github.com/ayanpal404, or Twitter at twitter.com/ayanpal01.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      },
      {
        "@type": "Question",
        "name": "What projects has Ayan Pal worked on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ayan Pal has worked on various full-stack web applications, AI-integrated solutions, system management tools, and modern web applications using React.js, Next.js, and other cutting-edge technologies. View his complete portfolio at ayanpal.tech/projects.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      },
      {
        "@type": "Question",
        "name": "Is Ayan Pal available for work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ayan Pal is actively seeking software development opportunities, internships, and collaboration projects. He is passionate about working on innovative technology solutions and is open to full-time, part-time, and project-based work.",
          "author": {
            "@type": "Person",
            "name": "Ayan Pal"
          }
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": {
          "@type": "WebPage",
          "@id": "https://ayanpal.tech",
          "name": "Ayan Pal Portfolio"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": {
          "@type": "WebPage",
          "@id": "https://ayanpal.tech/projects",
          "name": "Ayan Pal Projects"
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="json-ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="json-ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
