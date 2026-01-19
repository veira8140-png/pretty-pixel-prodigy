/**
 * SITE MAP CONFIGURATION
 * Single source of truth for all routes, navigation, metadata, and redirects
 * 
 * Rules:
 * 1. No page exists unless it's in this config
 * 2. No redirect is added manually elsewhere
 * 3. No nav link is hardcoded
 * 4. No SEO metadata is hardcoded in components
 */

export type SitePageType = 
  | 'marketing' 
  | 'hub' 
  | 'programmatic' 
  | 'legal' 
  | 'utility';

export type SchemaType = 
  | 'Product' 
  | 'FAQ' 
  | 'Article' 
  | 'LocalBusiness' 
  | 'HowTo' 
  | 'BreadcrumbList'
  | 'Organization';

export interface PageConfig {
  path: string;
  type: SitePageType;
  title: string;
  description: string;
  
  // Navigation
  navLabel?: string;          // If set, shows in main nav
  navOrder?: number;          // Order in navigation
  navPath?: string;           // Override path for nav link (useful for /cloud/hosting → /cloud)
  showInFooter?: boolean;     // Show in footer links
  footerSection?: 'products' | 'company' | 'resources' | 'legal';
  
  // SEO
  schema?: SchemaType[];
  keywords?: string[];
  canonical?: string;         // Override canonical URL
  noIndex?: boolean;          // Don't index this page
  
  // Redirects - all old URLs that should redirect here
  redirects?: string[];
  
  // Hub configuration
  isHub?: boolean;
  childDimension?: 'businessType' | 'industry' | 'location' | 'useCase';
  parentHub?: string;         // Key of parent hub page
  
  // Templates for programmatic children
  titleTemplate?: string;     // e.g., "POS for {{businessType}} in Kenya"
  descriptionTemplate?: string;
}

// ============================================================================
// CORE MARKETING PAGES
// ============================================================================

