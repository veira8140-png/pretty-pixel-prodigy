/**
 * Authority Hub Template
 * 
 * Base template for all authority hub pages (2500-4000 words)
 * Distributes link equity to child programmatic pages
 */

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { offer, trustSignals } from '@/data/seoData';
import { generateFAQSchema, generateOrganizationSchema, generateBreadcrumbSchema } from '@/seo/utils/schemaGenerators';

interface FAQ {
  question: string;
  answer: string;
}

interface ChildLink {
  href: string;
  label: string;
  description?: string;
}

interface HubSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface AuthorityHubProps {
  // SEO
  title: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  
  // Content
  h1: string;
  heroSubtitle: string;
  directAnswer: string;
  sections: HubSection[];
  faqs: FAQ[];
  
  // Linking
  breadcrumbs: { label: string; href?: string }[];
  childLinks: ChildLink[];
  relatedHubs?: ChildLink[];
  
  // Optional
  ctaText?: string;
  ctaSecondary?: string;
}

export const AuthorityHubTemplate = ({
  title,
  metaDescription,
  keywords,
  canonicalUrl,
  h1,
  heroSubtitle,
  directAnswer,
  sections,
  faqs,
  breadcrumbs,
  childLinks,
  relatedHubs = [],
  ctaText = 'Get Free POS on WhatsApp',
  ctaSecondary = 'View Pricing',
}: AuthorityHubProps) => {
  const fullTitle = `${title} | Veira Kenya`;
  const ctaUrl = `${offer.whatsappUrl}?text=Hi! I'm interested in Veira POS.`;
  
  // Generate schemas
  const faqSchema = generateFAQSchema(faqs);
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map((b, i) => ({
      name: b.label,
      url: b.href || canonicalUrl,
    }))
  );

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_KE" />
        
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Kenya" />
        
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
          <div className="container px-4 md:px-6">
            <Breadcrumbs items={breadcrumbs} />
            
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

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-4">
                {h1}
              </h1>
              
              <p className="text-xl text-zinc-400 mb-6">
                {heroSubtitle}
              </p>
              
              {/* Direct Answer Box - Key for Featured Snippets */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 mb-8">
                <p className="text-lg text-white leading-relaxed">
                  {directAnswer}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 h-14 text-lg">
                  <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {ctaText}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-zinc-600 text-white hover:bg-zinc-800 h-14">
                  <Link to="/pos/pricing">
                    {ctaSecondary}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Sections */}
        {sections.map((section, index) => (
          <section 
            key={index}
            className={`py-16 md:py-20 ${index % 2 === 0 ? 'bg-zinc-900' : 'bg-background'}`}
          >
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {section.content}
                  </p>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-3">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                          <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Child Pages Grid - Link Equity Distribution */}
        <section className="py-16 md:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Explore by Category
              </h2>
              <p className="text-zinc-400">
                Find the right POS solution for your specific business type and location.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {childLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="block p-5 bg-zinc-800/50 border border-zinc-700 rounded-xl hover:border-emerald-500/50 hover:bg-zinc-800 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                        {link.label}
                      </span>
                      <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    {link.description && (
                      <p className="text-sm text-zinc-500 mt-2">
                        {link.description}
                      </p>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-10">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Hubs */}
        {relatedHubs.length > 0 && (
          <section className="py-16 md:py-20 bg-zinc-900">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl">
                <h2 className="text-xl font-display font-bold text-white mb-6">
                  Related Topics
                </h2>
                <div className="flex flex-wrap gap-3">
                  {relatedHubs.map((hub) => (
                    <Link
                      key={hub.href}
                      to={hub.href}
                      className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                    >
                      {hub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-zinc-400 text-lg mb-8">
                Join 500+ Kenyan businesses using Veira POS. Free hardware, free setup, no monthly fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 h-14 text-lg">
                  <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-zinc-600 text-white hover:bg-zinc-800 h-14">
                  <a href={`tel:${offer.whatsappNumber}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call {offer.whatsappNumber}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
