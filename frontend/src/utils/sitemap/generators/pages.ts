import type { SitemapUrl } from '../types';
import { sitemapConfig } from '../config';

export function generatePageUrls(): SitemapUrl[] {
  const currentDate = new Date().toISOString();
  
  const staticPages = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/services', priority: 0.9 },
    { path: '/service-areas', priority: 0.8 },
    { path: '/privacy-policy', priority: 0.3 },
    { path: '/terms-of-service', priority: 0.3 }
  ];

  return staticPages.map(({ path, priority }) => ({
    loc: `${sitemapConfig.baseUrl}${path}`,
    lastmod: currentDate,
    changefreq: sitemapConfig.defaultChangeFreq,
    priority,
    images: path === '' ? [
      {
        loc: `${sitemapConfig.baseUrl}/images/hero.jpg`,
        caption: 'Foundation Repair Adelaide - Professional Foundation Services',
        title: 'Expert Foundation Repair Services'
      }
    ] : undefined,
    alternates: [
      {
        hreflang: 'en-au',
        href: `${sitemapConfig.baseUrl}${path}`
      }
    ]
  }));
}