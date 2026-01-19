/**
 * PAGE REGISTRY
 * 
 * Generates and validates page entities from master config.
 * This is the runtime page resolver that determines what pages exist.
 */

import {
  hubs,
  businessTypes,
  fears,
  getAllLocations,
  getHubById,
  getBusinessTypeById,
  getFearById,
  getLocationById,
  getTemplateConfig,
  validationConfig,
  internalLinkingRules,
  type PageEntity,
  type TemplateType,
  type HubIntent,
  type SchemaType,
} from './masterConfig';

// ============================================================================
// PAGE GENERATION
// ============================================================================

/**
 * Generate a page entity with validation
 */
export function generatePageEntity(params: {
  hub: string;
  businessType?: string;
  fear?: string;
  location?: string;
}): PageEntity | null {
  const { hub, businessType, fear, location } = params;
  
  const hubDef = getHubById(hub);
  if (!hubDef) return null;
  
  // Determine template type
  const template = determineTemplate(businessType, fear, location);
  const templateConfig = getTemplateConfig(template);
  
  // Validate template is supported by hub
  if (!hubDef.supportedTemplates.includes(template)) {
    return null;
  }
  
  // Build slug
  let slug = hubDef.slug;
  if (businessType) slug += `/${businessType}`;
  if (fear) slug += `/${fear}`;
  if (location) slug += `/${location}`;
  
  // Get entity data
  const businessData = businessType ? getBusinessTypeById(businessType) : null;
  const fearData = fear ? getFearById(fear) : null;
  const locationData = location ? getLocationById(location) : null;
  
  // Generate primary keyword
  const primaryKeyword = generatePrimaryKeyword(hubDef.primaryKeyword, businessData, fearData, locationData);
  
  // Generate title and description
  const { title, description } = generateMetadata(hubDef, businessData, fearData, locationData);
  
  // Determine intent
  const intent: HubIntent = fearData?.intent || hubDef.intent;
  
  // Merge schemas
  const schema: SchemaType[] = [
    ...new Set([
      ...hubDef.schema,
      ...templateConfig.allowedSchemas,
      ...(businessData?.schema || []),
    ]),
  ];
  
  return {
    slug,
    template,
    intent,
    hub,
    businessType,
    fear,
    location,
    primaryKeyword,
    secondaryKeywords: generateSecondaryKeywords(businessData, fearData, locationData),
    title,
    description,
    faqs: [], // FAQs generated separately by content engine
    schema,
    lastModified: new Date().toISOString().split('T')[0],
    indexable: true,
  };
}

/**
 * Determine template type from page components
 */
function determineTemplate(
  businessType?: string,
  fear?: string,
  location?: string
): TemplateType {
  if (businessType && fear && location) return 'business-fear-location';
  if (businessType && fear) return 'business-fear';
  if (businessType && location) return 'business-location';
  if (businessType) return 'business';
  if (fear) return 'fear';
  if (location) return 'location';
  return 'business'; // Default
}

/**
 * Generate primary keyword
 */
function generatePrimaryKeyword(
  baseKeyword: string,
  businessData: ReturnType<typeof getBusinessTypeById>,
  fearData: ReturnType<typeof getFearById>,
  locationData: ReturnType<typeof getLocationById>
): string {
  let keyword = baseKeyword;
  
  if (businessData) {
    keyword = `${keyword} for ${businessData.plural.toLowerCase()}`;
  }
  if (fearData) {
    keyword = `${fearData.primaryKeyword}`;
  }
  if (locationData) {
    keyword = `${keyword} in ${locationData.name}`;
  }
  
  return keyword;
}

/**
 * Generate secondary keywords
 */
