// SEO Data for Programmatic Pages
// Tier 1-4 Keywords, Content Templates, Internal Linking Structure

export const cities = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Ruiru", 
  "Kitengela", "Machakos", "Meru", "Nyeri", "Embu", "Kericho", "Kakamega", 
  "Bungoma", "Busia", "Narok", "Naivasha", "Malindi", "Voi", "Isiolo", 
  "Garissa", "Kitui", "Migori", "Homa Bay"
] as const;

export const businessTypes = [
  { slug: "kiosk", name: "Kiosk", plural: "Kiosks", pain: "tracking daily sales and M-Pesa payments" },
  { slug: "duka", name: "Duka", plural: "Dukas", pain: "separating business money from personal cash" },
  { slug: "shop", name: "Shop", plural: "Shops", pain: "managing inventory and preventing theft" },
  { slug: "supermarket", name: "Supermarket", plural: "Supermarkets", pain: "high volume transactions and stock control" },
  { slug: "restaurant", name: "Restaurant", plural: "Restaurants", pain: "order management and kitchen coordination" },
  { slug: "cafe", name: "Cafe", plural: "Cafes", pain: "quick service transactions and daily reports" },
  { slug: "bar", name: "Bar", plural: "Bars", pain: "evening sales tracking and staff accountability" },
  { slug: "butchery", name: "Butchery", plural: "Butcheries", pain: "weight-based pricing and daily fresh inventory" },
  { slug: "pharmacy", name: "Pharmacy", plural: "Pharmacies", pain: "compliance, expiry tracking, and controlled substances" },
  { slug: "hardware", name: "Hardware Shop", plural: "Hardware Shops", pain: "thousands of SKUs and cash/credit tracking" },
  { slug: "salon", name: "Salon", plural: "Salons", pain: "service-based billing and staff commissions" },
  { slug: "barbershop", name: "Barbershop", plural: "Barbershops", pain: "walk-in payments and daily revenue tracking" },
  { slug: "hotel", name: "Hotel", plural: "Hotels", pain: "room billing, restaurant, and multiple outlets" },
  { slug: "wholesale", name: "Wholesale Shop", plural: "Wholesale Shops", pain: "bulk orders, credit sales, and customer balances" },
  { slug: "electronics", name: "Electronics Shop", plural: "Electronics Shops", pain: "high-value items and warranty tracking" },
  { slug: "liquor", name: "Liquor Store", plural: "Liquor Stores", pain: "age verification and evening sales spikes" },
  { slug: "petrol-station", name: "Petrol Station", plural: "Petrol Stations", pain: "fuel pump integration and shift handovers" },
  { slug: "mini-supermarket", name: "Mini Supermarket", plural: "Mini Supermarkets", pain: "growing inventory and multiple payment methods" },
] as const;

// ============= TIER 1: Transaction Intent (Fastest Money) =============
export const intents = {
  registration: {
    slug: "registration",
    action: "Get",
    tier: 1,
    keywords: ["register", "apply", "get", "setup", "install", "activate", "order", "start"],
    h1Template: "Get Free POS System in {city}",
    titleTemplate: "Free POS System {city} – Register Today | Veira Kenya",
    descTemplate: "Get a free POS system in {city}. Free setup, free delivery, ETIMS compliant. M-Pesa, card payments, sales tracking. Chat on WhatsApp to start.",
  },
  pricing: {
    slug: "pricing",
    action: "Pricing",
    tier: 1,
    keywords: ["pricing", "cost", "fees", "charges", "rates", "price", "how much", "budget"],
    h1Template: "POS System Pricing in {city}",
    titleTemplate: "POS System Pricing {city} – Free Setup, No Hidden Fees | Veira",
    descTemplate: "POS system pricing in {city}. Free POS hardware, free setup, no monthly fees. Only KES 3,500 refundable deposit. Compare costs and save.",
  },
  compliance: {
    slug: "etims",
    action: "ETIMS",
    tier: 1,
    keywords: ["etims", "kra", "compliance", "receipt", "tax", "penalty", "audit"],
    h1Template: "ETIMS Compliant POS System in {city}",
    titleTemplate: "ETIMS POS System {city} – KRA Compliant Receipts | Veira",
    descTemplate: "ETIMS compliant POS system in {city}. Automatic KRA receipts, avoid penalties up to KES 1M. Free setup for restaurants, shops, and retail.",
  },
} as const;

