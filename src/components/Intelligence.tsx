/* Health intelligence, as a bento of five tiles in the hero's dark room:
   every capability on screen at once, each one drawn rather than
   listed. Rings and lines draw themselves as the section scrolls in;
   without that support, or with reduced motion, they sit finished.

   Numbers agree with the rest of the page: LDL 128 in March to 164 in
   October, fasting sugar 98 to 118 (prediabetes, below the 126 cutoff),
   a Lab Score of 72 (Good, 60 to 79). The two scores are the app's
   own: Health Score from six vitals, Lab Score (the Swasth Score) from
   the latest lab panel. */

function Tile({ n, k, title, className = "", children }: { n: string; k: string; title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`flex flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm md:p-7 ${className}`}>
      <p className="eyebrow text-amber-light">
        <span className="text-white/35">{n}</span> {k}
      </p>
      <h3 className="mt-2.5 font-display text-[1.65rem] leading-tight text-white">{title}</h3>
      <div className="mt-5 flex-1">{children}</div>
    </div>
  );
}

/* --- scores ---------------------------------------------------------- */

function BigRing({ v, color, label, sub }: { v: number; color: string; label: string; sub: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-36 w-36 md:h-40 md:w-40">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
          <circle
            className="view-draw-ring"
            style={{ ["--v" as string]: v }}
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray={`${v} 100`}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center">
          <span>
            <span className="block font-display text-[3.2rem] leading-none text-white">{v}</span>
            <span className="mt-1 block font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/45">of 100</span>
          </span>
        </span>
      </div>
      <p className="mt-4 text-[1rem] font-semibold text-white">{label}</p>
      <p className="mt-1 max-w-[13rem] text-[0.78rem] leading-snug text-white/55">{sub}</p>
    </div>
  );
}

