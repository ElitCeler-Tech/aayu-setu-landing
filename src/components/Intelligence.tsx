/* Health intelligence: five navy cards that stack as you scroll. Each
   card sticks a little lower than the one before, so the next slides up
   over it and the edges of the earlier ones stay showing; once all five
   are stacked the pile holds for a moment before the page moves on.

   Every card is the same shape (number and title on the left, a small
   picture on the right) and the copy comes from the list at the bottom,
   so changing text never touches the layout. Numbers agree with the
   rest of the page: LDL 112 to 164 across five reports, fasting sugar
   118 (prediabetes, below the 126 cutoff), Health Score 81, Lab Score 72. */

const green = "#7FD3A8";
const orange = "#FF8B0B";

/* --- the pictures on the right ----------------------------------------- */

function Records() {
  const rows = [
    { t: "Lipid profile", s: "Lab PDF", d: "14 Oct" },
    { t: "Prescription, Dr S. Rao", s: "Photo", d: "02 Oct" },
    { t: "Blood pressure 128/82", s: "Logged at home", d: "18 Sep" },
  ];
  return (
    <ul className="w-full space-y-2">
      {rows.map((r) => (
        <li key={r.t} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5">
          <span className="min-w-0">
            <span className="block truncate text-[0.82rem] font-semibold text-white">{r.t}</span>
            <span className="block text-[0.68rem] text-white/50">{r.s}</span>
          </span>
          <span className="shrink-0 font-mono text-[0.66rem] text-white/45">{r.d}</span>
        </li>
      ))}
    </ul>
  );
}

function Trend() {
  const v = [112, 121, 128, 146, 164];
  const x = (i: number) => 14 + i * 78;
  const y = (n: number) => 100 - (n - 95) * 1.2;
  const line = v.map((n, i) => `${x(i)} ${y(n)}`).join(" L");
  return (
    <svg viewBox="0 0 340 120" className="h-auto w-full" aria-label="LDL across five reports: 112, 121, 128, 146, 164 mg/dL">
      <rect x="0" y={y(100)} width="340" height={110 - y(100)} rx="6" fill="rgba(127,211,168,0.12)" />
      <text x="334" y={y(100) + 12} fontSize="8.5" textAnchor="end" fill={green} fontFamily="var(--font-mono)">HEALTHY, UNDER 100</text>
      <path d={`M${line}`} fill="none" stroke={orange} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
      {v.map((n, i) => (
        <g key={i}>
          <circle cx={x(i)} cy={y(n)} r={i === 4 ? 5.5 : 4} fill={i === 4 ? orange : "#1F3050"} stroke={orange} strokeWidth="2" />
          <text x={x(i)} y={y(n) - 9} fontSize="10" textAnchor="middle" fill="#fff" fontWeight="600">{n}</text>
        </g>
      ))}
    </svg>
  );
}

function Ring({ v, color, label }: { v: number; color: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[6.5rem] w-[6.5rem]">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="9" />
          <circle cx="60" cy="60" r="50" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" pathLength={100} strokeDasharray={`${v} 100`} />
        </svg>
        <span className="absolute inset-0 grid place-items-center font-display text-[2.2rem] text-white">{v}</span>
      </div>
      <span className="mt-2 text-[0.76rem] text-white/65">{label}</span>
    </div>
  );
}

function Scores() {
  return (
    <div className="flex w-full justify-center gap-8">
      <Ring v={81} color={green} label="Health Score" />
      <Ring v={72} color={orange} label="Lab Score" />
    </div>
  );
}

function Risk() {
  // 70 to 140 mg/dL across the bar
  const pct = (n: number) => ((n - 70) / 70) * 100;
  const reads = [
    { m: "Jan", v: 98 },
    { m: "May", v: 108 },
    { m: "Oct", v: 118 },
  ];
  return (
    <div className="w-full">
      <div className="relative pt-11">
        <div className="flex h-3 overflow-hidden rounded-full">
          <span style={{ width: `${pct(100)}%`, background: "rgba(127,211,168,0.75)" }} />
          <span style={{ width: `${pct(126) - pct(100)}%`, background: "rgba(255,177,92,0.75)" }} />
          <span className="flex-1" style={{ background: orange }} />
        </div>
        {reads.map((r, i) => (
          <div key={r.m} className="absolute top-0 -translate-x-1/2 text-center" style={{ left: `${pct(r.v)}%` }}>
            <span className={`block text-[0.8rem] font-semibold leading-none ${i === 2 ? "text-white" : "text-white/55"}`}>{r.v}</span>
            <span className={`block text-[0.6rem] ${i === 2 ? "text-white/70" : "text-white/40"}`}>{r.m}</span>
            <span className={`mx-auto mt-1 block h-6 w-[3px] rounded-full ${i === 2 ? "bg-white" : "bg-white/35"}`} />
          </div>
        ))}
        <div
          className="mt-2.5 grid font-mono text-[0.58rem] uppercase tracking-[0.06em] text-white/50"
          style={{ gridTemplateColumns: `${pct(100)}fr ${pct(126) - pct(100)}fr ${100 - pct(126)}fr` }}
        >
          <span>Normal</span>
          <span>Prediabetes</span>
          <span>Diabetes</span>
        </div>
      </div>
    </div>
  );
}

