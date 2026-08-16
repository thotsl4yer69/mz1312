import type { Metadata } from 'next';
import { sitePageUrl } from '../../site';

export const metadata: Metadata = {
  title: 'Home Intelligence — Bespoke Local-First Home Platform',
  description: 'MAZLABZ Home Intelligence case study: a bespoke Home Assistant environment combining custom dashboards, local services, media, AI, RF experimentation, RuView, HexPlayer and automation.',
  alternates: { canonical: sitePageUrl('work/home-intelligence') },
};

const architecture = [
  ['ORCHESTRATION', 'Home Assistant', 'Scenes, state, automations and the central control surface.'],
  ['INTELLIGENCE', 'Local AI / Edge Compute', 'Local services can provide voice, reasoning, perception and device-facing intelligence.'],
  ['MESSAGING', 'MQTT / Local Services', 'A practical event and state spine connecting heterogeneous systems.'],
  ['MEDIA', 'Streaming + HexPlayer', 'Physical NFC interaction and network media become first-class home interfaces.'],
  ['SENSING', 'RTL-SDR / RuView / Devices', 'Experimental RF, visualisation and device telemetry feed the broader environment.'],
  ['INTERFACE', 'Custom Dashboards / Cards', 'The home gets a purpose-built interface instead of a generic device grid.'],
];

const demonstrations = [
  ['01', 'CONTEXTUAL AUTOMATION', 'State, presence, time and device conditions combine into scenes rather than isolated on/off rules.'],
  ['02', 'MEDIA AS AN INTERFACE', 'HexPlayer turns a physical object into a playback control surface, while streaming services remain part of the same environment.'],
  ['03', 'LOCAL INTELLIGENCE', 'AI and edge services can sit alongside Home Assistant rather than requiring the home to be a cloud-only endpoint.'],
  ['04', 'CUSTOM CONTROL SURFACE', 'Custom cards and dashboards present the information that matters to this particular installation.'],
  ['05', 'HETEROGENEOUS INTEGRATION', 'RF, sensors, Raspberry Pi services, media, automations and software are treated as one system.'],
  ['06', 'PRODUCTISATION PATH', 'The architecture can become a repeatable foundation for bespoke private-customer installations.'],
];

function ArchitectureDiagram() {
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      {architecture.map(([layer, name, copy], index) => (
        <article key={layer} className="border border-white/10 bg-[#0a0d0b] p-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[8px] tracking-[.12em]">
            <span className="text-lime-200">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-slate-600">{layer}</span>
          </div>
          <h3 className="mt-5 text-xl font-black tracking-[-.03em]">{name}</h3>
          <p className="mt-3 text-xs leading-6 text-slate-500">{copy}</p>
        </article>
      ))}
    </div>
  );
}

