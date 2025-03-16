import type { SitemapUrl } from './types';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export function buildSitemapXml(urls: SitemapUrl[], type: string): string {
  const xmlUrls = urls.map(url => {
    const images = url.images?.map(img => `
      <image:image>
        <image:loc>${escapeXml(img.loc)}</image:loc>
        ${img.caption ? `<image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
        ${img.title ? `<image:title>${escapeXml(img.title)}</image:title>` : ''}
        ${img.geoLocation ? `<image:geo_location>${escapeXml(img.geoLocation)}</image:geo_location>` : ''}
        ${img.license ? `<image:license>${escapeXml(img.license)}</image:license>` : ''}
      </image:image>`
    ).join('') || '';

    const alternates = url.alternates?.map(alt => 
      `<xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}" />`
    ).join('') || '';

    return `
    <url>
      <loc>${escapeXml(url.loc)}</loc>
      ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
      ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
      ${url.priority ? `<priority>${url.priority}</priority>` : ''}
      ${images}
      ${alternates}
    </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlUrls}
</urlset>`;
}

export function buildSitemapIndex(sitemaps: string[]): string {
  const currentDate = new Date().toISOString();
  
  const xmlSitemaps = sitemaps.map(url => `
    <sitemap>
      <loc>${escapeXml(url)}</loc>
      <lastmod>${currentDate}</lastmod>
    </sitemap>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlSitemaps}
</sitemapindex>`;
}