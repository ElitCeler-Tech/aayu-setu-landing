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

/* Act: the steps chosen, before any are done. */
function Steps() {
  const steps = [
    { t: "Walk 20 minutes after dinner", s: "Evenings suit you best" },
    { t: "Swap the evening biscuit, keep the chai", s: "Readings rise most after dinner" },
    { t: "Retest HbA1c in January", s: "Three months after your last report" },
  ];
  return (
    <ul className="w-full space-y-2">
      {steps.map((x, i) => (
        <li key={x.t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg font-mono text-[0.68rem] text-white" style={{ background: orange }}>{i + 1}</span>
          <span className="min-w-0">
            <span className="block text-[0.82rem] font-semibold text-white">{x.t}</span>
            <span className="block text-[0.68rem] text-white/50">{x.s}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/* Learn: what moved the numbers for this one person. */
function Lessons() {
  const rows = [
    { k: "Weeks with evening walks", v: 18, n: "−18 mg/dL" },
    { k: "Weeks with morning walks", v: 7, n: "−7 mg/dL" },
    { k: "Weeks with no walks", v: 1, n: "−1 mg/dL" },
  ];
  return (
    <div className="w-full">
      <p className="text-[0.72rem] text-white/55">Change in triglycerides, by kind of week</p>
      <div className="mt-3 space-y-3">
        {rows.map((r, i) => (
          <div key={r.k}>
            <div className="flex justify-between text-[0.8rem]">
              <span className={i === 0 ? "font-semibold text-white" : "text-white/70"}>{r.k}</span>
              <span className="font-mono text-[0.72rem]" style={{ color: i === 0 ? green : "rgba(255,255,255,0.55)" }}>{r.n}</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full" style={{ width: `${(r.v / 18) * 100}%`, background: i === 0 ? green : "rgba(255,255,255,0.35)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Adapt: the next plan, shaped by what was learned. */
function NextPlan() {
  const rows = [
    { tag: "Keep", t: "Evening walk, 20 minutes", c: green },
    { tag: "Add", t: "One more evening walk at the weekend", c: orange },
    { tag: "Drop", t: "Early morning walks, which you skipped", c: "rgba(255,255,255,0.45)" },
  ];
  return (
    <ul className="w-full space-y-2">
      {rows.map((r) => (
        <li key={r.t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5">
          <span className="w-12 shrink-0 rounded-md py-1 text-center font-mono text-[0.62rem] uppercase tracking-[0.08em] text-[#0D1628]" style={{ background: r.c }}>{r.tag}</span>
          <span className="text-[0.82rem] font-medium text-white">{r.t}</span>
        </li>
      ))}
      <li className="pt-1 text-center font-mono text-[0.62rem] uppercase tracking-[0.12em] text-white/45">↻ The cycle continues with your next report</li>
    </ul>
  );
}

/* --- the five cards: the AyusSetu Learning Loop -------------------------- */

const cards = [
  {
    title: "Understand",
    body: "Connect health data and identify patterns. Every report is read together, so a slow rise shows up as a pattern, not three separate numbers.",
    stat: "128 → 164",
    statLabel: "LDL, mg/dL, rising across reports",
    bg: "#1F3050",
    visual: <Trend />,
  },
  {
    title: "Act",
    body: "Take meaningful, personalised actions, set around your readings and what suits your day.",
    stat: "3 steps",
    statLabel: "chosen for this month",
    bg: "#22365A",
    visual: <Steps />,
  },
  {
    title: "Measure",
    body: "Track behaviour and health changes: what you did, and what your numbers did in the same weeks.",
    stat: "12/15",
    statLabel: "evening walks this month",
    bg: "#263B62",
    visual: <Plan />,
  },
  {
    title: "Learn",
    body: "Discover individual patterns and responses: which changes actually move your numbers.",
    stat: "−18",
    statLabel: "triglycerides, mg/dL, in weeks with evening walks",
    bg: "#1B2B4A",
    visual: <Lessons />,
  },
  {
    title: "Adapt",
    body: "Refine the next recommendation toward what worked for you, and the cycle continues.",
    stat: "210 → 168",
    statLabel: "triglycerides since the loop began",
    bg: "#16233D",
    visual: <NextPlan />,
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
            The AyusSetu Learning Loop: five stages that turn your reports
            into steps, and your results into better steps.
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
                  <p className="eyebrow text-amber-light">Stage {String(i + 1).padStart(2, "0")} of 05</p>
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
