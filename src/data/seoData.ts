// SEO Data for Programmatic Pages
export const cities = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Ruiru", 
  "Kitengela", "Machakos", "Meru", "Nyeri", "Embu", "Kericho", "Kakamega", 
  "Bungoma", "Busia", "Narok", "Naivasha", "Malindi", "Voi", "Isiolo", 
  "Garissa", "Kitui", "Migori", "Homa Bay"
] as const;

export const businessTypes = [
  { slug: "kiosk", name: "Kiosk", plural: "Kiosks" },
  { slug: "duka", name: "Duka", plural: "Dukas" },
  { slug: "shop", name: "Shop", plural: "Shops" },
  { slug: "supermarket", name: "Supermarket", plural: "Supermarkets" },
  { slug: "restaurant", name: "Restaurant", plural: "Restaurants" },
  { slug: "cafe", name: "Cafe", plural: "Cafes" },
  { slug: "bar", name: "Bar", plural: "Bars" },
  { slug: "butchery", name: "Butchery", plural: "Butcheries" },
  { slug: "pharmacy", name: "Pharmacy", plural: "Pharmacies" },
  { slug: "hardware", name: "Hardware Shop", plural: "Hardware Shops" },
  { slug: "salon", name: "Salon", plural: "Salons" },
  { slug: "barbershop", name: "Barbershop", plural: "Barbershops" },
  { slug: "hotel", name: "Hotel", plural: "Hotels" },
  { slug: "wholesale", name: "Wholesale Shop", plural: "Wholesale Shops" },
] as const;

export const intents = {
  registration: {
    slug: "registration",
    action: "Get",
    keywords: ["register", "apply", "get", "setup", "install", "activate"],
    h1Template: "Get Free POS System in {city}",
    titleTemplate: "Free POS System {city} – Register Today | Veira",
    descTemplate: "Get a free POS system in {city}. Free setup, free delivery, ETIMS compliant. M-Pesa, card payments, sales tracking. Chat on WhatsApp to start.",
  },
  pricing: {
    slug: "pricing",
    action: "Pricing",
    keywords: ["pricing", "cost", "fees", "charges", "rates"],
    h1Template: "POS System Pricing in {city}",
    titleTemplate: "POS System Pricing {city} – Free Setup, No Hidden Fees | Veira",
    descTemplate: "POS system pricing in {city}. Free POS hardware, free setup, no monthly fees. Only KES 3,500 refundable deposit. Compare costs and save.",
  },
  compliance: {
    slug: "etims",
    action: "ETIMS",
    keywords: ["etims", "kra", "compliance", "receipt", "tax"],
    h1Template: "ETIMS Compliant POS System in {city}",
    titleTemplate: "ETIMS POS System {city} – KRA Compliant | Veira",
    descTemplate: "ETIMS compliant POS system in {city}. Automatic KRA receipts, avoid penalties. Free setup for restaurants, shops, and retail businesses.",
  },
} as const;

export const offer = {
  posPrice: "Free",
  data: "15GB Safaricom",
  setup: "Free",
  delivery: "Free",
  depositKes: 3500,
  depositType: "Refundable",
  whatsappNumber: "+254755792377",
  whatsappUrl: "https://wa.me/254755792377",
};

export const trustSignals = [
  "ETIMS Certified",
  "KRA Compliant",
  "M-Pesa Integrated",
  "Same Day Setup",
  "24/7 WhatsApp Support",
];

export type City = typeof cities[number];
export type BusinessType = typeof businessTypes[number];
export type IntentType = keyof typeof intents;

