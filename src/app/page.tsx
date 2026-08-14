'use client';
/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from 'react';
import EvidenceLedger from './EvidenceLedger';

type ProjectId = 'sentient' | 'drifter' | 'myceliyum' | 'bench' | 'hexplayer' | 'akari';

type Project = {
  id: ProjectId;
  index: string;
  name: string;
  kicker: string;
  status: string;
  statusTone: 'green' | 'amber' | 'blue';
  headline: string;
  description: string;
  proof: string[];
  stack: string[];
  repo?: string;
  caseStudy?: string;
  accent: string;
};

const projects: Project[] = [
  {
    id: 'sentient',
    index: '01',
    name: 'Sentient Core',
    kicker: 'EDGE AI / LOCAL SYSTEMS',
    status: 'DEPLOYED PROTOTYPE',
    statusTone: 'green',
    headline: 'A local AI system that actually lives on the edge.',
    description:
      'A Jetson-based assistant architecture joining local inference, memory, voice, MQTT, Redis, FastAPI services and a browser interface into one deployable system.',
    proof: ['NVIDIA Jetson target', 'Local LLM + memory services', 'MQTT / Redis service spine', 'Linux systemd deployment'],
    stack: ['Python', 'FastAPI', 'MQTT', 'Redis', 'Ollama', 'Jetson'],
    repo: 'https://github.com/thotsl4yer69/sentient-core',
    caseStudy: './work/sentient-core/',
    accent: 'cyan',
  },
  {
    id: 'drifter',
    index: '02',
    name: 'DRIFTER',
    kicker: 'VEHICLE INTELLIGENCE / PI',
    status: 'HARDWARE-INTEGRATED',
    statusTone: 'green',
    headline: 'Turn a Raspberry Pi into a vehicle intelligence node.',
    description:
      'OBD-II and CAN telemetry, deterministic safety rules, session logging, diagnostics, voice and a growing edge-services stack designed around real vehicle data.',
    proof: ['Raspberry Pi target', 'OBD-II / CAN ingest', 'MQTT telemetry bus', 'Vehicle-aware diagnostics'],
    stack: ['Python', 'SocketCAN', 'OBD-II', 'MQTT', 'SQLite', 'Linux'],
    repo: 'https://github.com/thotsl4yer69/drifter',
    caseStudy: './work/drifter/',
    accent: 'orange',
  },
  {
    id: 'myceliyum',
    index: '03',
    name: 'Myceliyum',
    kicker: 'ANDROID / FIELD RESEARCH',
    status: 'APPLICATION PROTOTYPE',
    statusTone: 'blue',
    headline: 'An offline-first field app built for muddy boots, not a pitch deck.',
    description:
      'A native Kotlin/Compose field-research app combining local observations, maps, environmental context and public species data while keeping the core logbook useful offline.',
    proof: ['Native Kotlin / Compose', 'Room offline storage', 'OpenStreetMap field map', 'Location + public data APIs'],
    stack: ['Kotlin', 'Compose', 'Room', 'Retrofit', 'OSM', 'Android'],
    repo: 'https://github.com/thotsl4yer69/Myceliyum',
    caseStudy: './work/myceliyum/',
    accent: 'moss',
  },
  {
    id: 'bench',
    index: '04',
    name: 'BenchForge',
    kicker: 'AI-NATIVE HARDWARE TOOLING',
    status: 'PRIVATE ACTIVE BUILD',
    statusTone: 'amber',
    headline: 'Tell it what parts are on the bench. Make something worth building.',
    description:
      'An electronics invention workbench that turns a component inventory into project concepts, pin plans, power checks, netlists, firmware guidance and verification steps.',
    proof: ['Component inventory model', 'Pin + power planning', 'Netlist validation', 'Build-guidance pipeline'],
    stack: ['TypeScript', 'Web Serial', 'AI tooling', 'Electronics', 'Firmware', 'Validation'],
    caseStudy: './work/benchforge/',
    accent: 'violet',
  },
  {
    id: 'hexplayer',
    index: '05',
    name: 'HexPlayer',
    kicker: 'PHYSICAL MEDIA / NFC',
    status: 'BENCH PROTOTYPE',
    statusTone: 'blue',
    headline: 'A physical music interface that behaves like modern vinyl.',
    description:
      'NFC-tagged album tiles trigger mapped playback from a Raspberry Pi. No phone interaction is required at the point of use: tap a tile, resolve its URI, play.',
    proof: ['Raspberry Pi target', 'NFC / SPI interface', 'URI mapping', 'Physical interaction design'],
    stack: ['Python', 'Raspberry Pi', 'NFC', 'SPI', 'Spotify', 'systemd'],
    repo: 'https://github.com/thotsl4yer69/Hexplayer',
    caseStudy: './work/hexplayer/',
    accent: 'pink',
  },
  {
    id: 'akari',
    index: '06',
    name: 'Akari',
    kicker: 'PRIVACY-FIRST ANDROID',
    status: 'APPLICATION PROTOTYPE',
    statusTone: 'blue',
    headline: 'A private energy diary designed to stay useful without becoming a data exhaust pipe.',
    description:
      'A local-first Android app built around simple daily energy tracking, Room/DataStore persistence, optional read-only Health Connect and accessibility-minded QA.',
    proof: ['No account required', 'Local-first storage', 'Emulator smoke testing', 'Accessibility QA'],
    stack: ['Kotlin', 'Compose', 'Room', 'DataStore', 'Health Connect', 'CI'],
    repo: 'https://github.com/thotsl4yer69/akari-android',
    caseStudy: './work/akari/',
    accent: 'yellow',
  },
];

