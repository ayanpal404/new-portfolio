export interface Skill {
    type: string;
    names: string[];
}

export interface Info {
    id?: string;
    intro: string;
    about1: string;
    about2: string;
    githubId: string;
    xId: string;
    linkedinId: string;
    profilePic: string;
}

export interface WorkExp {
    id?: string;
    role: string;
    company: string;
    duration: string;
    endDate: string;
    description: string;
    logo?: string;
}

export interface Education {
    logo: string;
    institute: string;
    degree: string;
    duration: string;
    grade?: string;
    description?: string;
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  link?: string;
  github?: string;
  duration: string;
  techStack: string[];
  showOnProfile: boolean;
  status: ["Completed" | "In Progress" | "Ongoing"];
  features: string[];
  reportLink?: string;
  demoVideoLink?: string;
}