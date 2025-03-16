import type { APIRoute } from 'astro';
import { generatePageUrls } from '../utils/sitemap/generators/pages';
import { generateServiceUrls } from '../utils/sitemap/generators/services';
import { generateBlogUrls } from '../utils/sitemap/generators/blog';
import { generateSuburbUrls } from '../utils/sitemap/generators/suburbs';
import { buildSitemapIndex } from '../utils/sitemap/xml-builder';
import { sitemapConfig } from '../utils/sitemap/config';

export const GET: APIRoute = async () => {
  const sitemaps = [
    `${sitemapConfig.baseUrl}/sitemaps/pages.xml`,
    `${sitemapConfig.baseUrl}/sitemaps/services.xml`,
    `${sitemapConfig.baseUrl}/sitemaps/blog.xml`,
    `${sitemapConfig.baseUrl}/sitemaps/suburbs.xml`
  ];

  const xml = buildSitemapIndex(sitemaps);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};