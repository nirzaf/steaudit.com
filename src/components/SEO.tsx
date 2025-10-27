import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../config/seo';

interface SEOProps {
  page: keyof typeof seoConfig;
}

export default function SEO({ page }: SEOProps) {
  const config = seoConfig[page];
  const location = useLocation();

  return (
    <Helmet>
      <title>{config.title}</title>
      <link rel="canonical" href={`https://steaudit.com${location.pathname}`} />
      <meta name="description" content={config.description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      {config.ogImage && <meta property="og:image" content={config.ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      {config.ogImage && <meta name="twitter:image" content={config.ogImage} />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Salem Taleb Efaifa Auditing & Consultancy" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Salem Taleb Efaifa Auditing & Consultancy",
          "image": config.ogImage,
          "@id": "https://steaudit.com",
          "url": "https://steaudit.com",
          "telephone": "+974 5000 8194",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office No 4, Building No 3, Street No 902, Zone No 55 Muaither Area",
            "addressLocality": "Doha",
            "addressRegion": "Qatar",
            "addressCountry": "QA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.2854,
            "longitude": 51.5310
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "17:00"
          },
          "sameAs": [
            "https://www.linkedin.com/company/salem-taleb-efaifa-auditing-consultancy",
            "https://www.facebook.com/steaudit"
          ]
        })}
      </script>
    </Helmet>
  );
}