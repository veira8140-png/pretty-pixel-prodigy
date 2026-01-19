/**
 * SEO Module - Central Export
 * 
 * Scalable programmatic SEO infrastructure for 100k+ pages
 */

// Shared types - export first to establish canonical source
export * from './types';

// Master config exports (new system) - primary source
export {
  // Site config
  siteConfig,
  seoDefaults,
  // Hubs
  hubs,
  type HubDefinition,
  type HubIntent,
  // Business types
  businessTypes,
  type BusinessType,
  // Fears
  fears,
  type Fear,
  // Locations
  locations,
  nairobiNeighborhoods,
  type LocationConfig,
  type LocationTier,
  // Templates
  templates,
  type TemplateConfig,
  type TemplateType,
  // Page entities
  type PageEntity,
  // Linking & validation
  internalLinkingRules,
  validationConfig,
  sitemapConfig,
  // Helpers
  getHubById,
  getBusinessTypeById,
  getFearById,
  getLocationById,
  getTemplateConfig,
  getAllLocations as getMasterLocations,
  getLocationsByTier,
  getBusinessTypesByPriority,
  getFearsByUrgency,
  generatePageSlug,
  getEstimatedPageCount,
  // Schema type from master
  type SchemaType as MasterSchemaType,
} from './config/masterConfig';

// Page registry exports
export {
  generatePageEntity,
  validatePageEntity,
  generateInternalLinks,
  enumerateAllPages,
  getPageCountByCategory,
  type ValidationResult,
  type InternalLink,
} from './config/pageRegistry';

// Legacy config exports (for backward compatibility)
export * from './config/pageTypes';
export {
  counties,
  nairobiAreas,
  getAllLocations,
  getLocationsByPriority,
  getLocationBySlug,
  formatLocationName,
  type Location,
} from './config/locations';
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
