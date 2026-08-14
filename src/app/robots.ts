import type { MetadataRoute } from 'next';
import { SITE_ROOT } from './site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_ROOT}sitemap.xml`,
  };
}
