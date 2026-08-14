'use client';

import { useMemo, useState } from 'react';

const CONTACT_EMAIL = 'justmyeverything@proton.me';

const budgetOptions = [
  'UNDER A$1K — VERY TIGHT / EXPLORATORY',
  'A$1K–A$3K — FOCUSED PROTOTYPE',
  'A$3K–A$10K — MULTI-LAYER BUILD',
  'A$10K+ — SERIOUS PRODUCT / SYSTEM',
  'UNSURE — DEFINE SCOPE FIRST',
];

const timelineOptions = [
  'DAYS — NEED A FAST TECHNICAL ANSWER',
  '2–4 WEEKS — PROTOTYPE SPRINT',
  '1–3 MONTHS — ITERATIVE BUILD',
  'OPEN — QUALITY OVER DATE',
];

const outcomeOptions = [
  'WORKING PROOF-OF-CONCEPT',
  'HARDWARE + SOFTWARE PROTOTYPE',
  'LOCAL / EDGE AI DEMO',
  'FIELD / MOBILE APP PROTOTYPE',
  'SYSTEM ARCHITECTURE + TECHNICAL PLAN',
  'HARDEN AN EXISTING BUILD',
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block font-mono text-[9px] font-bold tracking-[.14em] text-lime-200">{children}</span>;
}