const labProjects = [
  {
    name: 'Eyepatch',
    type: 'EDGE VISION',
    copy: 'Local-only RDK X5 vision sentry: BPU-native inference, segmented capture, event timeline and service hardening.',
    detail: 'RDK X5 · YOLO · FastAPI · SQLite',
  },
  {
    name: 'MAZLABZ HomeHub',
    type: 'INFRASTRUCTURE',
    copy: 'Containerised home-lab integration joining Home Assistant, MQTT, reverse proxy, networking and local services.',
    detail: 'Docker · HA · MQTT · Caddy',
    repo: 'https://github.com/thotsl4yer69/mazlabz-homehub',
  },
  {
    name: 'Mixdown',
    type: 'MOBILE / RANKING',
    copy: 'React Native media-feed experiment with native Android playback, SQLite telemetry and adaptive ranking ideas.',
    detail: 'React Native · Kotlin · Media3 · Supabase',
    repo: 'https://github.com/thotsl4yer69/mixdown',
  },
  {
    name: 'THOTSL4YER69',
    type: 'BROWSER GAME',
    copy: 'Phaser/TypeScript game work covering combat loops, UI state, PWA packaging and automated browser QA.',
    detail: 'Phaser · TypeScript · Vite · Playwright',
    repo: 'https://github.com/thotsl4yer69/thegame',
  },
  {
    name: 'MAZ AI Orchestrator',
    type: 'AGENTS / ROUTING',
    copy: 'Early multi-provider AI orchestration prototype exploring model routing, tools, streaming, memory and specialist agents.',
    detail: 'Node · Agents · Tools · Streaming',
    repo: 'https://github.com/thotsl4yer69/maz-ai-orchestrator',
  },
  {
    name: 'MURMUR',
    type: 'WEARABLE / PRIVACY TECH',
    copy: 'Wearable-electronics R&D combining garment integration, sensing, haptics, shielding concepts and privacy-first product architecture.',
    detail: 'Pico-class MCU · sensing · haptics · conductive textiles',
    repo: 'https://github.com/thotsl4yer69/murmur',
  },
  {
    name: 'Ghost Fusion',
    type: 'SENSOR FUSION',
    copy: 'Private defensive sensor-fusion research with explicit freshness rules, deterministic simulation and fail-safe UNKNOWN states.',
    detail: 'Python · MQTT · State fusion · Testing',
  },
];

const timeline = [
  ['JUN 2025', 'AI + WEB', 'APIs, Gemini/TTS experiments, Node and deployable interfaces.'],
  ['JUL 2025', 'FULL STACK + ANDROID', 'React/FastAPI prototypes, Kotlin/Compose, BLE and product-facing software.'],
  ['AUG 2025', 'INFRASTRUCTURE', 'Docker, Home Assistant, MQTT, reverse proxies, tunnels and homelab orchestration.'],
  ['LATE 2025', 'PHYSICAL COMPUTING', 'Raspberry Pi, sensors, NFC/RFID, SDR/RF exploration, cameras and edge accelerators.'],
  ['2026', 'EDGE SYSTEMS', 'Jetson, vehicle telemetry, native Android, distributed services, CI and hardware-integrated builds.'],
  ['NOW', 'PRODUCTISATION', 'Less “another experiment”, more proof, repeatability, hardening and useful public demonstrations.'],
];

