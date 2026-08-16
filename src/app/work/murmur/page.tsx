import type { Metadata } from 'next';
import { sitePageUrl } from '../../site';

export const metadata: Metadata = {
  title: 'MURMUR — Wearable Distributed Technology',
  description: 'MURMUR P01-A wearable technology R&D case study spanning embedded electronics, sensing, haptics, optical interfaces, power architecture and physical integration.',
  alternates: { canonical: sitePageUrl('work/murmur') },
};

const layers = [
  ['01', 'PRODUCT ARCHITECTURE', 'Wearable platform rather than a gadget: garment, electronics, interfaces, power and firmware designed as one system.'],
  ['02', 'EMBEDDED CORE', 'Microcontroller-centric architecture with deliberate separation between control, sensing, outputs and future expansion.'],
  ['03', 'SENSING', 'Motion and environmental/optical sensing selected around useful interaction and instrumentation rather than sensor-count inflation.'],
  ['04', 'OUTPUT', 'Optical interfaces and haptic feedback provide immediate physical feedback without requiring a phone or screen.'],
  ['05', 'POWER + INTERLOCKS', 'The prototype work explores layered power control, redundant timing and firmware-level gating as part of the engineering design.'],
  ['06', 'PHYSICAL INTEGRATION', 'Electronics, wiring, light placement and wearable construction are treated as a single fabrication problem.'],
];

const engineering = ['BOM reduction', 'Power budgeting', 'I²C peripheral integration', 'IMU / sensing', 'Haptic drivers', 'Optical output', 'Firmware interlocks', 'Wearable integration', 'Bench validation', 'Prototype documentation'];

export default function MurmurPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070908] text-slate-100 selection:bg-violet-300 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-grid" /><div className="fixed inset-0 -z-10 bg-noise opacity-30" />
      <header className="site-nav"><a href="../../" className="brand-lockup"><span className="brand-mark">MZ</span><span><b>MAZLABZ</b><small>MURMUR // WEARABLE R&D</small></span></a><a className="nav-cta" href="../../start/">START A BUILD →</a></header>

      <section className="section-wrap pt-28 pb-20 md:pt-40 md:pb-28">
        <span className="eyebrow">FLAGSHIP 03 // MURMUR P01-A</span>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[.88] tracking-[-.065em] md:text-8xl">THE GARMENT IS THE DEVICE.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">MURMUR is a wearable distributed-technology R&D platform. The engineering challenge is not putting a board in clothing; it is making electronics, firmware, sensing, power, optical output, haptics and physical construction behave as one product.</p>
        <div className="mt-8 border border-violet-300/20 bg-violet-300/[.035] p-5 font-mono text-[9px] leading-6 text-slate-400"><span className="text-violet-200">MATURITY //</span> Active hardware R&D. This case study deliberately separates validated prototype architecture from future concepts and does not present planned functionality as deployed capability.</div>
      </section>

      <section className="border-y border-white/10 bg-[#09070b]"><div className="section-wrap py-20 md:py-28"><div className="section-heading"><div><span className="eyebrow">SYSTEM LAYERS</span><h2>DESIGNED FROM THE ELECTRONICS OUT.</h2></div><p>The useful capability is the ability to make trade-offs across electronics, firmware and physical product constraints.</p></div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{layers.map(([n, title, copy]) => <article key={n} className="border border-white/10 bg-[#0b0a0d] p-6"><span className="font-mono text-[8px] text-violet-200">{n}</span><h3 className="mt-6 text-xl font-black">{title}</h3><p className="mt-3 text-xs leading-6 text-slate-500">{copy}</p></article>)}</div></div></section>

      <section className="section-wrap py-20 md:py-28"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><span className="eyebrow">ENGINEERING SURFACE</span><h2 className="mt-4 text-4xl font-black leading-none tracking-[-.05em] md:text-6xl">LESS BOM. MORE SYSTEM.</h2></div><div className="flex flex-wrap content-start gap-2">{engineering.map((item) => <span key={item} className="border border-white/10 bg-[#090c0a] px-3 py-2 font-mono text-[9px] text-slate-400">{item}</span>)}</div></div></section>

      <section className="border-y border-white/10 bg-[#090c0a]"><div className="section-wrap py-20 md:py-28"><span className="eyebrow">P01-A ENGINEERING LOOP</span><div className="mt-8 grid gap-3 md:grid-cols-5">{['REQUIREMENTS', 'BOM', 'WIRING', 'FIRMWARE', 'BENCH TEST'].map((item, index) => <div key={item} className="border border-white/10 p-5 text-center"><span className="font-mono text-[8px] text-violet-200">0{index + 1}</span><strong className="mt-4 block text-sm">{item}</strong>{index < 4 && <span className="mt-4 hidden font-mono text-slate-700 md:block">→</span>}</div>)}</div><p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">The project is valuable as evidence of hardware-development process: reduce the architecture, make the wiring explicit, validate power and interfaces, implement firmware gates, then test the physical system rather than treating the diagram as the finished product.</p></div></section>

      <section className="section-wrap py-20 md:py-28"><span className="eyebrow">WHY IT BELONGS HERE</span><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.04em] md:text-6xl">MURMUR PROVES THE PORTFOLIO CAN CROSS THE BOUNDARY BETWEEN SCREEN AND OBJECT.</h2><p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">Alongside Home Intelligence and Sentient Core, MURMUR gives the portfolio a physical-product counterweight: a system where the final interface is not a browser or phone but an engineered object.</p><a href="../../capabilities/" className="mt-8 inline-flex border border-violet-300/30 px-4 py-3 font-mono text-[9px] font-bold tracking-[.12em] text-violet-200">VIEW HARDWARE + FABRICATION TOOLCHAIN →</a></section>
    </main>
  );
}
