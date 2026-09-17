export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  slug: string;
  whatItSolves?: string;
  whatOrbiumDoes?: string[];
  whatYouReceive?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  slug: string;
  description: string;
  tags: string[];
  conceptLabel?: string;
  colorAccent: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  focus?: string;
  deliverable?: string;
  details?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export interface ContactFormData {
  projectType?: string;
  name: string;
  role?: string;
  business: string;
  industry?: string;
  email: string;
  phone?: string;
  website?: string;
  whatNeedsToChange?: string[];
  successOutcome?: string;
  service?: string;
  budget: string;
  timeline: string;
  message?: string;
  recipient?: string;
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  email: string;
  social: {
    linkedin: string;
    instagram: string;
    x: string;
  };
  meta: {
    title: string;
    description: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
}
