'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

const projects = [
  { slug: 'sentient-core', number: '01', name: 'SENTIENT CORE', category: 'EDGE AI', status: 'DEPLOYED PROTOTYPE', description: 'A local-first AI system built around Jetson edge compute, combining inference, memory, speech, perception and service orchestration.', stack: 'Jetson · FastAPI · MQTT · Redis · Local LLM', href: 'https://github.com/thotsl4yer69/sentient-core', featured: true },
  { slug: 'drifter', number: '02', name: 'DRIFTER', category: 'VEHICLE INTELLIGENCE', status: 'HARDWARE-INTEGRATED', description: 'A Raspberry Pi vehicle intelligence platform spanning OBD-II/CAN telemetry, diagnostics, logging, alerts and dashboard interfaces.', stack: 'Raspberry Pi · CAN · OBD-II · Linux · MQTT', href: 'https://github.com/thotsl4yer69/drifter', featured: true },
  { slug: 'murmur', number: '03', name: 'MURMUR', category: 'PHYSICAL AI', status: 'ACTIVE R&D', description: 'A research programme exploring wearable computing, embedded sensing, haptics, optical systems and privacy-oriented product design.', stack: 'Embedded · Sensors · Haptics · Wearables', href: 'https://github.com/thotsl4yer69/murmur', featured: true },
  { slug: 'myceliyum', number: '04', name: 'MYCELIYUM', category: 'FIELD COMPUTING', status: 'APPLICATION PROTOTYPE', description: 'An offline-first native Android field-research application designed to remain useful when connectivity disappears.', stack: 'Kotlin · Compose · Room · Maps', href: 'https://github.com/thotsl4yer69/Myceliyum', featured: true },
  { slug: 'hexplayer', number: '05', name: 'HEXPLAYER', category: 'PHYSICAL INTERFACE', status: 'BENCH PROTOTYPE', description: 'NFC physical media becomes the interface: tap a tile, resolve an identity, then hand off playback to a connected service.', stack: 'NFC · Raspberry Pi · Spotify · UX', href: 'https://github.com/thotsl4yer69/Hexplayer', featured: false },
  { slug: 'akari', number: '06', name: 'AKARI', category: 'PRIVACY-FIRST ANDROID', status: 'APPLICATION PROTOTYPE', description: 'A native Android experiment focused on local data, structured journalling and a deliberately privacy-first architecture.', stack: 'Kotlin · Compose · Room · DataStore', href: 'https://github.com/thotsl4yer69/akari-android', featured: false },
  { slug: 'benchforge', number: '07', name: 'BENCHFORGE', category: 'AI + HARDWARE', status: 'PRIVATE ACTIVE BUILD', description: 'A component-aware engineering workbench that turns available parts into constrained build concepts, pin plans and verification paths.', stack: 'AI Agents · Electronics · Firmware · Validation', href: 'https://github.com/thotsl4yer69/bench', featured: false },
  { slug: 'homehub', number: '08', name: 'HOMEHUB', category: 'AUTOMATION', status: 'LAB PROJECT', description: 'Home infrastructure experiments connecting Docker services, Home Assistant, MQTT, media and local intelligence.', stack: 'Docker · Home Assistant · MQTT · Linux', href: 'https://github.com/thotsl4yer69/mazlabz-homehub', featured: false },
];

const capabilities = [
  ['SYSTEMS INTEGRATION', 'Connecting models, services, sensors, APIs, databases and interfaces into working systems.'],
  ['EDGE AI', 'Local inference, perception pipelines, speech, memory and AI workloads deployed where latency and control matter.'],
  ['EMBEDDED + IOT', 'Microcontrollers, Raspberry Pi, Jetson, sensors, cameras, buses, power and physical interfaces.'],
  ['ANDROID', 'Native Kotlin/Compose applications, offline-first architecture, local storage, maps and device integration.'],
  ['AI ORCHESTRATION', 'Agents, tool routing, multimodal workflows, memory systems and cloud/edge division of labour.'],
  ['PRODUCT ENGINEERING', 'Taking an idea from architecture and prototype through interaction design, validation and deployment.'],
];

const labItems = [
  ['MIXDOWN', 'Mobile media + adaptive ranking', 'ACTIVE'],
  ['MAZ AI ORCHESTRATOR', 'Multi-provider AI orchestration', 'LAB'],
  ['SENTINEL / WATCHTOWER', 'Home network and device monitoring', 'LAB'],
  ['MZ1312 DASHBOARD', 'Ecosystem command-centre UI', 'EXPERIMENT'],
  ['THE GAME', 'Browser game development + QA', 'LAB'],
  ['PIGEONHOLE', 'Self-hosted media + streaming systems', 'LAB'],
];