export default function StartBuildClient() {
  const [name, setName] = useState('');
  const [problem, setProblem] = useState('');
  const [current, setCurrent] = useState('');
  const [target, setTarget] = useState('');
  const [uncertainty, setUncertainty] = useState('');
  const [budget, setBudget] = useState(budgetOptions[4]);
  const [timeline, setTimeline] = useState(timelineOptions[1]);
  const [outcome, setOutcome] = useState(outcomeOptions[0]);
  const [copied, setCopied] = useState(false);

  const brief = useMemo(() => {
    return [
      'MAZLABZ // PROJECT BRIEF',
      '-------------------------',
      `FROM: ${name || '[name / company]'}`,
      '',
      'THE PROBLEM',
      problem || '[What are you trying to make happen?]',
      '',
      'WHAT EXISTS ALREADY',
      current || '[Hardware, software, repo, prototype, sketch, nothing yet...]',
      '',
      'TARGET / ENVIRONMENT',
      target || '[Jetson, Raspberry Pi, Android, browser, vehicle, workshop, field, unknown...]',
      '',
      'BIGGEST UNCERTAINTY',
      uncertainty || '[What part feels technically risky or unclear?]',
      '',
      `DESIRED OUTPUT: ${outcome}`,
      `BUDGET SIGNAL: ${budget}`,
      `TIMELINE: ${timeline}`,
      '',
      'SUCCESS LOOKS LIKE',
      '[What would you need to see working to call the first build a success?]',
    ].join('\n');
  }, [name, problem, current, target, uncertainty, budget, timeline, outcome]);

  const mailto = useMemo(() => {
    const subjectBase = problem.trim().split(/\s+/).slice(0, 8).join(' ');
    const subject = `MAZLABZ build brief${subjectBase ? ` — ${subjectBase}` : ''}`;
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;
  }, [brief, problem]);

  async function copyBrief() {
    await navigator.clipboard.writeText(brief);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

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
          <a href="../" className="font-mono text-[9px] font-bold tracking-[.16em] text-lime-200 hover:text-lime-100">← MAZLABZ / LAB</a>
          <span className="font-mono text-[8px] tracking-[.12em] text-slate-600">PROJECT INTAKE // NO FORM SUBMISSION</span>
          <a href="https://github.com/thotsl4yer69" target="_blank" rel="noreferrer" className="font-mono text-[9px] font-bold tracking-[.12em] text-slate-300 hover:text-white">GITHUB ↗</a>
        </div>
      </header>

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-12 py-16 lg:grid-cols-[.82fr_1.18fr] lg:py-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="font-mono text-[9px] font-bold tracking-[.17em] text-lime-200">START A BUILD // 01</span>
          <h1 className="mt-6 text-5xl font-black leading-[.9] tracking-[-.06em] sm:text-7xl">BRING THE WEIRD PROBLEM.</h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-7 text-slate-300">
            The best fit is a project that crosses boundaries: hardware that needs software, an AI idea that needs to run locally, a device that needs a usable interface, or an existing prototype that needs to stop being fragile.
          </p>
          <div className="mt-9 grid gap-2">
            {[
              ['01', 'DEFINE', 'What needs to exist when this is done?'],
              ['02', 'BOUND', 'What hardware, environment, budget and time are real?'],
              ['03', 'PROVE', 'What single demonstration would de-risk the idea fastest?'],
              ['04', 'HARDEN', 'What fails when power, network, sensors or assumptions disappear?'],
            ].map(([n, title, copy]) => (
              <div key={n} className="grid grid-cols-[36px_86px_1fr] gap-3 border-t border-white/10 py-4 text-xs">
                <span className="font-mono text-slate-600">{n}</span>
                <strong className="text-slate-200">{title}</strong>
                <span className="leading-5 text-slate-500">{copy}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-amber-300/20 bg-amber-300/[.04] p-4 font-mono text-[9px] leading-5 text-amber-100/70">
            THIS PAGE DOES NOT SEND OR STORE FORM DATA. IT ONLY BUILDS A BRIEF LOCALLY IN YOUR BROWSER AND OPENS YOUR EMAIL CLIENT WHEN YOU CHOOSE TO SEND IT.
          </div>
        </div>

        <div className="border border-white/10 bg-[#0b0e0c] p-5 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[8px] tracking-[.13em] text-slate-600">
            <span>MZ_INTAKE://BUILD-BRIEF</span><span>LOCAL SESSION</span>
          </div>

          <div className="mt-7 grid gap-6">
            <label>
              <FieldLabel>YOUR NAME / COMPANY</FieldLabel>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-white/10 bg-[#070908] px-4 py-3 text-sm outline-none transition focus:border-lime-300/50" placeholder="Who am I talking to?" />
            </label>

            <label>
              <FieldLabel>WHAT ARE YOU TRYING TO BUILD OR FIX?</FieldLabel>
              <textarea value={problem} onChange={(e) => setProblem(e.target.value)} rows={5} className="w-full resize-y border border-white/10 bg-[#070908] px-4 py-3 text-sm leading-6 outline-none transition focus:border-lime-300/50" placeholder="Describe the problem in plain English. Messy is fine." />
            </label>

            <label>
              <FieldLabel>WHAT EXISTS ALREADY?</FieldLabel>
              <textarea value={current} onChange={(e) => setCurrent(e.target.value)} rows={3} className="w-full resize-y border border-white/10 bg-[#070908] px-4 py-3 text-sm leading-6 outline-none transition focus:border-lime-300/50" placeholder="Hardware, code, repo, sketches, vendor parts, prototype, nothing yet..." />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <FieldLabel>TARGET / ENVIRONMENT</FieldLabel>
                <input value={target} onChange={(e) => setTarget(e.target.value)} className="w-full border border-white/10 bg-[#070908] px-4 py-3 text-sm outline-none transition focus:border-lime-300/50" placeholder="Pi, Jetson, Android, field..." />
              </label>
              <label>
                <FieldLabel>BIGGEST TECHNICAL UNCERTAINTY</FieldLabel>
                <input value={uncertainty} onChange={(e) => setUncertainty(e.target.value)} className="w-full border border-white/10 bg-[#070908] px-4 py-3 text-sm outline-none transition focus:border-lime-300/50" placeholder="What worries you most?" />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <label>
                <FieldLabel>DESIRED OUTPUT</FieldLabel>
                <select value={outcome} onChange={(e) => setOutcome(e.target.value)} className="w-full border border-white/10 bg-[#070908] px-3 py-3 text-xs text-slate-300 outline-none focus:border-lime-300/50">
                  {outcomeOptions.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label>
                <FieldLabel>BUDGET SIGNAL</FieldLabel>
                <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full border border-white/10 bg-[#070908] px-3 py-3 text-xs text-slate-300 outline-none focus:border-lime-300/50">
                  {budgetOptions.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label>
                <FieldLabel>TIMELINE</FieldLabel>
                <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className="w-full border border-white/10 bg-[#070908] px-3 py-3 text-xs text-slate-300 outline-none focus:border-lime-300/50">
                  {timelineOptions.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <FieldLabel>GENERATED BRIEF</FieldLabel>
            <pre className="max-h-72 overflow-auto whitespace-pre-wrap border border-white/10 bg-[#050706] p-4 font-mono text-[10px] leading-5 text-slate-400">{brief}</pre>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={mailto} className="inline-flex min-h-11 items-center bg-lime-300 px-5 font-mono text-[10px] font-black tracking-[.12em] text-black transition hover:bg-lime-200">EMAIL THIS BRIEF →</a>
              <button type="button" onClick={copyBrief} className="min-h-11 border border-white/15 px-5 font-mono text-[10px] font-bold tracking-[.12em] text-slate-300 transition hover:border-white/30 hover:text-white">{copied ? 'COPIED ✓' : 'COPY BRIEF'}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b0e0c]">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-16 md:grid-cols-3">
          {[
            ['GOOD FIT', 'Edge/local AI, Raspberry Pi appliances, device interfaces, Android field tools, automation, hardware/software prototypes.'],
            ['FIRST MILESTONE', 'Usually the smallest demonstrable build that kills the biggest technical uncertainty.'],
            ['WORKING STYLE', 'Fast iteration, AI-assisted implementation, explicit evidence boundaries, real failure-state testing.'],
          ].map(([title, copy]) => (
            <div key={title} className="border-t border-white/10 pt-5"><span className="font-mono text-[8px] font-bold tracking-[.14em] text-lime-200">{title}</span><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p></div>
          ))}
        </div>
      </section>
    </main>
  );
}
