/* How it works, as the deck lays it out: the journey from records
   scattered across paper, WhatsApp, a phone and an inbox, to something
   a person can act on. Six steps, each with a small picture of itself;
   the first one moves, because "bring it all together" is a motion
   before it is a sentence. */

const sources = [
  { t: "Paper report", d: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7" },
  { t: "WhatsApp", d: "M4 20l1.3-4A8 8 0 1 1 8.5 19zM9 10c0 3 2 5 5 5l1.5-1.5-2-1-1 1c-1 0-2-1-2-2l1-1-1-2z" },
  { t: "Phone photo", d: "M8 3h8a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8 3ZM11 18h2" },
  { t: "Email", d: "M3.5 6h17v12h-17zM3.5 6.5 12 13l8.5-6.5" },
];

function Gather() {
  return (
    <div className="relative h-[10rem]">
      {sources.map((s, i) => (
        <span
          key={s.t}
          className={`gather gather-${i + 1} absolute left-1 flex items-center gap-2 rounded-xl border border-line bg-white px-2.5 py-1.5 text-[0.7rem] font-medium text-slate shadow-[0_8px_18px_-12px_rgba(18,29,51,0.45)]`}
          style={{ top: `${0.1 + i * 2.35}rem` }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C25E00" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={s.d} />
          </svg>
          {s.t}
        </span>
      ))}
      <div className="absolute right-1 top-1/2 flex -translate-y-1/2 flex-col items-center">
        <span className="gather-box grid h-[4.5rem] w-[4.5rem] place-items-center overflow-hidden rounded-[1.1rem] bg-white shadow-[0_0_0_1px_var(--color-line),0_18px_36px_-18px_rgba(255,139,11,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ayussetu-logo-white.png" alt="" width={72} height={72} />
        </span>
        <span className="eyebrow mt-2.5 !text-[0.56rem] text-mute">One record</span>
      </div>
    </div>
  );
}

const years = [
  { y: "2023", n: 3 },
  { y: "2024", n: 5 },
  { y: "2025", n: 4 },
  { y: "2026", n: 6 },
];

function Yearly() {
  return (
    <div className="flex h-[10rem] items-end justify-between gap-3 px-2">
      {years.map((y, i) => (
        <div key={y.y} className="flex flex-1 flex-col items-center">
          <div className="flex w-full flex-col-reverse gap-1">
            {Array.from({ length: y.n }).map((_, k) => (
              <span
                key={k}
                className={`seq seq-${i * 2 + (k >= 3 ? 1 : 0)} h-[0.7rem] rounded-[0.3rem] border ${
                  i === years.length - 1 && k === y.n - 1 ? "border-cta bg-amber-wash" : "border-line-strong bg-white"
                }`}
              />
            ))}
          </div>
          <span className="mt-2 font-mono text-[0.68rem] text-mute">{y.y}</span>
        </div>
      ))}
    </div>
  );
}

function Trend() {
  const pts = [
    { y: "2022", v: 5.4, x: 18 },
    { y: "2023", v: 5.5, x: 64 },
    { y: "2024", v: 5.7, x: 110 },
    { y: "2025", v: 5.8, x: 156 },
    { y: "2026", v: 6.0, x: 202 },
  ];
  const yOf = (v: number) => 150 - (v - 5.3) * 110;
  return (
    <div className="h-[10rem]">
      <div className="flex items-baseline justify-between px-1">
        <span className="text-[0.78rem] font-semibold text-ink">HbA1c, year by year</span>
        <span className="font-mono text-[0.62rem] text-amber">RISING</span>
      </div>
      <svg viewBox="0 0 220 170" className="mt-1 h-[8.6rem] w-full" aria-label="HbA1c across five years: 5.4, 5.5, 5.7, 5.8, then 6.0">
        <rect x="0" y={yOf(5.7)} width="220" height={150 - yOf(5.7)} fill="#E5F3EC" rx="4" />
        <path className="draw-line" pathLength={100} d={`M${pts.map((p) => `${p.x} ${yOf(p.v)}`).join(" L")}`} fill="none" stroke="#1F3050" strokeWidth="1.8" strokeLinejoin="round" />
        {pts.map((p, i) => (
          <g key={p.y} className={`seq seq-${i * 2} seq-pop`}>
            <circle cx={p.x} cy={yOf(p.v)} r={i === pts.length - 1 ? 5 : 4} fill={p.v >= 5.7 ? "#FF8B0B" : "#2E8A62"} />
            <text x={p.x} y={yOf(p.v) - 9} fontSize="9" textAnchor="middle" fill="#4A5468" fontFamily="var(--font-mono)">{p.v.toFixed(1)}</text>
            <text x={p.x} y="166" fontSize="9" textAnchor="middle" fill="#7A8496">{p.y}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const flags = [
  { k: "LDL cholesterol", v: "164", s: "High", hot: true },
  { k: "Vitamin D", v: "14", s: "Low", hot: true },
  { k: "HbA1c", v: "6.0", s: "Watch", hot: false },
  { k: "Haemoglobin", v: "13.8", s: "In range", ok: true },
];

function Attention() {
  return (
    <div className="flex h-[10rem] flex-col justify-center gap-1.5">
      {flags.map((f, i) => (
        <div key={f.k} className={`seq seq-${i} seq-slide flex items-center justify-between rounded-xl border border-line bg-white px-3 py-1.5`}>
          <span className="text-[0.78rem] font-medium text-ink">{f.k}</span>
          <span className="flex items-center gap-2.5">
            <span className="font-mono text-[0.72rem] text-slate">{f.v}</span>
            <span
              className={`seq seq-${5 + i} seq-pop rounded-full px-2 py-0.5 text-[0.62rem] font-semibold ${
                f.hot ? "bg-amber-wash text-amber" : f.ok ? "bg-sage-wash text-sage" : "bg-mist text-slate"
              }`}
            >
              {f.s}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

const plan = [
  { t: "Metformin 500mg", s: "8:00 AM, after food", icon: "M5 13.5h14a3 3 0 0 0 0-6H5a3 3 0 0 0 0 6ZM12 7.5v6" },
  { t: "Evening walk, 20 minutes", s: "After dinner", icon: "M13 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM10 21l2-6 3 3v3M9 12l3-4 3 3 3 1M8 17l2-5" },
  { t: "HbA1c retest", s: "In three months", icon: "M9 3v6l-4 9a1.5 1.5 0 0 0 1.4 2h11.2A1.5 1.5 0 0 0 19 18l-4-9V3M8 3h8" },
];

function Actions() {
  return (
    <div className="flex h-[10rem] flex-col justify-center gap-2 text-left">
      {plan.map((p, i) => (
        <div key={p.t} className={`plan-row plan-row-${i + 1} flex items-center gap-3 rounded-2xl border border-line bg-white px-3 py-2.5`}>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[0.55rem] bg-amber-wash">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C25E00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d={p.icon} />
            </svg>
          </span>
          <span className="flex-1">
            <span className="block text-[0.78rem] font-semibold text-ink">{p.t}</span>
            <span className="block text-[0.68rem] text-mute">{p.s}</span>
          </span>
          <span className={`plan-tick plan-tick-${i + 1} grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage-wash text-sage`}>
            <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M6.2 11.8 2.9 8.5l1.1-1.1 2.2 2.2 5.6-5.6 1.1 1.1z" fill="currentColor" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}

function Progress() {
  return (
    <div className="flex h-[10rem] flex-col justify-center">
      <p className="text-[0.78rem] font-semibold text-ink">Triglycerides since July</p>
      <div className="mt-3 flex items-baseline gap-3">
        <span className="strike-in font-display text-[2.2rem] leading-none text-mute decoration-1">210</span>
        <span className="text-[1.1rem] text-faint">&rarr;</span>
        <span className="seq seq-4 seq-pop font-display text-[2.2rem] leading-none text-sage">168</span>
        <span className="text-[0.72rem] text-mute">mg/dL</span>
      </div>
      <svg viewBox="0 0 220 50" className="mt-4 h-12 w-full" aria-hidden="true">
        <path className="draw-line" pathLength={100} d="M4 10 L50 14 L96 22 L142 30 L188 36 L216 38" fill="none" stroke="#2E8A62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle className="seq seq-9 seq-pop" cx="216" cy="38" r="4" fill="#2E8A62" />
      </svg>
      <p className="mt-1 text-[0.72rem] text-mute">Three reports since the evening walks began.</p>
    </div>
  );
}

/* Each step is a problem people have today and how Ayussetu answers it:
   `p` is the problem, shown first with a red cross, then the answer. */
const steps = [
  { p: "Reports scattered across paper, WhatsApp and email", t: "Bring health records together", b: "Paper, WhatsApp, a photo on your phone, an email from the lab: all of it, in one place.", art: <Gather /> },
  { p: "Old reports lost, so there is no history to look back on", t: "Kept year by year", b: "Every report is filed by date, so your history builds into something you can look back across.", art: <Yearly /> },
  { p: "Each report read alone, so slow changes go unseen", t: "See trends over time", b: "One reading is a number. Five years of them is a direction you can see.", art: <Trend /> },
  { p: "Numbers with no meaning: is 164 bad, and for whom?", t: "Know what deserves attention", b: "What is out of range, what is drifting, and what is fine, at a glance.", art: <Attention /> },
  { p: "Advice written for everybody, so nobody follows it", t: "Take personalised actions", b: "Medicines, habits and retests, set around your own readings and routine.", art: <Actions /> },
  { p: "No way to tell if what you changed is working", t: "Track how you respond", b: "See whether what you changed is moving the numbers that matter.", art: <Progress /> },
];

export function Journey() {
  return (
    <section id="how" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center">
          <p className="eyebrow text-amber">How it works</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            From scattered records to <em className="text-amber">useful action</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-slate">
            Six things that go wrong with health records today, and how
            Ayussetu fixes each one.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="flex flex-col rounded-[1.4rem] border border-line bg-mist px-5 pb-5 pt-5">
              <div className="flex items-start gap-2.5 rounded-xl border border-[#F6C9C8] bg-[#FDECEC] px-3 py-2.5">
                <span className="mt-px grid h-[1.15rem] w-[1.15rem] shrink-0 place-items-center rounded-full bg-white text-[0.62rem] font-bold text-[#D9403D]">✕</span>
                <span>
                  <span className="block font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[#D9403D]">Today</span>
                  <span className="mt-0.5 block text-[0.8rem] leading-snug text-[#7A2E2C]">{s.p}</span>
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="grid h-[1.15rem] w-[1.15rem] shrink-0 place-items-center rounded-full bg-sage-wash text-[0.62rem] font-bold text-sage">✓</span>
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-sage">With Ayussetu · {String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-1.5 font-display text-[1.45rem] leading-tight text-ink">{s.t}</h3>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed text-slate">{s.b}</p>
              <div className="mt-auto pt-4">{s.art}</div>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <a href="#intelligence" className="inline-block rounded-full bg-navy px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:bg-ink">
            See how Ayussetu works
          </a>
        </div>
      </div>
    </section>
  );
}
