import type { Metadata } from 'next';
import CapabilitiesClient from './CapabilitiesClient';
import ToolchainLedger from './ToolchainLedger';
import { sitePageUrl } from '../site';

const canonical = sitePageUrl('capabilities');

export const metadata: Metadata = {
  title: 'Capabilities / Proof Map / Toolchain',
  description: 'Evidence-backed capability and toolchain map across systems integration, edge AI, Android, embedded/IoT, Linux, Blender, 3D printing, laser fabrication, RTL-SDR, SatDump and workshop prototyping.',
  alternates: { canonical },
  openGraph: {
    title: 'Capabilities / Proof Map / Toolchain — MAZLABZ',
    description: 'Map commercially useful technical capabilities to the software, fabrication tools, RF workflows and projects that demonstrate them.',
    url: canonical,
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <CapabilitiesClient />
      <ToolchainLedger />
    </>
  );
}
