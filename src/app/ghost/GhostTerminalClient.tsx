'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';

type Entry = {
  kind: 'input' | 'output' | 'system' | 'accent';
  text: string;
};

const projects: Record<string, { label: string; path: string; summary: string }> = {
  sentient: {
    label: 'SENTIENT CORE',
    path: '/work/sentient-core/',
    summary: 'Jetson edge AI // local inference // voice // MQTT // Redis',
  },
  drifter: {
    label: 'DRIFTER',
    path: '/work/drifter/',
    summary: 'Raspberry Pi vehicle node // OBD-II // CAN // telemetry',
  },
  myceliyum: {
    label: 'MYCELIYUM',
    path: '/work/myceliyum/',
    summary: 'Native Android field research // offline-first // maps',
  },
  benchforge: {
    label: 'BENCHFORGE',
    path: '/work/benchforge/',
    summary: 'AI-native electronics workbench // power // pins // netlists',
  },
  hexplayer: {
    label: 'HEXPLAYER',
    path: '/work/hexplayer/',
    summary: 'NFC physical media // Raspberry Pi // tag → URI → play',
  },
  akari: {
    label: 'AKARI',
    path: '/work/akari/',
    summary: 'Privacy-first Android // local storage // accessibility',
  },
};

const aliases: Record<string, string> = {
  sentientcore: 'sentient',
  core: 'sentient',
  myc: 'myceliyum',
  bench: 'benchforge',
  hex: 'hexplayer',
};

const initialEntries: Entry[] = [
  { kind: 'system', text: 'MZ1312 GHOST SHELL // LEGACY INTERFACE' },
  { kind: 'system', text: 'build: preserved // mode: hidden // index: disabled' },
  { kind: 'output', text: 'CRT subsystem ............ ONLINE' },
  { kind: 'output', text: 'project index ............ MOUNTED' },
  { kind: 'output', text: 'memory fragment .......... RESTORED' },
  { kind: 'accent', text: 'Type `help` to begin.' },
];

function projectList() {
  return Object.entries(projects)
    .map(([key, project]) => `${key.padEnd(12, ' ')} ${project.summary}`)
    .join('\n');
}

