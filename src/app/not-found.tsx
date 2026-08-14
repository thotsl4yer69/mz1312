import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#070908] px-5 text-slate-100">
      <div className="w-full max-w-4xl border border-white/10 bg-[#0b0e0c] p-7 sm:p-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[8px] tracking-[.14em] text-slate-600">
          <span>MZ_ROUTER://404</span><span>PATH NOT IN BUILD GRAPH</span>
        </div>
        <div className="grid gap-10 py-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div className="font-mono text-[110px] font-black leading-none tracking-[-.1em] text-lime-300 sm:text-[170px]">404</div>
          <div>
            <span className="font-mono text-[9px] font-bold tracking-[.16em] text-lime-200">ROUTE FAILURE // SAFE STATE</span>
            <h1 className="mt-5 text-4xl font-black leading-none tracking-[-.05em] sm:text-6xl">THAT PATH ISN’T PART OF THE SYSTEM.</h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">The useful parts are still online: flagship builds, engineering case studies and the project brief route.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/" className="bg-lime-300 px-5 py-3 font-mono text-[9px] font-black tracking-[.13em] text-black">BACK TO THE LAB →</Link>
              <Link href="/start/" className="border border-white/15 px-5 py-3 font-mono text-[9px] font-bold tracking-[.13em] text-slate-300">START A BUILD</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
