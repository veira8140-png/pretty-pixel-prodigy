import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield, Smartphone, TrendingUp, Clock, MessageCircle, MapPin, Store, Receipt, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { 
  City, IntentType, intents, offer, trustSignals, 
  generateFaqs, generateSchema, businessTypes, cities 
} from '@/data/seoData';
import { Link } from 'react-router-dom';

interface POSPageTemplateProps {
  city: City;
  intent: IntentType;
  businessType?: string;
}

export const POSPageTemplate = ({ city, intent, businessType }: POSPageTemplateProps) => {
  const intentData = intents[intent];
  const faqs = generateFaqs(city, intent);
  const schemas = generateSchema(city, intent, faqs);
  
  const title = intentData.titleTemplate.replace("{city}", city);
  const description = intentData.descTemplate.replace("{city}", city);
  const h1 = intentData.h1Template.replace("{city}", city);
  const canonicalUrl = `https://veira.co.ke/pos/${city.toLowerCase()}/${intent}`;

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'POS', href: '/pos' },
    { label: city, href: `/pos/${city.toLowerCase()}` },
    { label: intentData.action },
  ];

  // Get sibling cities for internal linking
  const siblingCities = cities.filter(c => c !== city).slice(0, 5);
  
  // Get related business types
  const relatedBusinessTypes = businessTypes.slice(0, 7);

  const ctaUrl = `${offer.whatsappUrl}?text=Hi! I want a free POS system in ${city}. ${businessType ? `I run a ${businessType}.` : ''}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`POS ${city}, ETIMS POS ${city}, free POS Kenya, M-Pesa POS ${city}, restaurant POS ${city}, retail POS ${city}`} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_KE" />
        
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content={city} />
        
        <script type="application/ld+json">{JSON.stringify(schemas.faq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemas.localBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(schemas.product)}</script>
        <script type="application/ld+json">{JSON.stringify(schemas.howTo)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
          <div className="container px-4 md:px-6">
            <Breadcrumbs items={breadcrumbItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mt-8"
            >
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {trustSignals.slice(0, 3).map((signal) => (
                  <span key={signal} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    <Check className="w-3 h-3" />
                    {signal}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6">
                {h1}
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
                {intent === 'registration' && `Free POS hardware, free setup, free delivery to ${city}. Accept M-Pesa, cards, and cash. Track sales and stay KRA compliant.`}
                {intent === 'pricing' && `No hidden fees, no monthly subscription. Get your free POS in ${city} with just KES 3,500 refundable deposit. Same-day activation.`}
                {intent === 'compliance' && `Every receipt sent automatically to KRA. Avoid penalties up to KES 1 million. Get your ETIMS POS in ${city} today.`}
              </p>

              {/* Offer Highlights */}
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
                  Get Free POS on WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why This Problem Exists */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
              Why {city} Businesses Need a Modern POS
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <Receipt className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">KRA ETIMS Penalties</h3>
                <p className="text-zinc-400">Businesses without ETIMS-compliant receipts face fines up to KES 1 million. Don't risk your {city} business.</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <Wallet className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Lost M-Pesa Payments</h3>
                <p className="text-zinc-400">Manual tracking leads to missed payments and theft. See every M-Pesa transaction in real-time.</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <TrendingUp className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No Sales Visibility</h3>
                <p className="text-zinc-400">Can't track what sells, what's in stock, or daily profits? Veira POS gives you daily WhatsApp reports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Veira Solves It */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              How Veira POS Works in {city}
            </h2>
            <p className="text-zinc-400 mb-10 max-w-2xl">
              From order to first sale in under 24 hours. Here's exactly what happens when you get Veira POS.
            </p>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "WhatsApp Us", desc: "Send your location and business type" },
                { step: "2", title: "Pay Deposit", desc: "KES 3,500 via M-Pesa (refundable)" },
                { step: "3", title: "Same-Day Delivery", desc: `We deliver to your ${city} location` },
                { step: "4", title: "Free Setup", desc: "We install, connect M-Pesa, train staff" },
                { step: "5", title: "Start Selling", desc: "Accept payments, get daily reports" },
              ].map((item) => (
                <div key={item.step} className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
                  <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Type Fit */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              POS for Every Business in {city}
            </h2>
            <p className="text-zinc-400 mb-8">
              Whether you run a kiosk or a supermarket, Veira POS adapts to your business.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {relatedBusinessTypes.map((type) => (
                <Link 
                  key={type.slug}
                  to={`/pos/${city.toLowerCase()}/for-${type.slug}`}
                  className="bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/50 rounded-lg p-4 text-center transition-colors"
                >
                  <Store className="w-6 h-6 text-zinc-400 mx-auto mb-2" />
                  <span className="text-sm text-white">{type.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
              Veira POS vs Alternatives
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="pb-4 text-zinc-400 font-medium">Feature</th>
                    <th className="pb-4 text-emerald-400 font-semibold">Veira POS</th>
                    <th className="pb-4 text-zinc-400 font-medium">Till Number Only</th>
                    <th className="pb-4 text-zinc-400 font-medium">Manual Receipts</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["ETIMS Compliance", "✓ Automatic", "✗ No", "✗ No"],
                    ["M-Pesa Integration", "✓ Real-time", "✓ Basic", "✗ Manual"],
                    ["Sales Tracking", "✓ Daily WhatsApp", "✗ No", "✗ No"],
                    ["Inventory Management", "✓ Included", "✗ No", "✗ No"],
                    ["Monthly Fee", "Free", "KES 100+", "Pen & Paper"],
                    ["Staff Monitoring", "✓ Yes", "✗ No", "✗ No"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800/50">
                      <td className="py-4 text-white">{row[0]}</td>
                      <td className="py-4 text-emerald-400">{row[1]}</td>
                      <td className="py-4 text-zinc-500">{row[2]}</td>
                      <td className="py-4 text-zinc-500">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
              Frequently Asked Questions – POS in {city}
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

        {/* Internal Linking - Sibling Cities */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              POS Systems in Other Kenyan Cities
            </h2>
            <div className="flex flex-wrap gap-3">
              {siblingCities.map((siblingCity) => (
                <Link
                  key={siblingCity}
                  to={`/pos/${siblingCity.toLowerCase()}/${intent}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/50 rounded-lg text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  {siblingCity}
                </Link>
              ))}
              <Link
                to="/pos"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                View All Cities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-t from-emerald-950/20 to-zinc-900">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Get Your Free POS in {city}?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Chat with us on WhatsApp. Tell us your location and business type. Get same-day delivery and free setup.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 h-14 text-lg">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free POS on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zinc-700 text-white hover:bg-zinc-800 h-14">
                <Link to="/pos/pricing">
                  View Full Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default POSPageTemplate;
