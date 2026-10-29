/* Health intelligence: the five capabilities the deck names, with the
   two that need showing rather than telling drawn out. The Swasth Score
   is described as it is actually built (lab values only, weighted,
   with the label bands the app uses), and the sugar example stops at
   risk awareness: it points at a doctor, it does not diagnose. */

const capabilities = [
  { t: "Unified health history", b: "Every report, prescription and reading, in one record you hold." },
  { t: "Lab reports and longitudinal trends", b: "Markers read out of each report and followed across years." },
  { t: "Swasth Score", b: "One number from your latest lab panel, so change is easy to see." },
  { t: "Health insights and risk awareness", b: "What is drifting, explained early, while there is time to act." },
  { t: "Personalised preventive actions", b: "Steps set around your readings, your routine and your doctor's plan." },
];

function SwasthScore() {
  const factors = [
    { k: "Glucose", w: 74, ok: false },
    { k: "LDL cholesterol", w: 52, ok: false },
    { k: "Kidney and liver", w: 92, ok: true },
    { k: "Blood counts", w: 88, ok: true },
  ];
  return (
    <div className="rounded-3xl border border-line bg-white p-6">
      <div className="flex items-center gap-5">
        <div className="relative grid h-[5.5rem] w-[5.5rem] shrink-0 place-items-center rounded-full bg-[conic-gradient(#FF8B0B_0_72%,#EEF2F7_72%_100%)]">
          <span className="grid h-[4.4rem] w-[4.4rem] place-items-center rounded-full bg-white font-display text-[2.2rem] text-ink">72</span>
        </div>
        <div>
          <p className="eyebrow text-mute">Swasth Score</p>
          <p className="mt-1 text-[1.15rem] font-semibold text-ink">Good</p>
          <p className="mt-0.5 text-[0.8rem] leading-snug text-slate">From your latest lab panel, each marker weighted.</p>
        </div>
      </div>
      <div className="mt-5 space-y-2.5 border-t border-line pt-5">
        {factors.map((f) => (
          <div key={f.k}>
            <div className="flex justify-between text-[0.74rem]">
              <span className="text-slate">{f.k}</span>
              <span className={f.ok ? "text-sage" : "text-amber"}>{f.ok ? "In range" : "Out of range"}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-mist">
              <div className={`h-1.5 rounded-full ${f.ok ? "bg-sage" : "bg-cta"}`} style={{ width: `${f.w}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SugarExample() {
  const pts = [
    { d: "Jan", v: 98, x: 40 },
    { d: "May", v: 112, x: 150 },
    { d: "Oct", v: 126, x: 260 },
  ];
  const yOf = (v: number) => 150 - (v - 85) * 3;
  return (
    <div className="rounded-3xl border border-line bg-white p-6">
      <div className="flex items-baseline justify-between">
        <p className="text-[0.95rem] font-semibold text-ink">Fasting blood sugar</p>
        <p className="eyebrow !text-[0.6rem] text-amber">Rising</p>
      </div>
      <svg viewBox="0 0 300 175" className="mt-3 h-auto w-full" aria-label="Fasting blood sugar across three reports: 98 in January, 112 in May, 126 in October">
        <rect x="0" y={yOf(100)} width="300" height={150 - yOf(100)} fill="#E5F3EC" rx="4" />
        <rect x="0" y={yOf(126)} width="300" height={yOf(100) - yOf(126)} fill="#FFF1E2" rx="4" />
        <text x="296" y={yOf(100) + 14} fontSize="8.5" textAnchor="end" fill="#2E8A62" fontFamily="var(--font-mono)">NORMAL, UNDER 100</text>
        <text x="296" y={yOf(126) + 14} fontSize="8.5" textAnchor="end" fill="#A54F00" fontFamily="var(--font-mono)">100 TO 125</text>
        <path d={`M${pts.map((p) => `${p.x} ${yOf(p.v)}`).join(" L")}`} fill="none" stroke="#1F3050" strokeWidth="1.8" />
        {pts.map((p) => (
          <g key={p.d}>
            <circle cx={p.x} cy={yOf(p.v)} r="5" fill={p.v < 100 ? "#2E8A62" : "#FF8B0B"} />
            <text x={p.x} y={yOf(p.v) - 10} fontSize="10" textAnchor="middle" fill="#121D33" fontWeight="600">{p.v}</text>
            <text x={p.x} y="168" fontSize="9.5" textAnchor="middle" fill="#7A8496">{p.d}</text>
          </g>
        ))}
      </svg>
      <p className="mt-3 rounded-2xl bg-mist px-4 py-3 text-[0.84rem] leading-relaxed text-navy">
        Up 28 mg/dL across three reports this year, and now at the edge of
        the diabetes range. Worth discussing with your doctor soon.
      </p>
    </div>
  );
}

export function Intelligence() {
  return (
    <section id="intelligence" className="border-b border-line bg-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14 md:py-28">
        <div>
          <p className="eyebrow text-amber">Health intelligence</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            Your records, <em className="text-amber">read for you</em>
          </h2>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {capabilities.map((c, i) => (
              <li key={c.t} className="flex gap-4 py-4">
                <span className="font-mono text-[0.72rem] leading-6 text-amber">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-[0.98rem] font-semibold text-ink">{c.t}</span>
                  <span className="mt-0.5 block text-[0.86rem] leading-relaxed text-slate">{c.b}</span>
                </span>
              </li>
            ))}
          </ol>
          <a href="#ai" className="mt-8 inline-block text-[0.95rem] font-semibold text-navy underline decoration-line-strong underline-offset-[6px] transition hover:decoration-navy">
            Explore health intelligence &rarr;
          </a>
        </div>

        <div className="grid content-start gap-5">
          <SugarExample />
          <SwasthScore />
        </div>
      </div>
    </section>
  );
}
