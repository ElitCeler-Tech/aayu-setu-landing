import { Reveal } from "./Motion";

/* Where the reference boasts of its labs and its result counts, the
   true claim here is the opposite one: no lab to switch to at all.
   Every figure on this section is a property of the product, none of
   it is a usage number Ayussetu does not have. */

const shown = [
  { k: "LDL", hi: true },
  { k: "HDL" },
  { k: "Triglycerides" },
  { k: "HbA1c", hi: true },
  { k: "Fasting glucose" },
  { k: "TSH" },
  { k: "Haemoglobin" },
  { k: "Vitamin D", hi: true },
  { k: "B12" },
  { k: "SGPT" },
  { k: "SGOT" },
  { k: "Creatinine" },
  { k: "eGFR" },
  { k: "Urea" },
];

function Icon({ d }: { d: string }) {
  return (
    <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-mist">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1F3050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
      </svg>
    </span>
  );
}

export function AnyLab() {
  return (
    <section id="any-lab" className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.95fr_1.05fr] md:gap-14 md:py-28">
        <div>
          <p className="eyebrow text-mute">Works with what you have</p>
          <h2 className="mt-3.5 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink">
            Any lab, any report,
            <em className="block text-amber">on your phone</em>
          </h2>
          <p className="mt-5 max-w-[30rem] text-[1.02rem] leading-relaxed text-slate">
            Ayussetu reads the PDF a lab emails you, or a photo of the paper
            copy in your drawer. Nothing to book and no lab to switch to. When
            something needs a doctor, consult on video, by voice or in person.
          </p>
          <a href="#features" className="mt-7 inline-block text-[0.95rem] font-semibold text-navy underline decoration-line-strong underline-offset-[6px] transition hover:decoration-navy">
            See everything it reads &rarr;
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal className="sm:row-span-2">
            <div className="flex h-full flex-col rounded-[1.4rem] border border-line bg-white p-6">
              <p className="text-[0.88rem] text-slate">
                <span className="font-semibold text-amber">Markers read automatically</span> from every report you add
              </p>
              <p className="mt-5 text-[5.25rem] font-medium leading-none tracking-[-0.04em] text-ink">29</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {shown.map((m) => (
                  <span
                    key={m.k}
                    className={`rounded-full border px-2.5 py-1 text-[0.72rem] ${
                      m.hi ? "border-[#FFD9B0] bg-amber-wash text-amber" : "border-line bg-mist text-slate"
                    }`}
                  >
                    {m.k}
                  </span>
                ))}
                <span className="rounded-full border border-line bg-mist px-2.5 py-1 text-[0.72rem] text-slate">
                  + {29 - shown.length} more
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[1.4rem] border border-line bg-white p-6">
              <div className="flex gap-2.5">
                <Icon d="M5 2.5h7l3.5 3.5v11.5H5zM12 2.5V6h3.5M7.5 10h5M7.5 13h5" />
                <Icon d="M2.5 6.5a1.5 1.5 0 0 1 1.5-1.5h2.2L7.5 3h5l1.3 2H16a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 16 16H4a1.5 1.5 0 0 1-1.5-1.5zM10 13.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z" />
              </div>
              <h3 className="mt-4 text-[1.05rem] font-semibold text-ink">PDF or photo</h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-slate">From any lab in the country, old or new.</p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="rounded-[1.4rem] border border-line bg-white p-6">
              <Icon d="M2 6.5A1.5 1.5 0 0 1 3.5 5h8A1.5 1.5 0 0 1 13 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 13.5zM13 8.5l5-2.5v8l-5-2.5" />
              <h3 className="mt-4 text-[1.05rem] font-semibold text-ink">A doctor when you need one</h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-slate">Video, voice or in person, booked from the app.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
