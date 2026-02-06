import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface AuthorInfo {
  name: string;
  title: string;
  url?: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  faqs?: FAQItem[];
  canonicalUrl?: string;
  author?: AuthorInfo;
  datePublished?: string;
  dateModified?: string;
  articleType?: 'Article' | 'BlogPosting' | 'WebPage';
}

const BASE_URL = 'https://www.veirahq.com';

// Primary BOFU keywords for Kenya POS market - 2026 optimized
const DEFAULT_KEYWORDS = 'buy POS system Kenya, POS system price Kenya, best POS software Kenya 2026, affordable POS system Nairobi, POS machine for sale Kenya, restaurant POS system Kenya, retail POS system Kenya, cloud POS system Kenya, mobile POS Kenya, POS system with inventory management Kenya, POS system with Mpesa integration Kenya, ETIMS compliant POS Kenya, best POS system for small business Kenya, supermarket POS system Kenya, free POS system Kenya';

// Default author for credibility signals
const DEFAULT_AUTHOR: AuthorInfo = {
  name: 'Veira Kenya Team',
  title: 'POS System Experts',
  url: `${BASE_URL}/our-story`,
};

export const SEOHead = ({ 
  title, 
  description, 
  keywords = DEFAULT_KEYWORDS,
  image = `${BASE_URL}/og-image.png`,
  url = typeof window !== 'undefined' ? window.location.href : '',
  faqs = [],
  canonicalUrl,
  author = DEFAULT_AUTHOR,
  datePublished = '2024-01-15',
  dateModified = '2026-02-06',
  articleType = 'WebPage',
}: SEOHeadProps) => {
  // Title optimization: keyword first, under 60 chars, includes modifier
  const fullTitle = title.length > 50 ? title : `${title} | Veira Kenya`;
  const canonical = canonicalUrl || url;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  
  // Generate FAQ Schema with minimum 50 word answers for featured snippets
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

  // Organization Schema with enhanced 2026 SEO signals
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Veira",
    "url": BASE_URL,
    "logo": `${BASE_URL}/favicon.png`,
    "description": "Best affordable POS system suppliers in Kenya. Cloud POS software with M-Pesa integration, inventory management, and ETIMS compliance for retail shops, restaurants, and supermarkets in Nairobi.",
    "foundingDate": "2023",
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

  // Article/WebPage Schema for credibility signals (2026 SEO requirement)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": articleType,
    "headline": title,
    "description": description,
    "image": fullImage,
    "author": {
      "@type": "Person",
      "name": author.name,
      "jobTitle": author.title,
      "url": author.url || `${BASE_URL}/our-story`,
      "worksFor": {
        "@type": "Organization",
        "name": "Veira"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Veira",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon.png`
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags - Optimized for 2026 */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />
      
      {/* Author for credibility */}
      <meta name="author" content={author.name} />
      
      {/* Geo Tags for Kenya */}
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Nairobi" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:site_name" content="Veira - Best POS System Kenya 2026" />
      
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
      
      {/* Structured Data - Article/WebPage for author credibility */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
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