function SystemConsole() {
  return (
    <div className="border border-white/10 bg-[#050706] p-4 font-mono text-[9px] leading-6 text-slate-500 shadow-2xl">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-[8px] tracking-[.12em]">
        <span className="text-lime-200">MZLABZ HOME // REPRESENTATIVE SYSTEM VIEW</span>
        <span>LOCAL-FIRST</span>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {[
          ['HOME ASSISTANT', 'ORCHESTRATING'],
          ['LOCAL AI', 'AVAILABLE'],
          ['MQTT', 'CONNECTED'],
          ['MEDIA', 'READY'],
          ['HEXPLAYER', 'READY'],
          ['RTL-SDR', 'EXPERIMENTAL'],
          ['RUVIEW', 'INTEGRATED'],
          ['AUTOMATIONS', 'ACTIVE'],
        ].map(([name, state]) => (
          <div key={name} className="flex items-center justify-between border border-white/[.07] bg-[#090c0a] px-3 py-2">
            <span>{name}</span><span className={state === 'EXPERIMENTAL' ? 'text-amber-300' : 'text-emerald-300'}>● {state}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 border-t border-white/10 pt-3 text-lime-200">$ mazlabz-home --mode bespoke</p>
      <p>→ orchestration layer ready</p>
      <p>→ custom interface loaded</p>
      <p>→ media services available</p>
      <p>→ edge integrations registered</p>
      <p>→ customer-specific layer: configurable_</p>
    </div>
  );
}

export default function HomeIntelligencePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070908] text-slate-100 selection:bg-lime-300 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-grid" />
      <div className="fixed inset-0 -z-10 bg-noise opacity-30" />
      <header className="site-nav">
        <a href="../../" className="brand-lockup" aria-label="MAZLABZ home">
          <span className="brand-mark">MZ</span>
          <span><b>MAZLABZ</b><small>APPLIED TECHNOLOGY LAB</small></span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="../../#work">WORK</a><a href="../../capabilities/">PROOF MAP</a><a href="../../#services">SERVICES</a>
        </nav>
        <a className="nav-cta" href="../../start/">START A BUILD →</a>
      </header>

      <section className="section-wrap pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <span className="eyebrow">FLAGSHIP 01 // HOME INTELLIGENCE</span>
            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[.88] tracking-[-.065em] md:text-8xl">A HOME THAT ACTUALLY KNOWS HOW TO WORK TOGETHER.</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400">A bespoke, local-first intelligent-home platform built around Home Assistant and extended with custom dashboards, local services, media streaming, AI, RF experimentation, RuView, HexPlayer and layered automation.</p>
            <div className="mt-7 flex flex-wrap gap-2 font-mono text-[8px] tracking-[.1em] text-slate-500">
              {['HOME ASSISTANT', 'LOCAL AI', 'MQTT', 'STREAMING', 'RTL-SDR', 'RUVIEW', 'HEXPLAYER', 'CUSTOM UI'].map((item) => <span key={item} className="border border-white/10 px-2 py-1">{item}</span>)}
            </div>
          </div>
          <SystemConsole />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050706]">
        <div className="section-wrap py-20 md:py-28">
          <div className="section-heading light">
            <div><span className="eyebrow">THE PRODUCT</span><h2>NOT A DEVICE COLLECTION. A SYSTEM.</h2></div>
            <p>The design goal is to make unrelated technology feel like one coherent environment. Home Assistant is the orchestration layer; the interesting work is everything built around it.</p>
          </div>
          <ArchitectureDiagram />
        </div>
      </section>

      <section className="section-wrap py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><span className="eyebrow">01 // WHY IT MATTERS</span><h2 className="mt-4 text-4xl font-black leading-none tracking-[-.05em] md:text-6xl">THE CUSTOMER SHOULDN&apos;T HAVE TO THINK ABOUT THE STACK.</h2></div>
          <div className="space-y-5 text-sm leading-7 text-slate-400">
            <p>Conventional smart homes often become collections of apps, dashboards and automations. The interesting opportunity is to build a private environment around the customer&apos;s actual habits, rooms, media, devices and priorities.</p>
            <p>That makes this installation useful as both a portfolio demonstration and a blueprint for a future MAZLABZ service: design the architecture, integrate the hardware, build the interface, automate the boring parts and leave the customer with a system that feels like it belongs to their home.</p>
            <p className="border-l border-lime-300/30 pl-5 text-lime-100">POSITIONING // BESPOKE PRIVATE HOME INTELLIGENCE — NOT GENERIC SMART-HOME INSTALLATION.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#090c0a]">
        <div className="section-wrap py-20 md:py-28">
          <div className="section-heading"><div><span className="eyebrow">02 // DEMONSTRATIONS</span><h2>THE PARTS THAT MAKE IT INTERESTING.</h2></div><p>Each integration becomes evidence of a different systems skill.</p></div>
          <div className="grid gap-3 md:grid-cols-2">
            {demonstrations.map(([number, title, copy]) => <article key={number} className="border border-white/10 bg-[#070908] p-6"><span className="font-mono text-[9px] text-lime-200">{number}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 text-xs leading-6 text-slate-500">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <div><span className="eyebrow">03 // CUSTOMER BLUEPRINT</span><h2 className="mt-4 text-4xl font-black leading-none tracking-[-.05em] md:text-6xl">ONE FOUNDATION. EVERY HOUSE GETS ITS OWN PERSONALITY.</h2></div>
          <div className="space-y-3">
            {[
              ['DISCOVER', 'Map the house, routines, devices, media and customer priorities.'],
              ['ARCHITECT', 'Choose local compute, network services, interfaces and integration boundaries.'],
              ['INTEGRATE', 'Connect existing hardware and add bespoke endpoints only where they add value.'],
              ['DESIGN', 'Build a dashboard and interaction model around the customer rather than the vendor.'],
              ['AUTOMATE', 'Turn recurring context into reliable scenes, notifications and actions.'],
              ['HANDOVER', 'Document the system, expose useful controls and keep maintenance understandable.'],
            ].map(([title, copy], index) => <div key={title} className="grid grid-cols-[40px_120px_1fr] gap-3 border-b border-white/10 py-4"><span className="font-mono text-[8px] text-slate-600">0{index + 1}</span><strong className="text-[10px] tracking-[.08em] text-slate-200">{title}</strong><span className="text-xs leading-5 text-slate-500">{copy}</span></div>)}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-lime-300/[.035]">
        <div className="section-wrap py-20 md:py-28">
          <span className="eyebrow">04 // COMMERCIAL DIRECTION</span>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              ['FOUNDATION', 'Home Assistant + custom dashboard + reliable core automations.', 'START HERE'],
              ['INTELLIGENCE', 'Foundation + local AI, voice, contextual automation and edge services.', 'MOST INTERESTING'],
              ['BESPOKE', 'Full systems integration: media, RF, physical interfaces, custom hardware and customer-specific workflows.', 'FLAGSHIP'],
            ].map(([title, copy, tag]) => <article key={title} className="border border-white/10 bg-[#080b09] p-6"><span className="font-mono text-[8px] text-lime-200">{tag}</span><h3 className="mt-6 text-2xl font-black">{title}</h3><p className="mt-3 text-xs leading-6 text-slate-500">{copy}</p></article>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3"><a className="primary-button" href="../../start/">DESIGN A PRIVATE SYSTEM →</a><a className="ghost-button" href="../../capabilities/">VIEW THE FULL TOOLCHAIN</a></div>
        </div>
      </section>

      <footer className="site-footer section-wrap"><div className="brand-lockup"><span className="brand-mark">MZ</span><span><b>MAZLABZ</b><small>INDEPENDENT APPLIED TECHNOLOGY LAB</small></span></div><p>Jack Mazzini · Victoria, Australia · Home Intelligence / Edge AI / Physical Systems.</p><div className="footer-links"><a href="../../">HOME</a><a href="../../capabilities/">PROOF MAP</a><a href="../../start/">START A BUILD →</a></div></footer>
    </main>
  );
}
