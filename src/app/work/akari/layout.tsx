import type { Metadata } from 'next';
import { sitePageUrl } from '../../site';

const canonical = sitePageUrl('work/akari');

export const metadata: Metadata = {
  title: 'Akari — Privacy-First Android Case Study',
  description: 'Engineering case study for a local-first Kotlin/Jetpack Compose energy diary using Room/DataStore, explicit privacy boundaries, CI and accessibility-minded QA.',
  alternates: { canonical },
  openGraph: { title: 'Akari — Privacy-First Android Case Study', description: 'Native Android product work with privacy, local persistence and accessibility treated as architecture.', url: canonical },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
