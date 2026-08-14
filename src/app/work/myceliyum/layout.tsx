import type { Metadata } from 'next';
import { sitePageUrl } from '../../site';

const canonical = sitePageUrl('work/myceliyum');

export const metadata: Metadata = {
  title: 'Myceliyum — Native Android Field App Case Study',
  description: 'Engineering case study for an offline-first Kotlin/Jetpack Compose field app using Room, maps, location and public environmental/species data APIs.',
  alternates: { canonical },
  openGraph: { title: 'Myceliyum — Native Android Field App Case Study', description: 'Offline-first Android product work connecting local data, maps, location and APIs.', url: canonical },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