// ============= TIER 2: Switching & Comparison Intent =============
export const comparisonIntents = {
  "alternative-pochi": {
    slug: "alternative-pochi",
    keywords: ["alternative to pochi la biashara", "pochi alternative", "better than pochi"],
    h1Template: "Best Pochi La Biashara Alternative in {city}",
    titleTemplate: "Pochi La Biashara Alternative {city} – Get More with Veira | Kenya",
    descTemplate: "Looking for a Pochi La Biashara alternative in {city}? Veira gives you M-Pesa + ETIMS + inventory + sales reports. All free.",
    comparison: "Pochi La Biashara",
  },
  "replace-till": {
    slug: "replace-till",
    keywords: ["replace mpesa till", "upgrade till number", "till number problems"],
    h1Template: "Replace Your M-Pesa Till Number in {city}",
    titleTemplate: "Replace Till Number {city} – Upgrade to Smart POS | Veira",
    descTemplate: "Upgrade from basic Till Number in {city}. Get ETIMS compliance, sales tracking, inventory, and daily WhatsApp reports. Free POS.",
    comparison: "M-Pesa Till Number",
  },
  "vs-manual": {
    slug: "vs-manual",
    keywords: ["stop manual receipts", "replace receipt book", "from pen paper to pos"],
    h1Template: "Move from Manual Receipts to POS in {city}",
    titleTemplate: "Replace Manual Receipts {city} – Digital POS Free | Veira",
    descTemplate: "Still using receipt books in {city}? Switch to Veira POS. Get automatic ETIMS receipts, track all sales, prevent staff theft.",
    comparison: "Manual Receipt Books",
  },
} as const;

// ============= TIER 3: Problem-Aware Intent (Pain Keywords) =============
export const problemIntents = {
  "track-sales": {
    slug: "track-sales",
    keywords: ["track sales", "daily sales report", "sales tracking kenya", "monitor sales remotely"],
    h1Template: "Track Daily Sales in {city} with WhatsApp Reports",
    titleTemplate: "Track Daily Sales {city} – WhatsApp Reports | Veira POS",
    descTemplate: "Get daily sales reports on WhatsApp for your {city} business. Track revenue, monitor staff, see what sells. Free POS.",
    pain: "not knowing daily sales or profits",
    solution: "automatic WhatsApp sales reports",
  },
  "stop-theft": {
    slug: "stop-theft",
    keywords: ["stop employee theft", "staff stealing", "monitor attendants", "prevent cash theft"],
    h1Template: "Stop Employee Theft in Your {city} Business",
    titleTemplate: "Stop Staff Theft {city} – Monitor Every Transaction | Veira",
    descTemplate: "Catch staff theft in your {city} shop. Every sale tracked, every payment logged. Get alerts, see discounts, control voids.",
    pain: "staff stealing cash or products",
    solution: "transaction-level monitoring and alerts",
  },
  "separate-money": {
    slug: "separate-money",
    keywords: ["separate business money", "business vs personal mpesa", "mix personal business money"],
    h1Template: "Separate Business Money from Personal Cash in {city}",
    titleTemplate: "Separate Business Money {city} – Clear Tracking | Veira",
    descTemplate: "Stop mixing personal and business M-Pesa in {city}. Track every shilling. See real profit. Get daily reports.",
    pain: "mixing personal and business money",
    solution: "dedicated business payment tracking",
  },
  "avoid-penalties": {
    slug: "avoid-penalties",
    keywords: ["avoid kra penalties", "etims penalty", "kra fine", "tax compliance kenya"],
    h1Template: "Avoid KRA Penalties in {city} – Get ETIMS Compliant",
    titleTemplate: "Avoid KRA Penalties {city} – ETIMS Compliance | Veira",
    descTemplate: "KRA penalties up to KES 1M for no ETIMS. Get compliant in {city} today. Free POS, automatic receipts to KRA.",
    pain: "fear of KRA fines and audits",
    solution: "automatic ETIMS-compliant receipts",
  },
} as const;

// ============= OFFER DETAILS =============
export const offer = {
  posPrice: "Free",
  data: "15GB Safaricom",
  setup: "Free",
  delivery: "Free",
  training: "Free",
  depositKes: 3500,
  depositType: "Refundable",
  activationTime: "Same Day",
  whatsappNumber: "+254755792377",
  whatsappUrl: "https://wa.me/254755792377",
  guarantee: "30-day money-back guarantee",
};