function Arrow() { return <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>; }

export default function Home() {
  const [filter, setFilter] = useState('ALL');
  const filtered = useMemo(() => filter === 'ALL' ? projects : projects.filter(p => p.category.includes(filter)), [filter]);

  return (
    <main className="min-h-screen bg-[#07090d] text-slate-100 selection:bg-cyan-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07090d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="font-mono text-xs font-bold tracking-[0.28em]">JACK MAZZINI<span className="text-cyan-300">{" //"}</span></Link>
          <div className="hidden items-center gap-7 font-mono text-[9px] tracking-[0.18em] text-slate-500 md:flex">
            <a href="#work" className="hover:text-slate-100">WORK</a><a href="#lab" className="hover:text-slate-100">LAB</a><a href="#capabilities" className="hover:text-slate-100">CAPABILITIES</a><a href="#about" className="hover:text-slate-100">ABOUT</a><a href="#contact" className="hover:text-slate-100">CONTACT</a>
          </div>
          <a href="https://github.com/thotsl4yer69" className="border border-white/15 px-3 py-2 font-mono text-[9px] tracking-[.16em] text-slate-300 hover:border-cyan-300/50 hover:text-cyan-200">GITHUB ↗</a>
        </div>
      </nav>

      <section className="relative z-10 overflow-hidden border-b border-white/10">
        <div className="absolute left-[55%] top-20 h-[36rem] w-[36rem] rounded-full bg-cyan-400/[0.07] blur-[110px]" />
        <div className="mx-auto grid min-h-[86vh] max-w-7xl items-end gap-12 px-5 pb-20 pt-28 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:pb-28">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-[9px] tracking-[.25em] text-cyan-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" /> JACK MAZZINI / INDEPENDENT BUILDER</div>
            <h1 className="max-w-6xl text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[.82] tracking-[-.075em]">I BUILD<br /><span className="text-slate-500">SYSTEMS</span><br />THAT WORK.</h1>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-400">Entrepreneur, technologist and independent builder working across artificial intelligence, edge computing, embedded hardware, Android, automation and physical products.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#work" className="bg-cyan-300 px-5 py-3 font-mono text-[10px] font-bold tracking-[.18em] text-black">EXPLORE THE WORK ↓</a><a href="#about" className="border border-white/15 px-5 py-3 font-mono text-[10px] tracking-[.18em] text-slate-300">ABOUT JACK</a></div>
          </div>
          <div className="pb-2 lg:pb-10">
            <div className="border border-white/10 bg-black/30 p-6 font-mono text-[9px] leading-7 text-slate-500 shadow-2xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4"><span>JACK // SYSTEM</span><span className="text-emerald-300">● ACTIVE</span></div>
              <div className="grid grid-cols-2 gap-4"><div><span>FOCUS</span><strong className="mt-1 block text-slate-200">AI + PHYSICAL SYSTEMS</strong></div><div><span>MODEL</span><strong className="mt-1 block text-slate-200">INDEPENDENT R&D</strong></div><div><span>STACK</span><strong className="mt-1 block text-slate-200">LOCAL / CLOUD / OPEN</strong></div><div><span>LOCATION</span><strong className="mt-1 block text-slate-200">AUSTRALIA</strong></div></div>
              <div className="mt-6 border-t border-white/10 pt-5 text-cyan-200">BUILD → MEASURE → HARDEN → SHIP</div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2"><div className="border border-white/10 p-4"><b className="block text-xl text-slate-100">08</b><span className="font-mono text-[8px] text-slate-600">FEATURED SYSTEMS</span></div><div className="border border-white/10 p-4"><b className="block text-xl text-slate-100">06</b><span className="font-mono text-[8px] text-slate-600">CORE CAPABILITIES</span></div><div className="border border-white/10 p-4"><b className="block text-xl text-slate-100">∞</b><span className="font-mono text-[8px] text-slate-600">EXPERIMENTS</span></div></div>
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="font-mono text-[9px] tracking-[.25em] text-cyan-300">01 / SELECTED WORK</p><h2 className="mt-3 text-5xl font-semibold tracking-[-.055em] sm:text-7xl">Things I&apos;ve<br /><span className="text-slate-500">actually built.</span></h2></div><p className="max-w-md text-sm leading-6 text-slate-500">The public portfolio follows one rule: proof over buzzwords. Maturity and provenance are stated rather than implied.</p></div>
        <div className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-5">{['ALL','EDGE AI','VEHICLE','PHYSICAL AI','FIELD','ANDROID'].map(label => <button key={label} onClick={() => setFilter(label)} className={`px-3 py-2 font-mono text-[8px] tracking-[.14em] transition ${filter === label ? 'bg-cyan-300 text-black' : 'border border-white/10 text-slate-500 hover:text-slate-200'}`}>{label}</button>)}</div>
        <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">{filtered.map(p => <a key={p.slug} href={p.href} target="_blank" rel="noreferrer" className="group bg-[#080b10] p-7 transition hover:bg-[#0c1118] lg:p-9"><div className="flex items-center justify-between font-mono text-[8px] text-slate-600"><span>{p.number} / {p.category}</span><span className="text-emerald-300/80">{p.status}</span></div><h3 className="mt-14 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{p.name} <Arrow /></h3><p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">{p.description}</p><div className="mt-8 border-t border-white/10 pt-4 font-mono text-[8px] tracking-[.1em] text-slate-600">{p.stack}</div></a>)}</div>
      </section>

      <section id="capabilities" className="relative z-10 border-y border-white/10 bg-white/[.015]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><p className="font-mono text-[9px] tracking-[.25em] text-cyan-300">02 / CAPABILITIES</p><div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(([title, copy], i) => <div key={title} className="bg-[#080b10] p-7"><span className="font-mono text-[9px] text-slate-700">0{i + 1}</span><h3 className="mt-8 text-xl font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{copy}</p></div>)}</div></div>
      </section>

      <section id="lab" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="font-mono text-[9px] tracking-[.25em] text-cyan-300">03 / THE LAB</p><h2 className="mt-3 text-5xl font-semibold tracking-[-.055em] sm:text-7xl">Always<br /><span className="text-slate-500">building.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-slate-500">Not every experiment becomes a company or a product. The Lab is where prototypes, infrastructure and strange ideas get tested before they earn a bigger place.</p></div><div className="border border-white/10">{labItems.map(([name, description, status], i) => <div key={name} className="flex items-center gap-5 border-b border-white/10 p-5 last:border-b-0"><span className="w-5 font-mono text-[8px] text-slate-700">0{i + 1}</span><div className="flex-1"><strong className="font-mono text-[10px] tracking-[.12em]">{name}</strong><p className="mt-1 text-xs text-slate-600">{description}</p></div><span className="font-mono text-[8px] text-cyan-300/70">{status}</span></div>)}</div></div></section>

      <section id="about" className="relative z-10 border-t border-white/10"><div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8"><div><p className="font-mono text-[9px] tracking-[.25em] text-cyan-300">04 / ABOUT</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-6xl">One independent builder working across the stack.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">My work sits between software and the physical world. I use AI as a force multiplier, but the useful part is the integration: choosing the architecture, connecting the pieces, debugging what breaks and turning an idea into something that can actually be tested.</p><p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">MAZLABZ is the working identity behind much of that technical experimentation. This site is the personal layer above it — a place to see the person, the projects and the progression rather than a disconnected list of repositories.</p></div><div className="border border-white/10 bg-black/20 p-7 font-mono text-[9px] leading-8 text-slate-600"><p>PRIMARY // SYSTEMS INTEGRATION</p><p>SECONDARY // EDGE AI + EMBEDDED</p><p>PLATFORM // LINUX + ANDROID + WEB</p><p>METHOD // PROTOTYPE → VALIDATE → HARDEN</p><p>PRINCIPLE // PROOF OVER HYPE</p><div className="mt-8 border-t border-white/10 pt-6 text-slate-300">AI-ASSISTED DEVELOPMENT<br /><span className="text-slate-600">Architecture, integration and verification remain human-directed.</span></div></div></div></section>

      <section id="contact" className="relative z-10 border-t border-white/10"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><p className="font-mono text-[9px] tracking-[.25em] text-cyan-300">05 / CONTACT</p><div className="mt-4 flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><h2 className="max-w-3xl text-5xl font-semibold tracking-[-.055em] sm:text-7xl">Have a hard<br /><span className="text-slate-500">problem?</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-slate-500">Technical discovery, prototype work, systems integration and unconventional product ideas.</p></div><a href="mailto:jack.mazzini91@gmail.com" className="group border border-cyan-300/30 px-6 py-4 font-mono text-[10px] tracking-[.16em] text-cyan-200 hover:bg-cyan-300 hover:text-black">START A CONVERSATION <Arrow /></a></div></div></section>

      <footer className="relative z-10 border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 font-mono text-[8px] tracking-[.14em] text-slate-700 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 JACK MAZZINI</span><span>AI · EDGE · HARDWARE · SOFTWARE · SYSTEMS</span><a href="https://github.com/thotsl4yer69/mz1312" className="text-slate-500 hover:text-cyan-200">PORTFOLIO SOURCE ↗</a></div></footer>
    </main>
  );
}
