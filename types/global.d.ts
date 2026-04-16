/**
 * VoltaEdge Engineering - Global Types
 * All types are globally available without importing.
 */

declare global {
  // Navigation
  interface NavLink {
    label: string;
    href: string;
    children?: NavLink[];
  }

  // SEO
  interface PageMetadata {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  }

  // Common UI
  type ColorVariant = 'primary' | 'secondary' | 'accent' | 'dark' | 'light';

  // Forms
  interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    company?: string;
    phone?: string;
  }

  interface QuoteFormData extends ContactFormData {
    serviceType: string;
    projectLocation: string;
    estimatedBudget?: string;
    attachments?: File[];
  }

  // Domain Models
  interface Service {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    technicalAnalysis?: string[];
    icon: string;
    features: string[];
    benefits: string[];
    imageUrl: string;
  }

  interface Project {
    id: string;
    title: string;
    slug: string;
    category: string;
    location: string;
    status: string;
    completionDate: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    mainImage: string;
    gallery?: string[];
    stats?: { label: string; value: string }[];
    // Extended project details
    technicalAnalysis?: string[];
    implementationTimeline?: string[];
    keyTechnologies?: string[];
    environmentalImpact?: string[];
  }

  interface Stat {
    label: string;
    value: number;
    suffix: string;
    description: string;
  }

  interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  }


  interface Partner {
    name: string;
    logo: string;
  }

  interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string;
    image: string;
    readTime: string;
  }
}

export { };
