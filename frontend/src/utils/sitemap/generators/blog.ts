import { getCollection } from 'astro:content';
import type { SitemapUrl } from '../types';
import { sitemapConfig } from '../config';

export async function generateBlogUrls(): Promise<SitemapUrl[]> {
  const blogPosts = await getCollection('blog');
  
  return blogPosts.map(post => ({
    loc: `${sitemapConfig.baseUrl}/blog/${post.slug}`,
    lastmod: post.data.updatedDate?.toISOString() || post.data.publishDate.toISOString(),
    changefreq: 'monthly',
    priority: 0.7,
    images: [
      {
        loc: `${sitemapConfig.baseUrl}${post.data.image}`,
        caption: post.data.description,
        title: post.data.title
      }
    ],
    alternates: [
      {
        hreflang: 'en-au',
        href: `${sitemapConfig.baseUrl}/blog/${post.slug}`
      }
    ]
  }));
}