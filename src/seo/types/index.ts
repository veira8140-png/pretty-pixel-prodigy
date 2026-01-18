/**
 * Shared SEO Types
 * 
 * Central type definitions used across all SEO modules
 * to avoid duplicate exports and ensure consistency
 */

// FAQ structure for schema generation
export interface FAQ {
  question: string;
  answer: string;
}

// HowTo step structure for schema generation
export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

// Breadcrumb item for navigation and schema
export interface BreadcrumbItem {
  name: string;
  url: string;
}

// Page metadata configuration
export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// Schema configuration for a page
export interface PageSchemaConfig {
  pageType: string;
  title: string;
  description: string;
  url: string;
  city?: string;
  industry?: string;
  faqs?: FAQ[];
  steps?: HowToStep[];
  breadcrumbs?: BreadcrumbItem[];
  datePublished?: string;
  dateModified?: string;
}

// Content section types
export interface ProblemPoint {
  problem: string;
  explanation: string;
  icon?: string;
}

export interface SolutionPoint {
  feature: string;
  benefit: string;
  icon?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

// Comparison row for comparison tables
export interface ComparisonRow {
  feature: string;
  veira: string;
  competitor1: string;
  competitor2: string;
  competitor3: string;
}

// Page content sections
export interface PageContent {
  directAnswer: string;
  problemSection: {
    title: string;
    points: ProblemPoint[];
  };
  solutionSection: {
    title: string;
    solutions: SolutionPoint[];
  };
  steps: ProcessStep[];
  comparison: {
    headers: string[];
    features: ComparisonRow[];
  };
}

// Offer configuration
export interface OfferConfig {
  posPrice: string;
  data: string;
  setup: string;
  delivery: string;
  training: string;
  depositKes: number;
  depositType: string;
  guarantee: string;
  whatsappUrl: string;
  whatsappNumber: string;
}
