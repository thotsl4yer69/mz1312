import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thotsl4yer69.github.io/mz1312';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/start/',
    '/work/sentient-core/',
    '/work/drifter/',
    '/work/myceliyum/',
    '/work/benchforge/',
    '/work/hexplayer/',
    '/work/akari/',
  ];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : route === '/start/' ? 0.9 : 0.8,
  }));
}
