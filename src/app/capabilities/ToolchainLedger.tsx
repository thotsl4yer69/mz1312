const groups = [
  {
    index: '01',
    title: '3D / FABRICATION',
    subtitle: 'DESIGN → TOOLPATH → PHYSICAL PART',
    items: [
      ['Blender', '3D modelling, asset preparation and physical-design workflow.'],
      ['UltiMaker Cura', 'FDM slicing / print preparation.'],
      ['Anycubic Kobra S1 / Combo', 'Multicolour FDM printing, hotend/nozzle maintenance and troubleshooting.'],
      ['Flashforge AD5X', 'Multicolour FDM printing and hardened-nozzle workflow.'],
      ['LaserGRBL', 'Laser engraving/cutting, G-code generation, framing, resume and machine control.'],
      ['GRBL / G-code', 'Homing, unlock, feed-hold, coordinate and toolpath-level machine workflow.'],
    ],
  },
  {
    index: '02',
    title: 'RF / SATELLITE',
    subtitle: 'CAPTURE → DEMODULATE → DECODE',
    items: [
      ['RTL-SDR Blog V4', 'General-purpose SDR hardware used for RF and satellite experimentation.'],
      ['SatDump', 'Satellite reception, demodulation, decoding and pass-processing workflow.'],
      ['SDR++', 'Interactive spectrum inspection, tuning and modulation experiments.'],
      ['RF / antenna bench', 'Practical work with antennas, SMA hardware and RF peripherals around SDR and embedded builds.'],
    ],
  },
  {
    index: '03',
    title: 'EDGE AI / LINUX',
    subtitle: 'MODEL → SERVICE → DEVICE',
    items: [
      ['NVIDIA JetPack / CUDA', 'Jetson Orin Nano deployment and accelerated local-compute environment.'],
      ['Python / PyTorch', 'Inference, services, tooling and device-side experimentation.'],
      ['Ollama', 'Local LLM serving and assistant integration.'],
      ['FastAPI / Flask', 'Device APIs and local service surfaces.'],
      ['Docker / Docker Compose', 'Containerised services and repeatable local deployments.'],
      ['systemd', 'Boot-time service management, recovery and appliance-style deployment.'],
      ['MQTT / Redis', 'Messaging and shared-state infrastructure across distributed local systems.'],
      ['Git / SSH / CMake', 'Build, deployment, remote administration and native-toolchain work.'],
    ],
  },
  {
    index: '04',
    title: 'ANDROID / MOBILE',
    subtitle: 'NATIVE APP → LOCAL DATA → DEVICE',
    items: [
      ['Kotlin', 'Native Android application development.'],
      ['Jetpack Compose', 'Modern declarative Android UI.'],
      ['Room / DataStore', 'Offline-first and local-first persistence.'],
      ['Retrofit', 'Structured API integration.'],
      ['Media3', 'Native Android media playback integration.'],
      ['Health Connect', 'Optional read-only health-data integration in Akari.'],
    ],
  },
  {
    index: '05',
    title: 'WEB / SOFTWARE',
    subtitle: 'PROTOTYPE → INTERFACE → RELEASE',
    items: [
      ['TypeScript / JavaScript', 'Primary web, tooling and interactive application work.'],
      ['React / Next.js', 'Product interfaces, static sites and application shells.'],
      ['Node.js', 'Backend/tooling experiments and agent infrastructure.'],
      ['Phaser / Vite', 'Browser-game runtime and frontend build pipeline.'],
      ['Playwright', 'Browser automation and regression testing.'],
      ['SQLite / Supabase', 'Local data, telemetry and hosted-data experiments.'],
      ['GitHub / GitHub Actions', 'Source control, CI, static deployment and release verification.'],
      ['PowerShell', 'Windows-side automation, API calls and local system setup.'],
    ],
  },
  {
    index: '06',
    title: 'HOMELAB / AUTOMATION',
    subtitle: 'LOCAL SERVICES → DEVICES → CONTROL',
    items: [
      ['Home Assistant', 'Local smart-home control and integration on Raspberry Pi.'],
      ['Docker Compose', 'Home-lab service orchestration.'],
      ['Caddy', 'Reverse proxy and local service exposure.'],
      ['MQTT', 'Device and automation message bus.'],
      ['Linux networking', 'Local service routing, interfaces and edge-node connectivity.'],
    ],
  },
  {
    index: '07',
    title: 'ELECTRONICS BENCH',
    subtitle: 'POWER → BUS → FIRMWARE → VALIDATION',
    items: [
      ['Raspberry Pi / Jetson / ESP32', 'Primary prototyping and edge-compute platforms.'],
      ['I²C / SPI / UART', 'Peripheral buses used across sensors, NFC, displays and MCU integration.'],
      ['Logic analyser', 'Digital-bus inspection and hardware debugging.'],
      ['Multimeter / USB power meter', 'Power-rail, continuity and current-consumption validation.'],
      ['JST crimp tooling', 'Prototype wiring and harness construction.'],
      ['NFC / RFID tooling', 'PN532, RC522 and related physical-interface prototyping.'],
    ],
  },
];

export default function ToolchainLedger() {
  return (
    <section className="border-t border-white/10 bg-[#050706] text-slate-100">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <span className="font-mono text-[9px] font-bold tracking-[.17em] text-lime-200">TOOLCHAIN LEDGER // SOFTWARE + WORKSHOP</span>
            <h2 className="mt-5 text-4xl font-black leading-[.92] tracking-[-.055em] sm:text-6xl">THE WORK DOESN&apos;T STOP AT THE CODE EDITOR.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">A practical inventory of software, fabrication workflows, RF tools and bench equipment used across MAZLABZ projects. This is intentionally broader than a conventional developer stack: the useful skill is moving between digital design, code, electronics and physical manufacture.</p>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-[8px] tracking-[.1em] text-slate-500">
              <span className="border border-white/10 px-2 py-1">SOFTWARE USED</span>
              <span className="border border-white/10 px-2 py-1">PHYSICAL WORKFLOWS</span>
              <span className="border border-white/10 px-2 py-1">NO CERTIFICATION CLAIMS</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="border border-white/10 bg-[#0a0d0b] p-5 sm:p-6">
              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <span className="font-mono text-[9px] text-lime-200">{group.index}</span>
                <div>
                  <h3 className="text-xl font-black tracking-[-.03em]">{group.title}</h3>
                  <p className="mt-1 font-mono text-[7px] tracking-[.14em] text-slate-600">{group.subtitle}</p>
                </div>
              </div>
              <div className="mt-4 divide-y divide-white/[.07]">
                {group.items.map(([name, detail]) => (
                  <div key={name} className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4">
                    <strong className="font-mono text-[10px] text-slate-200">{name}</strong>
                    <span className="text-xs leading-5 text-slate-500">{detail}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 border border-lime-300/20 bg-lime-300/[.035] p-5 font-mono text-[9px] leading-6 text-slate-400">
          <span className="font-bold text-lime-200">WORKING RANGE //</span> CAD/3D, slicing, laser toolpaths, RF capture, satellite decoding, edge AI, native Android, web software, Linux services, automation, electronics bring-up and physical prototyping.
        </div>
      </div>
    </section>
  );
}
