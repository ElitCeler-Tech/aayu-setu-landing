import { PhoneShowcase } from "./PhoneShowcase";
import {
  DoseMock,
  ReportMock,
  PrescriptionMock,
  EarningsMock,
} from "./Mocks";
import { AyuMock, ConsultMock } from "./Mocks2";
import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/team";
import { Reveal, Parallax } from "./Motion";
import { StoreButtons } from "./StoreButtons";
import { AudienceLens } from "./Lens";

/* ------------------------------- hero -------------------------------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* White, and one cool wash behind the phone. Nothing else: the
          product is the only colour this section needs. */}
      <div className="pointer-events-none absolute right-[-16%] top-[-24%] h-[46rem] w-[46rem] rounded-full bg-navy/[0.05] blur-[150px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-28 xl:gap-20">
        <div>
          {/* Not a status pill. A pulsing green dot is the convention
              for "service is up", which is not what this sentence is
              about: it is a claim, so it gets a mark that reads as AI.
              The tracking is also eased off: at 0.1em the hyphen in
              "AI-driven" opened into a dash and the line read as two. */}
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-mute backdrop-blur [animation-delay:90ms]">
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className="text-amber"
            >
              <path
                d="M6 0.5 7.1 4.2 10.8 5.3 7.1 6.4 6 10.1 4.9 6.4 1.2 5.3 4.9 4.2Z"
                fill="currentColor"
              />
            </svg>
            Preventive health, powered by Ayu AI
          </p>

          <h1 className="rise font-display mt-6 max-w-[17ch] [animation-delay:170ms] text-[clamp(2.2rem,5.2vw,3.5rem)] leading-[1.06] text-ink text-balance">
            Your records are scattered. Your risk is not.
          </h1>

          <p className="rise mt-6 max-w-xl text-[1.05rem] leading-relaxed text-slate [animation-delay:250ms]">
            A lab in one clinic, a prescription in a drawer, a reading nobody
            wrote down. Ayussetu reads them as one record, so what is building
            shows up while there is still something to do about it.
          </p>


          <div className="rise mt-9 flex flex-wrap items-center gap-3 [animation-delay:410ms]">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-[0.9rem] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(255,139,11,0.9)] transition hover:bg-amber-deep"
            >
              Download the app
              <span className="transition group-hover:translate-x-0.5">&rarr;</span>
            </a>
            <a
              href="/for-doctors"
              className="rounded-full border border-line bg-white px-6 py-3.5 text-[0.9rem] font-semibold text-navy transition hover:border-navy"
            >
              For doctors and clinics
            </a>
          </div>

          <ul className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 text-[0.8rem] text-slate [animation-delay:530ms]">
            {[
              "Free for patients",
              "Android and iPhone",
              "Nothing shared without your consent",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true" className="text-sage">
                  <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                </svg>
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-md text-[0.76rem] leading-relaxed text-mute">
            AI powered insights to support preventive health actions. Not a
            diagnostic or treatment tool.
          </p>
        </div>

        <div className="rise [animation-delay:300ms]">
          <PhoneShowcase />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ counts ------------------------------- */

const counts = [
  { n: "14", l: "lab markers", s: "Lipids, sugar, liver, kidney, blood" },
  { n: "10", l: "vitals", s: "Blood pressure through to sleep" },
  { n: "17", l: "prescription fields", s: "Complaint through to follow up" },
  { n: "3", l: "ways to consult", s: "In person, video, voice", exact: true },
];

export function Counts() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink">
      <span className="pointer-events-none absolute left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <p className="max-w-lg font-display text-[clamp(1.25rem,2.4vw,1.6rem)] leading-snug text-white text-balance">
            Point a camera at one report and Ayussetu takes this much out
            of it.
          </p>
        </Reveal>

        {/* No boxes. Four figures on a rule read as one statement; four
            cards read as four unrelated claims. */}
        <dl className="mt-12 grid gap-y-10 border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {counts.map((c, i) => (
            <Reveal key={c.l} delay={i * 80}>
              <div className="h-full border-white/12 pt-8 lg:border-l lg:pl-7 lg:first:border-l-0 lg:first:pl-0">
                <dt className="font-display text-[clamp(2.6rem,5vw,3.4rem)] leading-none tabular-nums text-white">
                  {c.n}
                  {!("exact" in c) && (
                    <span className="align-top text-[0.45em] text-amber">+</span>
                  )}
                </dt>
                <dd>
                  <span className="mt-3 block text-[0.92rem] font-semibold text-white">
                    {c.l}
                  </span>
                  <span className="mt-1 block max-w-[18ch] text-[0.8rem] leading-relaxed text-white/45">
                    {c.s}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------ thesis ------------------------------- */

const thesis = [
  {
    n: "Bring it in",
    t: "Whatever you already have",
    b: "Photograph a lab report, a prescription, a discharge summary. Years of paper goes in as fast as you can point a camera at it.",
  },
  {
    n: "Read it",
    t: "Markers out, ranges on",
    b: "Ayussetu pulls the markers out of each one and places them against their ranges, beside the medicines you take and the readings you log.",
  },
  {
    n: "See it coming",
    t: "A direction, not a number",
    b: "One LDL means little. LDL climbing across three reports is a direction, and a direction is something you can still act on.",
  },
];

/* Each stage of the argument gets a picture, because "scattered",
   "together" and "a trend" are three shapes before they are three
   sentences.

   All three sit in the same frame: one white card, one label in the
   same place, the same height. They were three different objects
   before, which made the row read as three unrelated ideas. */
function ArtFrame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-4">
      <p className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-mute">
        {label}
      </p>
      <div className="relative mt-3 h-[9.5rem] w-full">{children}</div>
    </div>
  );
}

