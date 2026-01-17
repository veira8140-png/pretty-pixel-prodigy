/**
 * Keyword Configuration for Programmatic SEO
 * 
 * Tier 1-4 keywords organized by intent
 * Used for content generation and internal linking
 */

export type KeywordTier = 1 | 2 | 3 | 4;
export type KeywordIntent = 
  | 'transaction'      // Tier 1: buy, get, register
  | 'switching'        // Tier 2: alternative, replace, vs
  | 'problem_aware'    // Tier 3: how to, why, stop
  | 'local_bofu';      // Tier 4: city + business specific

export interface Keyword {
  slug: string;
  primary: string;
  variants: string[];
  tier: KeywordTier;
  intent: KeywordIntent;
  h1Template: string;
  titleTemplate: string;
  descriptionTemplate: string;
  pageType: string;
  priority: number;
}

// ============= TIER 1: Transaction Intent (Fastest Money) =============
export const tier1Keywords: Keyword[] = [
  {
    slug: 'free-pos-kenya',
    primary: 'free pos system kenya',
    variants: ['free pos kenya', 'free point of sale kenya', 'pos system free'],
    tier: 1,
    intent: 'transaction',
    h1Template: 'Get a Free POS System in Kenya',
    titleTemplate: 'Free POS System Kenya – No Monthly Fees | Veira',
    descriptionTemplate: 'Get a free ETIMS compliant POS system in Kenya. No upfront cost, no monthly fees. Free hardware, delivery, and setup. Start accepting payments today.',
    pageType: 'authority_hub',
    priority: 10,
  },
  {
    slug: 'pochi-la-biashara-registration',
    primary: 'pochi la biashara registration',
    variants: ['register pochi la biashara', 'pochi registration', 'how to register pochi la biashara'],
    tier: 1,
    intent: 'transaction',
    h1Template: 'Pochi La Biashara Registration Guide',
    titleTemplate: 'Pochi La Biashara Registration Kenya – Complete Guide | Veira',
    descriptionTemplate: 'Register for Pochi La Biashara and upgrade to a full POS with ETIMS compliance. Free setup, M-Pesa integration, sales tracking.',
    pageType: 'authority_hub',
    priority: 10,
  },
  {
    slug: 'kra-etims-pos',
    primary: 'kra etims pos',
    variants: ['etims compliant pos', 'kra approved pos', 'etims pos system', 'etims receipt machine'],
    tier: 1,
    intent: 'transaction',
    h1Template: 'KRA ETIMS Compliant POS System',
    titleTemplate: 'KRA ETIMS POS Kenya – Automatic Tax Receipts | Veira',
    descriptionTemplate: 'Get a KRA ETIMS compliant POS system. Automatic electronic tax invoices, avoid penalties up to KES 1M. Free setup and delivery.',
    pageType: 'authority_hub',
    priority: 10,
  },
  {
    slug: 'mpesa-pos-integration',
    primary: 'mpesa pos integration',
    variants: ['pos with mpesa', 'lipa na mpesa pos', 'mpesa till pos'],
    tier: 1,
    intent: 'transaction',
    h1Template: 'POS System with M-Pesa Integration',
    titleTemplate: 'M-Pesa POS Integration Kenya – Accept Lipa Na M-Pesa | Veira',
    descriptionTemplate: 'POS system with M-Pesa integration. Accept Lipa Na M-Pesa, Till Number, Pochi La Biashara. Automatic payment tracking.',
    pageType: 'authority_hub',
    priority: 9,
  },
  {
    slug: 'pos-system-pricing-kenya',
    primary: 'pos system pricing kenya',
    variants: ['pos price kenya', 'how much is pos system', 'pos cost kenya'],
    tier: 1,
    intent: 'transaction',
    h1Template: 'POS System Pricing in Kenya',
    titleTemplate: 'POS System Pricing Kenya – Free Hardware, No Fees | Veira',
    descriptionTemplate: 'Transparent POS pricing in Kenya. Free hardware, free setup, no monthly fees. Only KES 3,500 refundable deposit. Compare and save.',
    pageType: 'authority_hub',
    priority: 9,
  },
];

