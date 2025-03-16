import type { SitemapUrl } from '../types';
import { sitemapConfig } from '../config';

export function generateServiceUrls(): SitemapUrl[] {
  const currentDate = new Date().toISOString();
  
  const services = [
    {
      path: '/services/foundation-inspection',
      image: 'foundation-inspection.jpg',
      title: 'Professional Foundation Inspection Services'
    },
    {
      path: '/services/crack-repair',
      image: 'crack-repair.jpg',
      title: 'Expert Foundation Crack Repair'
    },
    {
      path: '/services/underpinning',
      image: 'underpinning.jpg',
      title: 'Foundation Underpinning Services'
    },
    {
      path: '/services/waterproofing',
      image: 'waterproofing.jpg',
      title: 'Foundation Waterproofing Solutions'
    },
    {
      path: '/services/slab-leveling',
      image: 'slab-leveling.jpg',
      title: 'Professional Slab Leveling Services'
    }
  ];

  return services.map(({ path, image, title }) => ({
    loc: `${sitemapConfig.baseUrl}${path}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: `${sitemapConfig.baseUrl}/images/services/${image}`,
        caption: title,
        title
      }
    ],
    alternates: [
      {
        hreflang: 'en-au',
        href: `${sitemapConfig.baseUrl}${path}`
      }
    ]
  }));
}