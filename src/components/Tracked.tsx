/* Breadth, shown rather than counted: the everyday conditions and the
   markers behind them drift past, and one marker's own history sits on
   top of them coming back into range. Worded as markers behind
   conditions, never as detecting them; Ayussetu is not a diagnostic
   tool. */

const conditions = [
  "High cholesterol",
  "Type 2 diabetes",
  "Prediabetes",
  "Thyroid imbalance",
  "Anaemia",
  "Vitamin D deficiency",
  "Vitamin B12 deficiency",
  "Fatty liver",
  "Kidney function",
  "High blood pressure",
];

const markers = [
  "Triglycerides",
  "Liver enzymes",
  "Haemoglobin",
  "TSH",
  "Creatinine",
  "eGFR",
  "HbA1c",
  "Fasting glucose",
  "HDL",
  "Bilirubin",
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className={`flex w-max whitespace-nowrap ${reverse ? "ticker-row-rev" : "ticker-row"}`}>
      {[0, 1].map((copy) => (
        <span key={copy} aria-hidden={copy === 1} className="flex">
          {items.map((c) => (
            <span key={c} className="flex items-center gap-11 pr-11 text-[1.15rem] text-slate md:text-[1.3rem]">
              {c}
              <span className="h-[5px] w-[5px] rounded-full bg-line-strong" />
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}

const checks = ["Your own baseline", "Every report, compared", "Explained in plain language"];

export function Tracked() {
  return (
    <section id="tracked" className="overflow-hidden border-b border-line bg-mist">
      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <h2 className="font-display text-[clamp(2.3rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            Follow the markers behind <em className="text-amber">everyday conditions</em>
          </h2>
          <ul className="mt-6 flex flex-col items-center gap-2.5 text-[0.95rem] text-slate sm:flex-row sm:justify-center sm:gap-7">
            {checks.map((c) => (
              <li key={c} className="inline-flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C25E00" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="9" cy="9" r="7.5" />
                  <path d="m5.8 9 2.2 2.2 4.2-4.4" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-14 h-[26rem] md:mt-16 md:h-[17rem]">
          <div className="absolute inset-x-0 top-[19.5rem] flex flex-col gap-6 md:top-[4.3rem] md:gap-12">
            <Row items={conditions} />
            <Row items={markers} reverse />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--color-mist),transparent_18%,transparent_82%,var(--color-mist))]" />

          <div className="absolute left-1/2 top-0 z-10 h-[17rem] w-[min(22.5rem,88vw)] -translate-x-1/2 rounded-[1.4rem] border border-line bg-white px-5 py-5 shadow-[0_30px_60px_-30px_rgba(18,29,51,0.35)]">
            <div className="flex items-baseline justify-between">
              <span className="text-[0.9rem] font-semibold text-ink">Vitamin D</span>
              <span className="eyebrow !text-[0.62rem] text-sage">Back in range</span>
            </div>
            <svg viewBox="0 0 316 196" className="mt-2 h-[12.25rem] w-full" aria-label="Vitamin D across three reports: 14 in March, 22 in June, 34 in October, back in range">
              <rect x="40" y="10" width="276" height="86" fill="#E5F3EC" rx="6" />
              <text x="0" y="56" fontSize="9" fill="#2E8A62" fontFamily="var(--font-mono)">IN</text>
              <text x="0" y="68" fontSize="9" fill="#2E8A62" fontFamily="var(--font-mono)">RANGE</text>
              <text x="0" y="140" fontSize="9" fill="#7A8496" fontFamily="var(--font-mono)">BELOW</text>
              <line x1="40" y1="96" x2="316" y2="96" stroke="#D5DCE6" strokeDasharray="3 4" />
              <polyline points="80,150 180,118 280,62" fill="none" stroke="#1F3050" strokeWidth="1.6" />
              <circle cx="80" cy="150" r="5" fill="#FF8B0B" />
              <circle cx="180" cy="118" r="5" fill="#FF8B0B" />
              <circle cx="280" cy="62" r="12" fill="none" stroke="#2E8A62" strokeOpacity="0.3" />
              <circle cx="280" cy="62" r="5.5" fill="#2E8A62" />
              <text x="80" y="186" fontSize="10" textAnchor="middle" fill="#7A8496">Mar · 14</text>
              <text x="180" y="186" fontSize="10" textAnchor="middle" fill="#7A8496">Jun · 22</text>
              <text x="280" y="186" fontSize="10" textAnchor="middle" fill="#1F3050" fontWeight="600">Oct · 34</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
