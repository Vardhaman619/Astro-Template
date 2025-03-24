import type { SitemapUrl } from '../types';
import { sitemapConfig } from '../config';

export function generateSuburbUrls(): SitemapUrl[] {
  const currentDate = new Date().toISOString();
  
  const suburbs = [
    { name: 'Prospect', region: 'North Adelaide' },
    { name: 'Walkerville', region: 'North Adelaide' },
    { name: 'Medindie', region: 'North Adelaide' },
    { name: 'North Adelaide', region: 'North Adelaide' },
    { name: 'Thorngate', region: 'North Adelaide' },
    { name: 'Fitzroy', region: 'North Adelaide' }
  ];

  return suburbs.map(({ name, region }) => ({
    loc: `${sitemapConfig.baseUrl}/suburbs/${name.toLowerCase().replace(/\s+/g, '-')}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: `${sitemapConfig.baseUrl}/images/suburbs/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
        caption: `Foundation Repair Services in ${name}, ${region}`,
        title: `${name} Foundation Repair Services`
      }
    ],
    alternates: [
      {
        hreflang: 'en-au',
        href: `${sitemapConfig.baseUrl}/suburbs/${name.toLowerCase().replace(/\s+/g, '-')}`
      }
    ]
  }));
}