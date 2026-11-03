/* Pricing, as it stands: free for patients, and a conversation for
   everyone else. No numbers are shown because no plans have been set;
   when the founder confirms them, they go in `price` below. */

const plans = [
  {
    who: "Patients and families",
    price: "Free",
    note: "Download and start today",
    points: ["Every report in one place", "Health Score and trends", "Ayu AI answers", "Medicine and test reminders"],
    cta: ["Download the app", "#download"],
    featured: true,
  },
  {
    who: "Doctors and clinics",
    price: "Talk to us",
    note: "Set up around your practice",
    points: ["The doctor app", "The clinic console", "Appointments and prescriptions", "Billing in one view"],
    cta: ["Register your interest", "/for-doctors#join"],
    featured: false,
  },
  {
    who: "Hospitals, labs and pharmacies",
    price: "Custom",
    note: "Built to your scale",
    points: ["Reports straight to patients", "Consent based record sharing", "Integration support", "A named contact"],
    cta: ["Contact us", "/contact"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center">
          <p className="eyebrow text-amber">Pricing</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            Free for patients, <em className="text-amber">simple for partners</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.who}
              className={`flex h-full flex-col rounded-3xl border p-7 ${p.featured ? "border-navy bg-navy text-white" : "border-line bg-white text-ink"}`}
            >
              <p className={`eyebrow ${p.featured ? "text-amber-light" : "text-amber"}`}>{p.who}</p>
              <p className="mt-5 font-display text-[2.6rem] leading-none">{p.price}</p>
              <p className={`mt-2 text-[0.86rem] ${p.featured ? "text-white/60" : "text-slate"}`}>{p.note}</p>
              <ul className={`mt-6 space-y-2.5 border-t pt-6 ${p.featured ? "border-white/10" : "border-line"}`}>
                {p.points.map((x) => (
                  <li key={x} className={`flex gap-2.5 text-[0.88rem] ${p.featured ? "text-white/85" : "text-navy"}`}>
                    <svg width="13" height="13" viewBox="0 0 16 16" className={`mt-[0.22rem] shrink-0 ${p.featured ? "text-[#7FD3A8]" : "text-amber"}`} aria-hidden="true">
                      <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                    </svg>
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
              <a
                href={p.cta[1]}
                className={`block rounded-full px-6 py-3.5 text-center text-[0.9rem] font-semibold transition ${
                  p.featured ? "bg-cta text-white hover:bg-brand-deep" : "border border-line-strong text-navy hover:border-navy"
                }`}
              >
                {p.cta[0]}
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
