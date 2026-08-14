import Link from 'next/link';

export type CaseStudyData = {
  index: string;
  name: string;
  kicker: string;
  maturity: string;
  thesis: string;
  summary: string;
  target: string;
  role: string;
  repo: string;
  accent: string;
  stack: string[];
  outcomes: string[];
  architecture: { name: string; detail: string }[];
  decisions: { title: string; copy: string }[];
  constraints: string[];
  next: string[];
};

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <main className="min-h-screen bg-[#070908] text-slate-100">
      <div
        className="fixed inset-0 -z-10 opacity-80"
        style={{
          backgroundImage:
            'linear-gradient(rgba(173,199,180,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(173,199,180,.035) 1px,transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070908]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
          <Link href="/" className="font-mono text-[9px] font-bold tracking-[.16em] text-lime-200 hover:text-lime-100">
            ← MAZLABZ / WORK
          </Link>
          <span className="font-mono text-[8px] tracking-[.12em] text-slate-600">CASE STUDY {data.index}</span>
          <a href={data.repo} target="_blank" rel="noreferrer" className="font-mono text-[9px] font-bold tracking-[.12em] text-slate-300 hover:text-white">
            SOURCE ↗
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[72vh] w-[min(1180px,calc(100%-32px))] gap-14 py-20 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:py-28">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-lime-300/25 bg-lime-300/10 px-3 py-1 font-mono text-[8px] tracking-[.12em] text-lime-200">{data.maturity}</span>
            <span className="font-mono text-[8px] tracking-[.13em] text-slate-500">{data.kicker}</span>
          </div>
          <h1 className="mt-7 text-6xl font-black leading-[.86] tracking-[-.07em] sm:text-7xl lg:text-[92px]">{data.name}</h1>
          <p className="mt-7 max-w-3xl text-2xl font-semibold leading-tight tracking-[-.035em] text-slate-200 sm:text-3xl">{data.thesis}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">{data.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {data.stack.map((item) => (
              <span key={item} className="border border-white/10 bg-white/[.025] px-2 py-1 font-mono text-[8px] text-slate-500">{item}</span>
            ))}
          </div>
        </div>

        <div className="border border-white/10 bg-[#0b0e0c] p-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[8px] tracking-[.12em] text-slate-600">
            <span>PROJECT DOSSIER</span><span style={{ color: data.accent }}>MZ/{data.index}</span>
          </div>
          <dl className="mt-5 grid gap-5">
            <div><dt className="font-mono text-[8px] tracking-[.12em] text-slate-600">PRIMARY TARGET</dt><dd className="mt-1 text-sm text-slate-200">{data.target}</dd></div>
            <div><dt className="font-mono text-[8px] tracking-[.12em] text-slate-600">MY ROLE</dt><dd className="mt-1 text-sm leading-6 text-slate-300">{data.role}</dd></div>
            <div><dt className="font-mono text-[8px] tracking-[.12em] text-slate-600">PORTFOLIO CLAIM</dt><dd className="mt-1 text-sm leading-6 text-slate-300">Cross-layer integration demonstrated; production readiness is not claimed.</dd></div>
          </dl>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0e0c]">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))] py-20">
          <span className="font-mono text-[8px] font-bold tracking-[.16em] text-lime-200">01 // SYSTEM SHAPE</span>
          <div className="mt-5 grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <h2 className="text-4xl font-black leading-none tracking-[-.05em] sm:text-5xl">THE ARCHITECTURE IS THE PRODUCT.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-400">The interesting part is not any single library. It is the interfaces between layers, the state passed between them and the operational path when one layer fails.</p>
            </div>
            <div className="grid gap-2">
              {data.architecture.map((node, index) => (
                <div key={node.name} className="group grid min-h-20 gap-2 border border-white/10 bg-[#080a09] p-4 sm:grid-cols-[48px_1fr_1.3fr] sm:items-center">
                  <span className="font-mono text-[9px] text-slate-600">{String(index + 1).padStart(2, '0')}</span>
                  <strong className="text-sm tracking-[.03em] text-slate-100">{node.name}</strong>
                  <span className="text-[11px] leading-5 text-slate-500">{node.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="font-mono text-[8px] font-bold tracking-[.16em] text-lime-200">02 // ENGINEERING DECISIONS</span>
            <div className="mt-6 grid gap-3">
              {data.decisions.map((item, index) => (
                <article key={item.title} className="border border-white/10 p-5">
                  <div className="font-mono text-[8px] text-slate-600">DECISION {String(index + 1).padStart(2, '0')}</div>
                  <h3 className="mt-5 text-xl font-black tracking-[-.03em]">{item.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-400">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <span className="font-mono text-[8px] font-bold tracking-[.16em] text-orange-200">03 // CONSTRAINTS / FAILURE SURFACE</span>
            <div className="mt-6 border border-white/10 bg-[#0b0e0c] p-6">
              {data.constraints.map((item, index) => (
                <div key={item} className="flex gap-4 border-b border-white/10 py-4 first:pt-0 last:border-0 last:pb-0">
                  <span className="font-mono text-[8px] text-orange-200">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-xs leading-6 text-slate-400">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf2e9] text-[#101510]">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 py-20 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
          <div>
            <span className="font-mono text-[8px] font-bold tracking-[.15em] text-[#536052]">04 // WHAT IT PROVES</span>
            <h2 className="mt-4 text-5xl font-black leading-[.93] tracking-[-.055em]">NOT A STACK LIST. A SYSTEM THAT HAD TO WORK TOGETHER.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.outcomes.map((item) => (
              <div key={item} className="min-h-28 border border-black/15 p-5 text-sm font-semibold leading-6">↳ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="font-mono text-[8px] font-bold tracking-[.16em] text-lime-200">05 // NEXT HARDENING GATE</span>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-.05em]">WHAT STILL HAS TO BE TRUE BEFORE “PRODUCTION”.</h2>
          </div>
          <div className="border-t border-white/10">
            {data.next.map((item, index) => (
              <div key={item} className="grid grid-cols-[42px_1fr] gap-3 border-b border-white/10 py-5">
                <span className="font-mono text-[8px] text-slate-600">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-sm leading-6 text-slate-400">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex min-h-28 w-[min(1180px,calc(100%-32px))] flex-wrap items-center justify-between gap-5">
          <Link href="/" className="font-mono text-[9px] font-bold tracking-[.14em] text-lime-200">← BACK TO ALL BUILDS</Link>
          <a href={data.repo} target="_blank" rel="noreferrer" className="font-mono text-[9px] font-bold tracking-[.14em] text-slate-300">READ THE SOURCE / STATUS ↗</a>
        </div>
      </footer>
    </main>
  );
}
