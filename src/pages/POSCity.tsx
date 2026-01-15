import { useParams, Navigate } from 'react-router-dom';
import { POSPageTemplate } from '@/components/seo/POSPageTemplate';
import { cities, intents, City, IntentType } from '@/data/seoData';

const POSCity = () => {
  const { city, intent } = useParams<{ city: string; intent?: string }>();
  
  // Normalize city name (capitalize first letter)
  const normalizedCity = city ? city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() : '';
  
  // Validate city
  const isValidCity = cities.includes(normalizedCity as City);
  
  if (!isValidCity) {
    return <Navigate to="/pos" replace />;
  }

  // Default to registration intent if not specified
  const normalizedIntent = (intent as IntentType) || 'registration';
  
  // Validate intent
  const isValidIntent = Object.keys(intents).includes(normalizedIntent);
  
  if (!isValidIntent) {
    return <Navigate to={`/pos/${city}`} replace />;
  }

  return (
    <POSPageTemplate 
      city={normalizedCity as City} 
      intent={normalizedIntent as IntentType}
    />
  );
};

export default POSCity;
