/* Who it is for, in the order the deck sets: people over forty first,
   then anyone managing an ongoing risk, then families looking after a
   parent's health. Doctors and clinics are named as the next audience
   and pointed at the page that already serves them. */

const who = [
  {
    t: "Adults over 40",
    b: "The age when reports start to pile up and small changes start to matter. Ayussetu keeps the whole history in view.",
    icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0",
  },
  {
    t: "People managing ongoing risks",
    b: "Sugar, blood pressure, cholesterol or thyroid: the markers to watch, the medicines to take, and whether it is working.",
    icon: "M3 12h4l2-5 4 10 2-5h6",
  },
  {
    t: "Families caring for parents",
    b: "Keep a parent's records, doses and appointments together, and see their week without having to ring and ask.",
    icon: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17 11a3 3 0 1 0 0-6M2.5 20a6.5 6.5 0 0 1 13 0M16 14.2a5.5 5.5 0 0 1 5.5 5.8",
  },
];

export function WhoWeServe() {
  return (
    <section id="who" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center">
          <p className="eyebrow text-amber">Who we serve</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            Built for the people <em className="text-amber">who carry the file</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {who.map((w) => (
            <div key={w.t} className="rounded-3xl border border-line bg-mist p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-wash">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C25E00" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={w.icon} />
                </svg>
              </span>
              <h3 className="mt-6 font-display text-[1.75rem] leading-tight text-ink">{w.t}</h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">{w.b}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[0.92rem] text-slate">
          Doctors, clinics, pharmacies and healthcare partners:{" "}
          <a href="/for-doctors" className="font-semibold text-navy underline decoration-line-strong underline-offset-4 transition hover:decoration-navy">
            see Ayussetu for doctors &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