function Scattered() {
  const bits = [
    { t: "Lab, March", x: "0%", y: "4%", r: "-7deg" },
    { t: "Prescription", x: "46%", y: "0%", r: "5deg" },
    { t: "Sugar, unwritten", x: "14%", y: "38%", r: "3deg" },
    { t: "Discharge summary", x: "40%", y: "60%", r: "-4deg" },
    { t: "Lab, August", x: "0%", y: "76%", r: "6deg" },
  ];
  return (
    <ArtFrame label="Five places, one person">
      {bits.map((b) => (
        <span
          key={b.t}
          className="absolute rounded-lg border border-line bg-mist px-2.5 py-1.5 text-[0.62rem] font-medium text-slate shadow-[0_6px_14px_-10px_rgba(22,35,61,0.6)]"
          style={{ left: b.x, top: b.y, transform: `rotate(${b.r})` }}
        >
          {b.t}
        </span>
      ))}
    </ArtFrame>
  );
}

function Stacked() {
  return (
    <ArtFrame label="One record">
      {[2, 1].map((i) => (
        <span
          key={i}
          className="absolute left-1/2 w-[78%] -translate-x-1/2 rounded-xl border border-line bg-mist"
          style={{
            top: `${i * 7}px`,
            bottom: `${-i * 7}px`,
            opacity: 1 - i * 0.32,
          }}
        />
      ))}
      <div className="absolute inset-x-[11%] inset-y-0 flex flex-col justify-between rounded-xl border border-line bg-mist p-3">
        {[
          ["LDL", "164 mg/dL"],
          ["HbA1c", "6.1 %"],
          ["Metformin", "500mg, daily"],
        ].map(([k, v], i) => (
          <div
            key={k}
            className={`flex items-baseline justify-between ${
              i < 2 ? "border-b border-line pb-2" : ""
            }`}
          >
            <span className="text-[0.64rem] font-medium text-navy">{k}</span>
            <span className="text-[0.6rem] tabular-nums text-slate">{v}</span>
          </div>
        ))}
      </div>
    </ArtFrame>
  );
}

