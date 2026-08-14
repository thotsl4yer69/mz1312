const evidence = [
  {
    project: 'SENTIENT CORE',
    maturity: 'DEPLOYED PROTOTYPE',
    evidence: 'Jetson target · local inference · MQTT/Redis service spine · systemd deployment',
    presentation: 'Representative service-console view',
    tone: 'text-cyan-200',
    statusUrl: 'https://github.com/thotsl4yer69/sentient-core/blob/main/PROJECT_STATUS.md',
  },
  {
    project: 'DRIFTER',
    maturity: 'HARDWARE-INTEGRATED',
    evidence: 'Raspberry Pi target · OBD-II/CAN ingest · vehicle profiles · diagnostics + logging',
    presentation: 'Illustrative telemetry using the real data model',
    tone: 'text-orange-200',
    statusUrl: 'https://github.com/thotsl4yer69/drifter/blob/main/PROJECT_STATUS.md',
  },
  {
    project: 'MYCELIYUM',
    maturity: 'APPLICATION PROTOTYPE',
    evidence: 'Native Kotlin/Compose · Room · OpenStreetMap · location + public environmental/species APIs',
    presentation: 'Real published project artwork + documented app stack',
    tone: 'text-lime-200',
    statusUrl: 'https://github.com/thotsl4yer69/Myceliyum/blob/main/PROJECT_STATUS.md',
  },
  {
    project: 'BENCHFORGE',
    maturity: 'PRIVATE ACTIVE BUILD',
    evidence: 'Component inventory · power/pin planning · netlist validation · build/firmware guidance',
    presentation: 'Representative pipeline; source remains private',
    tone: 'text-violet-200',
  },
  {
    project: 'HEXPLAYER',
    maturity: 'BENCH PROTOTYPE',
    evidence: 'Raspberry Pi · NFC/SPI · tag-to-URI mapping · physical playback interaction',
    presentation: 'Representative physical interaction flow',
    tone: 'text-pink-200',
    statusUrl: 'https://github.com/thotsl4yer69/Hexplayer/blob/main/PROJECT_STATUS.md',
  },
  {
    project: 'AKARI',
    maturity: 'APPLICATION PROTOTYPE',
    evidence: 'Kotlin/Compose · Room/DataStore · emulator smoke tests · accessibility QA',
    presentation: 'Actual screenshots committed in the public repository',
    tone: 'text-yellow-200',
    statusUrl: 'https://github.com/thotsl4yer69/akari-android/blob/main/PROJECT_STATUS.md',
  },
];

export default function EvidenceLedger() {
  return (
    <section className="section-wrap py-24 md:py-32" aria-labelledby="evidence-heading">
      <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[1fr_.8fr] md:items-end">
        <div>
          <span className="eyebrow">EVIDENCE LEDGER // NO MYSTERY MEAT</span>
          <h2 id="evidence-heading" className="mt-3 max-w-4xl text-4xl font-black leading-[.96] tracking-[-.05em] md:text-6xl">
            WHAT IS REAL, AND WHAT THE DEMO IS DOING.
          </h2>
        </div>
        <div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            The presentation can be cinematic. The maturity labels cannot. This ledger keeps the distinction between a real implementation, a hardware validation state and an illustrative browser view explicit.
          </p>
          <a href="./capabilities/" className="mt-5 inline-flex border border-lime-300/30 bg-lime-300/[.04] px-4 py-3 font-mono text-[9px] font-bold tracking-[.12em] text-lime-200 transition hover:border-lime-200/60 hover:bg-lime-300/[.08]">
            OPEN CAPABILITIES / PROOF MAP →
          </a>
        </div>
      </div>

      <div className="border-x border-white/10">
        {evidence.map((item, index) => (
          <article
            key={item.project}
            className="grid gap-4 border-b border-white/10 bg-[#090c0a]/70 px-5 py-6 transition hover:bg-[#0e130f] md:grid-cols-[54px_1.05fr_.85fr_1.45fr_1fr] md:items-center md:px-6"
          >
            <span className="font-mono text-[9px] text-slate-600">{String(index + 1).padStart(2, '0')}</span>
            {item.statusUrl ? (
              <a href={item.statusUrl} target="_blank" rel="noreferrer" className="text-sm font-black tracking-[.04em] text-slate-100 transition hover:text-lime-200">
                {item.project} <span className="font-mono text-[8px] text-slate-600">↗ STATUS</span>
              </a>
            ) : (
              <h3 className="text-sm font-black tracking-[.04em] text-slate-100">{item.project}</h3>
            )}
            <span className={`font-mono text-[8px] tracking-[.09em] ${item.tone}`}>{item.maturity}</span>
            <p className="text-[11px] leading-5 text-slate-400">{item.evidence}</p>
            <p className="border-l border-white/10 pl-4 font-mono text-[8px] leading-4 text-slate-500">{item.presentation}</p>
          </article>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border border-white/10 bg-[#0b0e0c] px-5 py-4 font-mono text-[8px] tracking-[.08em] text-slate-500">
        <span>RULE // EMBELLISH PRESENTATION, NEVER VALIDATION.</span>
        <a className="text-lime-200 hover:text-lime-100" href="https://github.com/thotsl4yer69/mz1312/blob/main/REPOSITORY_POLICY.md" target="_blank" rel="noreferrer">
          READ THE MATURITY / PROVENANCE POLICY ↗
        </a>
      </div>
    </section>
  );
}
