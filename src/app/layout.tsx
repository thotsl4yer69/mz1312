import type { Metadata, Viewport } from 'next';
import './globals.css';
import GhostUnlock from './GhostUnlock';
import { SITE_ROOT } from './site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ROOT),
  title: {
    default: 'NULLVECTOR LABS — Edge Intelligence & Physical AI',
    template: '%s — NULLVECTOR LABS',
  },
  description: 'Independent applied-technology laboratory building edge AI, intelligent hardware, embedded systems and privacy-first physical computing.',
  keywords: ['edge AI', 'physical AI', 'embedded systems', 'NVIDIA Jetson', 'Raspberry Pi', 'AI agents', 'computer vision', 'sensor fusion', 'AWS'],
  authors: [{ name: 'Jack Mazzini' }],
  creator: 'Jack Mazzini',
  alternates: { canonical: SITE_ROOT },
  openGraph: {
    title: 'NULLVECTOR LABS — Edge Intelligence & Physical AI',
    description: 'Edge intelligence, physical computing and AI systems engineered from prototype to deployment.',
    type: 'website',
    url: SITE_ROOT,
    siteName: 'NULLVECTOR LABS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NULLVECTOR LABS',
    description: 'Edge AI · Physical AI · Embedded Systems · Intelligent Hardware',
  },
};

export const viewport: Viewport = { themeColor: '#050608', colorScheme: 'dark' };

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Jack Mazzini',
      url: SITE_ROOT,
      sameAs: ['https://github.com/thotsl4yer69'],
      jobTitle: 'Independent AI Systems Builder',
      knowsAbout: ['Edge AI', 'Physical AI', 'Embedded Linux', 'NVIDIA Jetson', 'Raspberry Pi', 'Android', 'Computer Vision', 'AI Agents'],
    },
    {
      '@type': 'Organization',
      name: 'NULLVECTOR LABS',
      url: SITE_ROOT,
      description: 'Independent applied-technology laboratory focused on edge intelligence and physical AI.',
    },
    {
      '@type': 'WebSite',
      name: 'NULLVECTOR LABS',
      url: SITE_ROOT,
      description: 'Edge intelligence and physical AI research portfolio.',
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