function Trend() {
  /* Markers sit in HTML, not in the SVG: the plot is stretched to the frame,
     which would turn an SVG circle into an oval. */
  const points = [
    { left: "8%", top: "75%" },
    { left: "50%", top: "53.8%" },
    { left: "92%", top: "21.2%" },
  ];
  return (
    <ArtFrame label="LDL across three reports">
      <div className="absolute inset-x-0 top-0 h-[calc(100%-1.15rem)]">
        <svg
          viewBox="0 0 200 104"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="trendfill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF8B0B" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF8B0B" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[22, 50, 78].map((y) => (
            <line
              key={y}
              x1="0"
              x2="200"
              y1={y}
              y2={y}
              stroke="#EDF0F5"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <path
            d="M0 84 L16 78 L100 56 L184 22 L200 16 L200 104 L0 104 Z"
            fill="url(#trendfill)"
          />
          <path
            d="M0 84 L16 78 L100 56 L184 22 L200 16"
            stroke="#FF8B0B"
            strokeWidth="2.4"
            vectorEffect="non-scaling-stroke"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {points.map((pt) => (
          <span
            key={pt.left}
            aria-hidden="true"
            className="absolute h-[0.55rem] w-[0.55rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber bg-white"
            style={{ left: pt.left, top: pt.top }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between text-[0.58rem] text-mute">
        <span>Mar 128</span>
        <span>Jun 146</span>
        <span className="font-semibold text-amber-deep">Oct 164</span>
      </div>
    </ArtFrame>
  );
}

const thesisArt = [<Scattered key="a" />, <Stacked key="b" />, <Trend key="c" />];

export function Thesis() {
  return (
    <section id="how" className="relative border-b border-line bg-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-navy/[0.04] blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
              How Ayussetu works
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4.4vw,2.7rem)] leading-tight text-ink text-balance">
              Prevention needs the whole picture, not the latest page
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {thesis.map((t, i) => (
            <Reveal key={t.n} delay={i * 130}>
              <article className="relative flex h-full flex-col">
                {/* the picture first: scattered, then stacked, then a line */}
                {thesisArt[i]}

                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy font-display text-[0.7rem] text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-mute">
                    {t.n}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-[1.25rem] leading-snug text-navy text-balance">
                  {t.t}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">
                  {t.b}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- features ------------------------------ */

const features = [
  {
    eyebrow: "Unified health records",
    title: "Every report in one place, and read, not just stored",
    body: "Photograph a lab report. Ayussetu pulls the markers out, places each against its range, and compares it with the last one.",
    mock: <ReportMock />,
  },  {
    eyebrow: "Smart medication management",
    title: "Doses you actually take, and the ones you did not",
    body: "Add a medicine once and the schedule works itself out. A dose missed yesterday is still answerable this morning.",
    mock: <DoseMock />,
  },  {
    eyebrow: "Ayu, the AI assistant",
    title: "Answers drawn from your record, not from the internet",
    body: "Ask about a medicine, a reading or a report. Ayu answers from your own record, not from the internet.",
    mock: <AyuMock />,
  },  {
    eyebrow: "Doctor consultations",
    title: "Book in person, on video or by voice",
    body: "Find a doctor, see the slots they actually have, and take the call in the app. The prescription files itself.",
    mock: <ConsultMock />,
  },
];

export function Features() {
  return (
    <section id="features" className="relative border-b border-line bg-ink text-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber">
            For patients, in the app
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-balance">
            Everything a hospital asks you to remember, remembered for you
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-white/60">
            Free, on their own phone, from the first medicine they add.
          </p>
        </div>

        <div className="mt-14 space-y-16 md:space-y-24">
          {features.map((b, i) => (
            <div
              key={b.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                  {b.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-[clamp(1.3rem,2.6vw,1.75rem)] leading-snug text-balance">
                  {b.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-white/60">
                  {b.body}
                </p>
              </Reveal>
              <Parallax speed={i % 2 === 0 ? 0.34 : 0.46}>{b.mock}</Parallax>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- markers ------------------------------- */

const marker = {
  k: "LDL cholesterol",
  tag: "Heart",
  w: "The cholesterol that collects in artery walls. It is watched over years rather than weeks, because the damage is cumulative and quiet.",
  history: [
    { d: "March", v: "128", s: "In range" },
    { d: "June", v: "146", s: "Raised" },
    { d: "October", v: "164", s: "High" },
  ],
  verdict: "Up 36 mg/dL since March, across three separate reports.",
  range: "Under 100 mg/dL",
  lo: 0,
  hi: 45,
  at: 74,
  lowLabel: "Lower is better",
  highLabel: "Raised",
};



export function Markers() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-16">
          <Reveal>
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-mute">
                Understanding your numbers
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,4.4vw,2.6rem)] leading-tight text-ink text-balance">
                A marker is only useful if you know what it is for
              </h2>
              <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-slate">
                Every marker Ayussetu reads is explained where it appears, in
                plain language, with your own readings behind it.
              </p>
              <p className="mt-6 max-w-md border-l-2 border-amber pl-4 text-[0.92rem] leading-relaxed text-navy">
                One reading is a number. Three readings are a direction, and a
                direction is the part you can still do something about.
              </p>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <article className="rounded-[1.75rem] border border-line bg-white p-7 shadow-[0_44px_100px_-70px_rgba(22,35,61,0.7)] md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-[1.35rem] text-navy">
                  {marker.k}
                </h3>
                <span className="rounded-full bg-mist px-3 py-1 text-[0.66rem] font-semibold text-mute">
                  {marker.tag}
                </span>
              </div>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-slate">
                {marker.w}
              </p>

              {/* The three reports behind the latest number, because the
                  latest number on its own is the problem this page opens on. */}
              <ol className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
                {marker.history.map((h, i) => {
                  const last = i === marker.history.length - 1;
                  return (
                    <li
                      key={h.d}
                      className={`px-3 py-3.5 text-center ${last ? "bg-amber-wash" : "bg-white"}`}
                    >
                      <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-mute">
                        {h.d}
                      </span>
                      <span
                        className={`mt-1 block font-display text-[1.25rem] tabular-nums ${last ? "text-amber-deep" : "text-navy"}`}
                      >
                        {h.v}
                      </span>
                      <span className="mt-0.5 block text-[0.62rem] text-mute">
                        {h.s}
                      </span>
                    </li>
                  );
                })}
              </ol>

              <p className="mt-4 text-[0.86rem] font-medium text-navy">
                {marker.verdict}
              </p>

              <div className="relative mt-6 h-2 rounded-full bg-mist">
                <span
                  className="absolute inset-y-0 rounded-full bg-sage/35"
                  style={{ left: `${marker.lo}%`, right: `${100 - marker.hi}%` }}
                />
                <span
                  className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-amber shadow"
                  style={{ left: `calc(${marker.at}% - 0.5rem)` }}
                />
              </div>
              <div className="mt-3 flex justify-between text-[0.7rem] text-mute">
                <span>{marker.lowLabel}</span>
                <span className="font-semibold text-navy">
                  Healthy: {marker.range}
                </span>
                <span>{marker.highLabel}</span>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- audiences ------------------------------ */


export function Audiences() {
  return (
    <section id="audiences" className="relative border-b border-line bg-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
                Who it is for
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(1.9rem,4.4vw,2.7rem)] leading-tight text-ink text-balance">
                One record, read three different ways
              </h2>
            </div>
            <p className="max-w-sm text-[0.9rem] leading-relaxed text-slate">
              One history, three readings of it. Nobody keeps a second copy.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <AudienceLens />
        </div>
      </div>
    </section>
  );
}
/* ----------------------------- practice ------------------------------ */

const doctorBlocks = [
  {
    eyebrow: "Consultation",
    title: "A prescription written in a minute, delivered in seconds",
    body: "Medicine, strength, quantity and schedule, with the end date worked out for you, and the rest of the visit around it: complaint, diagnosis, vitals, tests and a follow up that books itself.",
    mock: <PrescriptionMock />,
  },
  {
    eyebrow: "Practice",
    title: "What you earned, by the period you actually think in",
    body: "Today, this week, this month, this quarter, or dates you pick. Paid and outstanding kept apart, with referral share alongside.",
    mock: <EarningsMock />,
  },
];

export function Practice() {
  return (
    <section id="doctors" className="relative border-b border-line bg-ink text-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber">
            The doctor app
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-balance">
            A consultation that ends in a record, not a paper slip
          </h2>
        </div>
        <div className="mt-14 space-y-16 md:space-y-24">
          {doctorBlocks.map((b, i) => (
            <div
              key={b.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                  {b.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-[clamp(1.3rem,2.6vw,1.75rem)] leading-snug text-balance">
                  {b.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-white/60">
                  {b.body}
                </p>
              </Reveal>
              <Parallax speed={i % 2 === 0 ? 0.36 : 0.48}>{b.mock}</Parallax>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- testimonial ---------------------------- */

export function Testimonial() {
  return (
    <section id="testimonials" className="border-b border-line bg-white">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 md:py-20">
        <blockquote className="font-display text-[clamp(1.3rem,3vw,1.9rem)] font-medium leading-snug text-ink text-balance">
          &ldquo;This app has completely changed how I manage my health. I
          never miss a medication, and the AI chat gives instant answers to all
          my questions.&rdquo;
        </blockquote>
        <figcaption className="mt-6 text-[0.86rem] text-mute">
          Ria Singh · Ayussetu user
        </figcaption>
      </div>
    </section>
  );
}

/* ------------------------------- ABHA -------------------------------- */

export function Abha() {
  const steps = [
    { n: "01", t: "A hospital asks", d: "A request arrives against your ABHA" },
    { n: "02", t: "You approve", d: "You choose what, and for how long" },
    { n: "03", t: "Records travel", d: "Only the records you picked are sent" },
    { n: "04", t: "You withdraw", d: "Access ends the moment you say so" },
  ];

  return (
    <section id="abha" className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink px-6 py-11 text-white sm:px-9 md:px-14 md:py-16">
            <span className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.07] blur-3xl" />

            <div className="relative grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-amber">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
                  </span>
                  Planned, not yet live
                </p>
                <h2 className="mt-5 font-display text-[clamp(1.7rem,3.6vw,2.4rem)] leading-tight text-balance">
                  One health ID, all your records
                </h2>
                <p className="mt-4 max-w-xl text-[0.94rem] leading-relaxed text-white/65">
                  The records you keep here will sit behind your ABHA, readable by
                  any hospital on the national network, against a consent you
                  approve each time.
                </p>

                <ol className="mt-9 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  {steps.map((st) => (
                    <li key={st.n} className="relative pl-9">
                      <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[0.56rem] font-bold tabular-nums text-amber">
                        {st.n}
                      </span>
                      <p className="text-[0.86rem] font-semibold leading-snug text-white">
                        {st.t}
                      </p>
                      <p className="mt-0.5 text-[0.76rem] leading-snug text-white/50">
                        {st.d}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* The account itself, drawn the way the card is laid out. */}
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy/60 bg-gradient-to-br from-white/[0.14] via-white/[0.07] to-white/[0.03] p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.95)]">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/[0.07] blur-xl"
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                        Ayushman Bharat Health Account
                      </p>
                      <p className="mt-3 font-display text-[1.3rem] tabular-nums tracking-[0.14em] text-white">
                        12 3456 7890 1234
                      </p>
                      <p className="mt-1 text-[0.82rem] text-white/55">
                        lakshmi@abdm
                      </p>
                    </div>
                    <span className="shrink-0 rounded-lg bg-white/10 p-2">
                      <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
                        {[0, 1, 2].map((r) =>
                          [0, 1, 2].map((c) => (
                            <rect
                              key={`${r}-${c}`}
                              x={3 + c * 6.5}
                              y={3 + r * 6.5}
                              width="5"
                              height="5"
                              rx="1"
                              fill="#fff"
                              opacity={(r + c) % 2 === 0 ? 0.85 : 0.3}
                            />
                          )),
                        )}
                      </svg>
                    </span>
                  </div>

                  <div className="relative mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-white/35">
                        Records linked
                      </p>
                      <p className="mt-1 text-[0.84rem] font-medium tabular-nums text-white">
                        34 files
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-white/35">
                        Consents open
                      </p>
                      <p className="mt-1 text-[0.84rem] font-medium tabular-nums text-sage">
                        1 of 1
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Linked to the records you already keep here",
                    "Shared only against a consent you approve",
                    "Readable by any hospital on the network",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5 text-[0.82rem] text-white/70">
                      <svg width="13" height="13" viewBox="0 0 16 16" className="mt-[0.2rem] shrink-0 text-sage" aria-hidden="true">
                        <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[0.68rem] leading-relaxed text-white/35">
                  Illustration of the planned account. Ayussetu is not yet
                  certified on the ABDM network.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- team ------------------------------- */

export function Team() {
  return (
    <section id="team" className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
            About the founder
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,4.4vw,2.6rem)] leading-tight text-ink text-balance">
            Get to know the Ayussetu team
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={i * 120}>
              <Link
                href={`/founders/${m.slug}`}
                className="group block overflow-hidden rounded-3xl border border-line bg-white transition hover:border-navy/25 hover:shadow-[0_30px_70px_-45px_rgba(22,35,61,0.8)]"
              >
                <span className="relative block aspect-[16/11] w-full overflow-hidden bg-mist">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(min-width: 768px) 32rem, 100vw"
                    className="object-cover object-[center_22%] transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-5 pt-16">
                    <span className="block font-display text-[1.45rem] leading-snug text-white">
                      {m.name}
                    </span>
                    <span className="mt-0.5 block text-[0.84rem] font-medium text-amber">
                      {m.role}
                    </span>
                  </span>
                </span>

                <span className="block p-6">
                  <span className="block text-[0.9rem] leading-relaxed text-slate">
                    {m.lede}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-navy">
                    Read more
                    <span className="transition group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ privacy ------------------------------ */

const security = [
  {
    title: "Access is asked for, never assumed",
    body: "A doctor requests your record and sees nothing until you approve it. Approval is per doctor, and can be withdrawn afterwards.",
  },
  {
    title: "Encrypted, and private by design",
    body: "Records are encrypted in transit and at rest, and shared only with the people you choose, whether family or clinician.",
  },
  {
    title: "Built towards ABDM",
    body: "Consent, care contexts and interoperable records are on the roadmap, so your record can travel with your ABHA.",
  },
  {
    title: "Nothing sold on",
    body: "Health data is not a product here. It exists to be read by you and the clinician you choose.",
  },
];

export function Security() {
  return (
    <section id="security" className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
                Privacy and safety
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(1.9rem,4.4vw,2.6rem)] leading-tight text-ink text-balance">
                A record is only useful if the person it belongs to controls it
              </h2>
            </div>
            <p className="max-w-sm text-[0.9rem] leading-relaxed text-slate">
              Every claim below is something you can see happening in the app.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* 1. consent, shown as the request itself */}
          <Reveal>
            <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-sage/50 hover:shadow-[0_28px_60px_-44px_rgba(47,125,99,0.85)]">
              <h3 className="text-[1.02rem] font-semibold text-navy">
                A doctor has to ask
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                Nothing is visible to a clinician until you approve it.
              </p>
              <div className="mt-auto rounded-2xl border border-line bg-mist/60 p-3.5 pt-3 transition duration-500 group-hover:border-sage/30 group-hover:bg-sage-wash/70">
                <p className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-mute">
                  Access request
                </p>
                <p className="mt-1.5 text-[0.76rem] font-semibold text-navy">
                  Dr S. Rao wants to see your records
                </p>
                <p className="mt-0.5 text-[0.66rem] text-mute">
                  Documents, prescriptions and past readings
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="flex-1 rounded-lg bg-navy py-1.5 text-center text-[0.64rem] font-semibold text-white">
                    Approve
                  </span>
                  <span className="flex-1 rounded-lg border border-line bg-white py-1.5 text-center text-[0.64rem] font-semibold text-slate">
                    Not now
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          {/* 2. sharing, shown as the switches */}
          <Reveal delay={110}>
            <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-sage/50 hover:shadow-[0_28px_60px_-44px_rgba(47,125,99,0.85)]">
              <h3 className="text-[1.02rem] font-semibold text-navy">
                You choose what a group sees
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                Each person decides what travels to a care group, and can change their mind.
              </p>
              <div className="mt-auto space-y-1.5 rounded-2xl border border-line bg-mist/60 p-3.5 transition duration-500 group-hover:border-sage/30 group-hover:bg-sage-wash/70">
                {[
                  ["Medication adherence", true],
                  ["Vitals and readings", true],
                  ["Lab reports", false],
                ].map(([label, on]) => (
                  <div
                    key={label as string}
                    className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2"
                  >
                    <span className="text-[0.7rem] font-medium text-navy">
                      {label as string}
                    </span>
                    <span
                      className={`flex h-4 w-7 items-center rounded-full px-0.5 ${
                        on ? "justify-end bg-sage" : "justify-start bg-line"
                      }`}
                    >
                      <span className="h-3 w-3 rounded-full bg-white" />
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* 3. the record of who looked */}
          <Reveal delay={220}>
            <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-sage/50 hover:shadow-[0_28px_60px_-44px_rgba(47,125,99,0.85)]">
              <h3 className="text-[1.02rem] font-semibold text-navy">
                Access is logged, and withdrawable
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                Every grant is dated, and you can take it back without asking anybody.
              </p>
              <div className="mt-auto space-y-1.5 rounded-2xl border border-line bg-mist/60 p-3.5 transition duration-500 group-hover:border-sage/30 group-hover:bg-sage-wash/70">
                {[
                  ["Dr S. Rao", "Granted 14 Oct", true],
                  ["Dr K. Menon", "Withdrawn 02 Oct", false],
                ].map(([n, when, active]) => (
                  <div
                    key={n as string}
                    className="flex items-center gap-2.5 rounded-lg bg-white px-2.5 py-2"
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        active ? "bg-sage" : "bg-faint"
                      }`}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[0.7rem] font-semibold text-navy">
                        {n as string}
                      </span>
                      <span className="block text-[0.6rem] text-mute">
                        {when as string}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2.5 text-[0.86rem] text-slate">
            {[
              "Encrypted in transit and at rest",
              "Never sold on",
              "Shares nothing by default",
              "Built towards ABDM, not claimed today",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 16 16" className="shrink-0 text-sage" aria-hidden="true">
                  <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-8 max-w-3xl text-[0.8rem] leading-relaxed text-mute">
          Ayussetu supports preventive health actions. It is not a diagnostic
          or treatment tool, and AI can make mistakes. Always consult a
          qualified clinician.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- download ------------------------------ */

export function Download() {
  return (
    <section id="download" className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
        <div className="overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center sm:px-14">
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.8rem,4vw,2.4rem)] leading-tight text-white text-balance">
            Start with the reports already in your drawer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/70">
            Free for patients, on Android and iPhone. Doctors and clinics have
            tools of their own.
          </p>
          <div className="mt-8 flex justify-center">
            <StoreButtons tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
