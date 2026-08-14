'use client';

import { useMemo, useState } from 'react';

type Capability = {
  id: string;
  name: string;
  market: string;
  summary: string;
  evidence: { project: string; proof: string; href: string }[];
  tools: string[];
  level: 'CORE' | 'SOLID' | 'SPECIALIST EXPOSURE';
};

const capabilities: Capability[] = [
  {
    id: 'integration',
    name: 'SYSTEMS INTEGRATION',
    market: 'TECHNICAL PROTOTYPING / PRODUCT R&D',
    summary: 'The recurring strength across the portfolio: make devices, services, models, APIs and interfaces behave like one product instead of a pile of components.',
    level: 'CORE',
    tools: ['Architecture', 'Interfaces', 'Failure states', 'Validation', 'Hardware bring-up', 'AI-assisted engineering'],
    evidence: [
      { project: 'Sentient Core', proof: 'Local inference + memory + voice + MQTT/Redis + systemd on Jetson.', href: '../work/sentient-core/' },
      { project: 'DRIFTER', proof: 'Vehicle data + Pi/Linux services + telemetry + diagnostics + physical deployment.', href: '../work/drifter/' },
      { project: 'HexPlayer', proof: 'Physical NFC interaction carried through reader, mapping and playback.', href: '../work/hexplayer/' },
    ],
  },
  {
    id: 'edge-ai',
    name: 'EDGE AI',
    market: 'LOCAL INFERENCE / DEVICE AI',
    summary: 'Design and integrate AI workloads that run on local edge hardware rather than assuming cloud-only inference.',
    level: 'CORE',
    tools: ['NVIDIA Jetson', 'Ollama', 'FastAPI', 'Vision pipelines', 'Local voice', 'Linux services'],
    evidence: [
      { project: 'Sentient Core', proof: 'Jetson-targeted local assistant architecture and service deployment.', href: '../work/sentient-core/' },
      { project: 'Eyepatch', proof: 'RDK X5 local vision research using BPU-native inference and event capture.', href: 'https://github.com/thotsl4yer69' },
      { project: 'BenchForge', proof: 'AI-assisted engineering constrained by component and validation models.', href: '../work/benchforge/' },
    ],
  },
  {
    id: 'android',
    name: 'NATIVE ANDROID',
    market: 'FIELD APPS / DEVICE COMPANIONS',
    summary: 'Native Kotlin/Compose application work with offline persistence, location/maps, privacy decisions, accessibility and CI.',
    level: 'SOLID',
    tools: ['Kotlin', 'Jetpack Compose', 'Room', 'DataStore', 'Retrofit', 'Android CI'],
    evidence: [
      { project: 'Myceliyum', proof: 'Offline-first field research app with maps, location and public data APIs.', href: '../work/myceliyum/' },
      { project: 'Akari', proof: 'Local-first private energy diary with accessibility-minded QA.', href: '../work/akari/' },
      { project: 'BitChat Android', proof: 'Earlier BLE / native Android communications research.', href: 'https://github.com/thotsl4yer69/bitchat-android' },
    ],
  },
  {
    id: 'embedded',
    name: 'EMBEDDED / IoT',
    market: 'CONNECTED DEVICES / PHYSICAL PROTOTYPES',
    summary: 'Bring sensors, NFC, microcontrollers and Raspberry Pi-class hardware into larger software systems with explicit power, bus and deployment constraints.',
    level: 'CORE',
    tools: ['Raspberry Pi', 'ESP32', 'NFC/RFID', 'SPI/I2C/UART', 'Sensors', 'MQTT'],
    evidence: [
      { project: 'HexPlayer', proof: 'Pi + NFC/SPI physical music interaction.', href: '../work/hexplayer/' },
      { project: 'BenchForge', proof: 'Pin, power, bus and netlist reasoning built into the product pipeline.', href: '../work/benchforge/' },
      { project: 'MURMUR', proof: 'Wearable-electronics research around sensing, haptics and garment integration.', href: 'https://github.com/thotsl4yer69/murmur' },
    ],
  },
  {
    id: 'infra',
    name: 'LINUX / INFRASTRUCTURE',
    market: 'LOCAL APPLIANCES / HOMELAB / EDGE FLEETS',
    summary: 'Turn prototype code into processes that start, communicate, recover and can be inspected on real Linux systems.',
    level: 'SOLID',
    tools: ['systemd', 'Docker Compose', 'MQTT', 'Redis', 'Caddy', 'GitHub Actions'],
    evidence: [
      { project: 'Sentient Core', proof: 'Service-managed Jetson deployment with message/state infrastructure.', href: '../work/sentient-core/' },
      { project: 'HomeHub', proof: 'Containerised local-services stack joining Home Assistant, MQTT, proxying and networking.', href: 'https://github.com/thotsl4yer69/mazlabz-homehub' },
      { project: 'DRIFTER', proof: 'Pi vehicle-node services, watchdog patterns and telemetry logging.', href: '../work/drifter/' },
    ],
  },
  {
    id: 'automotive',
    name: 'AUTOMOTIVE DATA',
    market: 'VEHICLE TELEMETRY / DIAGNOSTIC PROTOTYPES',
    summary: 'Practical vehicle-data integration around OBD-II/CAN transports, profiles, logging and diagnostic reasoning.',
    level: 'SPECIALIST EXPOSURE',
    tools: ['OBD-II', 'CAN', 'SocketCAN', 'ELM327', 'K-line paths', 'Telemetry'],
    evidence: [
      { project: 'DRIFTER', proof: 'Hardware-integrated Raspberry Pi vehicle intelligence node.', href: '../work/drifter/' },
      { project: 'DRIFTER Android', proof: 'Companion/mobile diagnostic interface work bounded as evidence-assisted diagnosis.', href: 'https://github.com/thotsl4yer69/drifter-app' },
    ],
  },
  {
    id: 'agents',
    name: 'AI AGENTS / TOOLING',
    market: 'AUTOMATION / INTERNAL TOOLS',
    summary: 'Use AI coding and agent systems as an engineering multiplier: tools, routing, session state, Git/SSH workflows and structured domain pipelines.',
    level: 'SOLID',
    tools: ['Agent tools', 'MCP', 'Model routing', 'Git/SSH automation', 'Structured outputs', 'AI coding workflows'],
    evidence: [
      { project: 'BenchForge', proof: 'Agent-assisted product logic constrained by engineering validation.', href: '../work/benchforge/' },
      { project: 'MAZ AI Orchestrator', proof: 'Earlier multi-provider routing/tools/memory orchestration research.', href: 'https://github.com/thotsl4yer69/maz-ai-orchestrator' },
      { project: 'BedrockAgent', proof: 'Historical coding-agent work with tools, permissions, Git/SSH, sessions and testing.', href: '../#method' },
    ],
  },
  {
    id: 'product',
    name: 'TECHNICAL PRODUCT DESIGN',
    market: 'IDEA → DEMONSTRABLE PROTOTYPE',
    summary: 'Translate a vague product idea into a bounded architecture, user interaction, implementation path, evidence package and hardening gate.',
    level: 'CORE',
    tools: ['Requirements', 'Product architecture', 'Rapid prototyping', 'Evidence design', 'Technical research', 'Documentation'],
    evidence: [
      { project: 'Myceliyum', proof: 'Field workflow translated into a native offline-first product.', href: '../work/myceliyum/' },
      { project: 'Akari', proof: 'Privacy and accessibility constraints made part of the architecture, not marketing copy.', href: '../work/akari/' },
      { project: 'HexPlayer', proof: 'Simple physical interaction carried into complete product loop.', href: '../work/hexplayer/' },
    ],
  },
];