function Plan() {
  const plan = [
    { t: "Walk 20 minutes after dinner", done: 12, of: 15 },
    { t: "Metformin, as prescribed", done: 28, of: 30 },
    { t: "Retest HbA1c, January", done: 0, of: 1 },
  ];
  return (
    <div className="w-full space-y-3">
      {plan.map((p) => (
        <div key={p.t}>
          <div className="flex items-baseline justify-between gap-3 text-[0.8rem]">
            <span className="font-medium text-white">{p.t}</span>
            <span className="shrink-0 font-mono text-[0.66rem] text-white/50">{p.of === 1 ? "Upcoming" : `${p.done}/${p.of}`}</span>
          </div>
          <div className="mt-1.5 h-1.5 rounded-full bg-white/10">
            <div className="h-1.5 rounded-full" style={{ width: `${Math.max((p.done / p.of) * 100, 2)}%`, background: green }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* --- the five cards ------------------------------------------------------ */

const cards = [
  {
    title: "Unified health history",
    body: "Every report, prescription and reading in one record you hold, whatever it arrived as.",
    stat: "34",
    statLabel: "records from 6 sources",
    bg: "#1F3050",
    visual: <Records />,
  },
  {
    title: "Lab trends over time",
    body: "Markers read out of each report and followed across years, so drift is visible.",
    stat: "+52",
    statLabel: "LDL, mg/dL, across five reports",
    bg: "#22365A",
    visual: <Trend />,
  },
  {
    title: "Health Score and Lab Score",
    body: "One score from your everyday vitals, one from your lab reports.",
    stat: "81 · 72",
    statLabel: "Health Score · Lab Score",
    bg: "#263B62",
    visual: <Scores />,
  },
  {
    title: "Risk awareness",
    body: "What is drifting toward a risk, flagged early and explained plainly.",
    stat: "118",
    statLabel: "fasting sugar, prediabetes range",
    bg: "#1B2B4A",
    visual: <Risk />,
  },
  {
    title: "Preventive actions",
    body: "Steps set around your readings and routine, and tracked against your results.",
    stat: "12/15",
    statLabel: "evening walks this month",
    bg: "#16233D",
    visual: <Plan />,
  },
];

export function Intelligence() {
  return (
    <section id="intelligence" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 md:pt-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-amber">Health intelligence</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            Your records, <em className="text-amber">read for you</em>
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-slate">
            Five things Ayussetu does with the reports you already have.
          </p>
          <p className="mt-2 text-[0.76rem] text-mute">Example figures for illustration.</p>
        </div>

        {/* The stack. Each card sticks 18px lower than the last; the
            padding under the list lets the finished pile hold on screen
            before the section scrolls away. */}
        <ol className="mt-12 pb-[22vh]">
          {cards.map((c, i) => (
            <li
              key={c.title}
              className="sticky mb-6 overflow-hidden rounded-[1.75rem] text-white shadow-[0_-24px_50px_-30px_rgba(13,22,40,0.6)]"
              style={{ top: `${96 + i * 18}px`, background: c.bg }}
            >
              <span className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(255,139,11,0.28),transparent)]" />
              <div className="relative grid gap-8 p-7 md:min-h-[18.5rem] md:grid-cols-[1fr_1fr] md:items-center md:gap-12 md:p-10">
                <div>
                  <p className="eyebrow text-amber-light">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.05]">{c.title}</h3>
                  <p className="mt-3 max-w-md text-[0.94rem] leading-relaxed text-white/65">{c.body}</p>
                  <p className="mt-6 font-display text-[3.4rem] leading-none">{c.stat}</p>
                  <p className="mt-1.5 text-[0.78rem] text-white/50">{c.statLabel}</p>
                </div>
                <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
                  {c.visual}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
