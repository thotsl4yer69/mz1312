export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thotsl4yer69.github.io/mz1312';

export const SITE_ROOT = SITE_URL.endsWith('/') ? SITE_URL : `${SITE_URL}/`;

export function sitePageUrl(path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${SITE_ROOT}${clean}/` : SITE_ROOT;
}
