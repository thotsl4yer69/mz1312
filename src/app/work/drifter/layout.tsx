import type { Metadata } from 'next';
import { sitePageUrl } from '../../site';

const canonical = sitePageUrl('work/drifter');

export const metadata: Metadata = {
  title: 'DRIFTER — Vehicle Intelligence Case Study',
  description: 'Engineering case study for a Raspberry Pi vehicle node integrating OBD-II/CAN-oriented telemetry, diagnostics, MQTT, logging and Linux deployment.',
  alternates: { canonical },
  openGraph: { title: 'DRIFTER — Vehicle Intelligence Case Study', description: 'Automotive data, Raspberry Pi/Linux services and physical deployment in one prototype.', url: canonical },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