function generateSecondaryKeywords(
  businessData: ReturnType<typeof getBusinessTypeById>,
  fearData: ReturnType<typeof getFearById>,
  locationData: ReturnType<typeof getLocationById>
): string[] {
  const keywords: string[] = [];
  
  if (businessData) {
    keywords.push(`${businessData.name.toLowerCase()} pos`);
    keywords.push(`pos for ${businessData.name.toLowerCase()}`);
  }
  
  if (fearData) {
    keywords.push(fearData.label.toLowerCase());
  }
  
  if (locationData) {
    keywords.push(`pos ${locationData.name.toLowerCase()}`);
    keywords.push(`pos system ${locationData.name.toLowerCase()}`);
  }
  
  // Always add ETIMS keywords
  keywords.push('etims compliant pos');
  keywords.push('kra pos kenya');
  
  return keywords;
}

/**
 * Generate title and description
 */
function generateMetadata(
  hubDef: ReturnType<typeof getHubById>,
  businessData: ReturnType<typeof getBusinessTypeById>,
  fearData: ReturnType<typeof getFearById>,
  locationData: ReturnType<typeof getLocationById>
): { title: string; description: string } {
  if (!hubDef) {
    return {
      title: 'POS Software Kenya | Veira',
      description: 'Get POS software for your Kenyan business. ETIMS compliant, M-Pesa integrated.',
    };
  }
  
  let title = hubDef.title;
  let description = hubDef.description;
  
  // Business type customization
  if (businessData) {
    title = `POS Software for ${businessData.plural} | ETIMS Compliant | Veira`;
    description = `Get ${businessData.primaryKeyword}. ${businessData.painPoints[0]} solved with ETIMS compliance and WhatsApp reports.`;
  }
  
  // Fear customization
  if (fearData) {
    title = `${fearData.label} | POS Solution | Veira`;
    description = `${fearData.description} Get ETIMS compliant POS with real-time monitoring.`;
  }
  
  // Location customization
  if (locationData) {
    const locationSuffix = ` in ${locationData.name}`;
    title = title.replace(' | Veira', `${locationSuffix} | Veira`);
    description = description.replace(/\./, `${locationSuffix}.`);
  }
  
  // Ensure title length
  if (title.length > 60) {
    title = title.substring(0, 57) + '...';
  }
  
  // Ensure description length
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  return { title, description };
}

// ============================================================================
// PAGE VALIDATION
// ============================================================================

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validate a page entity meets quality thresholds
 */
export function validatePageEntity(page: PageEntity, wordCount: number): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const templateConfig = getTemplateConfig(page.template);
  
  // Word count check
  if (wordCount < templateConfig.minWords) {
    errors.push(`Content too short: ${wordCount} words, minimum ${templateConfig.minWords}`);
  }
  
  // FAQ count check
  if (page.faqs.length < templateConfig.minFaqs) {
    errors.push(`Not enough FAQs: ${page.faqs.length}, minimum ${templateConfig.minFaqs}`);
  }
  
  // Title length check
  if (page.title.length > 60) {
    warnings.push(`Title too long: ${page.title.length} chars, recommended max 60`);
  }
  
  // Description length check
  if (page.description.length > 160) {
    warnings.push(`Description too long: ${page.description.length} chars, recommended max 160`);
  }
  
  // Required sections check would happen in content generation
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

// ============================================================================
// INTERNAL LINKING
// ============================================================================

export interface InternalLink {
  href: string;
  label: string;
  type: 'parent' | 'sibling' | 'child' | 'related';
}

/**
 * Generate internal links for a page
 */
