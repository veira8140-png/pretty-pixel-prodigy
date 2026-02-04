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

const BASE_URL = 'https://www.veirahq.com';

// Primary BOFU keywords for Kenya POS market
const DEFAULT_KEYWORDS = 'buy POS system Kenya, POS system price Kenya, best POS software Kenya, affordable POS system Nairobi, POS machine for sale Kenya, restaurant POS system Kenya, retail POS system Kenya, cloud POS system Kenya, mobile POS Kenya, POS system with inventory management Kenya, POS system with Mpesa integration Kenya, ETIMS compliant POS Kenya, best POS system for small business Kenya, supermarket POS system Kenya';

export const SEOHead = ({ 
  title, 
  description, 
  keywords = DEFAULT_KEYWORDS,
  image = `${BASE_URL}/og-image.png`,
  url = typeof window !== 'undefined' ? window.location.href : '',
  faqs = [],
  canonicalUrl
}: SEOHeadProps) => {
  const fullTitle = `${title} | Veira Kenya`;
  const canonical = canonicalUrl || url;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  
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

  // Organization Schema with enhanced keywords
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Veira",
    "url": BASE_URL,
    "logo": `${BASE_URL}/favicon.png`,
    "description": "Best affordable POS system suppliers in Kenya. Cloud POS software with M-Pesa integration, inventory management, and ETIMS compliance for retail shops, restaurants, and supermarkets in Nairobi.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ruprani House, 3rd Floor, Moktar Daddah St",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254755792377",
      "contactType": "sales",
      "email": "hello@veirahq.com",
      "availableLanguage": ["English", "Swahili"]
    },
    "sameAs": [
      "https://x.com/veirahq",
      "https://www.instagram.com/veirahq",
      "https://www.tiktok.com/@veirahq"
    ]
  };

  // LocalBusiness Schema for Nairobi presence
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Veira - POS System Suppliers Kenya",
    "@id": `${BASE_URL}/#localbusiness`,
    "url": BASE_URL,
    "telephone": "+254755792377",
    "email": "hello@veirahq.com",
    "priceRange": "KES 3,500 - KES 50,000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ruprani House, 3rd Floor, Moktar Daddah St",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.2864,
      "longitude": 36.8172
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
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
      <meta name="author" content="Veira" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:site_name" content="Veira - Best POS System Kenya" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@veirahq" />
      <meta name="twitter:creator" content="@veirahq" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
      
      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
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
