'use client';

import { useEffect } from 'react';

const ACCESS_SEQUENCE = 'MZ1312';
const MOBILE_TAP_TARGET = '.brand-lockup';
const MOBILE_TAPS_REQUIRED = 5;
const MOBILE_TAP_WINDOW_MS = 2600;

export default function GhostUnlock() {
  useEffect(() => {
    let buffer = '';
    let tapCount = 0;
    let firstTapAt = 0;

    function openGhostShell() {
      buffer = '';
      tapCount = 0;
      firstTapAt = 0;
      window.location.assign('/ghost/');
    }

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
        openGhostShell();
      }
    }

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest(MOBILE_TAP_TARGET)) return;

      const now = Date.now();
      if (!firstTapAt || now - firstTapAt > MOBILE_TAP_WINDOW_MS) {
        firstTapAt = now;
        tapCount = 1;
        return;
      }

      tapCount += 1;
      if (tapCount >= MOBILE_TAPS_REQUIRED) {
        event.preventDefault();
        event.stopPropagation();
        openGhostShell();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onClick, true);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onClick, true);
    };
  }, []);

  return null;
}