// ============= TRUST SIGNALS =============
export const trustSignals = [
  "ETIMS Certified by KRA",
  "M-Pesa & Airtel Money Integrated",
  "Same Day Delivery in Major Cities",
  "24/7 WhatsApp Support",
  "500+ Businesses Using Veira",
  "Free Training Included",
  "30-Day Money-Back Guarantee",
];

// ============= LOCAL TRUST ELEMENTS =============
export const localTrustElements = {
  kraReference: "Kenya Revenue Authority (KRA) mandates ETIMS compliance for all VAT-registered businesses. Non-compliance attracts penalties under the Tax Procedures Act, 2015.",
  mpesaIntegration: "Veira POS integrates with Safaricom M-Pesa, Lipa Na M-Pesa, and Till Number payments for seamless mobile money acceptance.",
  refundPolicy: "Your KES 3,500 deposit is 100% refundable if you return the POS device within 30 days. No questions asked.",
};

// ============= TYPE EXPORTS =============
export type City = typeof cities[number];
export type BusinessType = typeof businessTypes[number];
export type IntentType = keyof typeof intents;
export type ComparisonIntentType = keyof typeof comparisonIntents;
export type ProblemIntentType = keyof typeof problemIntents;

// ============= INTERNAL LINKING STRUCTURE =============
export const getSiloLinks = (city: string, currentIntent: string) => {
  const cityLower = city.toLowerCase();
  
  return {
    // Parent link (1)
    parent: { label: "All Kenya POS Systems", href: "/pos" },
    
    // Sibling cities (4)
    siblings: cities
      .filter(c => c.toLowerCase() !== cityLower)
      .slice(0, 4)
      .map(c => ({
        label: `POS in ${c}`,
        href: `/pos/${c.toLowerCase()}`,
        anchor: `${c} POS System`,
      })),
    
    // Child links - intents within same city (6)
    children: [
      { label: `Free POS ${city}`, href: `/pos/${cityLower}/registration`, anchor: `get free POS in ${city}` },
      { label: `POS Pricing ${city}`, href: `/pos/${cityLower}/pricing`, anchor: `POS pricing in ${city}` },
      { label: `ETIMS POS ${city}`, href: `/pos/${cityLower}/etims`, anchor: `ETIMS compliant POS ${city}` },
      ...businessTypes.slice(0, 3).map(bt => ({
        label: `POS for ${bt.plural} ${city}`,
        href: `/pos/${cityLower}/for-${bt.slug}`,
        anchor: `POS for ${bt.name.toLowerCase()} in ${city}`,
      })),
    ],
    
    // Branded link
    branded: { label: "Veira POS Kenya", href: "/pos", anchor: "Veira Kenya" },
  };
};

