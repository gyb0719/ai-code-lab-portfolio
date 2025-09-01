export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'desktop';
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  completedAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  projectType: 'web' | 'mobile' | 'desktop' | 'all';
  budget?: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}