/**
 * Server-Side Content Loader
 * These functions can ONLY be used in Server Components
 * They read JSON files from the file system at build/runtime
 */

import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Generic function to load any JSON file from the content directory
 */
export function loadContent<T>(filePath: string): T {
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

// Site Content
export function loadSiteMetadata() {
  return loadContent<SiteMetadata>('site/metadata.json');
}

export function loadSiteContact() {
  return loadContent<SiteContact>('site/contact.json');
}

export function loadSiteNavigation() {
  return loadContent<SiteNavigation>('site/navigation.json');
}

// Page Content
export function loadHomePageContent() {
  return loadContent<HomePageContent>('pages/home.json');
}

export function loadAboutPageContent() {
  return loadContent<AboutPageContent>('pages/about.json');
}

// Treatments
export function loadTreatments() {
  return loadContent<TreatmentsContent>('treatments/treatments.json');
}

export function loadTreatmentBySlug(slug: string) {
  const treatments = loadTreatments();
  return treatments.treatments.find(t => t.slug === slug);
}

// Clinics
export function loadClinics() {
  return loadContent<ClinicsContent>('clinics/clinics.json');
}

export function loadClinicBySlug(slug: string) {
  const clinics = loadClinics();
  return clinics.clinics.find(c => c.slug === slug);
}

// FAQs
export function loadFAQs() {
  return loadContent<FAQsContent>('faqs/faqs.json');
}

// Testimonials
export function loadTestimonials() {
  return loadContent<TestimonialsContent>('testimonials/testimonials.json');
}

// Types
export type SiteMetadata = {
  siteName: string;
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  siteLocale: string;
  keywords: string[];
  author: {
    name: string;
    url: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  analytics: {
    googleAnalyticsId: string;
    umamiWebsiteId: string;
    umamiScriptUrl: string;
  };
  geo: {
    region: string;
    placename: string;
    latitude: string;
    longitude: string;
  };
};

export type SiteContact = {
  primaryPhone: string;
  primaryEmail: string;
  whatsapp: {
    number: string;
    message: string;
  };
  workingHours: {
    weekdays: string;
    weekend: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
};

export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export type SiteNavigation = {
  navbar: NavItem[];
  footer: {
    quickLinks: NavItem[];
    treatments: Array<{ name: string; href: string }>;
    social: Array<{ name: string; url: string; icon: string }>;
    legal: {
      copyright: string;
      poweredBy: string;
    };
  };
};

export type HomePageContent = {
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: {
      text: string;
      action: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
    stats: Record<string, {
      value: number;
      label: string;
      icon: string;
    }>;
    trustBadges: Array<{
      icon: string;
      text: string;
    }>;
  };
  counter: {
    title: string;
    description: string;
    stats: Array<{
      number: number;
      suffix: string;
      label: string;
      icon: string;
      color: string;
    }>;
  };
  aboutSection: {
    subtitle: string;
    title: string;
    description: string;
    highlights: string[];
    cta: {
      text: string;
      href: string;
    };
  };
  treatmentsSection: {
    subtitle: string;
    title: string;
    description: string;
    cta: {
      text: string;
      href: string;
    };
  };
};

export type Treatment = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  category: string;
  featured: boolean;
  details: {
    duration: string;
    sessions: string;
    downtime: string;
    results: string;
  };
  benefits: string[];
  procedures: string[];
  suitableFor: string[];
};

export type TreatmentsContent = {
  treatments: Treatment[];
  categories: string[];
};

export type Clinic = {
  id: string;
  slug: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  timings: string;
  mapEmbedUrl: string;
  description: string;
  image: string;
  featured: boolean;
  facilities: string[];
  services: string[];
};

export type ClinicsContent = {
  clinics: Clinic[];
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
};

export type FAQsContent = {
  categories: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  faqs: FAQ[];
};

export type Testimonial = {
  id: string;
  name: string;
  treatmentReceived: string;
  rating: number;
  feedback: string;
  displayPicture: string;
  location: string;
  date: string;
  featured: boolean;
};

export type TestimonialsContent = {
  testimonials: Testimonial[];
};

export type AboutPageContent = {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  biography: {
    title: string;
    content: string[];
  };
  careerHighlights: {
    qualification: {
      heading: string;
      highlights: string[];
    };
    careerHighlights: {
      heading: string;
      highlights: string[];
    };
    workExperience: {
      heading: string;
      highlights: string[];
    };
    affiliations: {
      heading: string;
      highlights: string[];
    };
  };
  awards: Array<{
    id: string;
    title: string;
    year: string;
    organization: string;
    description: string;
    icon: string;
  }>;
  expertise: Array<{
    name: string;
    description: string;
    icon: string;
    experience: string;
  }>;
};