// ============= EXTENDED FAQ GENERATOR (8+ questions, 70+ words each) =============
export const generateFaqs = (city: string, intent: IntentType) => {
  const baseFaqs = [
    {
      question: `How much does a POS system cost in ${city}?`,
      answer: `Veira POS is completely free in ${city}. The only cost is a refundable deposit of KES 3,500, which you get back if you ever return the device. There are no monthly subscription fees, no transaction fees, no maintenance charges, and no hidden costs. Free delivery to any location in ${city}, free installation by our trained team, and free ongoing WhatsApp support are all included in your package.`
    },
    {
      question: `Is Veira POS ETIMS compliant for businesses in ${city}?`,
      answer: `Yes, Veira POS is fully ETIMS (Electronic Tax Invoice Management System) compliant as required by the Kenya Revenue Authority. Every transaction automatically generates a KRA-approved receipt that is transmitted directly to KRA servers. This keeps your ${city} business compliant with tax regulations and protects you from penalties that can reach up to KES 1 million for non-compliance. The system handles all the technical requirements so you can focus on running your business.`
    },
    {
      question: `How long does POS setup take in ${city}?`,
      answer: `Same-day setup is available in ${city} and all major Kenyan cities. If you contact us on WhatsApp before 2pm, we can deliver and activate your POS the same day. The installation process takes about 30 minutes. Our technician will set up the device, connect it to your M-Pesa Till or Paybill, add your products, train your staff, and ensure everything works perfectly before leaving your premises.`
    },
    {
      question: `Does Veira POS accept M-Pesa and mobile money payments?`,
      answer: `Yes, Veira POS integrates directly with M-Pesa, Lipa Na M-Pesa, Till Numbers, and Paybill accounts. It also supports Airtel Money and T-Kash. All mobile money transactions are tracked automatically in your dashboard and included in your daily WhatsApp reports. You can see exactly which payments came in, from which customers, and for which products. No more checking Safaricom messages or losing track of payments.`
    },
    {
      question: `Can I track my ${city} business sales remotely on my phone?`,
      answer: `Absolutely. Veira POS sends daily sales reports directly to your WhatsApp. You can see total sales, payment methods breakdown, top-selling products, staff performance, and gross profit without visiting your shop. If you have multiple branches in ${city} or across Kenya, you can monitor all of them from one dashboard. The mobile app also lets you check real-time sales, update prices, and manage inventory from anywhere.`
    },
    {
      question: `What types of businesses in ${city} can use Veira POS?`,
      answer: `Any business in ${city} can use Veira POS. We serve restaurants, shops, supermarkets, pharmacies, hardware stores, salons, barbershops, butcheries, hotels, cafes, bars, kiosks, and wholesale operations. The system adapts to your specific business type with features like menu management for restaurants, weight-based pricing for butcheries, and credit sales tracking for wholesale. Whether you're a small kiosk owner or running a chain of supermarkets, Veira scales with you.`
    },
    {
      question: `Is there a monthly subscription or recurring fee for Veira POS?`,
      answer: `No monthly fees whatsoever. Veira POS operates on a zero-subscription model. You pay only the one-time refundable deposit of KES 3,500. There are no transaction fees, no software license fees, no support fees, and no hidden charges that appear later. We make money through our optional premium features and business services, not by charging small businesses monthly fees that eat into their profits.`
    },
    {
      question: `How do I register for Veira POS in ${city}?`,
      answer: `Registration is simple and takes less than 5 minutes. Send a WhatsApp message to +254 755 792 377 with your business name, location in ${city}, and type of business. Our team will confirm availability, answer any questions, and arrange payment of the refundable deposit via M-Pesa. Once confirmed, we deliver and set up your POS the same day in ${city}. You can start accepting payments and generating ETIMS receipts immediately after setup.`
    },
  ];

  // Intent-specific additional FAQs
  if (intent === "compliance") {
    return [
      {
        question: `What is ETIMS and why is it mandatory for ${city} businesses?`,
        answer: `ETIMS stands for Electronic Tax Invoice Management System, introduced by the Kenya Revenue Authority (KRA) in 2022. It requires all VAT-registered businesses to generate electronic tax invoices that are transmitted directly to KRA in real-time. Businesses in ${city} without ETIMS-compliant systems face penalties up to KES 1 million or 2% of turnover per month. Veira POS handles all ETIMS requirements automatically, generating compliant receipts for every transaction without any extra work from you.`
      },
      {
        question: `How does Veira help my ${city} business avoid KRA penalties?`,
        answer: `Veira POS automatically generates ETIMS-compliant receipts for every sale you make. The system connects directly to KRA servers and transmits invoice data in real-time. You don't need to manually submit anything or understand the technical requirements. Each receipt includes the required QR code for KRA verification. If you're audited, all your records are digital, organized, and instantly available. We also provide compliance reports that show exactly when each invoice was transmitted.`
      },
      ...baseFaqs.slice(0, 6),
    ];
  }

  if (intent === "pricing") {
    return [
      {
        question: `What exactly is included in Veira's free POS offer in ${city}?`,
        answer: `The complete package includes: free Android POS hardware (worth KES 15,000+), 15GB Safaricom data for internet connectivity, free delivery to any location in ${city}, free professional installation, free staff training, free M-Pesa integration, free ETIMS activation, and free ongoing WhatsApp support. The only cost is a refundable deposit of KES 3,500 which you get back in full if you return the device. There are no strings attached and no upsells required.`
      },
      {
        question: `Are there any hidden fees or charges with Veira POS in ${city}?`,
        answer: `Absolutely no hidden fees. We're transparent about everything: no monthly subscription, no transaction fees (even for M-Pesa), no software license, no support fees, no maintenance charges, no data renewal costs. The only payment is the refundable KES 3,500 deposit. Many customers are surprised when they don't receive any bills after months of use. We operate this way because we believe small businesses in ${city} deserve fair, predictable costs.`
      },
      {
        question: `How does Veira POS compare to other POS systems in Kenya on price?`,
        answer: `Most POS systems in Kenya charge KES 5,000-20,000 for hardware, plus KES 1,000-3,000 monthly subscription, plus transaction fees. Over 12 months, that's KES 20,000-50,000 in costs. Veira POS costs you nothing. Just the refundable KES 3,500 deposit that you get back. You save tens of thousands of shillings while getting the same or better features: ETIMS compliance, M-Pesa integration, inventory management, and sales reports.`
      },
      ...baseFaqs.slice(2, 8),
    ];
  }

  return baseFaqs;
};

