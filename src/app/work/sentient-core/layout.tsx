import type { Metadata } from 'next';
import { sitePageUrl } from '../../site';

const canonical = sitePageUrl('work/sentient-core');

export const metadata: Metadata = {
  title: 'Sentient Core — Edge AI Case Study',
  description: 'Engineering case study for a Jetson-class local AI system integrating inference, memory, voice, FastAPI, MQTT, Redis and Linux service deployment.',
  alternates: { canonical },
  openGraph: { title: 'Sentient Core — Edge AI Case Study', description: 'Local AI treated as an edge appliance, not a notebook demo.', url: canonical },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
