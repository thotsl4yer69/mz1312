import type { Metadata } from 'next';
import GhostTerminalClient from './GhostTerminalClient';

export const metadata: Metadata = {
  title: 'MZ1312 // Ghost Shell',
  description: 'Hidden legacy terminal interface for the MAZLABZ portfolio.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function GhostPage() {
  return <GhostTerminalClient />;
}
