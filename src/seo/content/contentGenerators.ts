/**
 * Content Section Generators
 * 
 * Generates unique, intent-matched content for all page types
 * Minimum 1200 words per page, <15% duplicate threshold
 */

import { type Industry } from '../config/industries';
import { type Location } from '../config/locations';

export interface ContentSection {
  title: string;
  content: string | string[];
}

export interface ProblemPoint {
  problem: string;
  explanation: string;
  icon?: string;
}

export interface SolutionPoint {
  feature: string;
  benefit: string;
  icon?: string;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
  duration: string;
}

// Direct answer section - appears at top of page
export const generateDirectAnswer = (config: {
  pageType: string;
  city?: string;
  industry?: Industry;
  intent?: string;
  keyword?: string;
}): string => {
  const city = config.city || 'Kenya';
  const industry = config.industry?.name.toLowerCase() || 'business';
  
  const answers: Record<string, string> = {
    registration: `Yes, you can get a free POS system in ${city} today. Veira provides free Android POS hardware with free delivery, free setup, and free training. The only cost is a refundable deposit of KES 3,500. Contact us on WhatsApp at +254 755 792 377 and we can have your POS delivered and activated the same day.`,
    
    pricing: `Veira POS is 100% free in ${city}. There are no monthly fees, no transaction charges, and no hidden costs. You pay only a refundable deposit of KES 3,500. This includes the Android POS hardware, 15GB Safaricom data, delivery anywhere in ${city}, professional installation, and ongoing support.`,
    
    etims: `Veira POS is fully ETIMS compliant for ${city} businesses. Every transaction automatically generates a KRA-approved electronic tax invoice. No manual submission required. Get your ETIMS-compliant POS set up the same day with free delivery to ${city}.`,
    
    compliance: `Veira POS is fully ETIMS compliant for ${city} businesses. Every transaction automatically generates a KRA-approved electronic tax invoice. No manual submission required. Get your ETIMS-compliant POS set up the same day with free delivery to ${city}.`,
    
    industry: `Veira POS is specifically designed for ${config.industry?.plural || 'businesses'} in ${city}. Get free hardware, M-Pesa integration, ETIMS compliance, and features built for ${industry} operations. Same-day setup available.`,
    
    'stop-theft': `Stop employee theft with Veira POS. Every sale is tracked, every payment logged, every discount recorded. Get real-time alerts, daily reports on WhatsApp, and complete visibility into staff transactions.`,
    
    'track-sales': `Get daily sales reports on WhatsApp. Veira POS automatically tracks all transactions and sends you a summary every evening. See revenue, payment methods, top products, and profit margins without visiting your shop.`,
    
    'separate-money': `Stop mixing personal and business M-Pesa. Veira POS tracks every business transaction separately, shows real profit, and sends daily reports. Know exactly how much your business makes.`,
    
    'avoid-penalties': `Avoid KRA penalties up to KES 1 million. Veira POS is fully ETIMS compliant. Every sale automatically generates a KRA-approved receipt transmitted in real-time. Get compliant today with free setup.`,
    
    alternative: `Looking for a ${config.keyword?.replace(/-/g, ' ') || 'POS'} alternative? Veira gives you everything you need plus more: M-Pesa integration, ETIMS compliance, inventory management, daily WhatsApp reports. All free.`,
    
    comparison: `Compare Veira POS with ${config.keyword?.replace('veira-vs-', '').replace(/-/g, ' ') || 'other options'}. See the full feature breakdown, pricing comparison, and why Kenyan businesses are switching to Veira.`,
  };
  
  return answers[config.intent || config.pageType] || answers.registration;
};

