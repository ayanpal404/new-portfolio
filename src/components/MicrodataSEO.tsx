import React from 'react';

interface SemanticSEOWrapperProps {
  children: React.ReactNode;
  itemType?: string;
  itemProp?: string;
  itemScope?: boolean;
}

export function SemanticSEOWrapper({ 
  children, 
  itemType = "https://schema.org/Person", 
  itemProp,
  itemScope = true 
}: SemanticSEOWrapperProps) {
  return (
    <div 
      itemScope={itemScope}
      itemType={itemType}
      itemProp={itemProp}
      role="main"
      aria-label="Ayan Pal Portfolio Content"
    >
      {children}
    </div>
  );
}

export function PersonMicrodata() {
  return (
    <div itemScope itemType="https://schema.org/Person" style={{ display: 'none' }}>
      <span itemProp="name">Ayan Pal</span>
      <span itemProp="alternateName">ayanpal01</span>
      <span itemProp="alternateName">@ayanpal01</span>
      <span itemProp="additionalName">ayanpal01</span>
      <span itemProp="givenName">Ayan</span>
      <span itemProp="familyName">Pal</span>
      <span itemProp="jobTitle">Full Stack Software Developer</span>
      <span itemProp="description">Passionate software developer from West Bengal specializing in modern web development and AI integration</span>
      <span itemProp="url">https://ayanpal.tech</span>
      <span itemProp="sameAs">https://in.linkedin.com/in/ayanpal01</span>
      <span itemProp="sameAs">https://linkedin.com/in/ayanpal01</span>
      <span itemProp="sameAs">https://github.com/ayanpal404</span>
      <span itemProp="sameAs">https://twitter.com/ayanpal01</span>
      <span itemProp="sameAs">https://www.facebook.com/share/1EnB9u9RND/</span>
      
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="addressLocality">Karimpur</span>
        <span itemProp="addressRegion">West Bengal</span>
        <span itemProp="addressCountry">India</span>
      </div>
      
      <div itemProp="alumniOf" itemScope itemType="https://schema.org/EducationalOrganization">
        <span itemProp="name">Adamas University</span>
        <span itemProp="url">https://adamasuniversity.ac.in/</span>
      </div>
      
      <div itemProp="hasOccupation" itemScope itemType="https://schema.org/Occupation">
        <span itemProp="name">Software Developer</span>
        <span itemProp="description">Develops full-stack web applications using modern technologies</span>
        <div itemProp="occupationLocation" itemScope itemType="https://schema.org/Place">
          <span itemProp="name">West Bengal, India</span>
        </div>
      </div>
      
      <span itemProp="knowsAbout">React.js</span>
      <span itemProp="knowsAbout">Next.js</span>
      <span itemProp="knowsAbout">JavaScript</span>
      <span itemProp="knowsAbout">TypeScript</span>
      <span itemProp="knowsAbout">Full Stack Development</span>
      <span itemProp="knowsAbout">AI Integration</span>
      <span itemProp="knowsAbout">Cloud Computing</span>
      <span itemProp="knowsAbout">Web Development</span>
      
      {/* Username identifiers */}
      <span itemProp="identifier">ayanpal01</span>
      <span itemProp="identifier">@ayanpal01</span>
    </div>
  );
}

export function WebsiteMicrodata() {
  return (
    <div itemScope itemType="https://schema.org/WebSite" style={{ display: 'none' }}>
      <span itemProp="name">Ayan Pal Portfolio</span>
      <span itemProp="url">https://ayanpal.tech</span>
      <span itemProp="description">Portfolio website of Ayan Pal - Full Stack Developer from West Bengal</span>
      <div itemProp="author" itemScope itemType="https://schema.org/Person">
        <span itemProp="name">Ayan Pal</span>
      </div>
      <span itemProp="inLanguage">en-US</span>
      <span itemProp="copyrightYear">2025</span>
    </div>
  );
}

export default function MicrodataSEO() {
  return (
    <>
      <PersonMicrodata />
      <WebsiteMicrodata />
      
      {/* Accessibility and SEO improvements */}
      <div style={{ display: 'none' }}>
        {/* Hidden content for SEO - Questions and Answers */}
        <h1>Who is Ayan Pal?</h1>
        <p>Ayan Pal is a passionate full-stack software developer from Karimpur, West Bengal, India. He is currently pursuing his Master of Computer Applications (MCA) at Adamas University.</p>
        
        <h1>Who is ayanpal01?</h1>
        <p>ayanpal01 is the username of Ayan Pal, a software developer from West Bengal. ayanpal01 is the handle Ayan Pal uses on LinkedIn, Twitter, and other social media platforms.</p>
        
        <h1>ayanpal01 real name</h1>
        <p>ayanpal01's real name is Ayan Pal. He is a full-stack developer and MCA student at Adamas University in West Bengal, India.</p>
        
        <h1>ayanpal01 Ayan Pal</h1>
        <p>ayanpal01 is Ayan Pal's username across social media platforms. Ayan Pal (ayanpal01) is a software developer specializing in React.js, Next.js, and modern web technologies.</p>
        
        <h2>What does Ayan Pal do?</h2>
        <p>Ayan Pal specializes in full-stack web development, AI integration, and modern software solutions using React.js, Next.js, and other cutting-edge technologies.</p>
        
        <h2>ayanpal01 developer profile</h2>
        <p>ayanpal01 (Ayan Pal) is a full-stack software developer with expertise in React.js, Next.js, JavaScript, TypeScript, and AI integration. Portfolio: ayanpal.tech</p>
        
        <h2>Ayan Pal Software Developer West Bengal</h2>
        <p>As a software developer from West Bengal, Ayan Pal focuses on creating innovative web applications and solving real-world problems through technology.</p>
        
        <h2>Ayan Pal MCA Student Adamas University</h2>
        <p>Currently pursuing his Master of Computer Applications degree at Adamas University, Ayan Pal combines academic knowledge with practical software development skills.</p>
        
        <h2>Full Stack Developer Karimpur West Bengal</h2>
        <p>Based in Karimpur, West Bengal, Ayan Pal offers full-stack development services and is passionate about modern web technologies.</p>
        
        <h2>ayanpal01 social media profiles</h2>
        <p>Find ayanpal01 (Ayan Pal) on LinkedIn at linkedin.com/in/ayanpal01, GitHub at github.com/ayanpal404, Twitter at twitter.com/ayanpal01, and Facebook.</p>
        
        <h2>@ayanpal01 identity</h2>
        <p>@ayanpal01 is the social media handle of Ayan Pal, a software developer from West Bengal, India. Connect with @ayanpal01 for tech discussions and collaborations.</p>
      </div>
    </>
  );
}
