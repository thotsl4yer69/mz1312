import type { Metadata } from 'next';
import { sitePageUrl } from '../../site';

export const metadata: Metadata = {
  title: 'Fabrication Lab — MAZLABZ',
  description: 'Digital-to-physical prototyping across Blender, 3D printing, laser cutting, electronics and RF hardware.',
  alternates: { canonical: sitePageUrl('work/fabrication') },
};

const stages = [
  ['01', 'MODEL', 'Blender and CAD workflows turn an idea into a manufacturable object, enclosure, panel or fixture.'],
  ['02', 'TOOLPATH', 'SVG, slicing and G-code workflows translate geometry into machine instructions with real bed and material constraints.'],
  ['03', 'FABRICATE', 'FDM printing and laser cutting/engraving create the physical substrate rather than leaving the project as a screen mockup.'],
  ['04', 'INTEGRATE', 'Raspberry Pi, ESP32-class controllers, displays, NFC, sensors and power electronics are fitted into the physical design.'],
  ['05', 'BENCH', 'Wiring, power checks, firmware, serial logs and repeatable test procedures turn a fabricated object into a working system.'],
  ['06', 'REFINE', 'Physical failures feed back into the digital model, BOM, wiring and build process for the next iteration.'],
];

const tools = ['Blender', 'OpenSCAD', 'Bambu Studio', 'UltiMaker Cura', 'LaserGRBL', 'GRBL', 'G-code', 'Raspberry Pi', 'ESP32', 'RP2350-class MCUs', 'NFC / PN532', 'RTL-SDR'];

export default function FabricationPage() {
  return (
    <main className="min-h-screen bg-[#070908] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-grid" />
      <header className="site-nav"><a href="../../" className="brand-lockup"><span className="brand-mark">MZ</span><span><b>MAZLABZ</b><small>FABRICATION LAB</small></span></a><a className="nav-cta" href="../../start/">START A BUILD →</a></header>
      <section className="section-wrap pt-28 pb-20 md:pt-40 md:pb-28"><span className="eyebrow">FLAGSHIP 04 // DIGITAL → PHYSICAL</span><h1 className="mt-5 max-w-5xl text-5xl font-black leading-[.88] tracking-[-.065em] md:text-8xl">THE WORKSHOP IS PART OF THE STACK.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">Software becomes more useful when it can end as an object. The fabrication lab connects 3D modelling, slicing, laser toolpaths, printed parts, electronics and firmware into one iterative prototyping loop.</p></section>
      <section className="border-y border-white/10 bg-[#090c0a]"><div className="section-wrap py-20 md:py-28"><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{stages.map(([n,title,copy]) => <article key={n} className="border border-white/10 bg-[#070908] p-6"><span className="font-mono text-[8px] text-orange-200">{n}</span><h2 className="mt-6 text-2xl font-black">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{copy}</p></article>)}</div></div></section>
      <section className="section-wrap py-20 md:py-28"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><span className="eyebrow">WORKSHOP TOOLCHAIN</span><h2 className="mt-4 text-4xl font-black tracking-[-.05em] md:text-6xl">FROM VECTOR TO VOLTAGE.</h2></div><div className="flex flex-wrap content-start gap-2">{tools.map((tool) => <span key={tool} className="border border-white/10 bg-[#090c0a] px-3 py-2 font-mono text-[9px] text-slate-400">{tool}</span>)}</div></div></section>
      <section className="border-y border-white/10 bg-[#090c0a]"><div className="section-wrap py-20 md:py-28"><span className="eyebrow">WHY THIS MATTERS</span><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.04em] md:text-6xl">THE PORTFOLIO DOESN&apos;T STOP AT THE SCREEN.</h2><p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">The same person who designs the interface can model the enclosure, cut the panel, print the bracket, wire the controller and bring the resulting system online. That full-stack physical workflow is one of the strongest differentiators in the lab.</p><div className="mt-8 flex flex-wrap gap-3"><a href="../../capabilities/" className="primary-button">OPEN FULL PROOF MAP →</a><a href="../../" className="ghost-button">BACK TO LAB</a></div></div></section>
    </main>
  );
}
