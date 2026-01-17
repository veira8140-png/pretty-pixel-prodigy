/**
 * SEO Page Types Configuration
 * 
 * Defines all 8 page types for 100k+ page programmatic SEO:
 * 1. Authority Hubs (pillar content)
 * 2. SERP Capture (comparison/alternatives)
 * 3. Local Authority (city + keyword)
 * 4. Use Case Pages (pain-based BOFU)
 * 5. Process Pages (how-to trust content)
 * 6. Industry Pages (business type specific)
 * 7. Trust Pages (E-E-A-T content)
 * 8. Internal Infrastructure (sitemaps, indexes)
 */

export type PageType = 
  | 'authority_hub'
  | 'comparison'
  | 'alternative'
  | 'local_authority'
  | 'use_case'
  | 'process'
  | 'industry'
  | 'trust'
  | 'infrastructure';

export interface PageTypeConfig {
  type: PageType;
  urlPattern: string;
  minWordCount: number;
  maxInternalLinksOut: number;
  requiredSchema: string[];
  requiredSections: string[];
  indexable: boolean;
  priority: number; // 0-1 for sitemap
}

export const pageTypeConfigs: Record<PageType, PageTypeConfig> = {
  authority_hub: {
    type: 'authority_hub',
    urlPattern: '/{slug}',
    minWordCount: 2500,
    maxInternalLinksOut: 50,
    requiredSchema: ['Article', 'FAQPage', 'BreadcrumbList'],
    requiredSections: ['hero', 'problem', 'solution', 'howTo', 'faq', 'cta', 'internalLinks'],
    indexable: true,
    priority: 1.0,
  },
  comparison: {
    type: 'comparison',
    urlPattern: '/veira-vs-{competitor}',
    minWordCount: 1500,
    maxInternalLinksOut: 20,
    requiredSchema: ['Product', 'FAQPage', 'BreadcrumbList'],
    requiredSections: ['hero', 'comparisonTable', 'features', 'pricing', 'faq', 'cta'],
    indexable: true,
    priority: 0.9,
  },
  alternative: {
    type: 'alternative',
    urlPattern: '/alternative-to-{product}',
    minWordCount: 1500,
    maxInternalLinksOut: 20,
    requiredSchema: ['Product', 'FAQPage', 'BreadcrumbList'],
    requiredSections: ['hero', 'problem', 'comparison', 'features', 'faq', 'cta'],
    indexable: true,
    priority: 0.9,
  },
  local_authority: {
    type: 'local_authority',
    urlPattern: '/{keyword}-{location}',
    minWordCount: 1200,
    maxInternalLinksOut: 15,
    requiredSchema: ['LocalBusiness', 'Product', 'FAQPage', 'BreadcrumbList'],
    requiredSections: ['hero', 'localContext', 'problem', 'solution', 'faq', 'cta', 'siloLinks'],
    indexable: true,
    priority: 0.8,
  },
  use_case: {
    type: 'use_case',
    urlPattern: '/{pain-keyword}',
    minWordCount: 1500,
    maxInternalLinksOut: 20,
    requiredSchema: ['HowTo', 'FAQPage', 'BreadcrumbList'],
    requiredSections: ['hero', 'painStatement', 'solution', 'steps', 'faq', 'cta'],
    indexable: true,
    priority: 0.85,
  },
  process: {
    type: 'process',
    urlPattern: '/how-to-{action}',
    minWordCount: 1200,
    maxInternalLinksOut: 15,
    requiredSchema: ['HowTo', 'FAQPage', 'BreadcrumbList'],
    requiredSections: ['hero', 'overview', 'steps', 'requirements', 'faq', 'cta'],
    indexable: true,
    priority: 0.8,
  },
  industry: {
    type: 'industry',
    urlPattern: '/pos-for-{industry}',
    minWordCount: 1500,
    maxInternalLinksOut: 20,
    requiredSchema: ['Product', 'FAQPage', 'BreadcrumbList'],
    requiredSections: ['hero', 'industryPain', 'features', 'testimonial', 'faq', 'cta'],
    indexable: true,
    priority: 0.85,
  },
  trust: {
    type: 'trust',
    urlPattern: '/{trust-slug}',
    minWordCount: 1000,
    maxInternalLinksOut: 20,
    requiredSchema: ['Organization', 'FAQPage', 'BreadcrumbList'],
    requiredSections: ['hero', 'content', 'credentials', 'cta'],
    indexable: true,
    priority: 0.7,
  },
  infrastructure: {
    type: 'infrastructure',
    urlPattern: '/{index-slug}',
    minWordCount: 300,
    maxInternalLinksOut: 100,
    requiredSchema: ['BreadcrumbList'],
    requiredSections: ['hero', 'listing'],
    indexable: false, // noindex but follow
    priority: 0.3,
  },
};

// Page generation limits per phase
export const indexingPhases = {
  trust_seeding: {
    months: '1-2',
    pagesPerMonth: 3000,
    allowedTypes: ['authority_hub', 'local_authority', 'industry'] as PageType[],
    rules: {
      maxInternalLinks: 10,
      noCityStacking: true,
    },
  },
  controlled_scale: {
    months: '3-4',
    pagesPerMonth: 10000,
    allowedTypes: ['authority_hub', 'local_authority', 'industry', 'comparison', 'alternative'] as PageType[],
    rules: {
      cityVariantsAllowed: true,
      oneIntentPerPage: true,
    },
  },
  authority_expansion: {
    months: '5-6',
    pagesPerMonth: 25000,
    allowedTypes: ['authority_hub', 'local_authority', 'industry', 'comparison', 'alternative', 'use_case', 'process'] as PageType[],
    rules: {
      localBusinessSchemaRequired: true,
    },
  },
  full_domination: {
    months: '7-12',
    pagesPerMonth: 40000,
    allowedTypes: ['authority_hub', 'local_authority', 'industry', 'comparison', 'alternative', 'use_case', 'process', 'trust', 'infrastructure'] as PageType[],
    rules: {
      indexNowEnabled: true,
      crawlBudgetOptimized: true,
    },
  },
};