export const generateFaqs = (city: string, intent: IntentType) => {
  const baseFaqs = [
    {
      question: `How much does a POS system cost in ${city}?`,
      answer: `Veira POS is completely free in ${city}. You only pay a refundable deposit of KES 3,500. No monthly fees, no hidden charges. Free delivery and setup included.`
    },
    {
      question: `Is Veira POS ETIMS compliant in Kenya?`,
      answer: `Yes, Veira POS is fully ETIMS compliant. Every transaction automatically generates a KRA-approved receipt, keeping your ${city} business compliant with tax regulations.`
    },
    {
      question: `How long does POS setup take in ${city}?`,
      answer: `Same day setup in ${city}. Chat with us on WhatsApp before 2pm and get your POS delivered and activated the same day.`
    },
    {
      question: `Does Veira POS accept M-Pesa payments?`,
      answer: `Yes, Veira POS integrates directly with M-Pesa. Accept Lipa Na M-Pesa, Till Number, and Pochi La Biashara payments. All transactions are tracked automatically.`
    },
    {
      question: `Can I track sales remotely from ${city}?`,
      answer: `Yes, Veira POS sends daily WhatsApp reports. Track sales, monitor staff, and view profits from anywhere using your phone.`
    },
    {
      question: `What businesses can use Veira POS in ${city}?`,
      answer: `Any business in ${city} can use Veira POS: restaurants, shops, supermarkets, pharmacies, hardware stores, salons, and more. Works for both small kiosks and large retail operations.`
    },
    {
      question: `Is there a monthly subscription fee?`,
      answer: `No monthly fees at all. Veira POS is free to use. The only cost is a one-time refundable deposit of KES 3,500.`
    },
    {
      question: `How do I register for Veira POS in ${city}?`,
      answer: `Simple! Chat with us on WhatsApp at +254 755 792 377. Tell us your location in ${city}, business type, and we'll deliver and set up your free POS the same day.`
    },
  ];

  if (intent === "compliance") {
    return [
      {
        question: `What is ETIMS and why do I need it in ${city}?`,
        answer: `ETIMS (Electronic Tax Invoice Management System) is KRA's mandatory system for businesses to generate tax-compliant receipts. All businesses in ${city} must comply or face penalties up to KES 1 million.`
      },
      {
        question: `How does Veira help with KRA compliance in ${city}?`,
        answer: `Veira POS automatically generates ETIMS-compliant receipts for every sale. Your ${city} business stays compliant without any manual work. Receipts are sent directly to KRA.`
      },
      ...baseFaqs.slice(0, 6),
    ];
  }

  if (intent === "pricing") {
    return [
      {
        question: `What's included in Veira's free POS offer in ${city}?`,
        answer: `Free Android POS hardware, 15GB Safaricom data, free delivery to ${city}, free installation, free training, and free WhatsApp support. Only KES 3,500 refundable deposit.`
      },
      {
        question: `Are there any hidden fees or charges?`,
        answer: `Absolutely no hidden fees. No monthly subscription, no transaction fees, no maintenance charges. The only cost is KES 3,500 refundable deposit which you get back if you return the device.`
      },
      ...baseFaqs.slice(0, 6),
    ];
  }

  return baseFaqs;
};

export const generateSchema = (city: string, intent: IntentType, faqs: Array<{question: string, answer: string}>) => {
  const intentData = intents[intent];
  
  return {
    faq: {
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
    },
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Veira POS ${city}`,
      "description": intentData.descTemplate.replace("{city}", city),
      "url": `https://veira.co.ke/pos/${city.toLowerCase()}/${intent}`,
      "telephone": "+254755792377",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressCountry": "KE"
      },
      "areaServed": {
        "@type": "City",
        "name": city
      },
      "priceRange": "Free - KES 3,500 deposit"
    },
    product: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `Veira POS System - ${city}`,
      "description": `Free ETIMS compliant POS system for businesses in ${city}. M-Pesa integration, sales tracking, WhatsApp reports.`,
      "brand": {
        "@type": "Brand",
        "name": "Veira"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "KES",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31",
        "url": `https://veira.co.ke/pos/${city.toLowerCase()}/${intent}`
      }
    },
    howTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to Get Free POS System in ${city}`,
      "description": `Step-by-step guide to getting a free ETIMS compliant POS system in ${city}`,
      "step": [
        {
          "@type": "HowToStep",
          "name": "Contact Veira on WhatsApp",
          "text": "Send a message to +254 755 792 377 with your location and business type"
        },
        {
          "@type": "HowToStep",
          "name": "Confirm Your Order",
          "text": "Verify your business details and pay the refundable KES 3,500 deposit via M-Pesa"
        },
        {
          "@type": "HowToStep",
          "name": "Receive Same-Day Delivery",
          "text": `Get your free POS delivered to your ${city} business location the same day`
        },
        {
          "@type": "HowToStep",
          "name": "Free Setup & Training",
          "text": "Our team installs the POS, connects M-Pesa, and trains your staff on the spot"
        },
        {
          "@type": "HowToStep",
          "name": "Start Selling",
          "text": "Accept payments, generate ETIMS receipts, and track sales from day one"
        }
      ]
    }
  };
};
