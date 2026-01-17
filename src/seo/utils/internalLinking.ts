/**
 * Internal Linking Utilities
 * 
 * Implements semantic silo linking strategy:
 * - 1 parent link
 * - 4 sibling links
 * - 6 child links
 * - 1 exact match anchor limit
 * - Partial and branded anchors
 */

import { counties, getLocationsByPriority, type Location } from '../config/locations';
import { industries, getIndustriesByPriority, type Industry } from '../config/industries';
import { getAllKeywords, type Keyword } from '../config/keywords';

export interface SiloLink {
  href: string;
  label: string;
  anchor: string;
  type: 'parent' | 'sibling' | 'child' | 'hub' | 'branded';
}

export interface SiloLinks {
  parent: SiloLink;
  siblings: SiloLink[];
  children: SiloLink[];
  hubs: SiloLink[];
  branded: SiloLink;
}

// Get silo links for a local authority page
export const getLocalSiloLinks = (
  currentCity: string,
  currentIntent: string = 'registration'
): SiloLinks => {
  const cityLower = currentCity.toLowerCase();
  const otherCities = counties
    .filter(c => c.slug !== cityLower)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 4);
  
  const relatedIndustries = getIndustriesByPriority(7).slice(0, 4);
  const intents = ['registration', 'pricing', 'etims'].filter(i => i !== currentIntent);
  
  return {
    parent: {
      href: '/pos',
      label: 'All Kenya POS Systems',
      anchor: 'POS systems in Kenya',
      type: 'parent',
    },
    siblings: otherCities.map((city, index) => ({
      href: `/pos/${city.slug}/${currentIntent}`,
      label: `POS in ${city.name}`,
      // First link gets exact match, rest get branded/partial
      anchor: index === 0 ? `POS system in ${city.name}` : city.name,
      type: 'sibling' as const,
    })),
    children: [
      // Intent variants within same city
      ...intents.slice(0, 2).map(intent => ({
        href: `/pos/${cityLower}/${intent}`,
        label: `${intent === 'pricing' ? 'Pricing' : intent === 'etims' ? 'ETIMS' : 'Get POS'} ${currentCity}`,
        anchor: `${intent} POS ${currentCity}`,
        type: 'child' as const,
      })),
      // Industry variants within same city
      ...relatedIndustries.map(ind => ({
        href: `/pos/${cityLower}/for-${ind.slug}`,
        label: `POS for ${ind.plural}`,
        anchor: `${ind.name.toLowerCase()} POS`,
        type: 'child' as const,
      })),
    ],
    hubs: [
      { href: '/free-pos-kenya', label: 'Free POS Guide', anchor: 'free POS systems', type: 'hub' },
      { href: '/kra-etims-pos-guide', label: 'ETIMS Guide', anchor: 'ETIMS compliance', type: 'hub' },
    ],
    branded: {
      href: '/',
      label: 'Veira Kenya',
      anchor: 'Veira Kenya',
      type: 'branded',
    },
  };
};

// Get silo links for an industry page
export const getIndustrySiloLinks = (
  currentIndustry: string,
  city?: string
): SiloLinks => {
  const industryLower = currentIndustry.toLowerCase();
  const otherIndustries = industries
    .filter(i => i.slug !== industryLower)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 4);
  
  const topCities = getLocationsByPriority(8).slice(0, 4);
  
  return {
    parent: {
      href: city ? `/pos/${city.toLowerCase()}` : '/pos',
      label: city ? `All POS in ${city}` : 'All POS Systems',
      anchor: city ? `POS in ${city}` : 'POS systems Kenya',
      type: 'parent',
    },
    siblings: otherIndustries.map((ind, index) => ({
      href: city ? `/pos/${city.toLowerCase()}/for-${ind.slug}` : `/pos/for-${ind.slug}`,
      label: `POS for ${ind.plural}`,
      anchor: index === 0 ? `${ind.name} POS system` : ind.name,
      type: 'sibling' as const,
    })),
    children: topCities.map(c => ({
      href: `/pos/${c.slug}/for-${industryLower}`,
      label: `${currentIndustry} POS ${c.name}`,
      anchor: c.name,
      type: 'child' as const,
    })),
    hubs: [
      { href: '/free-pos-kenya', label: 'Free POS Guide', anchor: 'free POS', type: 'hub' },
      { href: '/kra-etims-pos-guide', label: 'ETIMS Guide', anchor: 'KRA ETIMS', type: 'hub' },
    ],
    branded: {
      href: '/',
      label: 'Veira Kenya',
      anchor: 'Veira',
      type: 'branded',
    },
  };
};