function Chips({ items }: { items: { k: string; ok: boolean }[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-1.5">
      {items.map((x) => (
        <span
          key={x.k}
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] ${
            x.ok ? "border-[#7FD3A8]/30 bg-[#7FD3A8]/10 text-[#9BE2BD]" : "border-cta/35 bg-cta/10 text-amber-light"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${x.ok ? "bg-[#7FD3A8]" : "bg-cta"}`} />
          {x.k}
        </span>
      ))}
    </div>
  );
}

function Scores() {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div className="grid grid-cols-2 gap-4">
        <BigRing v={81} color="#7FD3A8" label="Health Score" sub="From six everyday vitals you log or sync" />
        <BigRing v={72} color="#FF8B0B" label="Lab Score" sub="The Swasth Score, from your latest lab panel" />
      </div>
      <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
        <Chips
          items={[
            { k: "Heart rate", ok: true },
            { k: "Blood pressure", ok: true },
            { k: "Blood sugar", ok: false },
            { k: "Sleep", ok: true },
            { k: "Steps", ok: false },
            { k: "BMI", ok: true },
          ]}
        />
        <Chips
          items={[
            { k: "LDL", ok: false },
            { k: "Glucose", ok: false },
            { k: "Triglycerides", ok: false },
            { k: "Haemoglobin", ok: true },
            { k: "Creatinine", ok: true },
            { k: "Liver enzymes", ok: true },
          ]}
        />
      </div>
      <p className="text-[0.76rem] leading-relaxed text-white/45">
        Each marker is graded against the range for your age, and the ones
        that matter most weigh most. A Lab Score of 60 to 79 reads Good.
      </p>
    </div>
  );
}

/* --- trend ------------------------------------------------------------ */

function Trend() {
  const pts = [
    { l: "2024", v: 112 },
    { l: "2025", v: 121 },
    { l: "Mar", v: 128 },
    { l: "Jun", v: 146 },
    { l: "Oct", v: 164 },
  ];
  const x = (i: number) => 24 + i * 108;
  const y = (v: number) => 128 - (v - 90) * 1.35;
  const line = pts.map((p, i) => `${x(i)} ${y(p.v)}`).join(" L");
  return (
    <div>
      <svg viewBox="0 0 480 150" className="h-auto w-full" aria-label="LDL across five reports: 112, 121, 128, 146, 164 mg/dL">
        <defs>
          <linearGradient id="ldl-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF8B0B" stopOpacity="0.28" />
            <stop offset="1" stopColor="#FF8B0B" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y={y(100)} width="480" height={128 - y(100)} fill="rgba(127,211,168,0.1)" rx="6" />
        <text x="472" y={y(100) + 13} fontSize="9" textAnchor="end" fill="#7FD3A8" fontFamily="var(--font-mono)">HEALTHY, UNDER 100</text>
        <path d={`M${line} L${x(4)} 128 L${x(0)} 128 Z`} fill="url(#ldl-fill)" />
        <path className="view-draw" pathLength={100} strokeDasharray="100" d={`M${line}`} fill="none" stroke="#FF8B0B" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
        {pts.map((p, i) => (
          <g key={p.l}>
            <circle cx={x(i)} cy={y(p.v)} r={i === 4 ? 6.5 : 4.5} fill={i === 4 ? "#FF8B0B" : "#0D1628"} stroke="#FF8B0B" strokeWidth="2" />
            <text x={x(i)} y={y(p.v) - 11} fontSize="11" textAnchor="middle" fill="#fff" fontWeight="600">{p.v}</text>
            <text x={x(i)} y="146" fontSize="10" textAnchor="middle" fill="rgba(255,255,255,0.45)">{p.l}</text>
          </g>
        ))}
      </svg>
      <p className="mt-3 text-[0.84rem] text-white/60">
        <span className="font-semibold text-white">LDL up 52 mg/dL across five reports.</span> Each looked only a little high on its own.
      </p>
    </div>
  );
}

/* --- risk ------------------------------------------------------------- */

function Risk() {
  // 70 to 140 mg/dL laid across the bar
  const pct = (v: number) => ((v - 70) / 70) * 100;
  const reads = [
    { m: "Jan", v: 98 },
    { m: "May", v: 108 },
    { m: "Oct", v: 118 },
  ];
  return (
    <div>
      <div className="relative pt-10">
        <div className="flex h-3 overflow-hidden rounded-full">
          <span className="bg-[#7FD3A8]/70" style={{ width: `${pct(100)}%` }} />
          <span className="bg-amber-light/70" style={{ width: `${pct(126) - pct(100)}%` }} />
          <span className="flex-1 bg-cta/90" />
        </div>
        {reads.map((r, i) => (
          <div key={r.m} className="absolute top-0 -translate-x-1/2 text-center" style={{ left: `${pct(r.v)}%` }}>
            <span className={`block text-[0.78rem] font-semibold leading-none ${i === 2 ? "text-white" : "text-white/55"}`}>{r.v}</span>
            <span className={`block text-[0.58rem] ${i === 2 ? "text-white/70" : "text-white/35"}`}>{r.m}</span>
            <span className={`mx-auto mt-1 block h-[1.4rem] w-[3px] rounded-full ${i === 2 ? "bg-white" : "bg-white/35"}`} />
          </div>
        ))}
        <div className="mt-2.5 grid font-mono text-[0.58rem] uppercase tracking-[0.06em] text-white/45" style={{ gridTemplateColumns: `${pct(100)}fr ${pct(126) - pct(100)}fr ${100 - pct(126)}fr` }}>
          <span>Normal</span>
          <span>Prediabetes</span>
          <span>Diabetes</span>
        </div>
      </div>
      <div className="mt-6 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5">
        <span className="grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-lg bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ayussetu-logo-white.png" alt="" width={28} height={28} />
        </span>
        <p className="text-[0.84rem] leading-relaxed text-white/75">
          Fasting sugar is up 20 mg/dL this year and now in the prediabetes
          range, 100 to 125. <span className="font-semibold text-white">Worth discussing with your doctor.</span>
        </p>
      </div>
    </div>
  );
}

/* --- history ---------------------------------------------------------- */

function History() {
  const sources = ["Lab PDF", "WhatsApp", "Phone photo", "Email", "Prescription", "Home BP"];
  const latest = [
    { t: "Lipid profile", s: "Lab PDF", d: "14 Oct" },
    { t: "Prescription, Dr S. Rao", s: "Photo", d: "02 Oct" },
    { t: "Blood pressure 128/82", s: "Logged at home", d: "18 Sep" },
  ];
  return (
    <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
      <div>
        <p className="font-display text-[3.4rem] leading-none text-white">34</p>
        <p className="mt-1.5 text-[0.78rem] text-white/55">records, from 6 sources</p>
        <div className="mt-3 flex max-w-[12rem] flex-wrap gap-1">
          {sources.map((s) => (
            <span key={s} className="rounded-md border border-white/10 px-1.5 py-0.5 text-[0.62rem] text-white/55">{s}</span>
          ))}
        </div>
      </div>
      <ul className="space-y-2">
        {latest.map((l) => (
          <li key={l.t} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2.5">
            <span className="min-w-0">
              <span className="block truncate text-[0.82rem] font-semibold text-white">{l.t}</span>
              <span className="block text-[0.68rem] text-white/45">{l.s}</span>
            </span>
            <span className="shrink-0 font-mono text-[0.66rem] text-white/45">{l.d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --- actions ---------------------------------------------------------- */

function Plan() {
  const plan = [
    { t: "Walk 20 minutes after dinner", s: "Evenings suit you best", done: 12, of: 15 },
    { t: "Metformin, as prescribed", s: "After breakfast", done: 28, of: 30 },
    { t: "Retest HbA1c and fasting sugar", s: "Due in January", done: 0, of: 1 },
  ];
  return (
    <div className="space-y-3">
      {plan.map((p) => (
        <div key={p.t}>
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[0.86rem] font-semibold text-white">{p.t}</span>
            <span className="shrink-0 font-mono text-[0.68rem] text-white/50">{p.of === 1 ? "Upcoming" : `${p.done}/${p.of}`}</span>
          </div>
          <p className="text-[0.7rem] text-white/45">{p.s}</p>
          <div className="mt-1.5 h-1.5 rounded-full bg-white/10">
            <div className="view-grow h-1.5 rounded-full bg-[#7FD3A8]" style={{ width: `${Math.max((p.done / p.of) * 100, 2)}%` }} />
          </div>
        </div>
      ))}
      <p className="pt-1 text-[0.76rem] text-white/50">
        Fasting sugar since the walks began: <span className="font-semibold text-[#9BE2BD]">118 → 108</span>
      </p>
    </div>
  );
}

export function Intelligence() {
  return (
    <section id="intelligence" className="hero-room relative overflow-hidden border-b border-line text-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-amber-light">Health intelligence</p>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-balance">
              Your records, <em className="text-amber-light">read for you</em>
            </h2>
          </div>
          <p className="max-w-sm text-[0.98rem] leading-relaxed text-white/60">
            Five things Ayussetu does with the reports you already have, all
            from one record you hold.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          <Tile n="01" k="Scores" title="Two numbers, one picture" className="md:col-span-2 md:row-span-2">
            <Scores />
          </Tile>
          <Tile n="02" k="Longitudinal trends" title="See the direction, not one reading" className="md:col-span-2">
            <Trend />
          </Tile>
          <Tile n="03" k="Risk awareness" title="Flagged early, explained plainly" className="md:col-span-2">
            <Risk />
          </Tile>
          <Tile n="04" k="Unified history" title="Everything, in one record" className="md:col-span-2">
            <History />
          </Tile>
          <Tile n="05" k="Preventive actions" title="Steps that fit, tracked" className="md:col-span-2">
            <Plan />
          </Tile>
        </div>

        <div className="mt-10 text-center">
          <a href="#ai" className="inline-block rounded-full border border-white/20 px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:border-white/50">
            Meet Ayu, who explains it &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