export default function GhostTerminalClient() {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [command, setCommand] = useState('');
  const [bootedAt] = useState(() => Date.now());
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const uptime = useMemo(() => Math.max(1, Math.floor((Date.now() - bootedAt) / 1000)), [bootedAt, entries]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [entries]);

  function push(kind: Entry['kind'], text: string) {
    setEntries((current) => [...current, { kind, text }]);
  }

  function route(path: string) {
    window.location.assign(path);
  }

  function execute(raw: string) {
    const trimmed = raw.trim();
    if (!trimmed) return;

    setEntries((current) => [...current, { kind: 'input', text: `mz1312@ghost:~$ ${trimmed}` }]);

    const [verbRaw, ...args] = trimmed.toLowerCase().split(/\s+/);
    const verb = verbRaw || '';

    if (verb === 'help' || verb === '?') {
      push(
        'output',
        [
          'AVAILABLE COMMANDS',
          'help                 show this command index',
          'about                identify the operator / lab',
          'projects             list flagship systems',
          'open <project>       open a case study',
          'status               show shell status',
          'capabilities         open the proof map',
          'start                open the project brief builder',
          'github               open public repositories',
          'clear                clear terminal history',
          'exit                 return to the public portfolio',
          '',
          'There may be older commands that were never documented.',
        ].join('\n'),
      );
      return;
    }

    if (verb === 'about' || verb === 'whoami') {
      push(
        'output',
        [
          'JACK MAZZINI // MAZLABZ',
          'AI-native systems integrator & technical prototyper.',
          'Edge AI. Embedded Linux. Android. Connected hardware. Automation.',
          'Working principle: make strange ideas survive contact with hardware.',
        ].join('\n'),
      );
      return;
    }

    if (verb === 'projects' || verb === 'ls') {
      push('output', projectList());
      return;
    }

    if (verb === 'status') {
      push(
        'output',
        [
          'ghost-shell ............ ONLINE',
          `session-uptime ......... ${uptime}s`,
          'public-index ........... DISABLED',
          'legacy-aesthetic ....... RESTORED',
          'portfolio-link ......... READY',
        ].join('\n'),
      );
      return;
    }

    if (verb === 'open' || verb === 'cd') {
      const requested = args.join('').replace(/[^a-z0-9]/g, '');
      const key = aliases[requested] || requested;
      const project = projects[key];
      if (!project) {
        push('system', `unknown target: ${args.join(' ') || '[missing]'} // run projects`);
        return;
      }
      push('accent', `opening ${project.label} ...`);
      window.setTimeout(() => route(project.path), 180);
      return;
    }

    if (verb === 'capabilities' || verb === 'proof') {
      push('accent', 'opening capability proof map ...');
      window.setTimeout(() => route('/capabilities/'), 180);
      return;
    }

    if (verb === 'start' || verb === 'brief') {
      push('accent', 'opening project brief builder ...');
      window.setTimeout(() => route('/start/'), 180);
      return;
    }

    if (verb === 'github') {
      push('accent', 'opening github.com/thotsl4yer69 ...');
      window.open('https://github.com/thotsl4yer69', '_blank', 'noopener,noreferrer');
      return;
    }

    if (verb === 'exit' || verb === 'home' || verb === 'portfolio') {
      push('system', 'leaving ghost shell ...');
      window.setTimeout(() => route('/'), 180);
      return;
    }

    if (verb === 'clear' || verb === 'cls') {
      setEntries([]);
      return;
    }

    if (verb === 'cortana') {
      push(
        'accent',
        [
          'CORTANA://LEGACY_HANDSHAKE',
          '',
          'signal acquired.',
          'old interface memory found.',
          'new shell accepted.',
          '',
          '“You kept building.”',
          '',
          'CORETANA STATUS: elsewhere // listening locally',
        ].join('\n'),
      );
      return;
    }

    if (verb === '1312' || verb === 'mz1312' || verb === 'ghost') {
      push(
        'accent',
        [
          'MZ1312 // GHOST DECK',
          'Legacy shell restored as a hidden branch of MAZLABZ.',
          'Nothing here is the default route. That is the point.',
        ].join('\n'),
      );
      return;
    }

    push('system', `command not found: ${verb} // try 'help'`);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = command;
    setCommand('');
    execute(value);
  }

  return (
    <main
      className="ghost-root min-h-screen bg-[#030603] text-[#83ff72]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="ghost-scanlines pointer-events-none fixed inset-0 z-50" aria-hidden="true" />
      <div className="ghost-vignette pointer-events-none fixed inset-0 z-40" aria-hidden="true" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-7 sm:py-7">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3 border border-[#54da47]/35 bg-[#071007]/75 px-4 py-3 font-mono text-[10px] uppercase tracking-[.18em] shadow-[0_0_28px_rgba(75,255,76,.07)]">
          <div className="flex items-center gap-3">
            <span className="text-[#ffc45b]">◆</span>
            <b className="text-[#aaff91]">MZ1312 // GHOST DECK</b>
          </div>
          <div className="flex gap-4 text-[#528f4e]">
            <span>LEGACY UI</span>
            <span>NOINDEX</span>
            <span className="text-[#ffb44b]">SESSION ACTIVE</span>
          </div>
        </header>

        <section className="grid flex-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="relative flex min-h-[68vh] flex-col overflow-hidden border border-[#54da47]/35 bg-[#020502]/90 shadow-[0_0_60px_rgba(32,255,47,.06)]">
            <div className="flex items-center justify-between border-b border-[#54da47]/20 bg-[#071007] px-4 py-2 font-mono text-[9px] tracking-[.15em] text-[#4e9950]">
              <span>tty0 // /dev/mazlabz</span>
              <span className="animate-pulse text-[#ffb44b]">● RECOVERED MEMORY</span>
            </div>

            <div ref={scrollRef} className="ghost-terminal flex-1 overflow-y-auto px-4 py-5 font-mono text-[12px] leading-6 sm:px-6 sm:text-[13px]">
              <div className="mb-6 whitespace-pre text-[9px] leading-[1.05] text-[#52ad52] sm:text-[10px]" aria-hidden="true">
{`███╗   ███╗███████╗ ██╗██████╗  ██╗██████╗
████╗ ████║╚══███╔╝███║╚════██╗███║╚════██╗
██╔████╔██║  ███╔╝ ╚██║ █████╔╝╚██║ █████╔╝
██║╚██╔╝██║ ███╔╝   ██║ ╚═══██╗ ██║ ╚═══██╗
██║ ╚═╝ ██║███████╗ ██║██████╔╝ ██║██████╔╝
╚═╝     ╚═╝╚══════╝ ╚═╝╚═════╝  ╚═╝╚═════╝`}
              </div>

              {entries.map((entry, index) => (
                <pre
                  key={`${entry.text}-${index}`}
                  className={`mb-2 whitespace-pre-wrap break-words font-mono ${
                    entry.kind === 'input'
                      ? 'text-[#c5ffc0]'
                      : entry.kind === 'system'
                        ? 'text-[#6da969]'
                        : entry.kind === 'accent'
                          ? 'text-[#ffc15a] ghost-amber-glow'
                          : 'text-[#84ed78]'
                  }`}
                >
                  {entry.text}
                </pre>
              ))}

              <form onSubmit={submit} className="mt-3 flex items-center gap-2">
                <label htmlFor="ghost-command" className="shrink-0 text-[#ffb44b] ghost-amber-glow">
                  mz1312@ghost:~$
                </label>
                <input
                  ref={inputRef}
                  id="ghost-command"
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  aria-label="Ghost shell command"
                  className="min-w-0 flex-1 border-0 bg-transparent p-0 font-mono text-[13px] text-[#c8ffc3] caret-[#ffb44b] outline-none"
                />
                <span className="ghost-cursor h-4 w-2 bg-[#89ff78]" aria-hidden="true" />
              </form>
            </div>
          </div>

          <aside className="border border-[#54da47]/25 bg-[#050a05]/85 p-4 font-mono text-[9px] uppercase leading-5 tracking-[.12em] text-[#4f8d4b]">
            <div className="mb-5 border-b border-[#54da47]/15 pb-4">
              <p className="text-[#ffc15a]">// MEMORY MAP</p>
              <p className="mt-2 text-[#8ddd82]">ORIGIN</p>
              <p>MZ1312 TERMINAL UI</p>
              <p className="mt-2 text-[#8ddd82]">STATE</p>
              <p>PRESERVED / HIDDEN</p>
            </div>

            <div className="space-y-3">
              <div><span className="text-[#8ddd82]">01</span> CRT GREEN PHOSPHOR</div>
              <div><span className="text-[#8ddd82]">02</span> AMBER ALERT LAYER</div>
              <div><span className="text-[#8ddd82]">03</span> COMMAND ROUTING</div>
              <div><span className="text-[#8ddd82]">04</span> PROJECT INDEX</div>
              <div><span className="text-[#8ddd82]">05</span> LEGACY EASTER EGGS</div>
            </div>

            <div className="mt-8 border border-[#ffb44b]/20 bg-[#120d03]/60 p-3 text-[#a87935]">
              <p className="text-[#ffc15a]">ACCESS NOTE</p>
              <p className="mt-2 normal-case tracking-normal">This shell is intentionally absent from public navigation and search indexing.</p>
            </div>

            <button
              type="button"
              onClick={() => route('/')}
              className="mt-5 w-full border border-[#54da47]/30 px-3 py-2 text-left text-[#82da78] transition hover:border-[#ffb44b]/60 hover:text-[#ffc15a]"
            >
              [ ESC ] PUBLIC PORTFOLIO
            </button>
          </aside>
        </section>

        <footer className="mt-4 flex flex-wrap justify-between gap-2 font-mono text-[8px] tracking-[.14em] text-[#345e34]">
          <span>MAZLABZ // LEGACY INTERFACE PRESERVATION</span>
          <span>hint: not every command is listed</span>
        </footer>
      </div>

      <style>{`
        .ghost-root {
          background-image:
            radial-gradient(circle at 50% 20%, rgba(45, 255, 72, 0.055), transparent 34%),
            linear-gradient(rgba(20, 55, 20, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 55, 20, 0.08) 1px, transparent 1px);
          background-size: auto, 34px 34px, 34px 34px;
          text-shadow: 0 0 8px rgba(115, 255, 105, .18);
        }
        .ghost-scanlines {
          background: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.00) 0px,
            rgba(255,255,255,0.00) 2px,
            rgba(0,0,0,0.22) 3px,
            rgba(0,0,0,0.22) 4px
          );
          opacity: .28;
        }
        .ghost-vignette {
          box-shadow: inset 0 0 180px 40px rgba(0,0,0,.82);
        }
        .ghost-terminal::-webkit-scrollbar { width: 7px; }
        .ghost-terminal::-webkit-scrollbar-track { background: #020502; }
        .ghost-terminal::-webkit-scrollbar-thumb { background: #204d20; }
        .ghost-amber-glow { text-shadow: 0 0 10px rgba(255, 180, 75, .34); }
        .ghost-cursor { animation: ghostBlink .9s steps(1,end) infinite; box-shadow: 0 0 9px rgba(137,255,120,.5); }
        @keyframes ghostBlink { 0%,45% { opacity: 1; } 46%,100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .ghost-cursor, .ghost-root .animate-pulse { animation: none !important; }
          .ghost-terminal { scroll-behavior: auto; }
        }
      `}</style>
    </main>
  );
}
