/**
 * Schema.org Structured Data Generators
 * 
 * Centralized schema generation for all page types
 * Supports: FAQPage, HowTo, Product, LocalBusiness, Article, Organization, BreadcrumbList
 */

import { type FAQ, type HowToStep, type BreadcrumbItem } from '../types';

// Re-export types for backwards compatibility (but not re-exported from index.ts)
export type { FAQ, HowToStep, BreadcrumbItem };

export interface ProductOffer {
  price: string;
  priceCurrency: string;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
}

// FAQ Schema
export const generateFAQSchema = (faqs: FAQ[]) => ({
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
});

// HowTo Schema
export const generateHowToSchema = (
  title: string,
  description: string,
  steps: HowToStep[],
  totalTime: string = 'PT4H',
  cost?: { amount: string; currency: string }
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": title,
  "description": description,
  "totalTime": totalTime,
  ...(cost && {
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": cost.currency,
      "value": cost.amount
    }
  }),
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    ...(step.url && { "url": step.url })
  }))
});

// Product Schema
export const generateProductSchema = (
  name: string,
  description: string,
  url: string,
  offer: ProductOffer,
  rating?: { value: string; count: string }
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "description": description,
  "brand": {
    "@type": "Brand",
    "name": "Veira"
  },
  "offers": {
    "@type": "Offer",
    "price": offer.price,
    "priceCurrency": offer.priceCurrency,
    "availability": `https://schema.org/${offer.availability}`,
    "priceValidUntil": "2027-12-31",
    "url": url,
    "seller": {
      "@type": "Organization",
      "name": "Veira"
    }
  },
  ...(rating && {
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.value,
      "reviewCount": rating.count
    }
  })
});

// Local Business Schema
export const generateLocalBusinessSchema = (
  name: string,
  description: string,
  url: string,
  city: string,
  telephone: string = '+254755792377'
) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": name,
  "description": description,
  "url": url,
  "telephone": telephone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ruprani House, 3rd Floor, Moktar Daddah St",
    "addressLocality": city,
    "addressRegion": "Kenya",
    "postalCode": "",
    "addressCountry": "KE"
  },
  "areaServed": {
    "@type": "City",
    "name": city
  },
  "priceRange": "Free - KES 3,500 refundable deposit",
  "openingHours": "Mo-Su 08:00-20:00",
  "paymentAccepted": "M-Pesa, Cash, Card",
  "currenciesAccepted": "KES"
});

// Article Schema (for authority hubs)
export const generateArticleSchema = (
  headline: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified?: string,
  image?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "url": url,
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  ...(image && { "image": image }),
  "author": {
    "@type": "Organization",
    "name": "Veira",
    "url": "https://veirahq.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Veira",
    "logo": {
      "@type": "ImageObject",
      "url": "https://veirahq.com/logo.png"
    }
  }
});

// Organization Schema
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Veira",
  "url": "https://veirahq.com",
  "logo": "https://veirahq.com/logo.png",
  "description": "Business operations done for you. POS systems, AI agents, websites & cloud for Kenyan businesses.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ruprani House, 3rd Floor, Moktar Daddah St",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254755792377",
    "contactType": "customer service",
    "availableLanguage": ["English", "Swahili"]
  },
  "sameAs": [
    "https://wa.me/254755792377"
  ]
});

// Breadcrumb Schema
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Aggregate all schemas for a page
export const generatePageSchemas = (config: {
  pageType: string;
  title: string;
  description: string;
  url: string;
  city?: string;
  faqs?: FAQ[];
  steps?: HowToStep[];
  breadcrumbs?: { name: string; url: string }[];
}) => {
  const schemas: object[] = [];
  
  // Always add breadcrumbs if provided
  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(config.breadcrumbs));
  }
  
  // Add FAQPage if FAQs provided
  if (config.faqs && config.faqs.length > 0) {
    schemas.push(generateFAQSchema(config.faqs));
  }
  
  // Add page-type specific schemas
  switch (config.pageType) {
    case 'authority_hub':
      schemas.push(generateArticleSchema(
        config.title,
        config.description,
        config.url,
        '2024-01-01'
      ));
      break;
      
    case 'local_authority':
    case 'industry':
      if (config.city) {
        schemas.push(generateLocalBusinessSchema(
          `Veira POS ${config.city}`,
          config.description,
          config.url,
          config.city
        ));
      }
      schemas.push(generateProductSchema(
        config.title,
        config.description,
        config.url,
        { price: '0', priceCurrency: 'KES', availability: 'InStock' },
        { value: '4.8', count: '127' }
      ));
      break;
      
    case 'use_case':
    case 'process':
      if (config.steps) {
        schemas.push(generateHowToSchema(
          config.title,
          config.description,
          config.steps,
          'PT4H',
          { amount: '3500', currency: 'KES' }
        ));
      }
      break;
      
    case 'comparison':
    case 'alternative':
      schemas.push(generateProductSchema(
        config.title,
        config.description,
        config.url,
        { price: '0', priceCurrency: 'KES', availability: 'InStock' },
        { value: '4.8', count: '127' }
      ));
      break;
  }
  
  return schemas;
};
