/**
 * Industry Authority Hub
 * 
 * Dynamic hub page for each business type
 * URL pattern: /pos-for-{industry}
 */

import { useParams, Navigate } from 'react-router-dom';
import { AuthorityHubTemplate } from '@/components/seo/hubs/AuthorityHubTemplate';
import { getIndustryBySlug, industries } from '@/seo/config/industries';
import { counties } from '@/seo/config/locations';

const IndustryHub = () => {
  const { industry } = useParams<{ industry: string }>();
  const industryData = getIndustryBySlug(industry || '');
  
  // 404 if industry not found
  if (!industryData) {
    return <Navigate to="/404" replace />;
  }

  const topCities = counties.filter(c => c.priority >= 6).slice(0, 10);
  const relatedIndustries = industries
    .filter(i => i.slug !== industryData.slug && i.priority >= 6)
    .slice(0, 4);

  const title = `POS System for ${industryData.plural} Kenya – Free ETIMS Compliant`;
  const metaDescription = `Free POS system for ${industryData.plural.toLowerCase()} in Kenya. ${industryData.features[0]}, ${industryData.features[1]}. ETIMS compliant, M-Pesa integrated. No monthly fees.`;

  return (
    <AuthorityHubTemplate
      title={title}
      metaDescription={metaDescription}
      keywords={[
        ...industryData.keywords,
        `${industryData.slug} pos kenya`,
        `pos for ${industryData.slug}`,
        `free ${industryData.slug} pos`,
        `etims ${industryData.slug}`,
      ]}
      canonicalUrl={`https://veira.co.ke/pos-for-${industryData.slug}`}
      h1={`POS System for ${industryData.plural} in Kenya`}
      heroSubtitle={`Built for ${industryData.name.toLowerCase()} challenges. ${industryData.features[0]}. Free hardware, free setup.`}
      directAnswer={`Veira POS is designed specifically for ${industryData.plural.toLowerCase()} in Kenya. We understand your challenges: ${industryData.painPoints.join(', ')}. Our system includes ${industryData.features.join(', ')}. Get free POS hardware worth KES 15,000, free delivery, free setup, and free ETIMS activation. The only cost is a refundable KES 3,500 deposit. Join hundreds of ${industryData.plural.toLowerCase()} already using Veira.`}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'POS System', href: '/pos-system' },
        { label: `POS for ${industryData.plural}` },
      ]}
      sections={[
        {
          title: `Common Challenges in ${industryData.plural}`,
          content: `Running a ${industryData.name.toLowerCase()} in Kenya comes with unique challenges. Without the right systems, you lose money, time, and customers. Here is what we hear from ${industryData.name.toLowerCase()} owners before they switch to Veira.`,
          bullets: industryData.painPoints,
        },
        {
          title: `How Veira Solves ${industryData.name} Problems`,
          content: `Veira POS was built with input from actual ${industryData.name.toLowerCase()} owners. We did not create a generic system and try to make it fit. Every feature addresses a real problem that ${industryData.plural.toLowerCase()} face daily.`,
          bullets: industryData.features.map(f => `${f}: Built specifically for ${industryData.name.toLowerCase()} needs`),
        },
        {
          title: 'ETIMS Compliance for Your Business',
          content: `KRA requires all VAT-registered ${industryData.plural.toLowerCase()} to use ETIMS for electronic tax invoices. Non-compliance attracts penalties up to KES 1 million. Veira POS handles this automatically. Every sale generates a compliant receipt transmitted to KRA in real-time. You focus on customers while we handle tax compliance.`,
          bullets: [
            'Automatic ETIMS receipt generation',
            `Industry-specific tax handling for ${industryData.plural.toLowerCase()}`,
            'Real-time transmission to KRA servers',
            'Complete digital records for audits',
          ],
        },
        {
          title: 'M-Pesa Integration',
          content: `Most ${industryData.name} customers pay via M-Pesa. Veira integrates with Lipa Na M-Pesa, Till Numbers, and Pochi La Biashara. Every mobile payment is tracked, reconciled, and included in your daily reports. No more checking SMS messages or losing track of who paid what.`,
          bullets: [
            'Accept Lipa Na M-Pesa payments',
            'Till Number and Paybill support',
            'Automatic payment reconciliation',
            'Daily M-Pesa transaction summary',
          ],
        },
        {
          title: 'Daily Reports on WhatsApp',
          content: `As a ${industryData.name.toLowerCase()} owner, you need to know daily sales, best-selling items, staff performance, and profit margins. Veira sends comprehensive reports to your WhatsApp every evening. Monitor your business from anywhere without visiting.`,
          bullets: [
            'Total daily sales and profit',
            'Top-selling items in your category',
            'Per-staff performance breakdown',
            'Inventory alerts and stock levels',
          ],
        },
        {
          title: 'Free Setup and Training',
          content: `We deliver and install your POS the same day in major cities. Our technician sets up the device, adds your products, configures ${industryData.name.toLowerCase()}-specific features, and trains your staff. Everything is included at no extra cost. You only pay a refundable KES 3,500 deposit.`,
          bullets: [
            'Same-day delivery in major cities',
            'Professional installation included',
            `${industryData.name}-specific configuration`,
            'Staff training on all features',
            'Ongoing WhatsApp support',
          ],
        },
      ]}
      faqs={[
        {
          question: `How much does Veira POS cost for ${industryData.plural.toLowerCase()}?`,
          answer: `Veira POS is completely free for ${industryData.plural.toLowerCase()} in Kenya. The only cost is a refundable deposit of KES 3,500, which you get back if you return the device. There are no monthly fees, no transaction fees, and no hidden charges. Free delivery, free installation, and free training are included.`,
        },
        {
          question: `What features does Veira offer for ${industryData.plural.toLowerCase()}?`,
          answer: `Veira POS for ${industryData.plural.toLowerCase()} includes: ${industryData.features.join(', ')}. The system is designed specifically for ${industryData.name.toLowerCase()} operations, not a generic one-size-fits-all solution. We understand challenges like ${industryData.painPoints[0].toLowerCase()}.`,
        },
        {
          question: `Is Veira POS ETIMS compliant for ${industryData.plural.toLowerCase()}?`,
          answer: `Yes, Veira POS is fully ETIMS compliant. Every sale in your ${industryData.name.toLowerCase()} automatically generates a KRA-approved receipt transmitted to KRA servers. This protects you from penalties up to KES 1 million. We handle ${industryData.name.toLowerCase()}-specific tax requirements including any VAT-exempt or zero-rated items.`,
        },
        {
          question: `Can I use Veira if I have multiple ${industryData.name.toLowerCase()} locations?`,
          answer: `Absolutely. Veira supports multi-branch operations. See all your ${industryData.name.toLowerCase()} locations in one dashboard. Compare performance, monitor inventory across sites, and get consolidated reports. Many ${industryData.name.toLowerCase()} chains use Veira to manage their entire network.`,
        },
        {
          question: `How do I track ${industryData.name.toLowerCase()} inventory with Veira?`,
          answer: `Veira includes built-in inventory management designed for ${industryData.plural.toLowerCase()}. Track stock levels, set low-stock alerts, manage suppliers, and monitor stock movement. ${industryData.features.find(f => f.toLowerCase().includes('inventory') || f.toLowerCase().includes('stock')) || 'The system tracks every sale against inventory'}.`,
        },
        {
          question: `How long does setup take for a ${industryData.name.toLowerCase()}?`,
          answer: `Same-day setup is available. If you contact us before 2pm, we can deliver and install your POS the same day. Setup typically takes 30-60 minutes for a ${industryData.name.toLowerCase()}, including product entry, staff training, and M-Pesa configuration.`,
        },
        {
          question: `What support does Veira provide for ${industryData.plural.toLowerCase()}?`,
          answer: `24/7 WhatsApp support is included free. Our team understands ${industryData.name.toLowerCase()} operations and can help with any issues. We also provide remote troubleshooting, software updates, and ongoing training as you add new features or staff.`,
        },
        {
          question: `How do I register my ${industryData.name.toLowerCase()} for Veira POS?`,
          answer: `Send a WhatsApp message to +254 755 792 377 with your ${industryData.name.toLowerCase()} name, location, and the type of products you sell. Our team will confirm details, arrange the refundable KES 3,500 deposit, and schedule same-day delivery. Start accepting payments and generating ETIMS receipts immediately after setup.`,
        },
      ]}
      childLinks={[
        // City-specific industry pages
        ...topCities.map(city => ({
          href: `/pos/${city.slug}/for-${industryData.slug}`,
          label: `${industryData.name} POS in ${city.name}`,
          description: `Free POS for ${industryData.plural.toLowerCase()} in ${city.name}`,
        })),
      ]}
      relatedHubs={[
        { href: '/pos-system', label: 'All POS Systems' },
        { href: '/etims-pos', label: 'ETIMS Compliance' },
        { href: '/staff-theft-prevention', label: 'Theft Prevention' },
        ...relatedIndustries.map(i => ({
          href: `/pos-for-${i.slug}`,
          label: `POS for ${i.plural}`,
        })),
      ]}
      ctaText={`Get Free ${industryData.name} POS`}
    />
  );
};

export default IndustryHub;
