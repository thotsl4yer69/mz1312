import type { Metadata } from 'next';
import { sitePageUrl } from '../../site';

const canonical = sitePageUrl('work/benchforge');

export const metadata: Metadata = {
  title: 'BenchForge — AI Electronics Tooling Case Study',
  description: 'Case study for a private electronics R&D system that turns component inventory into constrained project concepts, power/pin planning, netlists, firmware guidance and validation.',
  alternates: { canonical },
  openGraph: { title: 'BenchForge — AI Electronics Tooling Case Study', description: 'AI-native electronics product architecture constrained by real component and validation rules.', url: canonical },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
