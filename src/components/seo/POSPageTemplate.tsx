import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield, Smartphone, TrendingUp, Clock, MessageCircle, MapPin, Store, Receipt, Wallet, Phone, Users, Package, ChevronRight, AlertTriangle, Zap, BarChart3, Lock, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { 
  City, IntentType, intents, offer, trustSignals, 
  generateFaqs, generateSchema, businessTypes, cities,
  contentSections, getSiloLinks, localTrustElements
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
  const siloLinks = getSiloLinks(city, intent);
  
  const title = intentData.titleTemplate.replace("{city}", city);
  const description = intentData.descTemplate.replace("{city}", city);
  const h1 = intentData.h1Template.replace("{city}", city);
  const canonicalUrl = `https://veirahq.com/pos/${city.toLowerCase()}/${intent}`;

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'POS', href: '/pos' },
    { label: city, href: `/pos/${city.toLowerCase()}` },
    { label: intentData.action },
  ];

  // Get sibling cities for internal linking (4 as per silo rules)
  const siblingCities = cities.filter(c => c !== city).slice(0, 4);
  
  // Get related business types (6 as per child links)
  const relatedBusinessTypes = businessTypes.slice(0, 6);

  // Content sections
  const directAnswer = contentSections.directAnswer(city, intent);
  const problemSection = contentSections.whyProblemExists(city);
  const solutionSection = contentSections.howVeiraSolves(city);
  const steps = contentSections.stepByStep(city);
  const comparison = contentSections.comparisonTable;

  const ctaUrl = `${offer.whatsappUrl}?text=Hi! I want a free POS system in ${city}. ${businessType ? `I run a ${businessType}.` : ''}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`POS ${city}, ETIMS POS ${city}, free POS Kenya, M-Pesa POS ${city}, restaurant POS ${city}, retail POS ${city}, KRA compliant POS ${city}`} />
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
        <script type="application/ld+json">{JSON.stringify(schemas.breadcrumb)}</script>
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
                {trustSignals.slice(0, 4).map((signal) => (
                  <span key={signal} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    <Check className="w-3 h-3" />
                    {signal}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6">
                {h1}
              </h1>
              
              {/* Direct Answer - The most important content for SEO */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 mb-8">
                <p className="text-lg text-white leading-relaxed">
                  {directAnswer}
                </p>
              </div>

              {/* Offer Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{offer.posPrice}</p>
                  <p className="text-xs text-zinc-400">POS Hardware</p>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{offer.data}</p>
                  <p className="text-xs text-zinc-400">Data Included</p>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{offer.setup}</p>
                  <p className="text-xs text-zinc-400">Setup & Training</p>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{offer.delivery}</p>
                  <p className="text-xs text-zinc-400">Delivery to {city}</p>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center col-span-2 md:col-span-1">
                  <p className="text-2xl font-bold text-emerald-400">KES {offer.depositKes.toLocaleString()}</p>
                  <p className="text-xs text-zinc-400">{offer.depositType} Deposit</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 h-14 text-lg">
                  <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Free POS on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-zinc-600 text-white hover:bg-zinc-800 h-14">
                  <a href={`tel:${offer.whatsappNumber}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call {offer.whatsappNumber}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Why This Problem Exists */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                {problemSection.title}
              </h2>
              <p className="text-zinc-400 mb-10 leading-relaxed">
                Running a business in {city} comes with real challenges. Without the right systems, you're losing money every day without even knowing it. Here's what we see in businesses across Kenya.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {problemSection.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6"
                >
                  <AlertTriangle className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{point.problem}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{point.explanation}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: How Veira Solves It */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                {solutionSection.title}
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Veira POS is built specifically for Kenyan businesses. We understand M-Pesa, we know ETIMS, and we've helped hundreds of {city} businesses take control of their operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {solutionSection.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      {index === 0 && <Receipt className="w-6 h-6 text-emerald-400" />}
                      {index === 1 && <Wallet className="w-6 h-6 text-emerald-400" />}
                      {index === 2 && <BarChart3 className="w-6 h-6 text-emerald-400" />}
                      {index === 3 && <Package className="w-6 h-6 text-emerald-400" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{solution.feature}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{solution.benefit}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Guide */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                How to Get Your Free POS in {city} – Step by Step
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                From first WhatsApp message to making your first sale takes less than 24 hours. Most businesses in {city} are up and running the same day.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-zinc-800/50 border border-zinc-700 rounded-xl p-5"
                >
                  <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-bold mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-400 mb-2">{step.description}</p>
                  <p className="text-xs text-emerald-400">{step.duration}</p>
                  
                  {index < steps.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-600" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Pricing & Offer Transparency */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Transparent Pricing – No Hidden Fees
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We believe {city} business owners deserve honest pricing. Here's exactly what you pay and what you get. No surprises, no upsells, no hidden charges.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-zinc-900 border border-emerald-500/30 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-400">{offer.posPrice}</p>
                  <p className="text-sm text-zinc-400">Android POS Hardware</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-400">{offer.setup}</p>
                  <p className="text-sm text-zinc-400">Professional Setup</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-400">{offer.training}</p>
                  <p className="text-sm text-zinc-400">Staff Training</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-400">{offer.delivery}</p>
                  <p className="text-sm text-zinc-400">Delivery to {city}</p>
                </div>
              </div>
              
              <div className="border-t border-zinc-700 pt-6 text-center">
                <p className="text-zinc-400 mb-2">Only payment required:</p>
                <p className="text-4xl font-bold text-white mb-2">KES {offer.depositKes.toLocaleString()}</p>
                <p className="text-emerald-400 font-medium">{offer.depositType} – Get it back if you return the device</p>
                <p className="text-sm text-zinc-500 mt-4">{offer.guarantee}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Comparison Table */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Veira POS vs Other Options in {city}
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                See how Veira compares to using just a Till Number, manual receipts, or other POS systems. The total cost difference over 12 months is significant.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="border-b border-zinc-700">
                    {comparison.headers.map((header, i) => (
                      <th key={i} className={`pb-4 pr-4 ${i === 1 ? 'text-emerald-400 font-semibold' : 'text-zinc-400 font-medium'}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {comparison.features.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800/50">
                      <td className="py-4 pr-4 text-white">{row.name}</td>
                      <td className="py-4 pr-4">
                        <span className={row.veira.startsWith('✓') ? 'text-emerald-400' : 'text-white'}>
                          {row.veira}
                        </span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className={row.till.startsWith('✗') ? 'text-red-400' : 'text-zinc-400'}>
                          {row.till}
                        </span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className={row.manual.startsWith('✗') ? 'text-red-400' : 'text-zinc-400'}>
                          {row.manual}
                        </span>
                      </td>
                      <td className="py-4">
                        <span className={row.otherPos.startsWith('✓') ? 'text-emerald-400' : row.otherPos.startsWith('?') ? 'text-amber-400' : 'text-zinc-400'}>
                          {row.otherPos}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 7: Business Type Fit */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                POS for Every Type of Business in {city}
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Whether you run a small kiosk or a busy supermarket, Veira POS adapts to your business. Here are the most common business types we serve in {city} and across Kenya.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {relatedBusinessTypes.map((type) => (
                <Link 
                  key={type.slug}
                  to={`/pos/${city.toLowerCase()}/for-${type.slug}`}
                  className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-xl p-4 text-center transition-all hover:bg-zinc-800/50 group"
                >
                  <Store className="w-8 h-8 text-zinc-400 mx-auto mb-3 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-sm font-medium text-white block mb-1">{type.name}</span>
                  <span className="text-xs text-zinc-500">{city}</span>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to={`/pos/${city.toLowerCase()}`}
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                View all business types in {city}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 8: Local Trust Signals */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Why {city} Businesses Trust Veira
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <Shield className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="font-semibold text-white mb-3">KRA ETIMS Certified</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{localTrustElements.kraReference}</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <Smartphone className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="font-semibold text-white mb-3">M-Pesa Integration</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{localTrustElements.mpesaIntegration}</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <Lock className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="font-semibold text-white mb-3">Refund Guarantee</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{localTrustElements.refundPolicy}</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {trustSignals.map((signal) => (
                <span key={signal} className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: FAQ Section (8+ questions) */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Frequently Asked Questions – POS in {city}
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Get answers to the most common questions from {city} business owners about Veira POS, ETIMS compliance, pricing, and setup.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                >
                  <h3 className="font-semibold text-white mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed pl-8">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Internal Linking - Semantic Silo Structure */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            {/* Parent Link */}
            <div className="mb-8">
              <Link
                to={siloLinks.parent.href}
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                {siloLinks.parent.label}
              </Link>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              POS Systems in Other Kenyan Cities
            </h2>
            
            {/* Sibling City Links */}
            <div className="flex flex-wrap gap-3 mb-10">
              {siblingCities.map((siblingCity, index) => (
                <Link
                  key={siblingCity}
                  to={`/pos/${siblingCity.toLowerCase()}/${intent}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/50 rounded-lg text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  {index === 0 ? `POS in ${siblingCity}` : siblingCity}
                </Link>
              ))}
              <Link
                to="/pos"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                View All 25 Cities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Child Links - Related Pages */}
            <h3 className="text-lg font-semibold text-white mb-4">More POS Information for {city}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {siloLinks.children.slice(0, 6).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 px-4 py-3 bg-zinc-800/30 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-300 hover:text-white transition-colors text-sm"
                >
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 11: Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-t from-emerald-950/20 to-background">
          <div className="container px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Get Your Free POS in {city}?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Join hundreds of {city} businesses already using Veira POS. Send us a WhatsApp message with your location and business type. We'll deliver and set up your free POS the same day.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 h-14 text-lg">
                  <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Free POS on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-zinc-600 text-white hover:bg-zinc-800 h-14">
                  <Link to="/pos/pricing">
                    View Full Pricing Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              <p className="text-sm text-zinc-500 mt-6">
                {offer.guarantee} • {offer.activationTime} Activation • Free Delivery to {city}
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default POSPageTemplate;
