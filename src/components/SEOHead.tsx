import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  faqs?: FAQItem[];
  canonicalUrl?: string;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords = 'POS Kenya, eTIMS compliant POS, free POS system Nairobi, business management Kenya',
  image = '/og-image.png',
  url = typeof window !== 'undefined' ? window.location.href : '',
  faqs = [],
  canonicalUrl
}: SEOHeadProps) => {
  const fullTitle = `${title} | Veira Kenya`;
  const canonical = canonicalUrl || url;
  
  // Generate FAQ Schema
  const faqSchema = faqs.length > 0 ? {
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
  } : null;

  // Organization Schema
  const orgSchema = {
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
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonical} />
      
      {/* Geo Tags for Kenya */}
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Nairobi" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:site_name" content="Veira Kenya" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
      
      {/* Structured Data - FAQ */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};
