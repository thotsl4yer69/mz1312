import type { Metadata } from 'next';
import StartBuildClient from './StartBuildClient';

export const metadata: Metadata = {
  title: 'Start a Build',
  description: 'Turn a strange technical idea into a scoped MAZLABZ project brief for edge AI, Raspberry Pi, Android, automation or hardware/software prototyping.',
};

export default function StartBuildPage() {
  return <StartBuildClient />;
}
