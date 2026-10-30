/* Personalised prevention, the deck's key differentiator. Each row is
   one piece of advice everybody gets, struck through, turning into the
   version set for one person, with the reason it changed. Worded as an aim, because adapting
   to outcomes is the direction, not a claim about results.

   All of it comes from the two lists below. */

const swaps = [
  {
    generic: "Exercise 30 minutes a day",
    personal: "Walk 20 minutes after dinner",
    why: "You said evenings work best",
  },
  {
    generic: "Cut down on sugar",
    personal: "Swap the evening biscuit, keep the chai",
    why: "Your readings rise most after dinner",
  },
  {
    generic: "Get your sugar checked",
    personal: "Retest HbA1c in January",
    why: "Three months after your last report",
  },
];


export function Prevention() {
  return (
    <section id="prevention" className="hero-room relative overflow-hidden border-b border-line text-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-amber-light">Personalised prevention</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-balance">
            Advice that fits <em className="text-amber-light">you</em>
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-white/65">
            Ayussetu aims to move past generic health suggestions, toward
            continuously improving, adaptive personalisation.
          </p>
        </div>

        <ul className="mt-12 space-y-3">
          {swaps.map((s, i) => (
            <li
              key={s.generic}
              className="grid items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 md:grid-cols-[1fr_auto_1.3fr] md:gap-5 md:p-4"
            >
              <span className="swap-old px-2 text-[0.95rem] text-white/50" style={{ animationDelay: `${i * 0.6}s` }}>
                {s.generic}
              </span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB15C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="hidden md:block" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <span
                className="swap-new flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white px-4 py-3 text-ink"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <span className="text-[0.95rem] font-semibold">{s.personal}</span>
                <span className="rounded-full bg-amber-wash px-2.5 py-1 text-[0.7rem] text-amber-deep">{s.why}</span>
              </span>
            </li>
          ))}
        </ul>


        <a href="#download" className="mt-10 inline-block rounded-full bg-brand px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:bg-brand-deep">
          Make health actions personal
        </a>
      </div>
    </section>
  );
}
