/**
 * MASTER SEO CONFIGURATION
 * 
 * This is the system contract that controls:
 * - What pages exist
 * - How they're generated
 * - How SEO stays clean at scale
 * 
 * Rules:
 * 1. No page exists unless it can be generated from this config
 * 2. All hubs, templates, and page entities are governed here
 * 3. Quality thresholds are enforced automatically
 */

// ============================================================================
// 1. GLOBAL CONFIG (SITE + SEO CORE)
// ============================================================================

export const siteConfig = {
  name: 'Veira',
  domain: 'https://veirahq.com',
  country: 'KE',
  currency: 'KES',
  defaultLanguage: 'en-KE',
} as const;

export const seoDefaults = {
  titleSuffix: 'Veira POS',
  indexable: true,
  openGraphType: 'website' as const,
  twitterCard: 'summary_large_image' as const,
} as const;

// ============================================================================
// 2. HUB DEFINITIONS (AUTHORITY PAGES)
// ============================================================================

export type HubIntent = 'commercial' | 'compliance' | 'pain' | 'reports';
export type TemplateType = 'business' | 'location' | 'fear' | 'business-location' | 'business-fear' | 'business-fear-location';
export type SchemaType = 'Article' | 'FAQ' | 'HowTo' | 'Product' | 'Breadcrumb' | 'LocalBusiness' | 'Organization';

export interface HubDefinition {
  id: string;
  slug: string;
  intent: HubIntent;
  primaryKeyword: string;
  title: string;
  description: string;
  supportedTemplates: TemplateType[];
  schema: SchemaType[];
}

export const hubs: HubDefinition[] = [
  {
    id: 'pos-software',
    slug: '/pos-software',
    intent: 'commercial',
    primaryKeyword: 'POS software in Kenya',
    title: 'POS Software for Kenyan Businesses | Veira',
    description: 'Get the best POS software in Kenya. ETIMS compliant, M-Pesa integrated, WhatsApp reports. Free setup for retail, restaurant, pharmacy.',
    supportedTemplates: ['business', 'location', 'business-location'],
    schema: ['Article', 'FAQ', 'Breadcrumb'],
  },
  {
    id: 'kra-etims-pos',
    slug: '/kra-etims-pos',
    intent: 'compliance',
    primaryKeyword: 'KRA ETIMS compliant POS',
    title: 'KRA ETIMS Compliant POS System | Veira',
    description: 'Stay compliant with KRA ETIMS requirements. Automatic tax invoicing, real-time sync, avoid penalties up to KES 1M.',
    supportedTemplates: ['business', 'location', 'business-location'],
    schema: ['Article', 'FAQ', 'HowTo', 'Breadcrumb'],
  },
  {
    id: 'staff-theft-prevention',
    slug: '/staff-theft-prevention',
    intent: 'pain',
    primaryKeyword: 'prevent staff theft POS',
    title: 'Stop Staff Theft with POS | Veira',
    description: 'Catch and prevent employee theft. Track every transaction, get alerts on voids, monitor discounts. Protect your profit.',
    supportedTemplates: ['business', 'fear', 'business-fear'],
    schema: ['Article', 'FAQ', 'HowTo', 'Breadcrumb'],
  },
  {
    id: 'daily-sales-reports',
    slug: '/daily-sales-reports',
    intent: 'reports',
    primaryKeyword: 'daily sales reports WhatsApp',
    title: 'Daily Sales Reports on WhatsApp | Veira',
    description: 'Get automatic daily sales reports on WhatsApp. Track revenue, monitor staff, see what sells. Manage from anywhere.',
    supportedTemplates: ['business', 'location'],
    schema: ['Article', 'FAQ', 'HowTo', 'Breadcrumb'],
  },
  {
    id: 'pos-system',
    slug: '/pos-system',
    intent: 'commercial',
    primaryKeyword: 'POS system Kenya',
    title: 'POS System Guide for Kenyan Businesses | Veira',
    description: 'Complete guide to POS systems in Kenya. Find the right POS for retail, restaurants, pharmacies, hardware stores.',
    supportedTemplates: ['business', 'location', 'business-location'],
    schema: ['Article', 'FAQ', 'Breadcrumb'],
  },
];