// Problem section - why the user is searching
export const generateProblemSection = (city: string = 'Kenya'): { title: string; points: ProblemPoint[] } => ({
  title: `Why ${city} Businesses Are Struggling`,
  points: [
    {
      problem: 'KRA ETIMS Penalties Up to KES 1 Million',
      explanation: `Many ${city} businesses don't realize that ETIMS compliance is now mandatory. The Kenya Revenue Authority can fine non-compliant businesses up to KES 1 million or 2% of monthly turnover. Some business owners in ${city} have received surprise penalty notices months after the deadline.`,
      icon: 'alert',
    },
    {
      problem: 'Lost M-Pesa Payments and Cash Theft',
      explanation: `Without a proper POS, ${city} business owners rely on checking Safaricom messages to track M-Pesa payments. It's easy to miss a payment or for staff to claim a payment wasn't received. Cash transactions are even harder to track, and employee theft costs Kenyan businesses millions annually.`,
      icon: 'wallet',
    },
    {
      problem: 'No Visibility Into Daily Profits',
      explanation: `Most ${city} shop owners can't answer a simple question: "How much profit did you make yesterday?" Without sales tracking, inventory costs get mixed with revenue, and business owners don't know if they're actually making money or slowly losing it.`,
      icon: 'chart',
    },
  ],
});

// Solution section - how Veira solves it
export const generateSolutionSection = (city: string = 'Kenya'): { title: string; solutions: SolutionPoint[] } => ({
  title: `How Veira POS Solves These Problems for ${city} Businesses`,
  solutions: [
    {
      feature: 'Automatic ETIMS Compliance',
      benefit: `Every sale generates a KRA-approved receipt automatically. Your ${city} business stays compliant without any extra work. Receipts are transmitted to KRA in real-time with the required QR code for verification.`,
      icon: 'shield',
    },
    {
      feature: 'Real-Time M-Pesa & Payment Tracking',
      benefit: `See every M-Pesa payment the moment it arrives. Track cash, cards, and credit sales in one dashboard. Know exactly how much money came in today, who paid, and for what.`,
      icon: 'smartphone',
    },
    {
      feature: 'Daily WhatsApp Profit Reports',
      benefit: `Receive your sales summary on WhatsApp every evening. See revenue by payment method, top-selling products, staff performance, and gross profit. Monitor your ${city} business from anywhere.`,
      icon: 'message',
    },
    {
      feature: 'Inventory That Manages Itself',
      benefit: `Know what's in stock without counting. Get alerts when products are running low. See which items sell fast and which are dead stock. Make smarter purchasing decisions.`,
      icon: 'package',
    },
  ],
});

// Step-by-step guide
export const generateStepByStep = (city: string = 'Kenya'): StepItem[] => [
  {
    step: 1,
    title: 'Send a WhatsApp Message',
    description: `Message us at +254 755 792 377 with your business name, location in ${city}, and what type of business you run. We'll respond within minutes.`,
    duration: '2 minutes',
  },
  {
    step: 2,
    title: 'Confirm Your Order & Pay Deposit',
    description: `We'll confirm availability and answer any questions. Pay the refundable KES 3,500 deposit via M-Pesa. This is the only payment you'll ever make.`,
    duration: '5 minutes',
  },
  {
    step: 3,
    title: 'Receive Same-Day Delivery',
    description: `Our delivery team brings your free POS to your ${city} location the same day. Evening and weekend deliveries are available if you need them.`,
    duration: 'Same day',
  },
  {
    step: 4,
    title: 'Free Professional Setup',
    description: `Our technician installs the POS, connects your M-Pesa account, adds your products, activates ETIMS, and makes sure everything is working perfectly.`,
    duration: '30 minutes',
  },
  {
    step: 5,
    title: 'Staff Training Included',
    description: `We train you and your staff on using the POS: making sales, accepting payments, viewing reports, and handling refunds. Ongoing WhatsApp support is included.`,
    duration: '15 minutes',
  },
];

// Comparison table data
export interface ComparisonRow {
  feature: string;
  veira: string;
  competitor1: string;
  competitor2: string;
  competitor3: string;
}