// ============= TIER 2: Switching & Comparison Intent =============
export const tier2Keywords: Keyword[] = [
  {
    slug: 'alternative-to-pochi-la-biashara',
    primary: 'alternative to pochi la biashara',
    variants: ['pochi la biashara alternative', 'better than pochi'],
    tier: 2,
    intent: 'switching',
    h1Template: 'Best Alternative to Pochi La Biashara',
    titleTemplate: 'Pochi La Biashara Alternative – Get ETIMS + Inventory | Veira',
    descriptionTemplate: 'Looking for a Pochi La Biashara alternative? Get M-Pesa + ETIMS + inventory + WhatsApp reports. All features free.',
    pageType: 'alternative',
    priority: 9,
  },
  {
    slug: 'veira-vs-pochi-la-biashara',
    primary: 'veira vs pochi la biashara',
    variants: ['pochi vs veira', 'compare pochi and pos'],
    tier: 2,
    intent: 'switching',
    h1Template: 'Veira POS vs Pochi La Biashara',
    titleTemplate: 'Veira vs Pochi La Biashara – Full Comparison | Kenya',
    descriptionTemplate: 'Compare Veira POS with Pochi La Biashara. See features, pricing, ETIMS compliance, inventory management. Make the right choice.',
    pageType: 'comparison',
    priority: 9,
  },
  {
    slug: 'replace-mpesa-till',
    primary: 'replace mpesa till number',
    variants: ['upgrade till number', 'till number problems', 'better than till number'],
    tier: 2,
    intent: 'switching',
    h1Template: 'Replace Your M-Pesa Till Number',
    titleTemplate: 'Replace Till Number – Upgrade to Smart POS | Veira Kenya',
    descriptionTemplate: 'Upgrade from basic Till Number. Get ETIMS compliance, sales tracking, inventory, and WhatsApp reports. Free POS.',
    pageType: 'alternative',
    priority: 8,
  },
  {
    slug: 'upgrade-from-manual-receipts',
    primary: 'upgrade from manual receipts',
    variants: ['stop using receipt book', 'replace manual receipts', 'digital receipts kenya'],
    tier: 2,
    intent: 'switching',
    h1Template: 'Upgrade from Manual Receipts to Digital POS',
    titleTemplate: 'Replace Manual Receipts – ETIMS Digital POS | Veira Kenya',
    descriptionTemplate: 'Still using receipt books? Switch to Veira POS. Automatic ETIMS receipts, track all sales, prevent staff theft.',
    pageType: 'alternative',
    priority: 8,
  },
  {
    slug: 'pochi-vs-till-number',
    primary: 'pochi la biashara vs till number',
    variants: ['pochi or till', 'which is better pochi or till'],
    tier: 2,
    intent: 'switching',
    h1Template: 'Pochi La Biashara vs Till Number',
    titleTemplate: 'Pochi vs Till Number – Which to Choose | Veira Kenya',
    descriptionTemplate: 'Compare Pochi La Biashara and Till Number for your business. Or skip both and get a full POS with inventory and ETIMS.',
    pageType: 'comparison',
    priority: 7,
  },
];

// ============= TIER 3: Problem-Aware Intent =============
export const tier3Keywords: Keyword[] = [
  {
    slug: 'stop-employee-theft',
    primary: 'stop employee theft shop',
    variants: ['prevent staff theft', 'employee stealing cash', 'monitor shop attendants'],
    tier: 3,
    intent: 'problem_aware',
    h1Template: 'Stop Employee Theft in Your Shop',
    titleTemplate: 'Stop Staff Theft – Monitor Every Transaction | Veira POS',
    descriptionTemplate: 'Catch and prevent employee theft. Every sale tracked, every payment logged. Get alerts, see discounts, control voids.',
    pageType: 'use_case',
    priority: 9,
  },
  {
    slug: 'track-daily-sales-whatsapp',
    primary: 'track daily sales whatsapp',
    variants: ['daily sales report whatsapp', 'sales tracking kenya', 'monitor sales remotely'],
    tier: 3,
    intent: 'problem_aware',
    h1Template: 'Track Daily Sales with WhatsApp Reports',
    titleTemplate: 'Daily Sales Reports on WhatsApp | Veira POS Kenya',
    descriptionTemplate: 'Get daily sales reports on WhatsApp. Track revenue, monitor staff, see what sells. Monitor your business from anywhere.',
    pageType: 'use_case',
    priority: 9,
  },
  {
    slug: 'separate-business-money-mpesa',
    primary: 'separate business money mpesa',
    variants: ['business vs personal mpesa', 'mix personal business money', 'track business mpesa'],
    tier: 3,
    intent: 'problem_aware',
    h1Template: 'Separate Business Money from Personal M-Pesa',
    titleTemplate: 'Separate Business Money – Clear M-Pesa Tracking | Veira',
    descriptionTemplate: 'Stop mixing personal and business M-Pesa. Track every shilling. See real profit. Get daily reports.',
    pageType: 'use_case',
    priority: 8,
  },
  {
    slug: 'avoid-kra-etims-penalties',
    primary: 'avoid kra etims penalties',
    variants: ['etims penalty', 'kra fine', 'tax compliance kenya'],
    tier: 3,
    intent: 'problem_aware',
    h1Template: 'Avoid KRA ETIMS Penalties',
    titleTemplate: 'Avoid KRA Penalties – ETIMS Compliance | Veira POS Kenya',
    descriptionTemplate: 'KRA penalties up to KES 1M for no ETIMS. Get compliant today. Free POS, automatic receipts to KRA.',
    pageType: 'use_case',
    priority: 9,
  },
  {
    slug: 'manage-multiple-branches',
    primary: 'manage multiple branches pos',
    variants: ['multi branch pos', 'multi outlet pos kenya', 'chain store pos'],
    tier: 3,
    intent: 'problem_aware',
    h1Template: 'Manage Multiple Branches with One POS',
    titleTemplate: 'Multi-Branch POS System Kenya | Veira',
    descriptionTemplate: 'Manage multiple branches from one dashboard. See all sales, inventory, and staff across locations. Real-time reports.',
    pageType: 'use_case',
    priority: 7,
  },
];

// ============= TIER 4: Local + Business Type =============
// These are generated dynamically from locations + industries

// Get all keywords for sitemap generation
export const getAllKeywords = (): Keyword[] => {
  return [...tier1Keywords, ...tier2Keywords, ...tier3Keywords];
};

export const getKeywordsByTier = (tier: KeywordTier): Keyword[] => {
  return getAllKeywords().filter(k => k.tier === tier);
};

export const getKeywordBySlug = (slug: string): Keyword | undefined => {
  return getAllKeywords().find(k => k.slug === slug);
};

export const getKeywordsByIntent = (intent: KeywordIntent): Keyword[] => {
  return getAllKeywords().filter(k => k.intent === intent);
};
