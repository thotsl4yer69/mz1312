import type { Metadata } from 'next';
import { sitePageUrl } from '../../site';

export const metadata: Metadata = {
  title: 'Game Systems Engineering — MAZLABZ',
  description: 'Browser-game engineering case study covering Phaser 3, TypeScript simulation, Three.js cinematic scenes, responsive touch controls, PWA packaging and Playwright QA.',
  alternates: { canonical: sitePageUrl('work/thegame') },
};

const systems = [
  ['GAMEPLAY', 'TypeScript owns campaign state, combat, AI behaviours, progression, scoring and saves.'],
  ['RENDERING', 'Phaser 3 handles the interactive playfield while Three.js is used for authored 3D story-cut scenes.'],
  ['UI', 'DOM/CSS owns menus, HUD, upgrades, cast/gallery surfaces and responsive touch controls.'],
  ['AUDIO', 'Procedural club beat and synthesised feedback keep the experience self-contained in the browser.'],
  ['PWA', 'The release ships as an installable browser experience with offline-after-first-load caching.'],
  ['QA', 'TypeScript checks, asset validation, production builds and Playwright desktop/mobile journeys form a repeatable release gate.'],
];

const pipeline = ['DESIGN', 'SIMULATION', 'RENDER', 'UI', 'BUILD', 'PLAYTEST'];

export default function TheGamePage() {
  return (
    <main className="min-h-screen bg-[#070908] text-slate-100 selection:bg-orange-300 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-grid" />
      <header className="site-nav"><a href="../../" className="brand-lockup"><span className="brand-mark">MZ</span><span><b>MAZLABZ</b><small>GAME SYSTEMS</small></span></a><a className="nav-cta" href="../../start/">START A BUILD →</a></header>

      <section className="section-wrap pt-28 pb-20 md:pt-40 md:pb-28"><span className="eyebrow">SUPPORTING SYSTEM // BROWSER GAME</span><h1 className="mt-5 max-w-5xl text-5xl font-black leading-[.88] tracking-[-.065em] md:text-8xl">A GAME IS A SYSTEMS-INTEGRATION PROBLEM TOO.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">The THOTSL4YER69 project is useful portfolio evidence because it crosses game simulation, rendering, UI architecture, responsive input, audio, PWA packaging and automated browser testing in one shippable web application.</p><div className="mt-8 border border-orange-300/20 bg-orange-300/[.035] p-5 font-mono text-[9px] leading-6 text-slate-400"><span className="text-orange-200">CONTENT NOTE //</span> The underlying game is an adults-only fictional parody. This portfolio page focuses on the engineering and release pipeline, not the mature content.</div></section>

      <section className="border-y border-white/10 bg-[#090c0a]"><div className="section-wrap py-20 md:py-28"><span className="eyebrow">ENGINEERING PIPELINE</span><div className="mt-8 grid gap-2 md:grid-cols-6">{pipeline.map((item, index) => <div key={item} className="border border-white/10 bg-[#070908] p-5 text-center"><span className="font-mono text-[8px] text-orange-200">0{index + 1}</span><strong className="mt-4 block text-sm">{item}</strong></div>)}</div></div></section>

      <section className="section-wrap py-20 md:py-28"><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{systems.map(([name, copy]) => <article key={name} className="border border-white/10 bg-[#090c0a] p-6"><span className="font-mono text-[8px] tracking-[.14em] text-orange-200">{name}</span><p className="mt-4 text-sm leading-6 text-slate-500">{copy}</p></article>)}</div></section>

      <section className="border-y border-white/10 bg-[#090c0a]"><div className="section-wrap py-20 md:py-28"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><span className="eyebrow">RELEASE DISCIPLINE</span><h2 className="mt-4 text-4xl font-black leading-none tracking-[-.05em] md:text-6xl">THE INTERESTING PART IS THAT IT IS TESTED LIKE SOFTWARE.</h2></div><div className="space-y-4 font-mono text-xs leading-6 text-slate-500"><p>npm audit → dependency gate</p><p>TypeScript → strict validation</p><p>asset validator → production content matrix</p><p>Vite build → release artifact</p><p>Playwright → desktop gameplay journey</p><p>Playwright → responsive touch controls</p><p>offline reload → PWA/cache verification</p></div></div></div></section>

      <section className="section-wrap py-20 md:py-28"><span className="eyebrow">PORTFOLIO VALUE</span><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.04em] md:text-6xl">IT PROVES I CAN SHIP AN INTERACTIVE PRODUCT, NOT JUST A PROTOTYPE SCREEN.</h2><p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">The project adds a different dimension to the portfolio: real-time state machines, asset pipelines, responsive UX, browser performance and automated acceptance testing. It also demonstrates that the same engineering discipline applies outside AI and hardware.</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://github.com/thotsl4yer69/thegame" target="_blank" rel="noreferrer" className="primary-button">OPEN REPOSITORY ↗</a><a href="../../" className="ghost-button">BACK TO LAB →</a></div></section>
    </main>
  );
}