// Get silo links for a hub page
export const getHubSiloLinks = (currentSlug: string): SiloLinks => {
  const otherKeywords = getAllKeywords()
    .filter(k => k.slug !== currentSlug && k.pageType === 'authority_hub')
    .slice(0, 4);
  
  const topCities = getLocationsByPriority(9).slice(0, 4);
  const topIndustries = getIndustriesByPriority(8).slice(0, 2);
  
  return {
    parent: {
      href: '/',
      label: 'Veira Home',
      anchor: 'Veira Kenya',
      type: 'parent',
    },
    siblings: otherKeywords.map((kw, index) => ({
      href: `/${kw.slug}`,
      label: kw.primary,
      anchor: index === 0 ? kw.primary : kw.slug.replace(/-/g, ' '),
      type: 'sibling' as const,
    })),
    children: [
      ...topCities.map(c => ({
        href: `/pos/${c.slug}`,
        label: `POS ${c.name}`,
        anchor: c.name,
        type: 'child' as const,
      })),
      ...topIndustries.map(ind => ({
        href: `/pos/for-${ind.slug}`,
        label: `POS for ${ind.plural}`,
        anchor: ind.name,
        type: 'child' as const,
      })),
    ],
    hubs: [],
    branded: {
      href: '/',
      label: 'Veira Kenya',
      anchor: 'Veira',
      type: 'branded',
    },
  };
};

// Get silo links for comparison/alternative pages
export const getComparisonSiloLinks = (currentSlug: string): SiloLinks => {
  const otherComparisons = getAllKeywords()
    .filter(k => k.slug !== currentSlug && (k.pageType === 'comparison' || k.pageType === 'alternative'))
    .slice(0, 4);
  
  const topCities = getLocationsByPriority(8).slice(0, 4);
  
  return {
    parent: {
      href: '/pos',
      label: 'All POS Systems',
      anchor: 'POS systems Kenya',
      type: 'parent',
    },
    siblings: otherComparisons.map((kw, index) => ({
      href: `/${kw.slug}`,
      label: kw.primary,
      anchor: index === 0 ? kw.primary : kw.slug.replace(/-/g, ' '),
      type: 'sibling' as const,
    })),
    children: topCities.map(c => ({
      href: `/pos/${c.slug}/registration`,
      label: `Get POS ${c.name}`,
      anchor: `free POS ${c.name}`,
      type: 'child' as const,
    })),
    hubs: [
      { href: '/free-pos-kenya', label: 'Free POS Guide', anchor: 'free POS', type: 'hub' },
      { href: '/pochi-la-biashara-guide-kenya', label: 'Pochi Guide', anchor: 'Pochi La Biashara', type: 'hub' },
    ],
    branded: {
      href: '/',
      label: 'Veira Kenya',
      anchor: 'Veira',
      type: 'branded',
    },
  };
};

// Get silo links for use case pages
export const getUseCaseSiloLinks = (currentSlug: string): SiloLinks => {
  const otherUseCases = getAllKeywords()
    .filter(k => k.slug !== currentSlug && k.pageType === 'use_case')
    .slice(0, 4);
  
  const topCities = getLocationsByPriority(8).slice(0, 4);
  
  return {
    parent: {
      href: '/pos',
      label: 'All POS Systems',
      anchor: 'POS solutions',
      type: 'parent',
    },
    siblings: otherUseCases.map((kw, index) => ({
      href: `/${kw.slug}`,
      label: kw.h1Template,
      anchor: index === 0 ? kw.primary : kw.slug.replace(/-/g, ' '),
      type: 'sibling' as const,
    })),
    children: topCities.map(c => ({
      href: `/pos/${c.slug}/registration`,
      label: `Get POS ${c.name}`,
      anchor: c.name,
      type: 'child' as const,
    })),
    hubs: [
      { href: '/free-pos-kenya', label: 'Free POS Guide', anchor: 'free POS', type: 'hub' },
      { href: '/kra-etims-pos-guide', label: 'ETIMS Guide', anchor: 'ETIMS compliance', type: 'hub' },
    ],
    branded: {
      href: '/',
      label: 'Veira Kenya',
      anchor: 'Veira',
      type: 'branded',
    },
  };
};
