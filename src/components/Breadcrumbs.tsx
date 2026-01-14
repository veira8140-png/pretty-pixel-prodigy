import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from path if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter(x => x);
    
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];
    
    let currentPath = '';
    pathnames.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label,
        href: index === pathnames.length - 1 ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  // Generate Schema.org BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://veira.co.ke${item.href}` : undefined
    }))
  };

  if (breadcrumbItems.length <= 1) return null;

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center gap-1.5 text-xs sm:text-sm ${className}`}
      >
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground/50 flex-shrink-0" />
            )}
            {item.href ? (
              <Link 
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {index === 0 && <Home className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ) : (
              <span className="text-foreground font-medium truncate max-w-[200px]">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};
