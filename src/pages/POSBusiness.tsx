import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, MessageCircle, ArrowRight, Store, Receipt, TrendingUp, Clock, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { cities, businessTypes, offer, generateFaqs } from '@/data/seoData';

const POSBusiness = () => {
  const { city, business } = useParams<{ city?: string; business: string }>();
  
  // Parse business type from slug (e.g., "for-restaurant" -> "restaurant")
  const businessSlug = business?.replace('for-', '') || '';
  const businessType = businessTypes.find(b => b.slug === businessSlug);
  
  if (!businessType) {
    return <Navigate to="/pos" replace />;
  }

  // Normalize city if provided
  const normalizedCity = city ? city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() : null;
  const isValidCity = normalizedCity && cities.includes(normalizedCity as any);
  const displayCity = isValidCity ? normalizedCity : 'Kenya';
  
  const title = `Free POS System for ${businessType.plural} in ${displayCity} | Veira`;
  const description = `Get a free ETIMS compliant POS system for your ${businessType.name.toLowerCase()} in ${displayCity}. M-Pesa integration, sales tracking, WhatsApp reports. Free setup and delivery.`;
  const h1 = `Free POS System for ${businessType.plural} in ${displayCity}`;
  const canonicalUrl = city 
    ? `https://veira.co.ke/pos/${city}/${business}`
    : `https://veira.co.ke/pos/${business}`;

  const faqs = [
    {
      question: `How much does a POS system cost for a ${businessType.name.toLowerCase()}?`,
      answer: `Veira POS is completely free for ${businessType.plural.toLowerCase()}. You only pay a refundable deposit of KES 3,500. No monthly fees, no hidden charges. Free delivery and setup included.`
    },
    {
      question: `What features does Veira POS have for ${businessType.plural.toLowerCase()}?`,
      answer: `Veira POS includes: M-Pesa integration, ETIMS compliance, sales tracking, inventory management, staff monitoring, daily WhatsApp reports, and customer loyalty features - all tailored for ${businessType.plural.toLowerCase()}.`
    },
    {
      question: `Is Veira POS suitable for a small ${businessType.name.toLowerCase()}?`,
      answer: `Yes! Veira POS works for ${businessType.plural.toLowerCase()} of all sizes, from small operations to large establishments. The system scales with your business.`
    },
    {
      question: `How long does it take to set up POS for my ${businessType.name.toLowerCase()}?`,
      answer: `Same-day setup! Chat with us on WhatsApp before 2pm, and we'll deliver, install, and train your staff the same day.`
    },
    {
      question: `Can I track my ${businessType.name.toLowerCase()} sales remotely?`,
      answer: `Yes! Veira POS sends daily WhatsApp sales reports. You can monitor your ${businessType.name.toLowerCase()} from anywhere using your phone.`
    },
    {
      question: `Does Veira POS work with M-Pesa for ${businessType.plural.toLowerCase()}?`,
      answer: `Absolutely. Veira integrates directly with M-Pesa Lipa Na, Till Number, and Pochi La Biashara. All ${businessType.name.toLowerCase()} transactions are tracked automatically.`
    },
  ];

  const faqSchema = {
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
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Veira POS for ${businessType.plural}`,
    "description": description,
    "brand": { "@type": "Brand", "name": "Veira" },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbItems = city 
    ? [
        { label: 'Home', href: '/' },
        { label: 'POS', href: '/pos' },
        { label: normalizedCity!, href: `/pos/${city}` },
        { label: businessType.name },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'POS', href: '/pos' },
        { label: businessType.name },
      ];

  const ctaUrl = `${offer.whatsappUrl}?text=Hi! I run a ${businessType.name.toLowerCase()}${displayCity !== 'Kenya' ? ` in ${displayCity}` : ''} and want a free POS system.`;

  const features = [
    { icon: Receipt, title: "ETIMS Receipts", desc: `Automatic KRA-compliant receipts for every ${businessType.name.toLowerCase()} sale` },
    { icon: Smartphone, title: "M-Pesa Integration", desc: "Accept Lipa Na M-Pesa, Till, and Pochi La Biashara" },
    { icon: TrendingUp, title: "Sales Analytics", desc: `Track what sells, profit margins, and ${businessType.name.toLowerCase()} performance` },
    { icon: Clock, title: "WhatsApp Reports", desc: `Daily sales summary sent to your phone` },
    { icon: Shield, title: "Staff Monitoring", desc: "See who sold what and when, prevent theft" },
    { icon: Store, title: "Inventory Tracking", desc: `Know stock levels, set reorder alerts` },
  ];

  // Related business types for internal linking
  const relatedBusinessTypes = businessTypes.filter(b => b.slug !== businessSlug).slice(0, 6);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`POS ${businessType.name}, ${businessType.name} POS Kenya, ETIMS ${businessType.name}, M-Pesa ${businessType.name}, free POS ${businessType.plural}`} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
          <div className="container px-4 md:px-6">
            <Breadcrumbs items={breadcrumbItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mt-8"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                  <Check className="w-3 h-3" />
                  Perfect for {businessType.plural}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                  <Check className="w-3 h-3" />
                  ETIMS Compliant
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6">
                {h1}
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
                Free POS hardware designed for {businessType.plural.toLowerCase()}. Accept M-Pesa, track sales, manage inventory, and stay KRA compliant. Same-day setup.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{offer.posPrice}</p>
                  <p className="text-sm text-zinc-400">POS Hardware</p>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{offer.data}</p>
                  <p className="text-sm text-zinc-400">Data Included</p>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{offer.setup}</p>
                  <p className="text-sm text-zinc-400">Setup & Training</p>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-400">KES {offer.depositKes.toLocaleString()}</p>
                  <p className="text-sm text-zinc-400">{offer.depositType} Deposit</p>
                </div>
              </div>

              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 h-14 text-lg">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free {businessType.name} POS
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features for Business Type */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
              Why {businessType.plural} Choose Veira POS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                  <feature.icon className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
              {businessType.name} POS FAQs
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Linking - Other Business Types */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              POS for Other Business Types
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedBusinessTypes.map((type) => (
                <Link
                  key={type.slug}
                  to={city ? `/pos/${city}/for-${type.slug}` : `/pos/for-${type.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/50 rounded-lg text-white transition-colors"
                >
                  <Store className="w-4 h-4 text-emerald-400" />
                  {type.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-t from-emerald-950/20 to-background">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Upgrade Your {businessType.name}?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Join hundreds of {businessType.plural.toLowerCase()} in {displayCity} using Veira POS. Free hardware, free setup, same-day delivery.
            </p>
            
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 h-14 text-lg">
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free POS on WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default POSBusiness;
