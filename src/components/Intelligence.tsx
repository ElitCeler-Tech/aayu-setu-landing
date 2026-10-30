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
/* One illustration per stage, drawn for what that stage's words say.
   Motion classes (hi-*) live in globals.css and stop for reduced motion. */

const box = "w-full rounded-xl border border-white/10 bg-white/[0.06]";

function Ic({ d, c = "#fff", s = 16 }: { d: string; c?: string; s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/* Understand: four sources joining into one record, and the pattern that
   only shows once they are together. */
function Connect() {
  const src = [
    { k: "Lab report", d: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7", y: 14 },
    { k: "Prescription", d: "M5 13.5h14a3 3 0 0 0 0-6H5a3 3 0 0 0 0 6ZM12 7.5v6", y: 58 },
    { k: "Wearable", d: "M8 6h8v12H8zM10 3h4M10 21h4M11 10l1 2 1-1", y: 102 },
    { k: "Daily habits", d: "M13 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM10 21l2-6 3 3v3M9 12l3-4 3 3 3 1", y: 146 },
  ];
  return (
    <div className="relative h-[11.5rem] w-full">
      <svg viewBox="0 0 300 184" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {src.map((x, i) => (
          <path key={x.k} className="hi-flow" style={{ animationDelay: `${i * 0.35}s` }} d={`M112 ${x.y + 16} C 150 ${x.y + 16}, 150 92, 182 92`} fill="none" stroke="rgba(255,177,92,0.7)" strokeWidth="1.5" strokeDasharray="4 6" />
        ))}
      </svg>
      {src.map((x) => (
        <div key={x.k} className="absolute left-0 flex w-[37%] items-center gap-2 rounded-lg border border-white/10 bg-white/[0.07] px-2.5 py-1.5" style={{ top: x.y }}>
          <Ic d={x.d} c="#FFB15C" s={14} />
          <span className="truncate text-[0.72rem] text-white/85">{x.k}</span>
        </div>
      ))}
      <div className="absolute right-0 top-1/2 w-[38%] -translate-y-1/2 rounded-xl bg-white p-3 text-ink">
        <p className="font-mono text-[0.56rem] uppercase tracking-[0.1em] text-mute">One record</p>
        <p className="mt-1 text-[0.72rem] font-semibold">LDL, three reports</p>
        <svg viewBox="0 0 100 34" className="mt-1 h-8 w-full" aria-hidden="true">
          <path className="hi-draw" pathLength={100} d="M4 28 L50 20 L96 6" fill="none" stroke={orange} strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="96" cy="6" r="3.5" fill={orange} />
        </svg>
        <p className="text-[0.62rem] font-semibold text-amber">Pattern: rising</p>
      </div>
    </div>
  );
}

/* Act: this month's focus, as actions that are switched on, each with a
   reason and a reminder. */
function Focus() {
  const acts = [
    { t: "Walk 20 min after dinner", s: "Reminder 8:30 pm", on: true },
    { t: "Swap the evening biscuit", s: "Readings rise after dinner", on: true },
    { t: "Retest HbA1c in January", s: "Reminder set", on: false },
  ];
  return (
    <div className="w-full">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-white/50">This month&rsquo;s focus</span>
        <span className="hi-ring grid h-7 w-7 place-items-center rounded-full bg-white/10">
          <Ic d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21h4" c="#FFB15C" s={14} />
        </span>
      </div>
      <ul className="space-y-2">
        {acts.map((a, i) => (
          <li key={a.t} className={`${box} flex items-center gap-3 px-3.5 py-2.5`}>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[0.8rem] font-semibold text-white">{a.t}</span>
              <span className="block text-[0.66rem] text-white/50">{a.s}</span>
            </span>
            <span className={`relative h-5 w-9 shrink-0 rounded-full ${a.on ? "" : "bg-white/15"}`} style={a.on ? { background: orange } : undefined}>
              <span className="hi-toggle absolute top-0.5 h-4 w-4 rounded-full bg-white" style={{ left: a.on ? 18 : 2, animationDelay: `${i * 0.3}s` }} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Measure: behaviour and health on one timeline, so the weeks line up. */
function Tracks() {
  const days = [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0];
  return (
    <div className="w-full">
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-white/50">Behaviour · evening walks</p>
      <div className="mt-2 flex gap-1">
        {days.map((d, i) => (
          <span key={i} className="hi-pop h-5 flex-1 rounded-[4px]" style={{ background: d ? green : "rgba(255,255,255,0.12)", animationDelay: `${i * 0.06}s` }} />
        ))}
      </div>
      <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-white/50">Health · triglycerides, mg/dL</p>
      <svg viewBox="0 0 300 70" className="mt-1 h-[4.4rem] w-full" aria-hidden="true">
        <path className="hi-draw" pathLength={100} d="M6 14 L100 26 L200 42 L294 54" fill="none" stroke={green} strokeWidth="2.4" strokeLinecap="round" />
        {[[6, 14, "210"], [100, 26, "194"], [200, 42, "181"], [294, 54, "168"]].map(([x, y, v]) => (
          <g key={String(v)}>
            <circle cx={Number(x)} cy={Number(y)} r="3.5" fill={green} />
            <text x={Math.min(Number(x), 280)} y={Number(y) + 15} fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="middle">{v}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* Learn: an insight, drawn as the comparison it came from. */
function Insight() {
  const rows = [
    { k: "Evening walk weeks", v: 100, n: "−18" },
    { k: "Morning walk weeks", v: 40, n: "−7" },
    { k: "No walk weeks", v: 6, n: "−1" },
  ];
  return (
    <div className="w-full">
      <div className={`${box} flex items-start gap-3 p-3.5`}>
        <span className="hi-glow grid h-9 w-9 shrink-0 place-items-center rounded-full" style={{ background: "rgba(255,177,92,0.18)" }}>
          <Ic d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" c="#FFB15C" s={17} />
        </span>
        <span>
          <span className="block font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[#FFB15C]">What works for you</span>
          <span className="mt-0.5 block text-[0.84rem] font-semibold text-white">Evening walks move your numbers most</span>
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {rows.map((r, i) => (
          <div key={r.k}>
            <div className="flex justify-between text-[0.72rem]">
              <span className={i === 0 ? "text-white" : "text-white/60"}>{r.k}</span>
              <span className="font-mono" style={{ color: i === 0 ? green : "rgba(255,255,255,0.5)" }}>{r.n}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-white/10">
              <div className="hi-grow h-1.5 rounded-full" style={{ width: `${r.v}%`, background: i === 0 ? green : "rgba(255,255,255,0.35)", animationDelay: `${i * 0.2}s` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Adapt: last month's plan turning into next month's, and round again. */
function Refine() {
  return (
    <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3">
      <div className={`${box} p-3`}>
        <p className="font-mono text-[0.56rem] uppercase tracking-[0.1em] text-white/45">Last plan</p>
        {["Evening walk", "Morning walk", "No biscuit"].map((x, i) => (
          <p key={x} className={`mt-1.5 text-[0.74rem] ${i === 1 ? "text-white/40 line-through" : "text-white/80"}`}>{x}</p>
        ))}
      </div>
      <span className="hi-spin grid h-9 w-9 place-items-center rounded-full" style={{ background: orange }}>
        <Ic d="M20 11a8 8 0 0 0-14.9-4M4 4v4h4M4 13a8 8 0 0 0 14.9 4M20 20v-4h-4" s={16} />
      </span>
      <div className="rounded-xl bg-white p-3 text-ink">
        <p className="font-mono text-[0.56rem] uppercase tracking-[0.1em] text-sage">Next plan</p>
        {[["Keep", "Evening walk"], ["Add", "Weekend walk"], ["Keep", "No biscuit"]].map(([k, x], i) => (
          <p key={x} className="hi-slide mt-1.5 flex items-center gap-1.5 text-[0.74rem] font-semibold" style={{ animationDelay: `${0.4 + i * 0.2}s` }}>
            <span className="rounded px-1 font-mono text-[0.52rem] uppercase" style={{ background: k === "Add" ? "#FFF1E2" : "#E5F3EC", color: k === "Add" ? "#C25E00" : "#2E8A62" }}>{k}</span>
            {x}
          </p>
        ))}
      </div>
    </div>
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
    visual: <Connect />,
  },
  {
    title: "Act",
    body: "Take meaningful, personalised actions, set around your readings and what suits your day.",
    stat: "3 steps",
    statLabel: "chosen for this month",
    bg: "#22365A",
    visual: <Focus />,
  },
  {
    title: "Measure",
    body: "Track behaviour and health changes: what you did, and what your numbers did in the same weeks.",
    stat: "12/15",
    statLabel: "evening walks this month",
    bg: "#263B62",
    visual: <Tracks />,
  },
  {
    title: "Learn",
    body: "Discover individual patterns and responses: which changes actually move your numbers.",
    stat: "−18",
    statLabel: "triglycerides, mg/dL, in weeks with evening walks",
    bg: "#1B2B4A",
    visual: <Insight />,
  },
  {
    title: "Adapt",
    body: "Refine the next recommendation toward what worked for you, and the cycle continues.",
    stat: "210 → 168",
    statLabel: "triglycerides since the loop began",
    bg: "#16233D",
    visual: <Refine />,
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