export const siteMap: Record<string, PageConfig> = {
  // Home
  home: {
    path: '/',
    type: 'marketing',
    title: 'Veira | Managed POS, AI Agents & Cloud for Kenyan Businesses',
    description: 'Get a free POS system with ETIMS compliance, WhatsApp sales reports, and theft prevention. Built for Kenyan retail shops, restaurants, and pharmacies.',
    schema: ['Organization', 'FAQ'],
    keywords: ['free pos kenya', 'etims pos', 'pos system nairobi', 'mpesa pos'],
  },

  // ============================================================================
  // PRODUCT PAGES
  // ============================================================================
  
  pos: {
    path: '/pos',
    type: 'marketing',
    title: 'POS System for Kenyan Businesses | Veira',
    description: 'Cloud POS with ETIMS compliance, WhatsApp reports, M-Pesa integration and theft prevention. Free setup, no monthly fees.',
    navLabel: 'POS',
    navOrder: 1,
    showInFooter: true,
    footerSection: 'products',
    schema: ['Product', 'FAQ'],
    keywords: ['pos system kenya', 'cloud pos', 'etims pos', 'free pos kenya'],
    redirects: ['/point-of-sale', '/pos-system-overview'],
  },

  posPricing: {
    path: '/pos/pricing',
    type: 'marketing',
    title: 'POS Pricing | Free POS with KES 3,500 Deposit | Veira',
    description: 'Transparent POS pricing. Free installation, free training, 15GB data bundle. Only KES 3,500 refundable deposit. No hidden fees.',
    schema: ['Product', 'FAQ'],
    keywords: ['pos pricing kenya', 'free pos', 'cheap pos kenya'],
    parentHub: 'pos',
  },

  posFree: {
    path: '/pos/free-pos',
    type: 'marketing',
    title: 'Free POS System Kenya | No Monthly Fees | Veira',
    description: 'Get a completely free POS system for your Kenyan business. ETIMS compliant, WhatsApp reports included. Pay only KES 3,500 refundable deposit.',
    schema: ['Product', 'FAQ'],
    keywords: ['free pos kenya', 'free pos system', 'no monthly fee pos'],
    parentHub: 'pos',
  },

  posEtims: {
    path: '/pos/etims',
    type: 'marketing',
    title: 'ETIMS Compliant POS | KRA Ready | Veira',
    description: 'Stay KRA compliant with Veira ETIMS-ready POS. Automatic tax invoicing, real-time reporting, and full compliance support.',
    schema: ['Product', 'FAQ'],
    keywords: ['etims pos', 'kra pos', 'etims compliant pos kenya'],
    parentHub: 'pos',
  },

  etims: {
    path: '/etims',
    type: 'marketing',
    title: 'ETIMS Integration & Compliance | Veira',
    description: 'Complete ETIMS compliance solution for Kenyan businesses. Automatic KRA tax invoicing, real-time sync, and expert support.',
    showInFooter: true,
    footerSection: 'products',
    schema: ['Product', 'FAQ', 'HowTo'],
    keywords: ['etims kenya', 'kra etims', 'etims compliance', 'etims registration'],
  },

  agents: {
    path: '/agents',
    type: 'marketing',
    title: 'AI Agents for Business | Veira',
    description: 'AI-powered agents that handle customer service, sales reports, and business automation. Get WhatsApp daily reports and 24/7 support.',
    navLabel: 'Agents',
    navOrder: 2,
    showInFooter: true,
    footerSection: 'products',
    schema: ['Product', 'FAQ'],
    keywords: ['ai agents kenya', 'business automation', 'whatsapp reports'],
  },

  cloudHosting: {
    path: '/cloud/hosting',
    type: 'marketing',
    title: 'Cloud Hosting for Kenyan Businesses | Veira',
    description: 'Reliable cloud hosting with 99.9% uptime. Fast servers, automatic backups, and local support for Kenyan businesses.',
    navLabel: 'Cloud',
    navOrder: 3,
    navPath: '/cloud/hosting', // Explicit nav path
    showInFooter: true,
    footerSection: 'products',
    schema: ['Product'],
    keywords: ['cloud hosting kenya', 'web hosting nairobi', 'reliable hosting'],
  },

  cloudMaintenance: {
    path: '/cloud/maintenance',
    type: 'marketing',
    title: 'Website Maintenance Services | Veira',
    description: 'Professional website maintenance. Security updates, performance optimization, and 24/7 monitoring for your business website.',
    showInFooter: true,
    footerSection: 'products',
    schema: ['Product'],
    keywords: ['website maintenance kenya', 'web support', 'site maintenance'],
  },

  websites: {
    path: '/websites',
    type: 'marketing',
    title: 'Business Websites for Kenyan SMEs | Veira',
    description: 'Professional websites for Kenyan businesses. Mobile-first design, fast loading, and built for conversions.',
    navLabel: 'Apps',
    navOrder: 4,
    showInFooter: true,
    footerSection: 'products',
    schema: ['Product'],
    keywords: ['business website kenya', 'web design nairobi', 'sme website'],
  },

  // ============================================================================
  // COMPANY PAGES
  // ============================================================================

  useCases: {
    path: '/use-cases',
    type: 'marketing',
    title: 'Use Cases | How Businesses Use Veira',
    description: 'See how Kenyan businesses use Veira to track sales, prevent theft, stay ETIMS compliant, and grow their revenue.',
    navLabel: 'Use Cases',
    navOrder: 5,
    showInFooter: true,
    footerSection: 'company',
    schema: ['Article'],
    keywords: ['pos use cases', 'business success stories', 'veira customers'],
  },

  ourStory: {
    path: '/our-story',
    type: 'marketing',
    title: 'Our Story | About Veira',
    description: 'Why Veira was built for Kenyan business owners. Our mission to help SMEs track sales, prevent theft, and stay compliant.',
    navLabel: 'Our Story',
    navOrder: 6,
    showInFooter: true,
    footerSection: 'company',
    schema: ['Article', 'Organization'],
    keywords: ['about veira', 'veira story', 'kenyan startup'],
    redirects: ['/our story', '/ourstory', '/story', '/about-us', '/about'],
  },

  testimonials: {
    path: '/testimonials',
    type: 'marketing',
    title: 'Customer Testimonials | Veira',
    description: 'Hear from Kenyan business owners who use Veira POS. Real stories of sales growth, theft prevention, and ETIMS compliance.',
    showInFooter: true,
    footerSection: 'company',
    schema: ['Article'],
    keywords: ['veira reviews', 'pos testimonials', 'customer stories'],
  },

  // ============================================================================
  // AUTHORITY HUB PAGES
  // ============================================================================

  posSystemHub: {
    path: '/pos-system',
    type: 'hub',
    isHub: true,
    childDimension: 'businessType',
    title: 'POS System Guide for Kenyan Businesses | Veira',
    description: 'Complete guide to POS systems in Kenya. Find the right POS for retail shops, restaurants, pharmacies, hardware stores and more.',
    titleTemplate: 'POS System for {{businessType}} in Kenya | Veira',
    descriptionTemplate: 'Get a free POS system designed for {{businessType}} in Kenya. ETIMS compliant, WhatsApp reports, and theft prevention included.',
    showInFooter: true,
    footerSection: 'resources',
    schema: ['Article', 'FAQ', 'BreadcrumbList'],
    keywords: ['pos system kenya', 'best pos for business', 'pos by industry'],
  },

  etimsPosHub: {
    path: '/etims-pos',
    type: 'hub',
    isHub: true,
    childDimension: 'industry',
    title: 'ETIMS Compliant POS System | KRA Ready | Veira',
    description: 'Stay KRA compliant with an ETIMS-ready POS system. Automatic tax invoicing, real-time reporting, and compliance support for all industries.',
    titleTemplate: 'ETIMS POS for {{industry}} | KRA Compliant | Veira',
    descriptionTemplate: 'Get ETIMS compliant POS for your {{industry}} business. Automatic KRA tax invoices, real-time sync, avoid penalties.',
    showInFooter: true,
    footerSection: 'resources',
    schema: ['Article', 'FAQ', 'HowTo', 'BreadcrumbList'],
    keywords: ['etims pos', 'kra etims', 'etims compliance', 'kra pos system'],
  },

  staffTheftHub: {
    path: '/staff-theft-prevention',
    type: 'hub',
    isHub: true,
    childDimension: 'useCase',
    title: 'Stop Staff Theft with POS | Theft Prevention Guide | Veira',
    description: 'Prevent employee theft in your business with a modern POS system. Track every sale, get instant alerts, and protect your profits.',
    titleTemplate: 'How to {{useCase}} | Staff Theft Prevention | Veira',
    descriptionTemplate: 'Learn how to {{useCase}} with Veira POS. Real-time monitoring, transaction tracking, and instant alerts.',
    showInFooter: true,
    footerSection: 'resources',
    schema: ['Article', 'FAQ', 'HowTo', 'BreadcrumbList'],
    keywords: ['employee theft prevention', 'staff theft pos', 'stop theft retail'],
  },

  dailySalesReportsHub: {
    path: '/daily-sales-reports',
    type: 'hub',
    isHub: true,
    childDimension: 'useCase',
    title: 'Daily Sales Reports on WhatsApp | Veira',
    description: 'Get automatic daily sales reports on WhatsApp. Track revenue, monitor branches, and make data-driven decisions from anywhere.',
    titleTemplate: '{{useCase}} | Sales Reports | Veira',
    descriptionTemplate: 'Learn how to {{useCase}}. Automatic WhatsApp reports, real-time dashboards, and actionable insights.',
    showInFooter: true,
    footerSection: 'resources',
    schema: ['Article', 'FAQ', 'HowTo', 'BreadcrumbList'],
    keywords: ['daily sales reports', 'whatsapp reports', 'sales tracking'],
  },

  // ============================================================================
  // UTILITY PAGES
  // ============================================================================

  notFound: {
    path: '/404',
    type: 'utility',
    title: 'Page Not Found | Veira',
    description: 'The page you are looking for does not exist.',
    noIndex: true,
  },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all pages that should appear in main navigation
 */
export function getNavLinks(): Array<{ label: string; url: string }> {
  return Object.values(siteMap)
    .filter(page => page.navLabel && page.navOrder !== undefined)
    .sort((a, b) => (a.navOrder || 0) - (b.navOrder || 0))
    .map(page => ({
      label: page.navLabel!,
      url: page.navPath || page.path, // Use navPath if available, otherwise use path
    }));
}

/**
 * Get all pages for a specific footer section
 */
export function getFooterLinks(section: PageConfig['footerSection']): Array<{ label: string; url: string }> {
  return Object.values(siteMap)
    .filter(page => page.showInFooter && page.footerSection === section)
    .map(page => ({
      label: page.navLabel || page.title.split('|')[0].trim(),
      url: page.path,
    }));
}

/**
 * Get all redirects from the site map
 */
export function getAllRedirects(): Array<{ from: string; to: string; permanent: boolean }> {
  return Object.values(siteMap)
    .flatMap(page => 
      (page.redirects || []).map(from => ({
        from,
        to: page.path,
        permanent: true,
      }))
    );
}

/**
 * Get page config by path
 */
export function getPageByPath(path: string): PageConfig | undefined {
  return Object.values(siteMap).find(page => page.path === path);
}

/**
 * Get page config by key
 */
export function getPageByKey(key: string): PageConfig | undefined {
  return siteMap[key];
}

/**
 * Get all hub pages
 */
export function getHubPages(): PageConfig[] {
  return Object.values(siteMap).filter(page => page.isHub);
}

/**
 * Get metadata for a page
 */
export function getPageMetadata(path: string): {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  noIndex?: boolean;
} {
  const page = getPageByPath(path);
  if (!page) {
    return {
      title: 'Veira | POS & Business Solutions for Kenya',
      description: 'Managed POS systems, AI agents, and cloud solutions for Kenyan businesses.',
      canonical: path,
    };
  }

  return {
    title: page.title,
    description: page.description,
    canonical: page.canonical || page.path,
    keywords: page.keywords,
    noIndex: page.noIndex,
  };
}

/**
 * Generate dynamic metadata for programmatic pages
 */
export function generateDynamicMetadata(
  hubKey: string,
  variables: Record<string, string>
): { title: string; description: string } {
  const hub = siteMap[hubKey];
  if (!hub || !hub.titleTemplate || !hub.descriptionTemplate) {
    return {
      title: 'Veira',
      description: 'POS and business solutions for Kenya',
    };
  }

  let title = hub.titleTemplate;
  let description = hub.descriptionTemplate;

  Object.entries(variables).forEach(([key, value]) => {
    title = title.replace(`{{${key}}}`, value);
    description = description.replace(`{{${key}}}`, value);
  });

  return { title, description };
}
