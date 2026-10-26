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
    <figure className="flex w-[24rem] shrink-0 flex-col rounded-[1.25rem] border border-line bg-white p-7">
      {/* A row of five stars is the one thing every testimonial carries
          and the one thing nobody reads. The quote is the design. */}
      <svg
        width="26"
        height="20"
        viewBox="0 0 26 20"
        className="text-line"
        aria-hidden="true"
      >
        <path
          d="M0 20V11.4C0 5.4 3.2 1.6 9.3 0l1.2 3.3C7 4.6 5.3 6.7 5.3 9.4H10V20Zm16 0V11.4c0-6 3.2-9.8 9.3-11.4L26 3.3c-3.5 1.3-5.2 3.4-5.2 6.1H26V20Z"
          fill="currentColor"
        />
      </svg>

      <blockquote className="mt-5 flex-1 font-display text-[1.02rem] leading-relaxed text-navy">
        {q}
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-[0.76rem] font-semibold text-white">
          {n
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </span>
        <span className="min-w-0">
          <span className="block text-[0.86rem] font-semibold text-navy">
            {n}
          </span>
          <span className="block text-[0.76rem] text-mute">{r}</span>
        </span>
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
    <section id="testimonials" className="border-b border-line bg-paper py-18 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-amber-deep">
            In their words
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.05rem,4.6vw,3rem)] leading-tight text-ink text-balance">
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
