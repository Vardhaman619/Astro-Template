export class Schema {
  static localBusiness() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://foundationrepairadelaide.com.au/#business",
      "name": "Foundation Repair Melbourne",
      "image": "https://foundationrepairadelaide.com.au/images/logo.jpg",
      "description": "Adelaide's leading foundation repair specialists providing professional inspection, repair, and maintenance services.",
      "url": "https://foundationrepairadelaide.com.au",
      "telephone": "(123) 456-7890",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Foundation St",
        "addressLocality": "Adelaide",
        "addressRegion": "SA",
        "postalCode": "5000",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -34.9285,
        "longitude": 138.6007
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "16:00"
        }
      ],
      "sameAs": [
        "https://facebook.com/foundationrepairadelaide",
        "https://twitter.com/foundationrepair",
        "https://linkedin.com/company/foundation-repair-adelaide"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Adelaide",
        "sameAs": "https://en.wikipedia.org/wiki/Adelaide"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Foundation Repair Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Foundation Inspection",
              "description": "Comprehensive foundation assessment and diagnosis"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Crack Repair",
              "description": "Professional repair of foundation cracks and damage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Underpinning",
              "description": "Foundation strengthening and stabilization"
            }
          }
        ]
      }
    };

    return JSON.stringify(schema, null, 2);
  }
}