import type { Metadata } from 'next';
import StartBuildClient from './StartBuildClient';
import { sitePageUrl } from '../site';

const canonical = sitePageUrl('start');

export const metadata: Metadata = {
  title: 'Start a Build',
  description: 'Turn a strange technical idea into a scoped MAZLABZ project brief for edge AI, Raspberry Pi, Android, automation or hardware/software prototyping.',
  alternates: { canonical },
  openGraph: {
    title: 'Start a Build — MAZLABZ',
    description: 'Bring a cross-layer technical problem and turn it into a scoped project brief.',
    url: canonical,
  },
};

export default function StartBuildPage() {
  return <StartBuildClient />;
}