const levelStyle = {
  CORE: 'border-lime-300/30 bg-lime-300/10 text-lime-200',
  SOLID: 'border-cyan-300/30 bg-cyan-300/10 text-cyan-200',
  'SPECIALIST EXPOSURE': 'border-amber-300/30 bg-amber-300/10 text-amber-200',
};

export default function CapabilitiesClient() {
  const [activeId, setActiveId] = useState('integration');
  const active = useMemo(() => capabilities.find((item) => item.id === activeId) ?? capabilities[0], [activeId]);

  return (
    <main className="min-h-screen bg-[#070908] text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070908]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
          <a href="../" className="font-mono text-[9px] font-bold tracking-[.16em] text-lime-200">← MAZLABZ / LAB</a>
          <span className="font-mono text-[8px] tracking-[.12em] text-slate-600">PROOF MAP // MARKETABLE CAPABILITY</span>
          <a href="../start/" className="font-mono text-[9px] font-bold tracking-[.12em] text-lime-200">START A BUILD →</a>
        </div>
      </header>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-16 md:py-24">
        <span className="font-mono text-[9px] font-bold tracking-[.17em] text-lime-200">CAPABILITY MAP // EVIDENCE FIRST</span>
        <div className="mt-5 grid gap-9 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <h1 className="max-w-4xl text-5xl font-black leading-[.9] tracking-[-.06em] sm:text-7xl">NOT A SKILLS CLOUD. A MAP TO THE BUILDS THAT PROVE THEM.</h1>
          <p className="max-w-xl text-sm leading-7 text-slate-400">The portfolio spans a lot of technology. This page collapses the noise into commercially understandable capabilities and shows the project evidence behind each one. The labels describe demonstrated working range, not formal accreditation.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr]">
          <div className="border border-white/10 bg-[#0b0e0c] p-2" role="tablist" aria-label="Technical capabilities">
            {capabilities.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeId === item.id}
                aria-controls={`capability-${item.id}`}
                onClick={() => setActiveId(item.id)}
                className={`grid w-full grid-cols-[34px_1fr] gap-2 border-b border-white/10 px-3 py-4 text-left transition last:border-b-0 ${activeId === item.id ? 'bg-lime-300 text-black' : 'text-slate-400 hover:bg-white/[.035] hover:text-white'}`}
              >
                <span className="font-mono text-[8px] opacity-60">{String(index + 1).padStart(2, '0')}</span>
                <span><strong className="block text-[11px] tracking-[.03em]">{item.name}</strong><small className="mt-1 block font-mono text-[7px] opacity-60">{item.market}</small></span>
              </button>
            ))}
          </div>

          <article id={`capability-${active.id}`} role="tabpanel" aria-live="polite" className="border border-white/10 bg-[#0b0e0c] p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
              <div><span className="font-mono text-[8px] tracking-[.12em] text-slate-600">CAPABILITY://{active.id.toUpperCase()}</span><h2 className="mt-2 text-3xl font-black tracking-[-.04em] sm:text-4xl">{active.name}</h2></div>
              <span className={`border px-3 py-1 font-mono text-[8px] font-bold tracking-[.12em] ${levelStyle[active.level]}`}>{active.level}</span>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300">{active.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">{active.tools.map((tool) => <span key={tool} className="border border-white/10 px-2 py-1 font-mono text-[8px] text-slate-500">{tool}</span>)}</div>

            <div className="mt-9">
              <span className="font-mono text-[8px] font-bold tracking-[.14em] text-lime-200">PROJECT EVIDENCE</span>
              <div className="mt-3 grid gap-2">
                {active.evidence.map((item, index) => {
                  const external = item.href.startsWith('http');
                  return (
                    <a key={item.project} href={item.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="grid gap-2 border border-white/10 px-4 py-4 transition hover:border-lime-300/30 hover:bg-lime-300/[.025] sm:grid-cols-[38px_160px_1fr_auto] sm:items-center">
                      <span className="font-mono text-[8px] text-slate-600">{String(index + 1).padStart(2, '0')}</span>
                      <strong className="text-sm text-slate-100">{item.project}</strong>
                      <span className="text-xs leading-5 text-slate-400">{item.proof}</span>
                      <span className="font-mono text-[9px] text-lime-200">OPEN ↗</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#edf2e9] text-[#101510]">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <h2 className="text-4xl font-black leading-none tracking-[-.05em] sm:text-5xl">THE COMMERCIAL SHORTHAND: CROSS-LAYER TECHNICAL PROTOTYPING.</h2>
          <div><p className="text-sm leading-7 text-[#465047]">The useful offer is not “I know every item in this technology list.” It is: define the system, learn the unfamiliar layer quickly, use AI aggressively where it helps, integrate the pieces, debug the boundaries and produce something demonstrable.</p><a href="../start/" className="mt-6 inline-flex bg-[#101510] px-5 py-3 font-mono text-[9px] font-black tracking-[.13em] text-[#dfff8c]">BRING ME A CROSS-LAYER PROBLEM →</a></div>
        </div>
      </section>
    </main>
  );
}
