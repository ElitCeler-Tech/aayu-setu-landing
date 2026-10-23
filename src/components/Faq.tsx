"use client";

import { useState } from "react";

/* An accordion, not a wall. Six answers stacked open is a page nobody
   reads; closed, the questions themselves become the scannable thing.
   The first is open so the pattern is obvious without a click, and the
   markup is a real button inside a heading so a keyboard and a screen
   reader both get it. */

const faqs = [
  {
    q: "How does Ayussetu track my vitals?",
    a: "Ten readings in one sitting, from blood pressure to sleep, with a connected smartwatch filling in what it can. Each one is scored against your own history, not a textbook average.",
  },
  {
    q: "How does it read my lab report?",
    a: "Photograph it. The markers are pulled out, ranged and compared with your last report, so you see the direction of travel. Anything unreadable stays as the document you uploaded.",
  },
  {
    q: "Can I book appointments online as well as in person?",
    a: "Yes, in person, by video or by voice. You join the call from the app, and the prescription lands in your records with the doses scheduled from it.",
  },
  {
    q: "Who can see my records?",
    a: "You, and any doctor you grant access to. Access is per doctor, and it can be withdrawn afterwards.",
  },
  {
    q: "Do I need an ABHA to use it?",
    a: "No. Ayussetu works on its own today, and ABHA linking is being built.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-line bg-white">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
              Questions
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.4rem)] leading-tight text-ink text-balance">
              The ones people actually ask
            </h2>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-slate">
              Something not answered here?{" "}
              <a
                href="#contact"
                className="font-semibold text-navy underline decoration-amber underline-offset-4"
              >
                Write to us
              </a>{" "}
              and a person will reply.
            </p>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span
                        className={`text-[0.98rem] font-semibold transition ${
                          isOpen ? "text-navy" : "text-slate group-hover:text-navy"
                        }`}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
                          isOpen
                            ? "rotate-45 border-navy bg-navy text-white"
                            : "border-line text-mute group-hover:border-navy/40"
                        }`}
                      >
                        <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
                          <path
                            d="M6 1.5v9M1.5 6h9"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-400 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-10 text-[0.9rem] leading-relaxed text-slate">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
