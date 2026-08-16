import type { MetadataRoute } from 'next';
import { sitePageUrl } from './site';

export const dynamic = 'force-static';

const routes = [
  '',
  'start',
  'capabilities',
  'work/home-intelligence',
  'work/sentient-core',
  'work/murmur',
  'work/fabrication',
  'work/thegame',
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
    priority: index === 0 ? 1 : ['start', 'capabilities', 'work/home-intelligence', 'work/sentient-core', 'work/murmur', 'work/fabrication'].includes(route) ? 0.9 : 0.8,
  }));
}
