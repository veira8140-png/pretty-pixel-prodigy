/**
 * FAQ Content Generators
 * 
 * Generates 8+ FAQs per page with 70+ words each
 * Intent-specific and location-aware
 */

import { type Industry } from '../config/industries';
import { type FAQ } from '../types';

// Re-export FAQ type for backwards compatibility
export type { FAQ };

// Common base FAQs for all POS pages
const baseFAQs = (city: string = 'Kenya'): FAQ[] => [
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
    answer: `Same-day setup is available in ${city} and all major Kenyan cities. If you contact us on WhatsApp before 2pm, we can deliver and activate your POS the same day. The installation process takes about 30 minutes. Our technician will set up the device, connect it to your M-Pesa Till or Paybill, add your products, activate ETIMS, train your staff, and ensure everything works perfectly before leaving your premises.`
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

// ETIMS/Compliance specific FAQs
export const generateEtimsFAQs = (city: string = 'Kenya'): FAQ[] => [
  {
    question: `What is ETIMS and why is it mandatory for ${city} businesses?`,
    answer: `ETIMS stands for Electronic Tax Invoice Management System, introduced by the Kenya Revenue Authority (KRA) in 2022. It requires all VAT-registered businesses to generate electronic tax invoices that are transmitted directly to KRA in real-time. Businesses in ${city} without ETIMS-compliant systems face penalties up to KES 1 million or 2% of turnover per month. Veira POS handles all ETIMS requirements automatically, generating compliant receipts for every transaction without any extra work from you.`
  },
  {
    question: `How does Veira help my ${city} business avoid KRA penalties?`,
    answer: `Veira POS automatically generates ETIMS-compliant receipts for every sale you make. The system connects directly to KRA servers and transmits invoice data in real-time. You don't need to manually submit anything or understand the technical requirements. Each receipt includes the required QR code for KRA verification. If you're audited, all your records are digital, organized, and instantly available. We also provide compliance reports that show exactly when each invoice was transmitted.`
  },
  ...baseFAQs(city).slice(0, 6),
];

// Pricing specific FAQs
export const generatePricingFAQs = (city: string = 'Kenya'): FAQ[] => [
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
  ...baseFAQs(city).slice(2, 8),
];

// Industry-specific FAQs
export const generateIndustryFAQs = (industry: Industry, city: string = 'Kenya'): FAQ[] => [
  {
    question: `How much does a POS system cost for a ${industry.name.toLowerCase()} in ${city}?`,
    answer: `Veira POS is completely free for ${industry.plural.toLowerCase()} in ${city}. You only pay a refundable deposit of KES 3,500. No monthly fees, no hidden charges. The POS comes with free delivery, free setup, free training, and ongoing WhatsApp support. It's specifically optimized for ${industry.name.toLowerCase()} operations with features that address ${industry.painPoints[0].toLowerCase()}.`
  },
  {
    question: `What features does Veira POS have for ${industry.plural.toLowerCase()}?`,
    answer: `Veira POS for ${industry.plural.toLowerCase()} includes specialized features: ${industry.features.join(', ')}. It also includes all standard features like M-Pesa integration, ETIMS compliance, sales tracking, daily WhatsApp reports, and staff monitoring. The system is designed specifically to solve common ${industry.name.toLowerCase()} problems like ${industry.painPoints.slice(0, 2).join(' and ').toLowerCase()}.`
  },
  {
    question: `Is Veira POS suitable for a small ${industry.name.toLowerCase()} in ${city}?`,
    answer: `Yes! Veira POS works for ${industry.plural.toLowerCase()} of all sizes in ${city}, from small operations to large establishments with multiple branches. The system scales with your business. You get the same powerful features whether you're running a single ${industry.name.toLowerCase()} or managing a chain. Start small and grow without ever needing to switch systems or pay more as you scale.`
  },
  {
    question: `How long does it take to set up POS for my ${industry.name.toLowerCase()}?`,
    answer: `Same-day setup is available for ${industry.plural.toLowerCase()} in ${city}! Chat with us on WhatsApp before 2pm, and we'll deliver, install, configure the system for your ${industry.name.toLowerCase()} menu or products, and train your staff the same day. The entire process takes about 30-45 minutes. You can start accepting payments and generating ETIMS receipts immediately.`
  },
  {
    question: `Can I track my ${industry.name.toLowerCase()} sales remotely on WhatsApp?`,
    answer: `Yes! Veira POS sends daily sales reports directly to your WhatsApp. You can monitor your ${industry.name.toLowerCase()} from anywhere: see total sales, payment breakdown, ${industry.name.toLowerCase()}-specific metrics, staff performance, and profit margins. If you have multiple ${industry.plural.toLowerCase()} in ${city} or across Kenya, manage them all from one dashboard without visiting each location.`
  },
  {
    question: `Does Veira POS work with M-Pesa for ${industry.plural.toLowerCase()}?`,
    answer: `Absolutely. Veira POS integrates directly with M-Pesa Lipa Na, Till Number, Pochi La Biashara, and Paybill for your ${industry.name.toLowerCase()}. All transactions are tracked automatically. Customers can pay via M-Pesa and you'll see it instantly on your POS and in your reports. No more checking Safaricom messages or manual reconciliation at the end of the day.`
  },
  ...baseFAQs(city).slice(1, 3),
];

// Problem/Use Case specific FAQs
export const generateProblemFAQs = (
  problem: string,
  solution: string,
  city: string = 'Kenya'
): FAQ[] => [
  {
    question: `How does Veira POS help ${problem.toLowerCase()} in ${city}?`,
    answer: `Veira POS addresses ${problem.toLowerCase()} through ${solution}. Every transaction is tracked in real-time, giving you complete visibility into your business operations. You receive daily WhatsApp reports so you always know what's happening, even when you're not at the shop. The system also provides alerts and analytics that help you identify issues before they become major problems.`
  },
  {
    question: `What specific features help with ${problem.toLowerCase()}?`,
    answer: `Key features include: ${solution}, real-time transaction monitoring, staff activity logs, discount and void tracking, daily sales reconciliation reports, and automated alerts for suspicious activity. You can see who made each sale, what discounts were given, and compare expected vs actual cash at any time. Everything is recorded and can't be deleted or modified.`
  },
  ...baseFAQs(city).slice(0, 6),
];

// Comparison page FAQs
export const generateComparisonFAQs = (
  competitor: string,
  city: string = 'Kenya'
): FAQ[] => [
  {
    question: `Is Veira POS better than ${competitor} for my ${city} business?`,
    answer: `Veira POS offers several advantages over ${competitor}: free hardware with no upfront cost, full ETIMS compliance, complete inventory management, detailed sales analytics, daily WhatsApp reports, and M-Pesa integration. While ${competitor} serves a purpose, Veira gives you more features without additional cost. The KES 3,500 refundable deposit is your only expense, compared to ongoing fees with other solutions.`
  },
  {
    question: `Can I switch from ${competitor} to Veira POS?`,
    answer: `Yes, switching is easy and we help with the entire process. Our team will set up your Veira POS, migrate your product catalog if needed, integrate with your M-Pesa, activate ETIMS, and train your staff - all on the same day. You can continue using ${competitor} until Veira is fully set up, ensuring no disruption to your business. Many ${city} businesses have successfully made this transition.`
  },
  {
    question: `What does Veira POS have that ${competitor} doesn't?`,
    answer: `Veira POS includes features that ${competitor} doesn't offer: complete inventory management with stock alerts, staff performance tracking, customer credit management, multi-branch support, detailed product analytics, automatic ETIMS receipts to KRA, and daily business reports on WhatsApp. You also get free professional installation and ongoing support via WhatsApp.`
  },
  ...baseFAQs(city).slice(1, 6),
];

// Master FAQ generator based on page type
export const generateFAQsForPage = (config: {
  pageType: string;
  city?: string;
  industry?: Industry;
  intent?: string;
  problem?: string;
  solution?: string;
  competitor?: string;
}): FAQ[] => {
  const city = config.city || 'Kenya';
  
  switch (config.pageType) {
    case 'local_authority':
      if (config.intent === 'etims' || config.intent === 'compliance') {
        return generateEtimsFAQs(city);
      }
      if (config.intent === 'pricing') {
        return generatePricingFAQs(city);
      }
      return baseFAQs(city);
      
    case 'industry':
      if (config.industry) {
        return generateIndustryFAQs(config.industry, city);
      }
      return baseFAQs(city);
      
    case 'use_case':
      if (config.problem && config.solution) {
        return generateProblemFAQs(config.problem, config.solution, city);
      }
      return baseFAQs(city);
      
    case 'comparison':
    case 'alternative':
      if (config.competitor) {
        return generateComparisonFAQs(config.competitor, city);
      }
      return baseFAQs(city);
      
    default:
      return baseFAQs(city);
  }
};