function StatusPill({ project }: { project: Project }) {
  const tones = {
    green: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
    amber: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
    blue: 'border-sky-400/30 bg-sky-400/10 text-sky-200',
  };

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.16em] ${tones[project.statusTone]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_12px_currentColor]" />
      {project.status}
    </span>
  );
}

function SentientVisual() {
  const nodes = [
    ['CONVERSATION', 'ONLINE', '01'],
    ['MEMORY', 'ONLINE', '02'],
    ['PERCEPTION', 'ONLINE', '03'],
    ['VOICE', 'HW TEST', '04'],
    ['AVATAR', 'ONLINE', '05'],
    ['MQTT SPINE', 'ONLINE', '06'],
  ];
  return (
    <div className="demo-shell demo-cyan">
      <div className="demo-topline"><span>NODE // JETSON-EDGE</span><span>REPRESENTATIVE SYSTEM VIEW</span></div>
      <div className="grid gap-3 md:grid-cols-[1.05fr_.95fr]">
        <div className="space-y-2">
          {nodes.map(([name, state, id]) => (
            <div key={name} className="node-row">
              <span className="node-id">{id}</span>
              <span className="flex-1 font-medium text-slate-200">{name}</span>
              <span className={state === 'ONLINE' ? 'text-emerald-300' : 'text-amber-300'}>{state}</span>
            </div>
          ))}
        </div>
        <div className="terminal-mini">
          <p><b>$</b> systemctl --type=service</p>
          <p><span>✓</span> sentient-memory.service</p>
          <p><span>✓</span> sentient-perception.service</p>
          <p><span>✓</span> sentient-conversation.service</p>
          <p className="text-slate-500">mqtt://localhost:1883</p>
          <p className="mt-4 text-cyan-200">LOCAL INFERENCE READY_</p>
        </div>
      </div>
    </div>
  );
}

function DrifterVisual() {
  const gauges = [
    ['RPM', '2,180', '54%'],
    ['COOLANT', '91°C', '72%'],
    ['BATTERY', '14.2V', '86%'],
  ];
  return (
    <div className="demo-shell demo-orange">
      <div className="demo-topline"><span>DRIVE SESSION // DEMO TELEMETRY</span><span>CAN / OBD-II</span></div>
      <div className="grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
        <div className="grid grid-cols-3 gap-2">
          {gauges.map(([label, value, width]) => (
            <div key={label} className="gauge-card">
              <span>{label}</span><strong>{value}</strong>
              <div className="meter"><i style={{ width }} /></div>
            </div>
          ))}
        </div>
        <div className="can-stream">
          <p><span>7E8</span> 04 41 0C 22 10 00 00 00</p>
          <p><span>7E8</span> 03 41 05 5B 00 00 00 00</p>
          <p><span>7E8</span> 04 41 42 37 78 00 00 00</p>
          <p className="text-amber-200">SAFETY ENGINE // NOMINAL</p>
        </div>
      </div>
    </div>
  );
}

function MyceliyumVisual() {
  return (
    <div className="demo-shell demo-moss">
      <div className="demo-topline"><span>MYCELIYUM // PUBLISHED PROJECT VISUAL</span><span>REAL REPOSITORY ASSET</span></div>
      <div className="relative min-h-[290px] overflow-hidden border border-[#263129] bg-[#0b100c]">
        <img
          src="https://raw.githubusercontent.com/thotsl4yer69/Myceliyum/main/docs/og-image.png"
          alt="Myceliyum project visual from the public repository"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071008] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-3 p-4">
          <div><p className="eyebrow">FIELD RESEARCH APP</p><strong className="mt-1 block text-lg text-[#d9f0c6]">Kotlin · Compose · Room · Maps</strong></div>
          <span className="border border-[#6f8c5e] bg-[#081008]/80 px-2 py-1 font-mono text-[8px] text-[#b6cf9e]">SOURCE: PUBLIC REPO</span>
        </div>
      </div>
    </div>
  );
}

