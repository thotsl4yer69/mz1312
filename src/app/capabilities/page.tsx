import type { Metadata } from 'next';
import CapabilitiesClient from './CapabilitiesClient';
import { sitePageUrl } from '../site';

const canonical = sitePageUrl('capabilities');

export const metadata: Metadata = {
  title: 'Capabilities / Proof Map',
  description: 'Evidence-backed capability map across systems integration, edge AI, native Android, embedded/IoT, Linux infrastructure, automotive data and AI tooling.',
  alternates: { canonical },
  openGraph: {
    title: 'Capabilities / Proof Map — MAZLABZ',
    description: 'Map commercially useful technical capabilities to the projects that demonstrate them.',
    url: canonical,
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}
