'use client';

import { useEffect } from 'react';

const ACCESS_SEQUENCE = 'MZ1312';

export default function GhostUnlock() {
  useEffect(() => {
    let buffer = '';

    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      if (
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.tagName === 'SELECT' ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.key.length !== 1) return;
      buffer = `${buffer}${event.key.toUpperCase()}`.slice(-ACCESS_SEQUENCE.length);

      if (buffer === ACCESS_SEQUENCE) {
        buffer = '';
        window.location.assign('/ghost/');
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return null;
}
