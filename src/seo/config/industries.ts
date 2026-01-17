/**
 * Industry Configuration for Programmatic SEO
 * 
 * Business types for industry-specific page generation
 * Used across multiple page types (industry, local_authority, etc.)
 */

export interface Industry {
  slug: string;
  name: string;
  plural: string;
  painPoints: string[];
  features: string[];
  keywords: string[];
  priority: number; // 1-10
}

export const industries: Industry[] = [
  {
    slug: 'restaurant',
    name: 'Restaurant',
    plural: 'Restaurants',
    painPoints: [
      'Order mix-ups and kitchen coordination',
      'Split bills and table management',
      'Waiter theft and cash handling',
      'No real-time sales visibility',
    ],
    features: [
      'Table management and orders',
      'Kitchen display integration',
      'Split bill functionality',
      'Menu and modifier management',
    ],
    keywords: ['restaurant pos', 'hotel pos', 'cafe pos', 'food service pos'],
    priority: 10,
  },
  {
    slug: 'retail',
    name: 'Retail Shop',
    plural: 'Retail Shops',
    painPoints: [
      'Inventory shrinkage and theft',
      'Stock counting takes forever',
      'Don\'t know what sells',
      'Cash reconciliation issues',
    ],
    features: [
      'Barcode scanning',
      'Inventory tracking',
      'Low stock alerts',
      'Sales analytics',
    ],
    keywords: ['retail pos', 'shop pos', 'store pos', 'duka pos'],
    priority: 10,
  },
  {
    slug: 'supermarket',
    name: 'Supermarket',
    plural: 'Supermarkets',
    painPoints: [
      'High volume transactions',
      'Multiple cashiers to monitor',
      'Complex inventory management',
      'Pricing and promotions',
    ],
    features: [
      'Multi-checkout support',
      'Barcode scanning',
      'Inventory management',
      'Staff shift management',
    ],
    keywords: ['supermarket pos', 'grocery pos', 'mini-mart pos'],
    priority: 9,
  },
  {
    slug: 'pharmacy',
    name: 'Pharmacy',
    plural: 'Pharmacies',
    painPoints: [
      'Expiry date tracking',
      'Controlled substance compliance',
      'Insurance claims management',
      'Prescription records',
    ],
    features: [
      'Expiry tracking alerts',
      'Batch number tracking',
      'Insurance integration',
      'Prescription history',
    ],
    keywords: ['pharmacy pos', 'chemist pos', 'drug store pos'],
    priority: 9,
  },
  {
    slug: 'butchery',
    name: 'Butchery',
    plural: 'Butcheries',
    painPoints: [
      'Weight-based pricing accuracy',
      'Fresh inventory daily',
      'Cash handling by attendants',
      'No profit tracking',
    ],
    features: [
      'Scale integration',
      'Weight-based pricing',
      'Daily inventory tracking',
      'Gross margin reports',
    ],
    keywords: ['butchery pos', 'butcher pos', 'meat shop pos'],
    priority: 8,
  },
  {
    slug: 'salon',
    name: 'Salon',
    plural: 'Salons',
    painPoints: [
      'Service-based billing complexity',
      'Staff commission tracking',
      'Appointment no-shows',
      'Product sales vs services',
    ],
    features: [
      'Service menu management',
      'Staff commission reports',
      'Appointment booking',
      'Product + service invoicing',
    ],
    keywords: ['salon pos', 'beauty parlor pos', 'hair salon pos'],
    priority: 7,
  },
  {
    slug: 'barbershop',
    name: 'Barbershop',
    plural: 'Barbershops',
    painPoints: [
      'Walk-in payments tracking',
      'Multiple barbers sharing space',
      'Daily revenue visibility',
      'Cash handling by barbers',
    ],
    features: [
      'Walk-in management',
      'Per-barber sales tracking',
      'Daily revenue reports',
      'Product sales integration',
    ],
    keywords: ['barbershop pos', 'barber pos', 'kinyozi pos'],
    priority: 7,
  },
  {
    slug: 'hardware',
    name: 'Hardware Store',
    plural: 'Hardware Stores',
    painPoints: [
      'Thousands of SKUs',
      'Credit sales to contractors',
      'Finding products in inventory',
      'Pricing across product lines',
    ],
    features: [
      'Large catalog support',
      'Credit sales and accounts',
      'Product search',
      'Barcode/SKU management',
    ],
    keywords: ['hardware pos', 'hardware store pos', 'building materials pos'],
    priority: 8,
  },
  {
    slug: 'kiosk',
    name: 'Kiosk',
    plural: 'Kiosks',
    painPoints: [
      'Small space, simple needs',
      'M-Pesa is primary payment',
      'No sales tracking',
      'Don\'t know profit margin',
    ],
    features: [
      'Simple interface',
      'M-Pesa integration',
      'Basic inventory',
      'Daily profit summary',
    ],
    keywords: ['kiosk pos', 'kibanda pos', 'small shop pos'],
    priority: 8,
  },
  {
    slug: 'liquor',
    name: 'Liquor Store',
    plural: 'Liquor Stores',
    painPoints: [
      'Evening/weekend sales spikes',
      'Age verification needs',
      'Staff working night shifts',
      'Cash handling after hours',
    ],
    features: [
      'Shift management',
      'ID verification prompts',
      'Real-time sales monitoring',
      'Inventory per outlet',
    ],
    keywords: ['liquor store pos', 'wines and spirits pos', 'bar pos'],
    priority: 7,
  },
  {
    slug: 'wholesale',
    name: 'Wholesale',
    plural: 'Wholesalers',
    painPoints: [
      'Credit sales to retailers',
      'Customer account balances',
      'Bulk order management',
      'Delivery tracking',
    ],
    features: [
      'Credit management',
      'Customer accounts',
      'Bulk pricing tiers',
      'Invoice printing',
    ],
    keywords: ['wholesale pos', 'distributor pos', 'wholesale shop pos'],
    priority: 7,
  },
  {
    slug: 'agrovet',
    name: 'Agrovet',
    plural: 'Agrovets',
    painPoints: [
      'Seasonal sales patterns',
      'Credit to farmers',
      'Expiry tracking on chemicals',
      'Diverse product categories',
    ],
    features: [
      'Credit management',
      'Expiry tracking',
      'Seasonal reporting',
      'Multi-category support',
    ],
    keywords: ['agrovet pos', 'agro store pos', 'farm supplies pos'],
    priority: 6,
  },
  {
    slug: 'cyber',
    name: 'Cyber Cafe',
    plural: 'Cyber Cafes',
    painPoints: [
      'Time-based billing',
      'Multiple services (printing, browsing)',
      'Small margins require efficiency',
      'No hourly tracking',
    ],
    features: [
      'Time-based billing',
      'Service menu',
      'Printing integration',
      'Usage reports',
    ],
    keywords: ['cyber cafe pos', 'internet cafe pos', 'cyber pos'],
    priority: 5,
  },
  {
    slug: 'electronics',
    name: 'Electronics Shop',
    plural: 'Electronics Shops',
    painPoints: [
      'High-value items require tracking',
      'Warranty management',
      'Serial number tracking',
      'Accessories bundling',
    ],
    features: [
      'Serial number tracking',
      'Warranty tracking',
      'IMEI logging',
      'Bundle pricing',
    ],
    keywords: ['electronics pos', 'phone shop pos', 'gadget store pos'],
    priority: 7,
  },
  {
    slug: 'hotel',
    name: 'Hotel',
    plural: 'Hotels',
    painPoints: [
      'Room billing complexity',
      'Multiple outlets (restaurant, bar)',
      'Guest account management',
      'Shift handovers',
    ],
    features: [
      'Room charge integration',
      'Multi-outlet support',
      'Guest accounts',
      'Night audit reports',
    ],
    keywords: ['hotel pos', 'lodge pos', 'guest house pos'],
    priority: 7,
  },
  {
    slug: 'petrol-station',
    name: 'Petrol Station',
    plural: 'Petrol Stations',
    painPoints: [
      'Pump integration',
      'Shift handovers',
      'Credit sales to fleets',
      'Multiple payment modes',
    ],
    features: [
      'Pump integration',
      'Shift management',
      'Fleet accounts',
      'Fuel price management',
    ],
    keywords: ['petrol station pos', 'gas station pos', 'fuel station pos'],
    priority: 6,
  },
  {
    slug: 'mitumba',
    name: 'Mitumba Shop',
    plural: 'Mitumba Shops',
    painPoints: [
      'Variable pricing per item',
      'High volume, low margins',
      'Haggling and discounts',
      'No inventory accuracy',
    ],
    features: [
      'Flexible pricing',
      'Quick sale entry',
      'Discount tracking',
      'Daily sales summary',
    ],
    keywords: ['mitumba pos', 'second hand clothes pos', 'thrift store pos'],
    priority: 6,
  },
  {
    slug: 'mama-mboga',
    name: 'Mama Mboga',
    plural: 'Mama Mbogas',
    painPoints: [
      'Fresh produce spoilage',
      'Cash only transactions',
      'No sales records',
      'Don\'t know daily profit',
    ],
    features: [
      'Simple cash tracking',
      'M-Pesa integration',
      'Daily profit reports',
      'Basic inventory',
    ],
    keywords: ['mama mboga pos', 'vegetable seller pos', 'market stall pos'],
    priority: 5,
  },
];

// Helper functions
export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(i => i.slug === slug.toLowerCase());
};

export const getIndustriesByPriority = (minPriority: number = 5): Industry[] => {
  return industries
    .filter(i => i.priority >= minPriority)
    .sort((a, b) => b.priority - a.priority);
};

export const getAllIndustrySlugs = (): string[] => {
  return industries.map(i => i.slug);
};