function BenchVisual() {
  const builds = [
    {
      name: 'POCKET ENVIRONMENT LOGGER',
      parts: 'ESP32-S3 + BME680 + OLED',
      check: 'POWER + I2C PLAN VALID',
      output: 'sensor logger / local display / serial export',
    },
    {
      name: 'NFC MEDIA DOCK',
      parts: 'ESP32-S3 + PN532 + OLED',
      check: 'BUS + PIN ROUTE CHECKED',
      output: 'tag → URI → playback control',
    },
    {
      name: 'MOTION-AWARE FIELD NODE',
      parts: 'ESP32-S3 + LIS3DH + GPS',
      check: '3.3V BUS PLAN VALID',
      output: 'movement-gated location / event logger',
    },
  ];
  const [buildIndex, setBuildIndex] = useState(0);
  const build = builds[buildIndex];
  const stages = ['INVENTORY', 'CONCEPT', 'POWER', 'PINS', 'NETLIST', 'FIRMWARE'];
  return (
    <div className="demo-shell demo-violet">
      <div className="demo-topline"><span>BENCHFORGE // REPRESENTATIVE LOGIC DEMO</span><span>PRIVATE R&D</span></div>
      <div className="pipeline">
        {stages.map((stage, index) => (
          <div key={stage} className="pipeline-stage">
            <span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong>{index < stages.length - 1 && <i>→</i>}
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-3" aria-live="polite">
        <div className="spec-chip"><span>PARTS</span><b>{build.parts}</b></div>
        <div className="spec-chip"><span>CHECK</span><b>{build.check}</b></div>
        <div className="spec-chip"><span>OUTPUT</span><b>{build.output}</b></div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        <div><span className="eyebrow">GENERATED CONCEPT</span><strong className="mt-1 block text-sm text-violet-100">{build.name}</strong></div>
        <button
          type="button"
          className="border border-violet-300/30 px-3 py-2 font-mono text-[8px] font-bold tracking-[.1em] text-violet-200 hover:border-violet-200/60"
          onClick={() => setBuildIndex((value) => (value + 1) % builds.length)}
        >
          CYCLE INVENTORY DEMO →
        </button>
      </div>
    </div>
  );
}

function HexVisual() {
  const states = [
    ['READY FOR TILE', 'reader idle', '—'],
    ['TAG DETECTED', 'NFC UID read', '04:A7:••:••'],
    ['URI RESOLVED', 'mapping found', 'spotify:album:••••••'],
    ['PLAY COMMAND', 'handoff complete', 'player → playback'],
  ];
  const [step, setStep] = useState(0);
  const [state, detail, payload] = states[step];
  return (
    <div className="demo-shell demo-pink">
      <div className="demo-topline"><span>HEXPLAYER // INTERACTION DEMO</span><span>NFC → URI → PLAY</span></div>
      <div className="hex-stage" aria-live="polite">
        <button
          type="button"
          className="hex-tile cursor-pointer"
          onClick={() => setStep((value) => (value + 1) % states.length)}
          aria-label="Advance the representative HexPlayer NFC interaction"
        >
          <span>04</span><b>ALBUM TILE</b><small className="mt-2 block font-mono text-[7px] opacity-60">TAP TO ADVANCE</small>
        </button>
        <div className="signal-line"><span /><span /><span /></div>
        <div className="player-unit"><span>{detail}</span><b>{state}</b><small>{payload}</small></div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-1" aria-hidden="true">
        {states.map((item, index) => <span key={item[0]} className={`h-1 ${index <= step ? 'bg-pink-300' : 'bg-white/10'}`} />)}
      </div>
    </div>
  );
}

function AkariVisual() {
  const shots = [
    ['11-firstrun-home.png', 'HOME'],
    ['12-firstrun-trends.png', 'TRENDS'],
    ['13-firstrun-history.png', 'HISTORY'],
  ];
  return (
    <div className="demo-shell demo-yellow">
      <div className="demo-topline"><span>AKARI // ACTUAL UI CAPTURES</span><span>PUBLIC REPOSITORY EVIDENCE</span></div>
      <div className="grid min-h-[290px] grid-cols-3 gap-2 p-1">
        {shots.map(([file, label]) => (
          <figure key={file} className="group relative overflow-hidden border border-[#343022] bg-[#11100b]">
            <img
              src={`https://raw.githubusercontent.com/thotsl4yer69/akari-android/main/design/reference/${file}`}
              alt={`Akari ${label.toLowerCase()} screen`}
              className="h-full min-h-[280px] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-2 pb-2 pt-8 font-mono text-[7px] tracking-[0.12em] text-[#ffe36f]">{label} {'// REAL CAPTURE'}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function ProjectVisual({ id }: { id: ProjectId }) {
  if (id === 'sentient') return <SentientVisual />;
  if (id === 'drifter') return <DrifterVisual />;
  if (id === 'myceliyum') return <MyceliyumVisual />;
  if (id === 'bench') return <BenchVisual />;
  if (id === 'hexplayer') return <HexVisual />;
  return <AkariVisual />;
}

export default function Home() {
  const [activeId, setActiveId] = useState<ProjectId>('sentient');
  const [showAllLab, setShowAllLab] = useState(false);

  const active = useMemo(() => projects.find((project) => project.id === activeId) ?? projects[0], [activeId]);
  const visibleLab = showAllLab ? labProjects : labProjects.slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070908] text-slate-100 selection:bg-lime-300 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-grid" />
      <div className="fixed inset-0 -z-10 bg-noise opacity-30" />

      <header className="site-nav">
        <a href="#top" className="brand-lockup" aria-label="MAZLABZ home">
          <span className="brand-mark">MZ</span>
          <span><b>MAZLABZ</b><small>APPLIED TECHNOLOGY LAB</small></span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          <a href="#work">WORK</a>
          <a href="./capabilities/">PROOF MAP</a>
          <a href="#lab">LAB</a>
          <a href="#method">METHOD</a>
          <a href="#services">SERVICES</a>
        </nav>
        <a className="nav-cta" href="./start/">START A BUILD →</a>
      </header>

      <section id="top" className="hero-section section-wrap">
        <div className="hero-copy">
          <div className="availability"><span /> INDEPENDENT R&D // VICTORIA, AU</div>
          <h1>I MAKE STRANGE IDEAS <em>SURVIVE CONTACT WITH HARDWARE.</em></h1>
          <p className="hero-lede">
            I build systems at the messy intersection of <b>AI, software and physical hardware</b> — edge-compute nodes,
            Raspberry Pi systems, native Android apps, connected devices and automation.
          </p>
          <div className="hero-actions">
            <a href="#work" className="primary-button">VIEW THE BUILDS <span>↓</span></a>
            <a href="./start/" className="ghost-button">BUILD SOMETHING WITH ME</a>
          </div>
          <div className="hero-facts">
            <div><span>FOCUS</span><b>SYSTEMS INTEGRATION</b></div>
            <div><span>MODE</span><b>AI-NATIVE ENGINEERING</b></div>
            <div><span>OUTPUT</span><b>DEMONSTRABLE PROTOTYPES</b></div>
          </div>
        </div>

        <div className="hero-console-wrap">
          <div className="hero-console">
            <div className="console-head"><span className="lights"><i /><i /><i /></span><span>MZ_LAB://CURRENT_BUILD</span><span>AEST // LAB NODE</span></div>
            <div className="console-body">
              <div className="console-watermark">MZ</div>
              <p><span className="prompt">jack@mazlabz:~$</span> ./what-do-you-build</p>
              <p className="console-answer">systems that cross boundaries.</p>
              <p className="muted">→ local AI on Jetson</p>
              <p className="muted">→ vehicle telemetry on Raspberry Pi</p>
              <p className="muted">→ native Android field software</p>
              <p className="muted">→ NFC, sensors, automation, weird interfaces</p>
              <p className="mt-5"><span className="prompt">status:</span> <span className="text-emerald-300">building_</span></p>
              <div className="console-nodes">
                {['JETSON', 'PI', 'ANDROID', 'MQTT', 'NFC', 'AI'].map((node, i) => (
                  <span key={node} style={{ animationDelay: `${i * 180}ms` }}><i />{node}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="caption">NOT A LIVE TERMINAL // REPRESENTATIVE LAB INTERFACE</p>
        </div>
      </section>

      <section className="signal-strip" aria-label="Technical focus">
        <div className="signal-track">
          {['EDGE AI', 'RASPBERRY PI', 'NVIDIA JETSON', 'ANDROID / KOTLIN', 'MQTT', 'FASTAPI', 'SENSORS', 'NFC / RFID', 'AUTOMATION', 'AI AGENTS', 'LINUX', 'SYSTEMS INTEGRATION'].map((item) => (
            <span key={item}>{item}<i>◆</i></span>
          ))}
        </div>
      </section>

      <section id="work" className="section-wrap py-24 md:py-32">
        <div className="section-heading">
          <div><span className="eyebrow">SELECTED WORK // 2025—NOW</span><h2>THE BUILDS THAT BEST EXPLAIN THE WORK.</h2></div>
          <p>Six projects. Different domains. Same underlying job: make hardware, software and AI behave like one system.</p>
        </div>

        <div className="project-selector" role="tablist" aria-label="Flagship projects">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveId(project.id)}
              className={activeId === project.id ? 'active' : ''}
              role="tab"
              id={`project-tab-${project.id}`}
              aria-controls={`project-panel-${project.id}`}
              aria-selected={activeId === project.id}
            >
              <span>{project.index}</span><b>{project.name}</b><small>{project.kicker}</small>
            </button>
          ))}
        </div>

        <article
          className={`feature-project accent-${active.accent}`}
          role="tabpanel"
          id={`project-panel-${active.id}`}
          aria-labelledby={`project-tab-${active.id}`}
          aria-live="polite"
        >
          <div className="feature-copy">
            <div className="flex flex-wrap items-center gap-3"><StatusPill project={active} /><span className="eyebrow">{active.kicker}</span></div>
            <h3>{active.headline}</h3>
            <p>{active.description}</p>
            <div className="proof-grid">
              {active.proof.map((item) => <div key={item}><span>✓</span>{item}</div>)}
            </div>
            <div className="stack-row">{active.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="mt-8 flex flex-wrap gap-3">
              {active.repo ? <a href={active.repo} target="_blank" rel="noreferrer" className="project-link">OPEN REPOSITORY ↗</a> : <span className="private-label">PRIVATE R&D // PUBLIC CASE STUDY IN PREP</span>}
              {active.caseStudy && <a href={active.caseStudy} className="project-link">READ ENGINEERING CASE STUDY →</a>}
            </div>
          </div>
          <div className="feature-demo">
            <div className="demo-label"><span>INTERACTIVE CASE-STUDY VIEW</span><span>NOT LIVE DATA</span></div>
            <ProjectVisual id={active.id} />
          </div>
        </article>

        <div className="project-card-grid">
          {projects.map((project) => (
            <button key={project.id} className="project-card" onClick={() => { setActiveId(project.id); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <div className="project-card-top"><span>{project.index}</span><span>{project.status}</span></div>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div className="mini-stack">{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
              <b className="card-arrow">EXPLORE BUILD ↗</b>
            </button>
          ))}
        </div>
      </section>

      <section className="manifesto-section">
        <div className="section-wrap manifesto-grid">
          <span className="manifesto-number">1312</span>
          <div>
            <span className="eyebrow">THE THROUGH-LINE</span>
            <blockquote>“Most portfolios stop at the mockup. Mine tends to end in a terminal, an APK, a wiring loom—or all three.”</blockquote>
            <p>The value is not being the world’s deepest specialist in every layer. It is getting unfamiliar layers to work together, finding what breaks, and pushing the result far enough that somebody can actually use or test it.</p>
          </div>
        </div>
      </section>

      <EvidenceLedger />

      <section id="lab" className="section-wrap py-24 md:py-32">
        <div className="section-heading">
          <div><span className="eyebrow">ENGINEERING LAB</span><h2>THE SIDE QUESTS ARE PART OF THE POINT.</h2></div>
          <p>Edge vision, home infrastructure, game systems, model routing and sensor fusion: not all flagships, all useful evidence.</p>
        </div>
        <div className="lab-grid">
          {visibleLab.map((item, index) => (
            <article className="lab-card" key={item.name}>
              <div className="lab-index">LAB/{String(index + 1).padStart(2, '0')}</div>
              <span className="eyebrow">{item.type}</span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
              <small>{item.detail}</small>
              {item.repo && <a href={item.repo} target="_blank" rel="noreferrer">SOURCE ↗</a>}
            </article>
          ))}
        </div>
        <button className="lab-toggle" onClick={() => setShowAllLab((value) => !value)}>{showAllLab ? 'SHOW LESS' : 'OPEN MORE LAB NOTES'} <span>{showAllLab ? '↑' : '↓'}</span></button>
      </section>

      <section id="method" className="method-section">
        <div className="section-wrap py-24 md:py-32">
          <div className="section-heading light">
            <div><span className="eyebrow">HOW I WORK</span><h2>AI-NATIVE. EVIDENCE-DRIVEN. HANDS STILL DIRTY.</h2></div>
            <p>AI coding agents accelerate implementation, research, refactors and tests. Architecture, hardware choices, integration, debugging and what counts as “working” stay human responsibilities.</p>
          </div>
          <div className="method-grid">
            {[
              ['01', 'DEFINE THE SYSTEM', 'Turn the vague idea into interfaces, constraints, data flows and proof criteria.'],
              ['02', 'BUILD ACROSS LAYERS', 'Use the right mix of code, devices, APIs, sensors and existing infrastructure.'],
              ['03', 'MAKE IT FAIL', 'Test the ugly paths: missing hardware, stale state, bad credentials, disconnected services, invalid data.'],
              ['04', 'PROVE WHAT IS REAL', 'Separate concept, software prototype, bench validation and deployed hardware instead of flattening them into hype.'],
            ].map(([n, title, copy]) => (
              <div className="method-card" key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>

          <div className="capability-map">
            <div className="cap-core"><span>MZ</span><b>SYSTEMS<br />INTEGRATION</b></div>
            {[
              ['AI', 'LOCAL INFERENCE · AGENTS · VISION'],
              ['EDGE', 'JETSON · PI · HAILO · RDK'],
              ['APP', 'KOTLIN · REACT · PWA'],
              ['BUS', 'MQTT · CAN · BLE · NFC'],
              ['OPS', 'LINUX · SYSTEMD · DOCKER · CI'],
              ['FIELD', 'SENSORS · VEHICLES · PHYSICAL UI'],
            ].map(([title, copy], index) => (
              <div className={`cap-node cap-${index + 1}`} key={title}><span>{title}</span><small>{copy}</small></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-24 md:py-32">
        <div className="section-heading">
          <div><span className="eyebrow">BUILD LOG</span><h2>FROM WEB APPS TO EDGE SYSTEMS.</h2></div>
          <p>The portfolio makes more sense as a trajectory than a list of repositories.</p>
        </div>
        <div className="timeline">
          {timeline.map(([date, title, copy], index) => (
            <div className="timeline-row" key={date}><span className="timeline-dot">{String(index + 1).padStart(2, '0')}</span><time>{date}</time><h3>{title}</h3><p>{copy}</p></div>
          ))}
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-wrap py-24 md:py-32">
          <div className="services-intro">
            <span className="eyebrow">AVAILABLE FOR SELECT BUILDS</span>
            <h2>BRING ME THE IDEA THAT DOESN’T FIT IN ONE JOB DESCRIPTION.</h2>
            <p>I’m most useful when the project crosses boundaries: a physical thing that needs software, an AI idea that needs to run locally, a Raspberry Pi that needs to become an appliance, or a founder who needs a convincing proof-of-concept instead of another slide deck.</p>
          </div>
          <div className="service-grid">
            {[
              ['PROTOTYPE SPRINT', 'Idea → architecture → proof-of-concept → testable demo.'],
              ['EDGE AI NODE', 'Local inference, Jetson/Pi integration, services and device interfaces.'],
              ['PI / AUTOMATION SYSTEM', 'Purpose-built local appliances, dashboards, MQTT and hardware interfaces.'],
              ['FIELD / MOBILE APP', 'Native Android prototypes for physical workflows and offline-first data.'],
            ].map(([title, copy]) => <div className="service-card" key={title}><span>↳</span><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="contact-rail">
            <div><span className="status-light" /> CURRENTLY BUILDING // OPEN TO THE RIGHT PROBLEM</div>
            <a href="./start/">SEND A PROJECT BRIEF →</a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <div className="brand-lockup"><span className="brand-mark">MZ</span><span><b>MAZLABZ</b><small>INDEPENDENT APPLIED TECHNOLOGY LAB</small></span></div>
        <p>Jack Mazzini · Victoria, Australia · Building across AI, software and physical hardware.</p>
        <div className="footer-links"><a href="#top">TOP ↑</a><a href="./capabilities/">PROOF MAP</a><a href="./start/">START A BUILD →</a><a href="https://github.com/thotsl4yer69" target="_blank" rel="noreferrer">GITHUB ↗</a></div>
      </footer>
    </main>
  );
}
