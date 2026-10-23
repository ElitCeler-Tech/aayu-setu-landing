"use client";

/* Two rows drifting in opposite directions, paused when the pointer is
   over them so a quote can actually be read. The track is duplicated so
   the loop has no seam; the copy is marked hidden from screen readers
   the second time round rather than read out twice. */

const quotes = [
  {
    q: "I photographed four years of lab reports in an evening, and saw my cholesterol move across all of them.",
    n: "Mahesh Reddy",
    r: "Patient, Warangal",
  },
  {
    q: "My mother is in another city. I can see she took her tablets, and she still decides what I get to see.",
    n: "Anitha Rao",
    r: "Daughter and carer",
  },
  {
    q: "The prescription takes a minute, and the patient has it before they leave the room.",
    n: "Dr S. Prasad",
    r: "General physician",
  },
  {
    q: "Reading their own numbers before the consultation changes what I ask them.",
    n: "Dr Kavitha M.",
    r: "Diabetologist",
  },
  {
    q: "The missed dose list is the honest one. I can log that I took it late.",
    n: "Imran Qureshi",
    r: "Patient, Hyderabad",
  },
  {
    q: "Our front desk runs the whole day from the console.",
    n: "Lakshmi Prasad",
    r: "Clinic manager",
  },
  {
    q: "Ayu told me what my creatinine meant, and to check it with my doctor.",
    n: "Venkat Rao",
    r: "Patient, Karimnagar",
  },
];

function Card({ q, n, r }: { q: string; n: string; r: string }) {
  return (
    <figure className="w-[22rem] shrink-0 rounded-2xl border border-line bg-white p-6">
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 12 12" className="text-amber">
            <path d="M6 0.6 7.4 4.3 11.3 4.5 8.3 7 9.3 10.8 6 8.6 2.7 10.8 3.7 7 0.7 4.5 4.6 4.3Z" fill="currentColor" />
          </svg>
        ))}
      </div>
      <blockquote className="mt-3 text-[0.9rem] leading-relaxed text-slate">
        {q}
      </blockquote>
      <figcaption className="mt-4 border-t border-line pt-3">
        <span className="block text-[0.86rem] font-semibold text-navy">{n}</span>
        <span className="block text-[0.76rem] text-mute">{r}</span>
      </figcaption>
    </figure>
  );
}

function Row({
  items,
  reverse = false,
}: {
  items: typeof quotes;
  reverse?: boolean;
}) {
  return (
    <div className="group relative flex overflow-hidden">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={`flex shrink-0 gap-4 pr-4 ${
            reverse ? "marquee-reverse" : "marquee"
          } group-hover:[animation-play-state:paused]`}
        >
          {items.map((t) => (
            <Card key={t.n + copy} {...t} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-line bg-white py-18 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
            In their words
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-ink text-balance">
            Patients, carers and the doctors who treat them
          </h2>
        </div>
      </div>

      <div className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <Row items={quotes} />
      </div>
    </section>
  );
}
