/**
 * SEO Module - Central Export
 * 
 * Scalable programmatic SEO infrastructure for 100k+ pages
 */

// Shared types - export first to establish canonical source
export * from './types';

// Config exports
export * from './config/pageTypes';
export * from './config/locations';
export * from './config/industries';
export * from './config/keywords';
export * from './config/siteMap';

// Schema exports - exclude FAQ/HowToStep to avoid duplicate
export {
  generateFAQSchema,
  generateHowToSchema,
  generateProductSchema,
  generateLocalBusinessSchema,
  generateArticleSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generatePageSchemas,
  type ProductOffer,
} from './utils/schemaGenerators';

// Internal linking exports
export * from './utils/internalLinking';

// Content exports - exclude FAQ to avoid duplicate
export {
  generateEtimsFAQs,
  generatePricingFAQs,
  generateIndustryFAQs,
  generateProblemFAQs,
  generateComparisonFAQs,
  generateFAQsForPage,
} from './content/faqGenerators';

// Content exports - exclude types that are already exported from ./types
export {
  generateDirectAnswer,
  generateProblemSection,
  generateSolutionSection,
  generateStepByStep,
  generateComparisonTable,
  generateIndustryContent,
  trustSignals,
  localTrustElements,
  offer,
  type ContentSection,
  type StepItem,
} from './content/contentGenerators';
