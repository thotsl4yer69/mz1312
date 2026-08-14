import type { MetadataRoute } from 'next';
import { sitePageUrl } from './site';

export const dynamic = 'force-static';

const routes = [
  '',
  'start',
  'capabilities',
  'work/sentient-core',
  'work/drifter',
  'work/myceliyum',
  'work/benchforge',
  'work/hexplayer',
  'work/akari',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: sitePageUrl(route),
    lastModified: new Date(),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : route === 'start' || route === 'capabilities' ? 0.9 : 0.8,
  }));
}
