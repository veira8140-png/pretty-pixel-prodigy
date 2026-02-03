/**
 * Staff Theft Prevention Authority Hub
 * 
 * Hub for fraud prevention and monitoring content
 * High-emotion, high-intent searchers
 */

import { AuthorityHubTemplate } from '@/components/seo/hubs/AuthorityHubTemplate';
import { industries, getIndustriesByPriority } from '@/seo/config/industries';
import { counties } from '@/seo/config/locations';

const StaffTheftHub = () => {
  const topIndustries = getIndustriesByPriority(7);
  const topCities = counties.filter(c => c.priority >= 7).slice(0, 6);

  return (
    <AuthorityHubTemplate
      title="Stop Employee Theft – POS Monitoring for Kenyan Businesses"
      metaDescription="Stop staff theft in your shop or restaurant. Track every transaction, monitor discounts and voids, get real-time alerts. Free POS with theft prevention features."
      keywords={[
        'stop employee theft kenya',
        'staff theft prevention',
        'monitor shop attendants',
        'retail theft prevention',
        'employee stealing cash',
        'pos theft monitoring',
        'prevent cashier theft',
        'shop surveillance kenya',
      ]}
      canonicalUrl="https://veirahq.com/staff-theft-prevention"
      h1="Stop Employee Theft in Your Business"
      heroSubtitle="Every transaction tracked. Every payment logged. Every discount monitored. Know exactly what happens in your shop."
      directAnswer="Staff theft costs Kenyan retailers 3-5% of revenue annually. Most owners suspect it but cannot prove it. Veira POS tracks every transaction, logs every payment, monitors all discounts and voids, and sends you real-time alerts for suspicious activity. You can see exactly what each employee does during their shift. No more guessing. No more losing money. Get a free POS with theft prevention features. Only a refundable KES 3,500 deposit."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'POS System', href: '/pos-system' },
        { label: 'Theft Prevention' },
      ]}
      sections={[
        {
          title: 'The Hidden Cost of Staff Theft in Kenya',
          content: 'Most Kenyan business owners know their staff steal. The question is how much. Studies show retail theft by employees accounts for 3-5% of revenue. For a shop doing KES 500,000 monthly, that is KES 15,000-25,000 every month walking out the door. Over a year, you are losing the equivalent of a nice car. The worst part: without proper tracking, you cannot identify who, when, or how.',
          bullets: [
            'Cash skimming: not ringing up sales, pocketing cash',
            'Undercharging friends and family',
            'Fake refunds and voids to steal cash',
            'Product theft disguised as damaged or expired stock',
            'Discounting items without authorization',
            'Manipulating inventory counts',
          ],
        },
        {
          title: 'Why Traditional Methods Fail',
          content: 'Manual record keeping, receipt books, and even basic till machines do not prevent theft. They make it easier. A clever employee learns to manipulate any system you put in place. CCTV helps with physical theft but cannot catch cashier fraud. Surprise audits are useful but you cannot be there every day. You need a system that tracks automatically, continuously, and alerts you to problems immediately.',
          bullets: [
            'Receipt books can be skipped or duplicated',
            'Cash registers do not track individual employees',
            'CCTV cannot catch undercharging or no-sale pocketing',
            'Occasional audits miss day-to-day theft',
            'Trust-based systems reward the dishonest',
          ],
        },
        {
          title: 'How Veira POS Catches Thieves',
          content: 'Veira POS records every single transaction with the employee who made it. You see exactly who sold what, at what price, with what payment method. The system flags unusual activity. Too many voids? You get an alert. Excessive discounting? You see it immediately. Cash drawer open without a sale? Logged. You have complete visibility into what happens in your business, whether you are there or watching from home.',
          bullets: [
            'Transaction-level employee tracking',
            'Real-time alerts for voids and discounts',
            'Cash drawer open/close logging',
            'Shift-by-shift sales comparison',
            'Product-level theft detection',
            'Daily reports straight to WhatsApp',
          ],
        },
        {
          title: 'The Power of WhatsApp Sales Reports',
          content: 'Every evening, Veira sends you a complete sales summary on WhatsApp. You see total sales, payment breakdown (cash vs M-Pesa), discounts given, voids processed, and per-staff performance. When you see one employee consistently has lower sales or higher voids than others, you know something is wrong. You do not need to visit the shop. The truth comes to your phone.',
          bullets: [
            'Daily sales summary at closing time',
            'Per-employee sales breakdown',
            'Discount and void summary',
            'Cash vs M-Pesa comparison',
            'Low-performing shift alerts',
            'Week-over-week trend tracking',
          ],
        },
        {
          title: 'Discount and Void Controls',
          content: 'Discounts and voids are the most common theft vectors. An employee gives a "discount" but pockets the difference. Or voids a sale after the customer pays and takes the cash. Veira lets you set discount limits requiring manager approval. Every void is logged with reason codes. You see exactly who authorized what and can investigate anything suspicious.',
          bullets: [
            'Set maximum discount percentages per employee',
            'Require manager PIN for discounts above threshold',
            'Mandatory reason codes for all voids',
            'Time-stamped void and discount logs',
            'End-of-day void/discount summary',
            'Historical patterns for each employee',
          ],
        },
        {
          title: 'Remote Monitoring for Multi-Branch Owners',
          content: 'If you own multiple shops or restaurants, theft risk multiplies. You cannot be everywhere. Veira gives you a single dashboard to monitor all branches. See which locations are underperforming. Compare employee performance across sites. Identify patterns that suggest problems. One owner discovered his least profitable branch had the highest void rate. He investigated and caught a KES 200,000 fraud.',
          bullets: [
            'Single dashboard for all locations',
            'Cross-branch performance comparison',
            'Centralized discount and void monitoring',
            'Location-specific alerts',
            'Transfer tracking between branches',
            'Consolidated daily reports',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How does Veira POS help prevent staff theft?',
          answer: 'Veira POS tracks every transaction with the employee who made it. You see who sold what, at what price, and with what payment method. The system alerts you to suspicious activity like excessive voids, unusual discounting patterns, and cash drawer opens without sales. You receive daily reports on WhatsApp showing per-employee performance, making it easy to spot problems.',
        },
        {
          question: 'Can employees manipulate the Veira POS system?',
          answer: 'Veira POS is designed to be tamper-resistant. Employees cannot delete transactions, modify prices after sale, or access admin settings without your PIN. Every action is logged with timestamp and employee ID. Attempts to manipulate the system (like opening the cash drawer without a sale) are flagged and reported. The cloud-based system means records cannot be altered locally.',
        },
        {
          question: 'How do I monitor my shop when I am not there?',
          answer: 'Veira sends daily sales reports directly to your WhatsApp. You see total sales, payment breakdown, discounts given, voids processed, and per-staff performance without visiting the shop. The mobile app provides real-time sales monitoring. You can check current sales, recent transactions, and inventory levels from anywhere with internet access.',
        },
        {
          question: 'What alerts does Veira send about suspicious activity?',
          answer: 'Veira alerts you to: excessive voids by an employee, discounts above your set threshold, cash drawer opens without sales, significant drops in expected sales, unusual transaction patterns, and end-of-shift cash shortages. Alerts come via WhatsApp or the mobile app so you can take immediate action if needed.',
        },
        {
          question: 'Can I set different access levels for different employees?',
          answer: 'Yes, Veira supports role-based access. You can set cashiers to only process sales, supervisors to approve discounts up to a limit, and keep manager functions like void approval and reporting for yourself. Each employee logs in with their own PIN, so every action is tracked to the individual. You control exactly what each person can do.',
        },
        {
          question: 'How do I catch an employee who is stealing?',
          answer: 'Start by reviewing the daily reports for unusual patterns. Compare sales between employees on similar shifts. Check the void and discount logs for the suspected employee. Look at their cash vs M-Pesa ratio (thieves often steal cash, not M-Pesa). Veira provides the evidence you need. Many owners have used our reports to confront dishonest staff with undeniable proof.',
        },
        {
          question: 'Will my employees know they are being monitored?',
          answer: 'Yes, and that is a feature, not a bug. When employees know every transaction is tracked, most will not risk stealing. The deterrent effect alone saves you money. Honest employees appreciate the transparency because it protects them from false accusations. We recommend telling your staff about the monitoring. It creates accountability from day one.',
        },
        {
          question: 'What industries have the biggest staff theft problems?',
          answer: 'Retail shops, restaurants, and bars have the highest rates of employee theft because of cash handling. Pharmacies face product theft of high-value medications. Hardware stores deal with stock shrinkage. Any business with cash transactions, multiple staff, or valuable inventory is at risk. Veira is used by all these business types to reduce theft and improve accountability.',
        },
      ]}
      childLinks={[
        // Business type links
        ...topIndustries.slice(0, 4).map(industry => ({
          href: `/pos-for-${industry.slug}`,
          label: `Theft Prevention for ${industry.plural}`,
          description: `Monitor ${industry.name.toLowerCase()} staff`,
        })),
        // Problem pages
        { href: '/track-daily-sales', label: 'Track Daily Sales', description: 'WhatsApp sales reports' },
        { href: '/separate-business-money', label: 'Separate Business Money', description: 'Stop mixing personal and business' },
        // City links
        ...topCities.slice(0, 4).map(city => ({
          href: `/pos/${city.slug}`,
          label: `Stop Theft in ${city.name}`,
          description: `POS monitoring in ${city.name}`,
        })),
      ]}
      relatedHubs={[
        { href: '/pos-system', label: 'Free POS System' },
        { href: '/daily-sales-reports', label: 'Daily Sales Reports' },
        { href: '/etims-pos', label: 'ETIMS Compliance' },
      ]}
      ctaText="Stop Theft Today"
    />
  );
};

export default StaffTheftHub;
