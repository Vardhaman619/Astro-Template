import type { APIRoute } from 'astro';
import { generatePageUrls } from '../../utils/sitemap/generators/pages';
import { generateServiceUrls } from '../../utils/sitemap/generators/services';
import { generateBlogUrls } from '../../utils/sitemap/generators/blog';
import { generateSuburbUrls } from '../../utils/sitemap/generators/suburbs';
import { buildSitemapXml } from '../../utils/sitemap/xml-builder';

export const GET: APIRoute = async ({ params }) => {
  let urls;

  switch (params.type) {
    case 'pages.xml':
      urls = generatePageUrls();
      break;
    case 'services.xml':
      urls = generateServiceUrls();
      break;
    case 'blog.xml':
      urls = await generateBlogUrls();
      break;
    case 'suburbs.xml':
      urls = generateSuburbUrls();
      break;
    default:
      return new Response(null, { status: 404 });
  }

  const xml = buildSitemapXml(urls, params.type);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

export function getStaticPaths() {
  return [
    { params: { type: 'pages.xml' } },
    { params: { type: 'services.xml' } },
    { params: { type: 'blog.xml' } },
    { params: { type: 'suburbs.xml' } }
  ];
}