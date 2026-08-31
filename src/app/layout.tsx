import type { Metadata, Viewport } from 'next';
import './globals.css';
import GhostUnlock from './GhostUnlock';
import { SITE_ROOT } from './site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ROOT),
  title: {
    default: 'Jack Mazzini — Builder, Entrepreneur, Technologist',
    template: '%s — Jack Mazzini',
  },
  description: 'Jack Mazzini is an independent entrepreneur and technical builder working across AI, edge computing, embedded systems, automation, Android and connected hardware.',
  keywords: ['Jack Mazzini', 'MAZLABZ', 'AI', 'edge AI', 'embedded systems', 'Jetson', 'Raspberry Pi', 'Android', 'automation', 'technical prototyping'],
  authors: [{ name: 'Jack Mazzini' }],
  creator: 'Jack Mazzini',
  alternates: { canonical: SITE_ROOT },
  openGraph: {
    title: 'Jack Mazzini — Builder, Entrepreneur, Technologist',
    description: 'A living portfolio of systems, products, experiments and technical work.',
    type: 'website',
    url: SITE_ROOT,
    siteName: 'Jack Mazzini',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Mazzini',
    description: 'Entrepreneur · Builder · Technologist · MAZLABZ',
  },
};

export const viewport: Viewport = { themeColor: '#07090d', colorScheme: 'dark' };

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Jack Mazzini',
      url: SITE_ROOT,
      sameAs: ['https://github.com/thotsl4yer69'],
      jobTitle: 'Entrepreneur and Technical Builder',
      knowsAbout: ['Artificial Intelligence', 'Edge AI', 'Embedded Systems', 'Automation', 'Android', 'Linux', 'Connected Hardware', 'Systems Integration'],
    },
    {
      '@type': 'Organization',
      name: 'MAZLABZ',
      url: SITE_ROOT,
      description: 'Independent technology and product development work by Jack Mazzini.',
    },
    {
      '@type': 'WebSite',
      name: 'Jack Mazzini',
      url: SITE_ROOT,
      description: 'Personal portfolio, project archive and laboratory notebook.',
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