export const generateComparisonTable = (): {
  headers: string[];
  features: ComparisonRow[];
} => ({
  headers: ['Feature', 'Veira POS', 'Till Number Only', 'Manual Receipts', 'Other POS Systems'],
  features: [
    { feature: 'ETIMS Compliance', veira: '✓ Automatic', competitor1: '✗ No', competitor2: '✗ No', competitor3: '✓ Yes' },
    { feature: 'M-Pesa Integration', veira: '✓ Real-time', competitor1: '✓ Basic', competitor2: '✗ Manual', competitor3: '✓ Yes' },
    { feature: 'Daily WhatsApp Reports', veira: '✓ Included', competitor1: '✗ No', competitor2: '✗ No', competitor3: '? Some' },
    { feature: 'Inventory Management', veira: '✓ Included', competitor1: '✗ No', competitor2: '✗ No', competitor3: '✓ Yes' },
    { feature: 'Staff Monitoring', veira: '✓ Included', competitor1: '✗ No', competitor2: '✗ No', competitor3: '? Some' },
    { feature: 'Hardware Cost', veira: 'Free', competitor1: 'N/A', competitor2: 'KES 500', competitor3: 'KES 10,000+' },
    { feature: 'Monthly Fee', veira: 'Free', competitor1: 'KES 100', competitor2: 'N/A', competitor3: 'KES 1,000-3,000' },
    { feature: 'Setup & Training', veira: 'Free', competitor1: 'Self', competitor2: 'N/A', competitor3: 'KES 2,000-5,000' },
    { feature: '12-Month Total Cost', veira: 'Free', competitor1: 'KES 1,200', competitor2: 'KES 500', competitor3: 'KES 22,000+' },
  ],
});

// Industry-specific problem and solution content
export const generateIndustryContent = (industry: Industry, city: string = 'Kenya'): {
  problemSection: { title: string; points: ProblemPoint[] };
  solutionSection: { title: string; solutions: SolutionPoint[] };
} => ({
  problemSection: {
    title: `Common Challenges for ${industry.plural} in ${city}`,
    points: industry.painPoints.map((pain, index) => ({
      problem: pain,
      explanation: `This is one of the most common issues we hear from ${industry.name.toLowerCase()} owners in ${city}. Without the right systems in place, ${pain.toLowerCase()} leads to lost revenue, unhappy customers, and unnecessary stress. Many ${industry.plural.toLowerCase()} operate for years before realizing how much money they're losing.`,
      icon: ['alert', 'wallet', 'chart', 'users'][index] || 'alert',
    })),
  },
  solutionSection: {
    title: `How Veira POS Helps ${industry.plural} in ${city}`,
    solutions: industry.features.map((feature, index) => ({
      feature: feature,
      benefit: `Designed specifically for ${industry.plural.toLowerCase()}, this feature helps you ${industry.painPoints[index]?.toLowerCase() || 'run your business more efficiently'}. ${city} ${industry.name.toLowerCase()} owners using this feature report significant time savings and better business insights.`,
      icon: ['receipt', 'smartphone', 'chart', 'package'][index] || 'check',
    })),
  },
});

// Trust signals content
export const trustSignals = [
  'ETIMS Certified by KRA',
  'M-Pesa & Airtel Money Integrated',
  'Same Day Delivery in Major Cities',
  '24/7 WhatsApp Support',
  '500+ Businesses Using Veira',
  'Free Training Included',
  '30-Day Money-Back Guarantee',
];

export const localTrustElements = {
  kraReference: 'Kenya Revenue Authority (KRA) mandates ETIMS compliance for all VAT-registered businesses. Non-compliance attracts penalties under the Tax Procedures Act, 2015.',
  mpesaIntegration: 'Veira POS integrates with Safaricom M-Pesa, Lipa Na M-Pesa, and Till Number payments for seamless mobile money acceptance.',
  refundPolicy: 'Your KES 3,500 deposit is 100% refundable if you return the POS device within 30 days. No questions asked.',
};

// Offer details
export const offer = {
  posPrice: 'Free',
  data: '15GB Safaricom',
  setup: 'Free',
  delivery: 'Free',
  training: 'Free',
  depositKes: 3500,
  depositType: 'Refundable',
  activationTime: 'Same Day',
  whatsappNumber: '+254755792377',
  whatsappUrl: 'https://wa.me/254755792377',
  guarantee: '30-day money-back guarantee',
};
