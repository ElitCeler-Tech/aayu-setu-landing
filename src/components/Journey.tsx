import { FlowCard } from "./FlowCard";

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
          <div className="flex w-full flex-col-reverse gap-1.5">
            {Array.from({ length: y.n }).map((_, k) => (
              <span
                key={k}
                className={`seq seq-${i * 2 + (k >= 3 ? 1 : 0)} h-[1.05rem] rounded-[0.35rem] border ${
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
  { t: "Evening walk, 20 min", s: "After dinner", icon: "M13 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM10 21l2-6 3 3v3M9 12l3-4 3 3 3 1M8 17l2-5" },
  { t: "HbA1c retest", s: "In three months", icon: "M9 3v6l-4 9a1.5 1.5 0 0 0 1.4 2h11.2A1.5 1.5 0 0 0 19 18l-4-9V3M8 3h8" },
];

function Actions() {
  return (
    <div className="flex h-[10rem] flex-col justify-center gap-1.5 text-left">
      {plan.map((p, i) => (
        <div key={p.t} className={`plan-row plan-row-${i + 1} flex items-center gap-2.5 rounded-xl border border-line bg-white px-2.5 py-1.5`}>
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-amber-wash">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C25E00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d={p.icon} />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[0.76rem] font-semibold leading-tight text-ink">{p.t}</span>
            <span className="block truncate text-[0.66rem] leading-tight text-mute">{p.s}</span>
          </span>
          <span className={`plan-tick plan-tick-${i + 1} grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage-wash text-sage`}>
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
/* --- what goes wrong today: one small picture per problem ------------- */

function PChip({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  return (
    <span className="hp-jitter absolute whitespace-nowrap rounded-lg border border-line-strong bg-white px-2 py-1 text-[0.68rem] font-medium text-slate shadow-[0_6px_12px_-10px_rgba(18,29,51,0.6)]" style={style}>
      {children}
    </span>
  );
}

function PBig({ value, note }: { value: React.ReactNode; note: string }) {
  return (
    <div className="grid h-full place-items-center text-center">
      <div>
        <span className="font-display text-[2.6rem] leading-none text-ink">{value}</span>
        <div className="hp-blink mt-1 text-[0.72rem] text-[#D9403D]">{note}</div>
      </div>
    </div>
  );
}

const PScattered = () => (
  <>
    <PChip style={{ left: "4%", top: 6 }}>📄 Paper report</PChip>
    <PChip style={{ left: "52%", top: 22, animationDelay: "0.3s" }}>💬 WhatsApp</PChip>
    <PChip style={{ left: "10%", top: 52, animationDelay: "0.6s" }}>✉️ Email PDF</PChip>
    <PChip style={{ left: "56%", top: 70, animationDelay: "0.9s" }}>📱 Photo</PChip>
  </>
);

const PLost = () => (
  <>
    {["12%", "42%", "72%"].map((x, i) => (
      <span key={x} className="hp-fall absolute top-0 h-11 w-9 rounded-md border-[1.5px] border-dashed border-[#F1A9A7] bg-white" style={{ left: x, animationDelay: `${i * 0.7}s` }} />
    ))}
    <span className="absolute bottom-0 left-0 text-[0.72rem] text-[#D9403D]">Last year&rsquo;s report? Gone.</span>
  </>
);

const PGeneric = () => (
  <div className="grid h-full content-center gap-2.5">
    {["Exercise 30 minutes a day", "Eat less sugar", "Get your sugar checked"].map((g, i) => (
      <span key={g} className="relative w-fit rounded-lg border border-line-strong bg-white px-3 py-2 text-[0.78rem] text-slate">
        {g}
        <span className="hp-strike absolute inset-x-3 top-1/2 h-px bg-[#D9403D]/70" style={{ animationDelay: `${i * 0.35}s` }} />
      </span>
    ))}
  </div>
);

const problemArt = [
  <PScattered key="1" />,
  <PLost key="2" />,
  <PBig key="3" value="5.8" note="HbA1c on its own. Fine?" />,
  <PBig key="4" value="164" note="High? Normal?" />,
  <PGeneric key="5" />,
  <PBig key="6" value={<>210 → <span className="hp-blink text-[#D9403D]">?</span></>} note="Did the walks help?" />,
];

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

        {/* Six cards: in each, the problem turns into the answer in place. */}
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <FlowCard key={s.t} n={i + 1} problem={s.p} problemArt={problemArt[i]} title={s.t} body={s.b} art={s.art} />
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
