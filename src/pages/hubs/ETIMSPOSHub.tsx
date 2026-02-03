/**
 * ETIMS POS Authority Hub
 * 
 * Hub for ETIMS compliance and KRA-related content
 */

import { AuthorityHubTemplate } from '@/components/seo/hubs/AuthorityHubTemplate';
import { industries, getIndustriesByPriority } from '@/seo/config/industries';
import { counties } from '@/seo/config/locations';

const ETIMSPOSHub = () => {
  const topIndustries = getIndustriesByPriority(7);
  const topCities = counties.filter(c => c.priority >= 7).slice(0, 6);

  return (
    <AuthorityHubTemplate
      title="ETIMS POS Kenya – KRA Compliant Electronic Tax Invoice System"
      metaDescription="Get an ETIMS compliant POS system in Kenya. Automatic KRA receipts, avoid penalties up to KES 1M. Free setup, free delivery. Talk to an ETIMS expert today."
      keywords={[
        'etims pos kenya',
        'kra etims pos',
        'etims compliant pos',
        'electronic tax invoice',
        'kra pos system',
        'etims receipt machine',
        'kra approved pos',
        'etims compliance kenya',
      ]}
      canonicalUrl="https://veirahq.com/etims-pos"
      h1="ETIMS Compliant POS System for Kenyan Businesses"
      heroSubtitle="Automatic KRA receipts, zero penalties, complete tax compliance. Free setup included."
      directAnswer="ETIMS (Electronic Tax Invoice Management System) is mandatory for all VAT-registered businesses in Kenya. Non-compliance attracts penalties up to KES 1 million or 2% of turnover per month. Veira POS handles ETIMS automatically. Every sale generates a KRA-approved receipt with QR code, transmitted to KRA servers in real-time. You get free POS hardware, free setup, and free ETIMS activation. The only cost is a refundable KES 3,500 deposit."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'POS System', href: '/pos-system' },
        { label: 'ETIMS Compliance' },
      ]}
      sections={[
        {
          title: 'What is ETIMS and Why Does it Matter?',
          content: 'ETIMS stands for Electronic Tax Invoice Management System, introduced by the Kenya Revenue Authority in 2022. It requires all VAT-registered businesses to generate electronic tax invoices that are transmitted directly to KRA in real-time. This replaces the old system of manual ETR machines. The goal is to reduce tax evasion and ensure all business transactions are recorded for tax purposes.',
          bullets: [
            'Mandatory for all VAT-registered businesses since August 2023',
            'Applies to businesses with annual turnover above KES 5 million',
            'Required for any business issuing tax invoices',
            'Must transmit invoice data to KRA in real-time',
            'Each receipt must contain a unique QR code for verification',
          ],
        },
        {
          title: 'ETIMS Penalties and Enforcement',
          content: 'KRA is serious about ETIMS enforcement. The Tax Procedures Act provides for significant penalties for non-compliance. Many businesses have already received penalty notices. Inspectors are visiting shops, restaurants, and retail outlets to verify compliance. If you are caught operating without ETIMS, the financial consequences can be devastating for a small business.',
          bullets: [
            'Penalties up to KES 1 million for non-compliance',
            'Alternative penalty of 2% of monthly turnover',
            'Additional penalties for late filing or incorrect data',
            'KRA inspectors actively visiting business premises',
            'Bank account freezes possible for serious violations',
          ],
        },
        {
          title: 'How Veira Makes ETIMS Compliance Easy',
          content: 'Veira POS was built from the ground up for Kenyan tax requirements. ETIMS compliance is not an add-on. It is core functionality. When you make a sale, the system automatically generates a compliant receipt, captures all required data, creates the QR code, and transmits everything to KRA. You do not need to understand the technical requirements. Just sell, and Veira handles the rest.',
          bullets: [
            'Automatic ETIMS receipt generation',
            'Real-time data transmission to KRA',
            'All required fields captured automatically',
            'QR codes generated on every receipt',
            'Digital records stored for audit compliance',
            'No manual submission or filing required',
          ],
        },
        {
          title: 'ETIMS Requirements Veira Handles',
          content: 'An ETIMS-compliant receipt must contain specific information as mandated by KRA. Veira ensures every receipt includes all required elements. You never have to worry about missing fields, incorrect formats, or failed transmissions. The system handles retries automatically if there are connection issues and maintains complete audit logs.',
          bullets: [
            'Your business KRA PIN and registration details',
            'Customer details (for B2B transactions)',
            'Itemized products with tax classification',
            'VAT breakdown at applicable rates',
            'Unique invoice number and control unit ID',
            'Verification QR code',
            'Transaction timestamp and receipt totals',
          ],
        },
        {
          title: 'Free ETIMS Activation Included',
          content: 'Getting your POS registered with KRA can be confusing. Veira handles the entire process for you. Our team will register your device with KRA, configure the ETIMS connection, test the integration, and ensure your first receipt transmits successfully. This service is completely free. Many businesses pay external consultants KES 5,000-15,000 for this same service.',
          bullets: [
            'Free KRA device registration',
            'Free ETIMS configuration and testing',
            'Free first-receipt verification',
            'Ongoing compliance monitoring',
            'Support for KRA audits and queries',
          ],
        },
        {
          title: 'ETIMS for Different Business Types',
          content: 'Different businesses have different ETIMS requirements. Restaurants need to handle service charges and tips. Pharmacies deal with zero-rated and exempt supplies. Hardware stores process credit sales. Wholesalers need to manage B2B invoicing with customer PINs. Veira POS handles all these scenarios correctly, ensuring your specific business type maintains full compliance.',
          bullets: [
            'Restaurants: Service charge handling, split bills',
            'Pharmacies: Zero-rated and exempt goods',
            'Retail: Standard VAT on goods',
            'Wholesale: B2B invoicing with customer PINs',
            'Hotels: Accommodation and service VAT',
            'Professional services: Service-based invoicing',
          ],
        },
      ]}
      faqs={[
        {
          question: 'What is ETIMS and is it mandatory in Kenya?',
          answer: 'ETIMS stands for Electronic Tax Invoice Management System, introduced by KRA in 2022. Yes, it is mandatory for all VAT-registered businesses and those with annual turnover above KES 5 million. All sales must generate electronic tax invoices transmitted to KRA in real-time. Non-compliance attracts penalties up to KES 1 million or 2% of monthly turnover.',
        },
        {
          question: 'What happens if my business is not ETIMS compliant?',
          answer: 'Non-compliance with ETIMS carries severe penalties. KRA can impose fines up to KES 1 million or 2% of your monthly turnover, whichever is higher. They may also deny your customers the ability to claim input VAT on purchases from you. In serious cases, KRA can freeze bank accounts or initiate prosecution. Many businesses have already received penalty notices.',
        },
        {
          question: 'How does Veira POS handle ETIMS compliance?',
          answer: 'Veira POS automatically generates ETIMS-compliant receipts for every sale. When you complete a transaction, the system captures all required data, generates the QR code, and transmits the invoice to KRA servers in real-time. You do not need to do anything manually. The system handles retries if there are connection issues and maintains complete audit logs for compliance.',
        },
        {
          question: 'Is ETIMS activation free with Veira POS?',
          answer: 'Yes, ETIMS activation is completely free with Veira POS. Our team handles the entire KRA registration process, configures the ETIMS connection, tests the integration, and verifies your first receipt transmits successfully. Many businesses pay external consultants KES 5,000-15,000 for this service. With Veira, it is included at no extra cost.',
        },
        {
          question: 'Does Veira POS work for VAT-exempt businesses?',
          answer: 'Yes, Veira POS handles all tax scenarios including VAT-exempt items, zero-rated goods (like basic foodstuffs), and standard VAT rates. The system correctly classifies products and applies the appropriate tax treatment. This is especially important for pharmacies selling medicines (often exempt) and shops selling a mix of taxable and non-taxable items.',
        },
        {
          question: 'What information appears on an ETIMS receipt?',
          answer: 'An ETIMS-compliant receipt includes your business name and KRA PIN, customer details for B2B sales, itemized products with tax classification, VAT breakdown, unique invoice number, control unit ID, verification QR code, and transaction timestamp. Veira automatically captures and formats all these elements correctly.',
        },
        {
          question: 'Can I still use my old ETR machine?',
          answer: 'Old ETR (Electronic Tax Register) machines are being phased out. KRA requires migration to ETIMS. Some legacy ETRs can be upgraded, but most businesses are switching to integrated POS systems like Veira that handle both sales management and ETIMS compliance together. A combined solution is more efficient and cost-effective than maintaining separate systems.',
        },
        {
          question: 'How do I get started with ETIMS-compliant Veira POS?',
          answer: 'Getting started is simple. Send a WhatsApp message to +254 755 792 377 with your business name, location, and KRA PIN. Our team will verify your details, arrange the refundable KES 3,500 deposit via M-Pesa, and schedule same-day delivery. We handle the complete ETIMS registration and activation. You can start issuing compliant receipts immediately after setup.',
        },
      ]}
      childLinks={[
        // ETIMS by business type
        ...topIndustries.slice(0, 4).map(industry => ({
          href: `/pos-for-${industry.slug}`,
          label: `ETIMS for ${industry.plural}`,
          description: `Compliant receipts for ${industry.name.toLowerCase()} businesses`,
        })),
        // ETIMS by city
        ...topCities.map(city => ({
          href: `/pos/${city.slug}/etims`,
          label: `ETIMS POS ${city.name}`,
          description: `Get compliant in ${city.name}`,
        })),
        // Process pages
        { href: '/etims', label: 'Complete ETIMS Guide', description: 'Everything about KRA ETIMS' },
        { href: '/avoid-kra-penalties', label: 'Avoid KRA Penalties', description: 'Prevent fines up to KES 1M' },
      ]}
      relatedHubs={[
        { href: '/pos-system', label: 'Free POS System' },
        { href: '/staff-theft-prevention', label: 'Prevent Staff Theft' },
        { href: '/daily-sales-reports', label: 'Daily Sales Reports' },
      ]}
      ctaText="Talk to ETIMS Expert"
    />
  );
};

export default ETIMSPOSHub;
