/* Health intelligence: five capabilities, one simple card each. Every
   card is the same shape (icon, title, one line, one number), and all
   of it comes from the list below, so changing the copy or adding a
   card never touches the layout.

   The numbers agree with the rest of the page: LDL 128 in March to 164
   in October, fasting sugar 118 (prediabetes, below the 126 cutoff),
   Lab Score 72 and Health Score 81. */

const capabilities = [
  {
    title: "Unified health history",
    body: "Every report, prescription and reading in one record you hold.",
    stat: "34",
    statLabel: "records from 6 sources",
    icon: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7",
  },
  {
    title: "Lab trends over time",
    body: "Markers read out of each report and followed across years.",
    stat: "+52",
    statLabel: "LDL, mg/dL, across five reports",
    icon: "M3 17l5-5 4 3 8-8M15 7h5v5",
  },
  {
    title: "Health Score and Lab Score",
    body: "One score from your everyday vitals, one from your lab reports.",
    stat: "81 · 72",
    statLabel: "Health Score · Lab Score",
    icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
  },
  {
    title: "Risk awareness",
    body: "What is drifting toward a risk, flagged early and explained plainly.",
    stat: "118",
    statLabel: "fasting sugar, prediabetes range",
    icon: "M12 9v4M12 17h.01M10.3 3.9 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
  },
  {
    title: "Preventive actions",
    body: "Steps set around your readings and routine, and tracked.",
    stat: "12/15",
    statLabel: "evening walks this month",
    icon: "M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",
  },
];

export function Intelligence() {
  return (
    <section id="intelligence" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-amber">Health intelligence</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            Your records, <em className="text-amber">read for you</em>
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-slate">
            Five things Ayussetu does with the reports you already have.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((c) => (
            <li key={c.title} className="flex flex-col rounded-3xl border border-line bg-white p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-wash">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C25E00" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={c.icon} />
                </svg>
              </span>
              <h3 className="mt-5 text-[1rem] font-semibold leading-snug text-ink">{c.title}</h3>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-slate">{c.body}</p>
              <div className="mt-auto border-t border-line pt-4">
                <p className="font-display text-[2.1rem] leading-none text-ink">{c.stat}</p>
                <p className="mt-1.5 min-h-[2.75em] text-[0.74rem] leading-snug text-mute">{c.statLabel}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[0.76rem] text-mute">Example figures for illustration.</p>
      </div>
    </section>
  );
}
