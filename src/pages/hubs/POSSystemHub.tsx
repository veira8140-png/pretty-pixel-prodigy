/**
 * POS System Authority Hub
 * 
 * Main hub for all POS-related content
 * Links to: business types, cities, features
 */

import { AuthorityHubTemplate } from '@/components/seo/hubs/AuthorityHubTemplate';
import { industries, getIndustriesByPriority } from '@/seo/config/industries';
import { counties } from '@/seo/config/locations';

const POSSystemHub = () => {
  const topIndustries = getIndustriesByPriority(6);
  const topCities = counties.filter(c => c.priority >= 7).slice(0, 8);

  return (
    <AuthorityHubTemplate
      title="POS System Kenya – Free ETIMS Compliant Point of Sale"
      metaDescription="Get a free ETIMS compliant POS system in Kenya. No upfront cost, no monthly fees. Free hardware, delivery, and setup. Track sales, manage inventory, accept M-Pesa."
      keywords={[
        'pos system kenya',
        'free pos kenya',
        'etims pos system',
        'point of sale kenya',
        'mpesa pos integration',
        'restaurant pos kenya',
        'retail pos kenya',
        'pos software kenya',
      ]}
      canonicalUrl="https://veirahq.com/pos-system"
      h1="Free POS System for Kenyan Businesses"
      heroSubtitle="ETIMS compliant, M-Pesa integrated, zero monthly fees. Join 500+ businesses across Kenya."
      directAnswer="Veira POS is a free point of sale system designed specifically for Kenyan businesses. You get free hardware worth KES 15,000, free delivery anywhere in Kenya, free setup and training, plus 15GB Safaricom data. The only cost is a refundable KES 3,500 deposit. Every sale automatically generates ETIMS-compliant receipts sent directly to KRA. Accept M-Pesa, Till Number, and card payments. Get daily sales reports on WhatsApp."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'POS System' },
      ]}
      sections={[
        {
          title: 'Why Kenyan Businesses Need a Modern POS System',
          content: 'Running a business in Kenya without a proper POS system means losing money every single day. You lose track of sales, staff steal without detection, inventory disappears, and you have no idea which products actually make profit. The KRA ETIMS mandate has made it even more critical. Businesses without compliant systems face penalties up to KES 1 million.',
          bullets: [
            'Staff theft costs Kenyan retailers an estimated 3-5% of revenue annually',
            'Manual record keeping leads to pricing errors and lost sales data',
            'Non-compliance with ETIMS attracts penalties from KRA',
            'Mixing M-Pesa personal and business payments creates tax nightmares',
            'No visibility into daily sales means poor business decisions',
          ],
        },
        {
          title: 'What Makes Veira POS Different',
          content: 'Most POS providers charge you KES 20,000-50,000 upfront, then hit you with monthly fees of KES 2,000-5,000. Veira flips this model completely. We believe small businesses deserve enterprise-grade tools without enterprise prices. Our free POS model works because we focus on volume and optional premium services, not squeezing every shilling from struggling shop owners.',
          bullets: [
            'Free Android POS hardware (worth KES 15,000+)',
            'Zero monthly subscription fees forever',
            'Free same-day delivery in major cities',
            'Free professional installation and staff training',
            'Free ongoing WhatsApp support',
            'Only a refundable KES 3,500 deposit',
          ],
        },
        {
          title: 'Built for Every Type of Kenyan Business',
          content: 'Whether you run a small kiosk in Kawangware or a chain of supermarkets in Nairobi, Veira adapts to your needs. Our system handles restaurants with table management and kitchen displays, pharmacies with expiry tracking and batch numbers, hardware stores with thousands of SKUs, and wholesale operations with credit sales and customer accounts.',
          bullets: [
            'Restaurants: Table management, split bills, kitchen display',
            'Retail shops: Barcode scanning, inventory alerts, quick checkout',
            'Pharmacies: Expiry tracking, controlled substance logging',
            'Hardware: Large catalog, credit sales, customer accounts',
            'Butcheries: Scale integration, weight-based pricing',
            'Salons & Barbershops: Service billing, staff commissions',
          ],
        },
        {
          title: 'Automatic ETIMS Compliance',
          content: 'The Kenya Revenue Authority requires all VAT-registered businesses to generate electronic tax invoices through ETIMS. Non-compliance attracts penalties. Veira POS handles this automatically. Every transaction generates a KRA-approved receipt with the required QR code, transmitted directly to KRA servers in real-time. You focus on serving customers while we handle tax compliance.',
          bullets: [
            'Automatic ETIMS receipt generation for every sale',
            'Real-time transmission to KRA servers',
            'QR codes for easy verification',
            'Digital records for audit compliance',
            'No manual filing or submission required',
          ],
        },
        {
          title: 'M-Pesa and Mobile Money Integration',
          content: 'Kenya runs on M-Pesa. Your POS should too. Veira integrates with Safaricom M-Pesa, Lipa Na M-Pesa, Till Numbers, Pochi La Biashara, and Paybill. It also supports Airtel Money and T-Kash. Every mobile money payment is tracked automatically, reconciled with your sales, and included in your daily reports. No more checking SMS messages or losing track of payments.',
          bullets: [
            'Accept all M-Pesa payment types',
            'Automatic payment reconciliation',
            'Lipa Na M-Pesa and Till Number support',
            'Airtel Money and T-Kash compatible',
            'Real-time payment notifications',
          ],
        },
        {
          title: 'Daily Reports on WhatsApp',
          content: 'You should not have to be in your shop to know how it is performing. Veira sends comprehensive daily sales reports directly to your WhatsApp. See total sales, payment breakdown, top-selling products, staff performance, and gross profit. If you have multiple branches, monitor all of them from one place. The mobile app gives you real-time access to sales, inventory, and more.',
          bullets: [
            'Automatic daily summary on WhatsApp',
            'Real-time sales monitoring from anywhere',
            'Multi-branch dashboard for chain stores',
            'Staff performance and shift reports',
            'Inventory levels and low-stock alerts',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How much does Veira POS cost in Kenya?',
          answer: 'Veira POS is completely free. The only cost is a refundable deposit of KES 3,500, which you get back if you ever return the device. There are no monthly subscription fees, no transaction fees, no maintenance charges, and no hidden costs. Free delivery to any location in Kenya, free installation by our trained team, and free ongoing WhatsApp support are all included.',
        },
        {
          question: 'Is Veira POS ETIMS compliant as required by KRA?',
          answer: 'Yes, Veira POS is fully ETIMS (Electronic Tax Invoice Management System) compliant as required by the Kenya Revenue Authority. Every transaction automatically generates a KRA-approved receipt that is transmitted directly to KRA servers. This keeps your business compliant with tax regulations and protects you from penalties that can reach up to KES 1 million for non-compliance.',
        },
        {
          question: 'How long does POS setup and delivery take?',
          answer: 'Same-day setup is available in Nairobi and all major Kenyan cities. If you contact us on WhatsApp before 2pm, we can deliver and activate your POS the same day. The installation process takes about 30 minutes. Our technician will set up the device, connect it to your M-Pesa, add your products, train your staff, and ensure everything works perfectly.',
        },
        {
          question: 'Does Veira POS accept M-Pesa payments?',
          answer: 'Yes, Veira POS integrates directly with M-Pesa, Lipa Na M-Pesa, Till Numbers, and Paybill accounts. It also supports Airtel Money and T-Kash. All mobile money transactions are tracked automatically in your dashboard and included in your daily WhatsApp reports. You can see exactly which payments came in, from which customers, and for which products.',
        },
        {
          question: 'What types of businesses can use Veira POS?',
          answer: 'Any business in Kenya can use Veira POS. We serve restaurants, shops, supermarkets, pharmacies, hardware stores, salons, barbershops, butcheries, hotels, cafes, bars, kiosks, and wholesale operations. The system adapts to your specific business type with industry-specific features like menu management for restaurants, weight-based pricing for butcheries, and credit sales for wholesale.',
        },
        {
          question: 'Can I monitor my business sales remotely?',
          answer: 'Absolutely. Veira POS sends daily sales reports directly to your WhatsApp. You can see total sales, payment methods breakdown, top-selling products, staff performance, and gross profit without visiting your shop. If you have multiple branches, you can monitor all of them from one dashboard. The mobile app also lets you check real-time sales and manage inventory from anywhere.',
        },
        {
          question: 'Is there any monthly subscription fee?',
          answer: 'No monthly fees whatsoever. Veira POS operates on a zero-subscription model. You pay only the one-time refundable deposit of KES 3,500. There are no transaction fees, no software license fees, no support fees, and no hidden charges. We make money through optional premium features and business services, not by charging small businesses monthly fees.',
        },
        {
          question: 'How do I register for Veira POS?',
          answer: 'Registration is simple and takes less than 5 minutes. Send a WhatsApp message to +254 755 792 377 with your business name, location, and type of business. Our team will confirm availability, answer any questions, and arrange payment of the refundable deposit via M-Pesa. Once confirmed, we deliver and set up your POS the same day. You can start accepting payments immediately.',
        },
      ]}
      childLinks={[
        // Business type links
        ...topIndustries.slice(0, 6).map(industry => ({
          href: `/pos-for-${industry.slug}`,
          label: `POS for ${industry.plural}`,
          description: industry.painPoints[0],
        })),
        // City links
        ...topCities.map(city => ({
          href: `/pos/${city.slug}`,
          label: `POS in ${city.name}`,
          description: `Free ETIMS POS in ${city.name}`,
        })),
      ]}
      relatedHubs={[
        { href: '/etims-pos', label: 'ETIMS Compliance' },
        { href: '/staff-theft-prevention', label: 'Staff Theft Prevention' },
        { href: '/daily-sales-reports', label: 'Sales Reports' },
        { href: '/etims', label: 'KRA ETIMS Guide' },
      ]}
    />
  );
};

export default POSSystemHub;
