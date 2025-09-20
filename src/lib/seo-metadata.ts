import { Metadata } from 'next'

// Additional metadata for specific pages
export const generateAyanPalMetadata = (pageTitle?: string, pageDescription?: string): Metadata => {
  const baseTitle = 'Ayan Pal | Full Stack Developer West Bengal | MCA Adamas University'
  const baseDescription = 'Who is Ayan Pal? Passionate software developer from Karimpur, West Bengal. MCA student at Adamas University specializing in React.js, Next.js, AI integration, and modern web development.'

  return {
    title: pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle,
    description: pageDescription || baseDescription,
    alternates: {
      canonical: '/',
    },
    other: {
      // Rich snippets and additional SEO tags
      'article:author': 'Ayan Pal',
      'article:publisher': 'https://ayanpal.tech',
      'og:locale': 'en_US',
      'og:site_name': 'Ayan Pal - Software Developer Portfolio',
      'twitter:site': '@ayanpal01',
      'twitter:creator': '@ayanpal01',
      
      // Local SEO
      'geo.region': 'IN-WB',
      'geo.placename': 'Karimpur, West Bengal',
      'geo.position': '23.0225;88.3639', // Approximate coordinates for West Bengal
      'ICBM': '23.0225, 88.3639',
      
      // Additional targeting
      'content-language': 'en',
      'distribution': 'global',
      'rating': 'general',
      'revisit-after': '7 days',
      
      // Professional verification
      'profession': 'Software Developer',
      'specialization': 'Full Stack Development',
      'location': 'West Bengal, India',
      'education': 'MCA Adamas University',
      'expertise': 'React.js, Next.js, AI Integration, Cloud Computing',
      
      // Search targeting
      'target-audience': 'Recruiters, Tech Companies, Developers, Students',
      'page-topic': 'Software Development, Web Development, AI, Technology',
      'page-type': 'Personal Portfolio, Professional Profile',
    }
  }
}

// FAQ content for better SEO
export const ayanPalFAQ = [
  {
    question: "Who is Ayan Pal?",
    answer: "Ayan Pal is a passionate full-stack software developer from Karimpur, West Bengal, India. He is currently pursuing his Master of Computer Applications (MCA) at Adamas University and specializes in modern web development, AI integration, and cloud computing."
  },
  {
    question: "What does Ayan Pal do?",
    answer: "Ayan Pal is a full-stack developer who creates innovative web applications, AI-integrated solutions, and system management tools. He specializes in React.js, Next.js, TypeScript, and modern web technologies."
  },
  {
    question: "Where is Ayan Pal studying?",
    answer: "Ayan Pal is currently pursuing his Master of Computer Applications (MCA) 1st Year at Adamas University in West Bengal, India."
  },
  {
    question: "What are Ayan Pal's technical skills?",
    answer: "Ayan Pal's technical expertise includes Full Stack Development, React.js, Next.js, JavaScript, TypeScript, Node.js, AI integration, Cloud Computing, Database Management, and modern web development frameworks."
  },
  {
    question: "How to contact Ayan Pal?",
    answer: "You can connect with Ayan Pal through his portfolio website at ayanpal.tech, LinkedIn at linkedin.com/in/ayanpal01, GitHub at github.com/ayanpal404, or Twitter at twitter.com/ayanpal01."
  },
  {
    question: "What projects has Ayan Pal worked on?",
    answer: "Ayan Pal has worked on various full-stack web applications, AI-integrated solutions, system management tools, and modern web applications using React.js, Next.js, and other cutting-edge technologies. View his complete portfolio at ayanpal.tech/projects."
  }
]
