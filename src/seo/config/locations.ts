/**
 * Location Configuration for Programmatic SEO
 * 
 * 25 major Kenyan cities + neighborhoods/areas
 * Used for local_authority page generation
 */

export interface Location {
  slug: string;
  name: string;
  county: string;
  population?: number;
  businessDensity: 'high' | 'medium' | 'low';
  mpesaUsage: 'high' | 'medium' | 'low';
  priority: number; // 1-10, 10 highest
}

export const counties: Location[] = [
  { slug: 'nairobi', name: 'Nairobi', county: 'Nairobi', population: 4397073, businessDensity: 'high', mpesaUsage: 'high', priority: 10 },
  { slug: 'mombasa', name: 'Mombasa', county: 'Mombasa', population: 1208333, businessDensity: 'high', mpesaUsage: 'high', priority: 9 },
  { slug: 'kisumu', name: 'Kisumu', county: 'Kisumu', population: 610082, businessDensity: 'medium', mpesaUsage: 'high', priority: 8 },
  { slug: 'nakuru', name: 'Nakuru', county: 'Nakuru', population: 570674, businessDensity: 'medium', mpesaUsage: 'high', priority: 8 },
  { slug: 'eldoret', name: 'Eldoret', county: 'Uasin Gishu', population: 475716, businessDensity: 'medium', mpesaUsage: 'high', priority: 7 },
  { slug: 'thika', name: 'Thika', county: 'Kiambu', population: 280523, businessDensity: 'medium', mpesaUsage: 'high', priority: 7 },
  { slug: 'ruiru', name: 'Ruiru', county: 'Kiambu', population: 490120, businessDensity: 'high', mpesaUsage: 'high', priority: 7 },
  { slug: 'kitengela', name: 'Kitengela', county: 'Kajiado', population: 231685, businessDensity: 'high', mpesaUsage: 'high', priority: 7 },
  { slug: 'machakos', name: 'Machakos', county: 'Machakos', population: 150041, businessDensity: 'medium', mpesaUsage: 'high', priority: 6 },
  { slug: 'meru', name: 'Meru', county: 'Meru', population: 1545714, businessDensity: 'medium', mpesaUsage: 'medium', priority: 6 },
  { slug: 'nyeri', name: 'Nyeri', county: 'Nyeri', population: 759164, businessDensity: 'medium', mpesaUsage: 'medium', priority: 6 },
  { slug: 'embu', name: 'Embu', county: 'Embu', population: 608599, businessDensity: 'medium', mpesaUsage: 'medium', priority: 5 },
  { slug: 'kericho', name: 'Kericho', county: 'Kericho', population: 901777, businessDensity: 'medium', mpesaUsage: 'medium', priority: 5 },
  { slug: 'kakamega', name: 'Kakamega', county: 'Kakamega', population: 1867579, businessDensity: 'medium', mpesaUsage: 'medium', priority: 5 },
  { slug: 'bungoma', name: 'Bungoma', county: 'Bungoma', population: 1670570, businessDensity: 'medium', mpesaUsage: 'medium', priority: 5 },
  { slug: 'busia', name: 'Busia', county: 'Busia', population: 893681, businessDensity: 'low', mpesaUsage: 'medium', priority: 4 },
  { slug: 'narok', name: 'Narok', county: 'Narok', population: 1157873, businessDensity: 'low', mpesaUsage: 'medium', priority: 4 },
  { slug: 'naivasha', name: 'Naivasha', county: 'Nakuru', population: 181966, businessDensity: 'medium', mpesaUsage: 'high', priority: 6 },
  { slug: 'malindi', name: 'Malindi', county: 'Kilifi', population: 119859, businessDensity: 'medium', mpesaUsage: 'medium', priority: 5 },
  { slug: 'voi', name: 'Voi', county: 'Taita Taveta', population: 19624, businessDensity: 'low', mpesaUsage: 'medium', priority: 4 },
  { slug: 'isiolo', name: 'Isiolo', county: 'Isiolo', population: 268002, businessDensity: 'low', mpesaUsage: 'low', priority: 3 },
  { slug: 'garissa', name: 'Garissa', county: 'Garissa', population: 841353, businessDensity: 'low', mpesaUsage: 'medium', priority: 4 },
  { slug: 'kitui', name: 'Kitui', county: 'Kitui', population: 1136187, businessDensity: 'low', mpesaUsage: 'medium', priority: 4 },
  { slug: 'migori', name: 'Migori', county: 'Migori', population: 1116436, businessDensity: 'low', mpesaUsage: 'medium', priority: 4 },
  { slug: 'homa-bay', name: 'Homa Bay', county: 'Homa Bay', population: 1131950, businessDensity: 'low', mpesaUsage: 'medium', priority: 4 },
];

// Nairobi neighborhoods for hyper-local targeting
export const nairobiAreas: Location[] = [
  { slug: 'westlands', name: 'Westlands', county: 'Nairobi', businessDensity: 'high', mpesaUsage: 'high', priority: 10 },
  { slug: 'cbd', name: 'Nairobi CBD', county: 'Nairobi', businessDensity: 'high', mpesaUsage: 'high', priority: 10 },
  { slug: 'eastleigh', name: 'Eastleigh', county: 'Nairobi', businessDensity: 'high', mpesaUsage: 'high', priority: 9 },
  { slug: 'gikomba', name: 'Gikomba', county: 'Nairobi', businessDensity: 'high', mpesaUsage: 'high', priority: 9 },
  { slug: 'kawangware', name: 'Kawangware', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 7 },
  { slug: 'pipeline', name: 'Pipeline', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 7 },
  { slug: 'industrial-area', name: 'Industrial Area', county: 'Nairobi', businessDensity: 'high', mpesaUsage: 'high', priority: 8 },
  { slug: 'karen', name: 'Karen', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 6 },
  { slug: 'langata', name: 'Langata', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 6 },
  { slug: 'kilimani', name: 'Kilimani', county: 'Nairobi', businessDensity: 'high', mpesaUsage: 'high', priority: 8 },
  { slug: 'lavington', name: 'Lavington', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 7 },
  { slug: 'upperhill', name: 'Upper Hill', county: 'Nairobi', businessDensity: 'high', mpesaUsage: 'high', priority: 8 },
  { slug: 'south-b', name: 'South B', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 7 },
  { slug: 'south-c', name: 'South C', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 7 },
  { slug: 'buruburu', name: 'Buruburu', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 7 },
  { slug: 'umoja', name: 'Umoja', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 6 },
  { slug: 'embakasi', name: 'Embakasi', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 6 },
  { slug: 'kasarani', name: 'Kasarani', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 6 },
  { slug: 'roysambu', name: 'Roysambu', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 6 },
  { slug: 'donholm', name: 'Donholm', county: 'Nairobi', businessDensity: 'medium', mpesaUsage: 'high', priority: 6 },
];

// Get all locations for page generation
export const getAllLocations = (): Location[] => {
  return [...counties, ...nairobiAreas];
};

// Get locations by priority for throttled indexing
export const getLocationsByPriority = (minPriority: number = 5): Location[] => {
  return getAllLocations()
    .filter(l => l.priority >= minPriority)
    .sort((a, b) => b.priority - a.priority);
};

// Location helpers
export const getLocationBySlug = (slug: string): Location | undefined => {
  return getAllLocations().find(l => l.slug === slug.toLowerCase());
};

export const formatLocationName = (slug: string): string => {
  const location = getLocationBySlug(slug);
  return location?.name || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
};
