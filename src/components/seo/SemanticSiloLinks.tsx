import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ChevronRight, Store } from 'lucide-react';
import { cities, businessTypes, intents, IntentType } from '@/data/seoData';

interface SemanticSiloLinksProps {
  currentCity?: string;
  currentIntent?: IntentType;
  currentBusinessType?: string;
  variant?: 'compact' | 'full';
}

/**
 * Semantic Silo Internal Linking Component
 * 
 * Implements internal linking rules:
 * - Parent links: 1 (back to /pos)
 * - Sibling links: 4 (other cities)
 * - Child links: 6 (intents/business types within same city)
 * - Exact match anchor limit: 1
 * - Partial and branded anchors: Yes
 */
export const SemanticSiloLinks = ({
  currentCity,
  currentIntent = 'registration',
  currentBusinessType,
  variant = 'full',
}: SemanticSiloLinksProps) => {
  const cityLower = currentCity?.toLowerCase();
  
  // Get sibling cities (4 max, different from current)
  const siblingCities = cities
    .filter(c => c.toLowerCase() !== cityLower)
    .slice(0, 4);
  
  // Get child links within same city (6 max)
  const childIntents = Object.entries(intents)
    .filter(([key]) => key !== currentIntent)
    .slice(0, 2);
  
  const childBusinessTypes = businessTypes
    .filter(bt => bt.slug !== currentBusinessType)
    .slice(0, 4);
  
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-2">
        {/* Parent link */}
        <Link
          to="/pos"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/50 rounded-lg text-zinc-300 hover:text-white transition-colors"
        >
          <ArrowRight className="w-3 h-3 rotate-180" />
          All Cities
        </Link>
        
        {/* Sibling cities */}
        {siblingCities.slice(0, 3).map((city) => (
          <Link
            key={city}
            to={`/pos/${city.toLowerCase()}/${currentIntent}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/50 rounded-lg text-zinc-300 hover:text-white transition-colors"
          >
            <MapPin className="w-3 h-3 text-emerald-400" />
            {city}
          </Link>
        ))}
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      {/* Parent Link Section */}
      <div>
        <Link
          to="/pos"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          View All Kenya POS Systems
        </Link>
      </div>
      
      {/* Sibling Cities Section */}
      <div>
        <h3 className="text-sm font-medium text-zinc-400 mb-3 uppercase tracking-wider">
          POS in Other Cities
        </h3>
        <div className="flex flex-wrap gap-2">
          {siblingCities.map((city, index) => (
            <Link
              key={city}
              to={`/pos/${city.toLowerCase()}/${currentIntent}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/50 rounded-lg text-white transition-colors"
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
              {/* Exact match anchor for first city only (limit: 1) */}
              {index === 0 ? `${currentIntent === 'registration' ? 'Free' : ''} POS in ${city}` : city}
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
      </div>
      
      {/* Child Links Section - Intents */}
      {currentCity && (
        <div>
          <h3 className="text-sm font-medium text-zinc-400 mb-3 uppercase tracking-wider">
            More About POS in {currentCity}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {/* Intent-based child links */}
            {childIntents.map(([key, intent]) => (
              <Link
                key={key}
                to={`/pos/${cityLower}/${key}`}
                className="flex items-center gap-2 px-3 py-2 bg-zinc-800/30 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-300 hover:text-white transition-colors text-sm"
              >
                <ChevronRight className="w-4 h-4 text-zinc-500" />
                {intent.action} POS {currentCity}
              </Link>
            ))}
            
            {/* Business type child links */}
            {childBusinessTypes.slice(0, 4).map((bt) => (
              <Link
                key={bt.slug}
                to={`/pos/${cityLower}/for-${bt.slug}`}
                className="flex items-center gap-2 px-3 py-2 bg-zinc-800/30 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-300 hover:text-white transition-colors text-sm"
              >
                <Store className="w-4 h-4 text-zinc-500" />
                POS for {bt.plural}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Branded Link */}
      <div className="pt-4 border-t border-zinc-800">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <span className="font-semibold">Veira Kenya</span> – Business Operations Done For You
        </Link>
      </div>
    </div>
  );
};

export default SemanticSiloLinks;
