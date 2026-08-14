import type { Metadata } from 'next';
import CapabilitiesClient from './CapabilitiesClient';

export const metadata: Metadata = {
  title: 'Capabilities / Proof Map',
  description: 'Evidence-backed capability map across systems integration, edge AI, native Android, embedded/IoT, Linux infrastructure, automotive data and AI tooling.',
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}
