export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: SitemapImage[];
  alternates?: SitemapAlternate[];
}

export interface SitemapImage {
  loc: string;
  caption?: string;
  title?: string;
  geoLocation?: string;
  license?: string;
}

export interface SitemapAlternate {
  hreflang: string;
  href: string;
}

export interface SitemapConfig {
  baseUrl: string;
  defaultChangeFreq?: SitemapUrl['changefreq'];
  defaultPriority?: number;
}