export function generateInternalLinks(page: PageEntity): InternalLink[] {
  const links: InternalLink[] = [];
  
  // Parent hub link
  if (internalLinkingRules.parentHub) {
    const hubDef = getHubById(page.hub);
    if (hubDef) {
      links.push({
        href: hubDef.slug,
        label: hubDef.title.split('|')[0].trim(),
        type: 'parent',
      });
    }
  }
  
  // Sibling pages (same template, different business type)
  if (page.businessType) {
    const siblings = businessTypes
      .filter(b => b.id !== page.businessType)
      .slice(0, internalLinkingRules.siblings)
      .map(b => ({
        href: `${getHubById(page.hub)?.slug || ''}/${b.id}`,
        label: `POS for ${b.plural}`,
        type: 'sibling' as const,
      }));
    links.push(...siblings);
  }
  
  // Related fear pages
  if (page.businessType) {
    const businessData = getBusinessTypeById(page.businessType);
    if (businessData) {
      const relatedFears: InternalLink[] = [];
      for (const fearId of businessData.fears.slice(0, internalLinkingRules.relatedFears)) {
        const fearData = getFearById(fearId);
        if (fearData) {
          relatedFears.push({
            href: `/staff-theft-prevention/${fearId}`,
            label: fearData.label,
            type: 'related',
          });
        }
      }
      links.push(...relatedFears);
    }
  }
  
  // Nearby locations
  if (page.location) {
    const allLocations = getAllLocations();
    const currentLocation = getLocationById(page.location);
    if (currentLocation) {
      const nearbyLocations = allLocations
        .filter(l => l.id !== page.location && l.tier === currentLocation.tier)
        .slice(0, internalLinkingRules.nearbyLocations)
        .map(l => ({
          href: `${getHubById(page.hub)?.slug || ''}/${page.businessType || ''}/${l.id}`.replace(/\/+/g, '/'),
          label: `POS in ${l.name}`,
          type: 'related' as const,
        }));
      links.push(...nearbyLocations);
    }
  }
  
  // Ensure we have minimum links
  const remainingSlots = internalLinkingRules.minLinksPerPage - links.length;
  if (remainingSlots > 0) {
    // Add hub links
    const hubLinks = hubs
      .filter(h => h.id !== page.hub)
      .slice(0, remainingSlots)
      .map(h => ({
        href: h.slug,
        label: h.title.split('|')[0].trim(),
        type: 'related' as const,
      }));
    links.push(...hubLinks);
  }
  
  // Cap at maximum
  return links.slice(0, internalLinkingRules.maxLinksPerPage);
}

// ============================================================================
// PAGE ENUMERATION (for sitemap generation)
// ============================================================================

/**
 * Generate all possible page slugs for sitemap
 */
export function enumerateAllPages(): string[] {
  const pages: string[] = [];
  
  // Hub pages
  hubs.forEach(hub => {
    pages.push(hub.slug);
    
    // Business type pages
    if (hub.supportedTemplates.includes('business')) {
      businessTypes.forEach(bt => {
        pages.push(`${hub.slug}/${bt.id}`);
        
        // Business + location pages
        if (hub.supportedTemplates.includes('business-location')) {
          getAllLocations()
            .filter(l => l.priority >= 5)
            .forEach(loc => {
              pages.push(`${hub.slug}/${bt.id}/${loc.id}`);
            });
        }
      });
    }
    
    // Location pages
    if (hub.supportedTemplates.includes('location')) {
      getAllLocations()
        .filter(l => l.priority >= 5)
        .forEach(loc => {
          pages.push(`${hub.slug}/${loc.id}`);
        });
    }
    
    // Fear pages
    if (hub.supportedTemplates.includes('fear')) {
      fears
        .filter(f => f.urgency === 'high')
        .forEach(fear => {
          pages.push(`${hub.slug}/${fear.id}`);
        });
    }
  });
  
  return pages;
}

/**
 * Get page count by category
 */
export function getPageCountByCategory(): Record<string, number> {
  const allPages = enumerateAllPages();
  
  return {
    hubs: hubs.length,
    business: businessTypes.length * hubs.filter(h => h.supportedTemplates.includes('business')).length,
    location: getAllLocations().filter(l => l.priority >= 5).length * hubs.filter(h => h.supportedTemplates.includes('location')).length,
    fear: fears.filter(f => f.urgency === 'high').length * hubs.filter(h => h.supportedTemplates.includes('fear')).length,
    total: allPages.length,
  };
}