// ============================================================================
// 3. BUSINESS TYPES (VERTICAL MULTIPLIER)
// ============================================================================

export interface BusinessType {
  id: string;
  name: string;
  plural: string;
  primaryKeyword: string;
  fears: string[]; // References fear IDs
  painPoints: string[];
  features: string[];
  schema: SchemaType[];
  priority: number;
}

export const businessTypes: BusinessType[] = [
  {
    id: 'liquor-store',
    name: 'Liquor Store',
    plural: 'Liquor Stores',
    primaryKeyword: 'POS software for liquor stores',
    fears: ['staff-theft', 'fake-sales', 'kra-fines'],
    painPoints: [
      'Evening/weekend sales spikes with no visibility',
      'Cash handling after hours by unsupervised staff',
      'Age verification requirements',
      'No real-time sales monitoring',
    ],
    features: [
      'Real-time sales monitoring',
      'Shift management and handover',
      'ID verification prompts',
      'WhatsApp sales alerts',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 8,
  },
  {
    id: 'mini-mart',
    name: 'Mini Mart',
    plural: 'Mini Marts',
    primaryKeyword: 'POS software for mini marts',
    fears: ['stock-loss', 'staff-theft', 'no-visibility'],
    painPoints: [
      'Inventory shrinkage you can not track',
      'Staff giving discounts to friends',
      'No idea what sells and what does not',
      'Cash reconciliation issues every night',
    ],
    features: [
      'Full inventory tracking',
      'Low stock alerts',
      'Sales analytics by product',
      'Daily cash reports',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 9,
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    plural: 'Restaurants',
    primaryKeyword: 'POS software for restaurants',
    fears: ['waiter-theft', 'order-errors', 'kra-fines'],
    painPoints: [
      'Order mix-ups between kitchen and waiters',
      'Split bill confusion',
      'Waiters pocketing cash',
      'No ETIMS compliance',
    ],
    features: [
      'Table and order management',
      'Kitchen display integration',
      'Split bill functionality',
      'ETIMS automatic receipts',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 10,
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    plural: 'Pharmacies',
    primaryKeyword: 'POS software for pharmacies',
    fears: ['expiry-losses', 'kra-fines', 'compliance'],
    painPoints: [
      'Drugs expiring without notice',
      'Controlled substance tracking',
      'Insurance claims complexity',
      'KRA compliance requirements',
    ],
    features: [
      'Expiry date tracking and alerts',
      'Batch number management',
      'Prescription history',
      'ETIMS integration',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 9,
  },
  {
    id: 'hardware',
    name: 'Hardware Store',
    plural: 'Hardware Stores',
    primaryKeyword: 'POS software for hardware stores',
    fears: ['credit-losses', 'stock-loss', 'staff-theft'],
    painPoints: [
      'Thousands of SKUs hard to track',
      'Credit sales to fundis never recovered',
      'Staff giving unauthorized discounts',
      'Finding products takes forever',
    ],
    features: [
      'Large catalog support',
      'Credit account management',
      'Product search by name or code',
      'Debtor tracking and reminders',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 8,
  },
  {
    id: 'butchery',
    name: 'Butchery',
    plural: 'Butcheries',
    primaryKeyword: 'POS software for butcheries',
    fears: ['staff-theft', 'weight-cheating', 'no-profit'],
    painPoints: [
      'Weight-based pricing inaccuracies',
      'Fresh inventory spoils daily',
      'Attendants handling all cash',
      'No idea what your margin is',
    ],
    features: [
      'Scale integration',
      'Weight-based pricing',
      'Daily inventory tracking',
      'Gross margin reports',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 8,
  },
  {
    id: 'supermarket',
    name: 'Supermarket',
    plural: 'Supermarkets',
    primaryKeyword: 'POS software for supermarkets',
    fears: ['cashier-theft', 'stock-loss', 'kra-fines'],
    painPoints: [
      'Multiple cashiers to monitor',
      'High volume inventory shrinkage',
      'Complex pricing and promotions',
      'KRA ETIMS for every checkout',
    ],
    features: [
      'Multi-checkout support',
      'Cashier performance tracking',
      'Promotion management',
      'ETIMS on all registers',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 9,
  },
  {
    id: 'salon',
    name: 'Salon',
    plural: 'Salons',
    primaryKeyword: 'POS software for salons',
    fears: ['staff-theft', 'no-visibility', 'booking-chaos'],
    painPoints: [
      'Service plus product billing complexity',
      'Staff commission calculation',
      'No-shows and booking issues',
      'Cash handling by stylists',
    ],
    features: [
      'Service menu management',
      'Commission tracking per stylist',
      'Product and service invoicing',
      'Daily revenue by staff',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 7,
  },
  {
    id: 'barbershop',
    name: 'Barbershop',
    plural: 'Barbershops',
    primaryKeyword: 'POS software for barbershops',
    fears: ['staff-theft', 'no-visibility'],
    painPoints: [
      'Walk-in cash payments not tracked',
      'Multiple barbers sharing space',
      'No daily revenue visibility',
      'Barbers handle all money',
    ],
    features: [
      'Walk-in tracking',
      'Per-barber sales reports',
      'Daily revenue summaries',
      'Product sales integration',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 7,
  },
  {
    id: 'kiosk',
    name: 'Kiosk',
    plural: 'Kiosks',
    primaryKeyword: 'POS software for kiosks',
    fears: ['no-records', 'mix-money', 'no-profit'],
    painPoints: [
      'M-Pesa is only payment method',
      'Mix personal and business money',
      'No sales records at all',
      'No idea if you are profitable',
    ],
    features: [
      'Simple mobile interface',
      'M-Pesa integration',
      'Basic inventory',
      'Daily profit summary',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 8,
  },
  {
    id: 'agrovet',
    name: 'Agrovet',
    plural: 'Agrovets',
    primaryKeyword: 'POS software for agrovets',
    fears: ['credit-losses', 'expiry-losses', 'kra-fines'],
    painPoints: [
      'Seasonal sales unpredictable',
      'Credit to farmers never repaid',
      'Chemicals expire before sale',
      'KRA wants ETIMS compliance',
    ],
    features: [
      'Credit management',
      'Expiry date tracking',
      'Seasonal reporting',
      'Multi-category catalog',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 6,
  },
  {
    id: 'wholesale',
    name: 'Wholesale',
    plural: 'Wholesalers',
    primaryKeyword: 'POS software for wholesalers',
    fears: ['credit-losses', 'stock-loss', 'kra-fines'],
    painPoints: [
      'Credit sales to retailers not tracked',
      'Customer account balances unclear',
      'Bulk order management chaos',
      'Delivery tracking issues',
    ],
    features: [
      'Credit and debtor management',
      'Customer account ledgers',
      'Bulk pricing tiers',
      'Invoice and delivery notes',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 7,
  },
  {
    id: 'cyber-cafe',
    name: 'Cyber Cafe',
    plural: 'Cyber Cafes',
    primaryKeyword: 'POS software for cyber cafes',
    fears: ['no-records', 'staff-theft'],
    painPoints: [
      'Time-based billing complexity',
      'Multiple services to track',
      'Small margins need efficiency',
      'No hourly usage tracking',
    ],
    features: [
      'Time-based billing',
      'Service menu (print, browse, copy)',
      'Usage reports',
      'Staff shift tracking',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 5,
  },
  {
    id: 'electronics',
    name: 'Electronics Shop',
    plural: 'Electronics Shops',
    primaryKeyword: 'POS software for electronics shops',
    fears: ['stock-loss', 'warranty-issues', 'staff-theft'],
    painPoints: [
      'High-value items need tracking',
      'Warranty claims management',
      'Serial and IMEI tracking',
      'Accessories bundling complexity',
    ],
    features: [
      'Serial number tracking',
      'Warranty management',
      'IMEI logging',
      'Bundle pricing',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 7,
  },
  {
    id: 'hotel',
    name: 'Hotel',
    plural: 'Hotels',
    primaryKeyword: 'POS software for hotels',
    fears: ['staff-theft', 'kra-fines', 'billing-errors'],
    painPoints: [
      'Room billing complexity',
      'Multiple outlets to manage',
      'Guest account management',
      'Night shift handovers',
    ],
    features: [
      'Room charge integration',
      'Multi-outlet support',
      'Guest accounts',
      'Night audit reports',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 7,
  },
  {
    id: 'petrol-station',
    name: 'Petrol Station',
    plural: 'Petrol Stations',
    primaryKeyword: 'POS software for petrol stations',
    fears: ['staff-theft', 'kra-fines', 'shift-losses'],
    painPoints: [
      'Pump integration needs',
      'Shift handover discrepancies',
      'Fleet credit management',
      'Multiple payment modes',
    ],
    features: [
      'Pump integration',
      'Shift management',
      'Fleet accounts',
      'Fuel price management',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 6,
  },
  {
    id: 'mitumba',
    name: 'Mitumba Shop',
    plural: 'Mitumba Shops',
    primaryKeyword: 'POS software for mitumba shops',
    fears: ['no-records', 'staff-theft', 'no-profit'],
    painPoints: [
      'Variable pricing per item',
      'High volume low margins',
      'Haggling and discounts',
      'No inventory accuracy',
    ],
    features: [
      'Flexible pricing',
      'Quick sale entry',
      'Discount tracking',
      'Daily sales summary',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 6,
  },
  {
    id: 'mama-mboga',
    name: 'Mama Mboga',
    plural: 'Mama Mbogas',
    primaryKeyword: 'POS software for mama mboga',
    fears: ['no-records', 'mix-money', 'no-profit'],
    painPoints: [
      'Fresh produce spoils quickly',
      'Cash only transactions',
      'No sales records',
      'Cannot calculate daily profit',
    ],
    features: [
      'Simple cash tracking',
      'M-Pesa integration',
      'Daily profit reports',
      'Basic inventory',
    ],
    schema: ['FAQ', 'Breadcrumb'],
    priority: 5,
  },
];

// ============================================================================
// 4. FEARS / PAIN POINTS (CONVERSION MULTIPLIER)
// ============================================================================

export interface Fear {
  id: string;
  label: string;
  primaryKeyword: string;
  intent: HubIntent;
  urgency: 'high' | 'medium' | 'low';
  description: string;
}

export const fears: Fear[] = [
  {
    id: 'staff-theft',
    label: 'Prevent Staff Theft',
    primaryKeyword: 'prevent staff theft with POS',
    intent: 'pain',
    urgency: 'high',
    description: 'Stop employees from stealing cash, giving unauthorized discounts, or pocketing payments.',
  },
  {
    id: 'fake-sales',
    label: 'Stop Fake Sales',
    primaryKeyword: 'prevent fake sales POS',
    intent: 'pain',
    urgency: 'high',
    description: 'Catch staff recording fake sales, refunds, or voiding legitimate transactions.',
  },
  {
    id: 'kra-fines',
    label: 'Avoid KRA Penalties',
    primaryKeyword: 'avoid KRA ETIMS penalties',
    intent: 'compliance',
    urgency: 'high',
    description: 'Stay compliant with KRA ETIMS requirements and avoid penalties up to KES 1 million.',
  },
  {
    id: 'stock-loss',
    label: 'Stop Stock Shrinkage',
    primaryKeyword: 'prevent stock shrinkage POS',
    intent: 'pain',
    urgency: 'high',
    description: 'Track every item in and out. Know exactly what you have and catch discrepancies early.',
  },
  {
    id: 'no-visibility',
    label: 'See Your Sales',
    primaryKeyword: 'real-time sales visibility',
    intent: 'reports',
    urgency: 'medium',
    description: 'Monitor your business from anywhere. Get daily WhatsApp reports without asking staff.',
  },
  {
    id: 'credit-losses',
    label: 'Collect Debts',
    primaryKeyword: 'track credit sales POS',
    intent: 'pain',
    urgency: 'medium',
    description: 'Track every credit sale. Send reminders. Know exactly who owes you and how much.',
  },
  {
    id: 'expiry-losses',
    label: 'Stop Expiry Losses',
    primaryKeyword: 'track product expiry POS',
    intent: 'pain',
    urgency: 'medium',
    description: 'Get alerts before products expire. Sell first in first out. Stop throwing away stock.',
  },
  {
    id: 'mix-money',
    label: 'Separate Business Money',
    primaryKeyword: 'separate business personal money',
    intent: 'pain',
    urgency: 'medium',
    description: 'Stop mixing personal and business M-Pesa. Track every shilling. Know real profit.',
  },
  {
    id: 'no-records',
    label: 'Keep Sales Records',
    primaryKeyword: 'sales record keeping POS',
    intent: 'pain',
    urgency: 'medium',
    description: 'Every sale automatically recorded. Daily, weekly, monthly reports. No manual books.',
  },
  {
    id: 'no-profit',
    label: 'Know Your Profit',
    primaryKeyword: 'track business profit POS',
    intent: 'reports',
    urgency: 'medium',
    description: 'Calculate real profit after costs. Know your margins. Make better pricing decisions.',
  },
  {
    id: 'waiter-theft',
    label: 'Catch Waiter Theft',
    primaryKeyword: 'prevent waiter theft restaurant',
    intent: 'pain',
    urgency: 'high',
    description: 'Every order tracked from table to kitchen to payment. No more pocketed cash.',
  },
  {
    id: 'order-errors',
    label: 'Fix Order Errors',
    primaryKeyword: 'reduce order errors restaurant',
    intent: 'pain',
    urgency: 'medium',
    description: 'Digital orders go straight to kitchen. No confusion. No wrong dishes. Happy customers.',
  },
  {
    id: 'weight-cheating',
    label: 'Stop Weight Cheating',
    primaryKeyword: 'prevent weight cheating butchery',
    intent: 'pain',
    urgency: 'high',
    description: 'Integrated scales with automatic pricing. No manual weight entry. No cheating.',
  },
  {
    id: 'cashier-theft',
    label: 'Monitor Cashiers',
    primaryKeyword: 'prevent cashier theft supermarket',
    intent: 'pain',
    urgency: 'high',
    description: 'Track every cashier. See voids, refunds, discounts. Compare performance across shifts.',
  },
  {
    id: 'booking-chaos',
    label: 'Manage Appointments',
    primaryKeyword: 'salon appointment booking POS',
    intent: 'reports',
    urgency: 'low',
    description: 'Book appointments. Reduce no-shows. Know who is coming when. Plan your day.',
  },
  {
    id: 'warranty-issues',
    label: 'Track Warranties',
    primaryKeyword: 'warranty tracking electronics POS',
    intent: 'pain',
    urgency: 'low',
    description: 'Log every serial number. Know warranty status. Handle claims quickly.',
  },
  {
    id: 'billing-errors',
    label: 'Fix Billing Errors',
    primaryKeyword: 'reduce billing errors hotel',
    intent: 'pain',
    urgency: 'medium',
    description: 'All charges to guest account. No forgotten items. Clean checkout every time.',
  },
  {
    id: 'shift-losses',
    label: 'Control Shift Handovers',
    primaryKeyword: 'shift handover management POS',
    intent: 'pain',
    urgency: 'medium',
    description: 'Clear handover reports. Know exactly what each shift brought in. Find discrepancies fast.',
  },
  {
    id: 'compliance',
    label: 'Stay Compliant',
    primaryKeyword: 'pharmacy compliance POS',
    intent: 'compliance',
    urgency: 'high',
    description: 'Meet all regulatory requirements. Proper records. Ready for any inspection.',
  },
];

// ============================================================================
// 5. LOCATIONS (SCALE ENGINE)
// ============================================================================

export type LocationTier = 'tier-1' | 'tier-2' | 'tier-3';

export interface LocationConfig {
  id: string;
  name: string;
  county: string;
  tier: LocationTier;
  population?: number;
  businessDensity: 'high' | 'medium' | 'low';
  priority: number;
}

export const locations: LocationConfig[] = [
  // Tier 1 - Major cities
  { id: 'nairobi', name: 'Nairobi', county: 'Nairobi County', tier: 'tier-1', population: 4397073, businessDensity: 'high', priority: 10 },
  { id: 'mombasa', name: 'Mombasa', county: 'Mombasa County', tier: 'tier-1', population: 1208333, businessDensity: 'high', priority: 9 },
  { id: 'kisumu', name: 'Kisumu', county: 'Kisumu County', tier: 'tier-1', population: 610082, businessDensity: 'medium', priority: 8 },
  { id: 'nakuru', name: 'Nakuru', county: 'Nakuru County', tier: 'tier-1', population: 570674, businessDensity: 'medium', priority: 8 },
  { id: 'eldoret', name: 'Eldoret', county: 'Uasin Gishu County', tier: 'tier-1', population: 475716, businessDensity: 'medium', priority: 7 },
  
  // Tier 2 - Growing towns
  { id: 'thika', name: 'Thika', county: 'Kiambu County', tier: 'tier-2', population: 280523, businessDensity: 'medium', priority: 7 },
  { id: 'ruiru', name: 'Ruiru', county: 'Kiambu County', tier: 'tier-2', population: 490120, businessDensity: 'high', priority: 7 },
  { id: 'kitengela', name: 'Kitengela', county: 'Kajiado County', tier: 'tier-2', population: 231685, businessDensity: 'high', priority: 7 },
  { id: 'machakos', name: 'Machakos', county: 'Machakos County', tier: 'tier-2', population: 150041, businessDensity: 'medium', priority: 6 },
  { id: 'meru', name: 'Meru', county: 'Meru County', tier: 'tier-2', population: 1545714, businessDensity: 'medium', priority: 6 },
  { id: 'nyeri', name: 'Nyeri', county: 'Nyeri County', tier: 'tier-2', population: 759164, businessDensity: 'medium', priority: 6 },
  { id: 'naivasha', name: 'Naivasha', county: 'Nakuru County', tier: 'tier-2', population: 181966, businessDensity: 'medium', priority: 6 },
  { id: 'malindi', name: 'Malindi', county: 'Kilifi County', tier: 'tier-2', population: 119859, businessDensity: 'medium', priority: 5 },
  
  // Tier 3 - Smaller towns
  { id: 'embu', name: 'Embu', county: 'Embu County', tier: 'tier-3', population: 608599, businessDensity: 'medium', priority: 5 },
  { id: 'kericho', name: 'Kericho', county: 'Kericho County', tier: 'tier-3', population: 901777, businessDensity: 'medium', priority: 5 },
  { id: 'kakamega', name: 'Kakamega', county: 'Kakamega County', tier: 'tier-3', population: 1867579, businessDensity: 'medium', priority: 5 },
  { id: 'bungoma', name: 'Bungoma', county: 'Bungoma County', tier: 'tier-3', population: 1670570, businessDensity: 'medium', priority: 5 },
  { id: 'busia', name: 'Busia', county: 'Busia County', tier: 'tier-3', population: 893681, businessDensity: 'low', priority: 4 },
  { id: 'narok', name: 'Narok', county: 'Narok County', tier: 'tier-3', population: 1157873, businessDensity: 'low', priority: 4 },
  { id: 'voi', name: 'Voi', county: 'Taita Taveta County', tier: 'tier-3', population: 19624, businessDensity: 'low', priority: 4 },
  { id: 'isiolo', name: 'Isiolo', county: 'Isiolo County', tier: 'tier-3', population: 268002, businessDensity: 'low', priority: 3 },
  { id: 'garissa', name: 'Garissa', county: 'Garissa County', tier: 'tier-3', population: 841353, businessDensity: 'low', priority: 4 },
  { id: 'kitui', name: 'Kitui', county: 'Kitui County', tier: 'tier-3', population: 1136187, businessDensity: 'low', priority: 4 },
  { id: 'migori', name: 'Migori', county: 'Migori County', tier: 'tier-3', population: 1116436, businessDensity: 'low', priority: 4 },
  { id: 'homa-bay', name: 'Homa Bay', county: 'Homa Bay County', tier: 'tier-3', population: 1131950, businessDensity: 'low', priority: 4 },
];

// Nairobi neighborhoods for hyper-local
export const nairobiNeighborhoods: LocationConfig[] = [
  { id: 'westlands', name: 'Westlands', county: 'Nairobi County', tier: 'tier-1', businessDensity: 'high', priority: 10 },
  { id: 'cbd', name: 'Nairobi CBD', county: 'Nairobi County', tier: 'tier-1', businessDensity: 'high', priority: 10 },
  { id: 'eastleigh', name: 'Eastleigh', county: 'Nairobi County', tier: 'tier-1', businessDensity: 'high', priority: 9 },
  { id: 'gikomba', name: 'Gikomba', county: 'Nairobi County', tier: 'tier-1', businessDensity: 'high', priority: 9 },
  { id: 'industrial-area', name: 'Industrial Area', county: 'Nairobi County', tier: 'tier-1', businessDensity: 'high', priority: 8 },
  { id: 'kilimani', name: 'Kilimani', county: 'Nairobi County', tier: 'tier-2', businessDensity: 'high', priority: 8 },
  { id: 'upperhill', name: 'Upper Hill', county: 'Nairobi County', tier: 'tier-2', businessDensity: 'high', priority: 8 },
  { id: 'lavington', name: 'Lavington', county: 'Nairobi County', tier: 'tier-2', businessDensity: 'medium', priority: 7 },
  { id: 'karen', name: 'Karen', county: 'Nairobi County', tier: 'tier-2', businessDensity: 'medium', priority: 6 },
  { id: 'langata', name: 'Langata', county: 'Nairobi County', tier: 'tier-2', businessDensity: 'medium', priority: 6 },
];

// ============================================================================
// 6. TEMPLATE DEFINITIONS (ENFORCE QUALITY)
// ============================================================================

export interface TemplateConfig {
  id: TemplateType;
  minWords: number;
  minFaqs: number;
  allowedSchemas: SchemaType[];
  requiredSections: string[];
  urlPattern: string;
}

export const templates: Record<TemplateType, TemplateConfig> = {
  'business': {
    id: 'business',
    minWords: 900,
    minFaqs: 4,
    allowedSchemas: ['FAQ', 'Breadcrumb', 'Article'],
    requiredSections: ['directAnswer', 'painPoints', 'features', 'faqs', 'cta'],
    urlPattern: '/pos-software/{businessType}',
  },
  'location': {
    id: 'location',
    minWords: 900,
    minFaqs: 4,
    allowedSchemas: ['FAQ', 'Breadcrumb', 'LocalBusiness'],
    requiredSections: ['directAnswer', 'localContext', 'faqs', 'cta'],
    urlPattern: '/pos-software/{location}',
  },
  'fear': {
    id: 'fear',
    minWords: 1000,
    minFaqs: 5,
    allowedSchemas: ['FAQ', 'HowTo', 'Breadcrumb'],
    requiredSections: ['directAnswer', 'problem', 'solution', 'howTo', 'faqs', 'cta'],
    urlPattern: '/pos-software/{fear}',
  },
  'business-location': {
    id: 'business-location',
    minWords: 1200,
    minFaqs: 5,
    allowedSchemas: ['FAQ', 'Breadcrumb', 'LocalBusiness'],
    requiredSections: ['directAnswer', 'painPoints', 'localContext', 'features', 'faqs', 'cta'],
    urlPattern: '/pos-software/{businessType}/{location}',
  },
  'business-fear': {
    id: 'business-fear',
    minWords: 1200,
    minFaqs: 5,
    allowedSchemas: ['FAQ', 'HowTo', 'Breadcrumb'],
    requiredSections: ['directAnswer', 'problem', 'industryContext', 'solution', 'howTo', 'faqs', 'cta'],
    urlPattern: '/pos-software/{businessType}/{fear}',
  },
  'business-fear-location': {
    id: 'business-fear-location',
    minWords: 1500,
    minFaqs: 6,
    allowedSchemas: ['FAQ', 'HowTo', 'Breadcrumb', 'LocalBusiness'],
    requiredSections: ['directAnswer', 'problem', 'industryContext', 'localContext', 'solution', 'howTo', 'faqs', 'cta'],
    urlPattern: '/pos-software/{businessType}/{fear}/{location}',
  },
};

// ============================================================================
// 7. PAGE ENTITY (VALIDATION STRUCTURE)
// ============================================================================

export interface PageEntity {
  slug: string;
  template: TemplateType;
  intent: HubIntent;
  hub: string; // Hub ID
  businessType?: string;
  location?: string;
  fear?: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: string;
  description: string;
  faqs: Array<{ q: string; a: string }>;
  schema: SchemaType[];
  lastModified: string;
  indexable: boolean;
}

// ============================================================================
// 8. INTERNAL LINKING ENGINE (GRAPH RULES)
// ============================================================================

export const internalLinkingRules = {
  parentHub: true, // Always link to parent hub
  siblings: 4, // Link to 4 sibling pages
  relatedFears: 2, // Link to 2 related fear pages
  nearbyLocations: 2, // Link to 2 nearby location pages
  relatedBusinessTypes: 3, // Link to 3 related business types
  maxLinksPerPage: 15, // Maximum outbound internal links
  minLinksPerPage: 5, // Minimum outbound internal links
} as const;

// ============================================================================
// 9. DUPLICATION SAFEGUARDS (AUTOMATED)
// ============================================================================

export const validationConfig = {
  minWordCount: 900,
  maxKeywordOverlap: 0.65, // 65% maximum similarity
  contentHashing: true,
  autoCanonical: true,
  duplicateThreshold: 0.15, // 15% max duplicate content
  qualityChecks: {
    requireDirectAnswer: true,
    requireFaqs: true,
    requireLocalSignals: true, // For location pages
    requirePricing: true, // Mention pricing transparency
  },
} as const;

// ============================================================================
// 10. SITEMAP CONFIG (100K SAFE)
// ============================================================================

export const sitemapConfig = {
  index: '/sitemap.xml',
  maxUrlsPerSitemap: 50000,
  groups: [
    { name: 'hub-pages', prefix: 'sitemap-hubs', maxUrls: 100 },
    { name: 'business-pages', prefix: 'sitemap-business', maxUrls: 50000 },
    { name: 'location-pages', prefix: 'sitemap-location', maxUrls: 50000 },
    { name: 'fear-pages', prefix: 'sitemap-fear', maxUrls: 10000 },
    { name: 'combined-pages', prefix: 'sitemap-combined', maxUrls: 50000 },
  ],
  priority: {
    hub: 1.0,
    business: 0.8,
    location: 0.7,
    fear: 0.7,
    combined: 0.6,
  },
  changefreq: {
    hub: 'weekly' as const,
    business: 'monthly' as const,
    location: 'monthly' as const,
    fear: 'monthly' as const,
    combined: 'monthly' as const,
  },
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getHubById(id: string): HubDefinition | undefined {
  return hubs.find(h => h.id === id);
}

export function getBusinessTypeById(id: string): BusinessType | undefined {
  return businessTypes.find(b => b.id === id);
}

export function getFearById(id: string): Fear | undefined {
  return fears.find(f => f.id === id);
}

export function getLocationById(id: string): LocationConfig | undefined {
  return [...locations, ...nairobiNeighborhoods].find(l => l.id === id);
}

export function getTemplateConfig(type: TemplateType): TemplateConfig {
  return templates[type];
}

export function getAllLocations(): LocationConfig[] {
  return [...locations, ...nairobiNeighborhoods];
}

export function getLocationsByTier(tier: LocationTier): LocationConfig[] {
  return getAllLocations().filter(l => l.tier === tier);
}

export function getBusinessTypesByPriority(minPriority: number = 5): BusinessType[] {
  return businessTypes.filter(b => b.priority >= minPriority).sort((a, b) => b.priority - a.priority);
}

export function getFearsByUrgency(urgency: 'high' | 'medium' | 'low'): Fear[] {
  return fears.filter(f => f.urgency === urgency);
}

/**
 * Generate page slug from components
 */
export function generatePageSlug(
  hub: string,
  businessType?: string,
  fear?: string,
  location?: string
): string {
  const hubDef = getHubById(hub);
  if (!hubDef) return '/';
  
  let slug = hubDef.slug;
  if (businessType) slug += `/${businessType}`;
  if (fear) slug += `/${fear}`;
  if (location) slug += `/${location}`;
  
  return slug;
}

/**
 * Calculate estimated page count for scale planning
 */
export function getEstimatedPageCount(): {
  businessPages: number;
  locationPages: number;
  fearPages: number;
  combinedPages: number;
  total: number;
} {
  const numBusinessTypes = businessTypes.length;
  const numLocations = getAllLocations().length;
  const numFears = fears.length;
  const numHubs = hubs.length;
  
  const businessPages = numHubs * numBusinessTypes;
  const locationPages = numHubs * numLocations;
  const fearPages = fears.filter(f => f.urgency === 'high').length * numBusinessTypes;
  const combinedPages = numBusinessTypes * numLocations * 2; // business-location variants
  
  return {
    businessPages,
    locationPages,
    fearPages,
    combinedPages,
    total: businessPages + locationPages + fearPages + combinedPages,
  };
}
