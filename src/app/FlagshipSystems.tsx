const systems = [
  {
    number: '01',
    name: 'HOME INTELLIGENCE',
    kicker: 'BESPOKE LOCAL-FIRST HOME SYSTEMS',
    headline: 'Turn a house full of devices into one coherent system.',
    copy: 'A living Home Assistant environment used as the blueprint for bespoke private-home deployments: custom dashboards and cards, media and streaming, local AI, MQTT, sensing, RF experimentation, RuView visualisation, HexPlayer physical media and context-driven automations.',
    proof: ['Home Assistant orchestration', 'Custom UI / cards', 'Local AI + voice infrastructure', 'Media + HexPlayer', 'RTL-SDR / RuView experiments', 'MQTT + distributed devices'],
    route: './work/home-intelligence/',
    tone: 'lime',
  },
  {
    number: '02',
    name: 'SENTIENT CORE',
    kicker: 'EDGE AI / LOCAL INTELLIGENCE',
    headline: 'Local intelligence that lives on the machine.',
    copy: 'An evolving edge-AI platform spanning Jetson and Raspberry Pi infrastructure, local models, speech, perception, memory, service orchestration and device integration.',
    proof: ['NVIDIA Jetson / CUDA', 'Local LLM inference', 'Whisper + Piper', 'MQTT / Redis', 'Docker + systemd', 'Perception pipelines'],
    route: './work/sentient-core/',
    tone: 'cyan',
  },
  {
    number: '03',
    name: 'MURMUR',
    kicker: 'WEARABLE / DISTRIBUTED TECHNOLOGY',
    headline: 'A wearable technology platform designed from the electronics outward.',
    copy: 'MURMUR brings embedded electronics, sensing, haptics, optical hardware, power architecture, firmware and garment integration into a physical R&D platform. The portfolio separates validated prototype work from future concepts.',
    proof: ['P01-A hardware architecture', 'MCU + sensor integration', 'Optical + haptic interfaces', 'Power / interlock design', 'Wearable physical integration', 'Iterative BOM engineering'],
    route: './work/murmur/',
    tone: 'violet',
  },
  {
    number: '04',
    name: 'FABRICATION LAB',
    kicker: 'DIGITAL DESIGN → PHYSICAL PROTOTYPE',
    headline: 'The workshop is part of the engineering stack.',
    copy: 'Digital models become printed parts, engraved panels, enclosures, fixtures and working electronics. The same workflow connects Blender, slicing, laser toolpaths, G-code, wiring, bench validation and embedded hardware.',
    proof: ['Blender / 3D modelling', 'FDM printing', 'Laser cutting + engraving', 'GRBL / G-code', 'Electronics bench work', 'RF / SDR experimentation'],
    route: './capabilities/',
    tone: 'orange',
  },
];

const toneClasses: Record<string, string> = {
  lime: 'border-lime-300/20 hover:border-lime-300/50 hover:bg-lime-300/[.035] text-lime-200',
  cyan: 'border-cyan-300/20 hover:border-cyan-300/50 hover:bg-cyan-300/[.035] text-cyan-200',
  violet: 'border-violet-300/20 hover:border-violet-300/50 hover:bg-violet-300/[.035] text-violet-200',
  orange: 'border-orange-300/20 hover:border-orange-300/50 hover:bg-orange-300/[.035] text-orange-200',
};

export default function FlagshipSystems() {
  return (
    <section id="systems" className="section-wrap py-24 md:py-32" aria-labelledby="systems-heading">
      <div className="section-heading">
        <div>
          <span className="eyebrow">SYSTEM ARCHITECTURE // THE NEW SHOWCASE</span>
          <h2 id="systems-heading">FOUR SYSTEMS. ONE ENGINEERING THREAD.</h2>
        </div>
        <p>Instead of presenting a pile of unrelated experiments, the portfolio now shows the four environments where the skills converge: intelligent homes, edge AI, wearable technology and physical fabrication.</p>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {systems.map((system) => (
          <article key={system.name} className={`group border bg-[#090c0a] p-6 transition duration-300 ${toneClasses[system.tone]}`}>
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[9px] text-slate-600">{system.number}</span>
              <span className="font-mono text-[8px] tracking-[.13em] text-slate-600">FLAGSHIP SYSTEM</span>
            </div>
            <div className="mt-7">
              <span className="font-mono text-[8px] tracking-[.15em] text-slate-500">{system.kicker}</span>
              <h3 className="mt-2 text-3xl font-black tracking-[-.045em] text-slate-100 sm:text-4xl">{system.name}</h3>
              <p className="mt-4 text-lg font-semibold leading-6 text-slate-200">{system.headline}</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">{system.copy}</p>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {system.proof.map((item) => (
                <div key={item} className="border border-white/[.07] bg-black/20 px-3 py-2 font-mono text-[8px] tracking-[.05em] text-slate-400">
                  <span className="mr-2">✓</span>{item}
                </div>
              ))}
            </div>
            <a href={system.route} className={`mt-7 inline-flex border px-4 py-3 font-mono text-[9px] font-bold tracking-[.12em] transition ${toneClasses[system.tone]}`}>
              OPEN SYSTEM CASE STUDY →
            </a>
          </article>
        ))}
      </div>

      <div className="mt-4 border border-white/10 bg-[#080b09] p-5">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <span className="eyebrow">THE COMMON THREAD</span>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-400">Requirements → architecture → software → electronics → physical integration → validation → repeatable deployment. That is the skill being showcased, not the individual gadget.</p>
          </div>
          <a href="./capabilities/" className="font-mono text-[9px] font-bold tracking-[.1em] text-lime-200">OPEN FULL PROOF MAP →</a>
        </div>
      </div>
    </section>
  );
}
