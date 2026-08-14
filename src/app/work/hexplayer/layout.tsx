import type { Metadata } from 'next';
import { sitePageUrl } from '../../site';

const canonical = sitePageUrl('work/hexplayer');

export const metadata: Metadata = {
  title: 'HexPlayer — NFC Physical Interface Case Study',
  description: 'Engineering case study for a Raspberry Pi and NFC physical music interface carrying a tag interaction through mapping and playback handoff.',
  alternates: { canonical },
  openGraph: { title: 'HexPlayer — NFC Physical Interface Case Study', description: 'A compact physical-to-digital product loop built around NFC and Raspberry Pi.', url: canonical },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
