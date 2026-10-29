/* Personalised prevention, the deck's key differentiator, shown as the
   difference itself: the advice everybody gets, against what Ayussetu
   aims to suggest for one person, with the reasons it changed. Worded
   as an aim, because adapting to outcomes is the direction, not a claim
   about results. */

const generic = ["Exercise 30 minutes a day", "Eat less sugar", "Get your sugar checked"];

const personal = [
  {
    t: "A 20 minute walk after dinner",
    why: ["You said evenings work best", "You logged 12 of 15 last month"],
  },
  {
    t: "Swap the evening chai biscuit, not the chai",
    why: ["Your readings rise most after dinner"],
  },
  {
    t: "Retest HbA1c in March",
    why: ["Three months after your last report", "Your doctor asked to see it"],
  },
];

export function Prevention() {
  return (
    <section id="prevention" className="hero-room relative overflow-hidden border-b border-line text-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-amber-light">Personalised prevention</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-balance">
            Advice that fits <em className="text-amber-light">one person</em>
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-white/65">
            Ayussetu aims to move past generic advice, toward actions that adapt
            to what you prefer, what you actually keep doing, and what your
            readings show in return.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="eyebrow text-white/40">Advice for everybody</p>
            <ul className="mt-5 space-y-3">
              {generic.map((g) => (
                <li key={g} className="rounded-2xl border border-white/10 px-4 py-3.5 text-[0.92rem] text-white/45">
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-cta/40 bg-white/[0.06] p-6">
            <p className="eyebrow text-amber-light">Your plan</p>
            <ul className="mt-5 space-y-3">
              {personal.map((p) => (
                <li key={p.t} className="rounded-2xl bg-white px-4 py-3.5 text-ink">
                  <p className="text-[0.95rem] font-semibold">{p.t}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.why.map((w) => (
                      <span key={w} className="rounded-full bg-amber-wash px-2.5 py-1 text-[0.7rem] text-amber-deep">
                        {w}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href="#download" className="mt-10 inline-block rounded-full bg-cta-strong px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:bg-amber-deep">
          Make health actions personal
        </a>
      </div>
    </section>
  );
}
