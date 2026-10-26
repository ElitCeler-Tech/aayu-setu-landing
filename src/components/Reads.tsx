/* Breadth, shown rather than counted. Four statistics in boxes said the
   same thing and nobody believed them; the markers themselves drifting
   past are the claim and the evidence at once. */

const rows = [
  [
    "LDL cholesterol",
    "HDL cholesterol",
    "Total cholesterol",
    "Triglycerides",
    "Blood pressure",
    "Resting pulse",
    "Non HDL cholesterol",
    "VLDL",
  ],
  [
    "HbA1c",
    "Fasting glucose",
    "Post prandial glucose",
    "Weight",
    "BMI",
    "Waist",
    "Random blood sugar",
    "Sleep",
    "Steps",
  ],
  [
    "Creatinine",
    "eGFR",
    "Blood urea",
    "SGPT",
    "SGOT",
    "Bilirubin",
    "Haemoglobin",
    "TSH",
    "Vitamin D",
    "Vitamin B12",
    "SpO2",
    "Temperature",
  ],
];

const claims = [
  ["Read, not filed", "Pulled out of the reports you already have"],
  ["Ranged", "Placed against where the number should be"],
  ["Tracked", "Compared with every report you add after it"],
];

function Track({ items, reverse }: { items: string[]; reverse?: boolean }) {
  /* Each copy carries the row twice, so a short row still overruns the
     viewport and the loop never shows a gap at the end of the track. */
  const seq = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={`flex shrink-0 gap-3 pr-3 ${
            reverse ? "marquee-reverse" : "marquee"
          }`}
        >
          {seq.map((t, n) => (
            <span
              key={`${t}-${n}-${copy}`}
              className="whitespace-nowrap rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[0.85rem] text-white/75"
            >
              {t}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function Reads() {
  return (
    <section id="reads" className="relative overflow-hidden border-b border-line bg-ink">
      <span className="pointer-events-none absolute left-1/2 top-0 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 sm:px-8 md:pt-24">
        <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4.2vw,2.6rem)] leading-tight text-white text-balance">
          The markers that move before you feel anything
        </h2>

        <dl className="mt-10 grid gap-x-10 gap-y-5 border-t border-white/12 pt-7 sm:grid-cols-3">
          {claims.map(([h, b]) => (
            <div key={h}>
              <dt className="text-[0.9rem] font-semibold text-white">{h}</dt>
              <dd className="mt-1 text-[0.85rem] leading-relaxed text-white/50">
                {b}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mt-12 space-y-3 pb-20 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] md:pb-24">
        {rows.map((r, i) => (
          <Track key={i} items={r} reverse={i === 1} />
        ))}
      </div>
    </section>
  );
}
