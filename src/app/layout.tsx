import type { Metadata, Viewport } from 'next';
import './globals.css';
import GhostUnlock from './GhostUnlock';
import { SITE_ROOT } from './site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ROOT),
  title: {
    default: 'MAZLABZ — Builder, Entrepreneur, Technologist',
    template: '%s — MAZLABZ',
  },
  description: 'MAZLABZ is an independent technology studio working across AI, edge computing, embedded systems, automation, Android and connected hardware.',
  keywords: ['MAZLABZ', 'MAZLABZ', 'AI', 'edge AI', 'embedded systems', 'Jetson', 'Raspberry Pi', 'Android', 'automation', 'technical prototyping'],
  authors: [{ name: 'MAZLABZ' }],
  creator: 'MAZLABZ',
  alternates: { canonical: SITE_ROOT },
  openGraph: {
    title: 'MAZLABZ — Builder, Entrepreneur, Technologist',
    description: 'A living portfolio of systems, products, experiments and technical work.',
    type: 'website',
    url: SITE_ROOT,
    siteName: 'MAZLABZ',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MAZLABZ — Builder, Entrepreneur, Technologist' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAZLABZ',
    description: 'Entrepreneur · Builder · Technologist · MAZLABZ',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = { themeColor: '#07090d', colorScheme: 'dark' };

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'MAZLABZ',
      url: SITE_ROOT,
      description: 'Independent technology and product development studio.',
    },
    {
      '@type': 'WebSite',
      name: 'MAZLABZ',
      url: SITE_ROOT,
      description: 'Technical project archive and laboratory notebook.',
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <GhostUnlock />
        {children}
      </body>
    </html>
  );
}