// ============= EXTENDED CONTENT SECTIONS =============
export const contentSections = {
  directAnswer: (city: string, intent: IntentType) => {
    const answers = {
      registration: `Yes, you can get a free POS system in ${city} today. Veira provides free Android POS hardware with free delivery, free setup, and free training. The only cost is a refundable deposit of KES 3,500. Contact us on WhatsApp at +254 755 792 377 and we can have your POS delivered and activated the same day.`,
      pricing: `Veira POS is 100% free in ${city}. There are no monthly fees, no transaction charges, and no hidden costs. You pay only a refundable deposit of KES 3,500. This includes the Android POS hardware, 15GB Safaricom data, delivery anywhere in ${city}, professional installation, and ongoing support.`,
      compliance: `Veira POS is fully ETIMS compliant for ${city} businesses. Every transaction automatically generates a KRA-approved electronic tax invoice. No manual submission required. Get your ETIMS-compliant POS set up the same day with free delivery to ${city}.`,
    };
    return answers[intent];
  },
  
  whyProblemExists: (city: string) => ({
    title: `Why ${city} Businesses Are Struggling`,
    points: [
      {
        problem: "KRA ETIMS Penalties Up to KES 1 Million",
        explanation: `Many ${city} businesses don't realize that ETIMS compliance is now mandatory. The Kenya Revenue Authority can fine non-compliant businesses up to KES 1 million or 2% of monthly turnover. Some business owners in ${city} have received surprise penalty notices months after the deadline.`,
      },
      {
        problem: "Lost M-Pesa Payments and Cash Theft",
        explanation: `Without a proper POS, ${city} business owners rely on checking Safaricom messages to track M-Pesa payments. It's easy to miss a payment or for staff to claim a payment wasn't received. Cash transactions are even harder to track, and employee theft costs Kenyan businesses millions annually.`,
      },
      {
        problem: "No Visibility Into Daily Profits",
        explanation: `Most ${city} shop owners can't answer a simple question: "How much profit did you make yesterday?" Without sales tracking, inventory costs get mixed with revenue, and business owners don't know if they're actually making money or slowly losing it.`,
      },
    ],
  }),
  
  howVeiraSolves: (city: string) => ({
    title: `How Veira POS Solves These Problems for ${city} Businesses`,
    solutions: [
      {
        feature: "Automatic ETIMS Compliance",
        benefit: `Every sale generates a KRA-approved receipt automatically. Your ${city} business stays compliant without any extra work. Receipts are transmitted to KRA in real-time with the required QR code for verification.`,
      },
      {
        feature: "Real-Time M-Pesa & Payment Tracking",
        benefit: `See every M-Pesa payment the moment it arrives. Track cash, cards, and credit sales in one dashboard. Know exactly how much money came in today, who paid, and for what.`,
      },
      {
        feature: "Daily WhatsApp Profit Reports",
        benefit: `Receive your sales summary on WhatsApp every evening. See revenue by payment method, top-selling products, staff performance, and gross profit. Monitor your ${city} business from anywhere.`,
      },
      {
        feature: "Inventory That Manages Itself",
        benefit: `Know what's in stock without counting. Get alerts when products are running low. See which items sell fast and which are dead stock. Make smarter purchasing decisions.`,
      },
    ],
  }),
  
  stepByStep: (city: string) => [
    {
      step: 1,
      title: "Send a WhatsApp Message",
      description: `Message us at +254 755 792 377 with your business name, location in ${city}, and what type of business you run. We'll respond within minutes.`,
      duration: "2 minutes",
    },
    {
      step: 2,
      title: "Confirm Your Order & Pay Deposit",
      description: `We'll confirm availability and answer any questions. Pay the refundable KES 3,500 deposit via M-Pesa. This is the only payment you'll ever make.`,
      duration: "5 minutes",
    },
    {
      step: 3,
      title: "Receive Same-Day Delivery",
      description: `Our delivery team brings your free POS to your ${city} location the same day. Evening and weekend deliveries are available if you need them.`,
      duration: "Same day",
    },
    {
      step: 4,
      title: "Free Professional Setup",
      description: `Our technician installs the POS, connects your M-Pesa account, adds your products, activates ETIMS, and makes sure everything is working perfectly.`,
      duration: "30 minutes",
    },
    {
      step: 5,
      title: "Staff Training Included",
      description: `We train you and your staff on using the POS: making sales, accepting payments, viewing reports, and handling refunds. Ongoing WhatsApp support is included.`,
      duration: "15 minutes",
    },
  ],
  
  comparisonTable: {
    features: [
      { name: "ETIMS Compliance", veira: "✓ Automatic", till: "✗ No", manual: "✗ No", otherPos: "✓ Yes" },
      { name: "M-Pesa Integration", veira: "✓ Real-time", till: "✓ Basic", manual: "✗ Manual", otherPos: "✓ Yes" },
      { name: "Daily WhatsApp Reports", veira: "✓ Included", till: "✗ No", manual: "✗ No", otherPos: "? Some" },
      { name: "Inventory Management", veira: "✓ Included", till: "✗ No", manual: "✗ No", otherPos: "✓ Yes" },
      { name: "Staff Monitoring", veira: "✓ Included", till: "✗ No", manual: "✗ No", otherPos: "? Some" },
      { name: "Hardware Cost", veira: "Free", till: "N/A", manual: "KES 500", otherPos: "KES 10,000+" },
      { name: "Monthly Fee", veira: "Free", till: "KES 100", manual: "N/A", otherPos: "KES 1,000-3,000" },
      { name: "Setup & Training", veira: "Free", till: "Self", manual: "N/A", otherPos: "KES 2,000-5,000" },
      { name: "12-Month Total Cost", veira: "Free", till: "KES 1,200", manual: "KES 500", otherPos: "KES 22,000+" },
    ],
    headers: ["Feature", "Veira POS", "Till Number Only", "Manual Receipts", "Other POS Systems"],
  },
};

// ============= SCHEMA GENERATORS =============
export const generateSchema = (city: string, intent: IntentType, faqs: Array<{question: string, answer: string}>) => {
  const intentData = intents[intent];
  
  return {
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Veira POS ${city}`,
      "description": intentData.descTemplate.replace("{city}", city),
      "url": `https://veira.co.ke/pos/${city.toLowerCase()}/${intent}`,
      "telephone": "+254755792377",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ruprani House, 3rd Floor, Moktar Daddah St",
        "addressLocality": city,
        "addressRegion": "Kenya",
        "postalCode": "",
        "addressCountry": "KE"
      },
      "areaServed": {
        "@type": "City",
        "name": city
      },
      "priceRange": "Free - KES 3,500 refundable deposit",
      "openingHours": "Mo-Su 08:00-20:00",
      "paymentAccepted": "M-Pesa, Cash, Card",
      "currenciesAccepted": "KES"
    },
    product: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `Veira POS System - ${city}`,
      "description": `Free ETIMS compliant POS system for businesses in ${city}. Includes M-Pesa integration, sales tracking, inventory management, and WhatsApp reports. Only KES 3,500 refundable deposit.`,
      "brand": {
        "@type": "Brand",
        "name": "Veira Kenya"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "KES",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "url": `https://veira.co.ke/pos/${city.toLowerCase()}/${intent}`,
        "seller": {
          "@type": "Organization",
          "name": "Veira Kenya"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      }
    },
    howTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to Get Free POS System in ${city}`,
      "description": `Step-by-step guide to getting a free ETIMS compliant POS system in ${city}. Same-day delivery and setup available.`,
      "totalTime": "PT4H",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "KES",
        "value": "3500"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Contact Veira on WhatsApp",
          "text": `Send a message to +254 755 792 377 with your business name, location in ${city}, and business type`,
          "url": "https://wa.me/254755792377"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Confirm Order and Pay Deposit",
          "text": "Verify your business details and pay the refundable KES 3,500 deposit via M-Pesa"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Receive Same-Day Delivery",
          "text": `Your free POS will be delivered to your ${city} business location the same day`
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Free Professional Setup",
          "text": "Our team installs the POS, connects M-Pesa, activates ETIMS, and trains your staff"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Start Selling Immediately",
          "text": "Accept payments, generate ETIMS receipts, and track sales from day one"
        }
      ]
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://veira.co.ke"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "POS Systems",
          "item": "https://veira.co.ke/pos"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": city,
          "item": `https://veira.co.ke/pos/${city.toLowerCase()}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": intentData.action,
          "item": `https://veira.co.ke/pos/${city.toLowerCase()}/${intent}`
        }
      ]
    }
  };
};
