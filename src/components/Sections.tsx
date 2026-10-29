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
import { ScoreRing } from "./ScoreRing";

/* ------------------------------- hero -------------------------------- */

const heroFigures = [
  { k: "29 markers", v: "Read from your reports" },
  { k: "One record", v: "Labs, prescriptions, vitals" },
  { k: "Free", v: "For patients, on Android and iPhone" },
];

/* One dark room with one warm light in it, and the score ring standing
   in that light. No phone and no screens: the claim and the instrument
   are the picture, and the figures underneath are the proof. */
export function Hero() {
  return (
    <section
      id="hero"
      className="hero-room relative flex min-h-[100svh] flex-col overflow-hidden text-white"
    >
      <div className="hero-leave relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-5 pb-10 pt-32 sm:px-8 md:grid-cols-2 md:gap-6 md:pt-36">
        <div>
          <h1 className="rise font-display max-w-[11ch] text-[clamp(3.4rem,7.5vw,6rem)] leading-[0.95] tracking-[-0.015em] text-balance [animation-delay:170ms]">
            Know where your health is{" "}
            <em className="text-amber-light">heading.</em>
          </h1>

          <p className="rise mt-6 max-w-[30rem] text-[1.05rem] leading-relaxed text-white/70 md:text-[1.15rem] [animation-delay:250ms]">
            Every lab report and prescription you have, read together as one
            record. Ayussetu shows the trend while there is still time to act
            on it.
          </p>

          {/* The app is the product, so the stores are the call to action:
              the official badges, first thing under the promise, rather
              than a button that only scrolls down to them. */}
          <div className="rise mt-9 [animation-delay:330ms]">
            <StoreButtons size="lg" />
            <a
              href="/for-doctors"
              className="mt-5 inline-block text-[0.95rem] font-medium text-white/75 transition hover:text-white"
            >
              For doctors and clinics &rarr;
            </a>
          </div>
        </div>

        <div className="rise [animation-delay:300ms]">
          <ScoreRing />
        </div>
      </div>

      {/* The figures on the floor of the room, as the reference sets them. */}
      <div className="hero-leave relative mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 md:pb-12">
        {/* One ruled row on every width. On a phone the three figures
            sit side by side under a hairline, not stacked behind a thick
            coloured bar. */}
        <dl className="rise grid grid-cols-3 border-t border-white/12 pt-5 sm:flex sm:border-0 sm:pt-0 [animation-delay:430ms]">
          {heroFigures.map((f, i) => (
            <div
              key={f.k}
              className={`px-3 sm:px-8 ${i === 0 ? "pl-0 sm:pl-0" : "border-l border-white/15 sm:border-white/20"}`}
            >
              <dt className="text-[0.98rem] font-semibold leading-tight sm:text-[1.15rem] md:text-[1.35rem]">{f.k}</dt>
              <dd className="mt-1 text-[0.74rem] leading-snug text-white/60 sm:text-[0.86rem] md:text-[0.92rem]">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}


/* ----------------------------- features ------------------------------ */

const features = [
  {
    eyebrow: "Unified health records",
    title: "Every report in one place, and read, not just stored",
    mock: <ReportMock />,
  },  {
    eyebrow: "Smart medication management",
    title: "Doses you actually take, and the ones you did not",
    mock: <DoseMock />,
  },  {
    eyebrow: "Ayu, the AI assistant",
    title: "Answers drawn from your record, not from the internet",
    mock: <AyuMock />,
  },  {
    eyebrow: "Doctor consultations",
    title: "Book in person, on video or by voice",
    mock: <ConsultMock />,
  },
];

/* Both product sections open the same way the page does: name the thing
   that is wrong, then say what Ayussetu does about it. The features that
   follow are evidence for the second half, not a list on their own. */
function ProblemSolution({
  problem,
  solution,
  dark = false,
}: {
  problem: string;
  solution: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`mt-10 grid gap-8 border-t pt-8 sm:grid-cols-2 sm:gap-12 ${
        dark ? "border-white/12" : "border-line"
      }`}
    >
      <div>
        <p
          className={`eyebrow ${
            dark ? "text-white/40" : "text-mute"
          }`}
        >
          The problem
        </p>
        <p
          className={`mt-2.5 text-[0.98rem] leading-relaxed ${
            dark ? "text-white/60" : "text-slate"
          }`}
        >
          {problem}
        </p>
      </div>
      <div className={dark ? "sm:border-l sm:border-white/12 sm:pl-12" : "sm:border-l sm:border-line sm:pl-12"}>
        <p
          className={`eyebrow ${
            dark ? "text-amber" : "text-amber-deep"
          }`}
        >
          What Ayussetu does
        </p>
        <p
          className={`mt-2.5 text-[0.98rem] leading-relaxed ${
            dark ? "text-white/85" : "text-navy"
          }`}
        >
          {solution}
        </p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative border-b border-line bg-ink text-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-amber">
            For patients, in the app
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.05rem,4.6vw,3rem)] leading-tight text-balance">
            Everything a hospital asks you to remember, remembered for you
          </h2>
        </div>

        <ProblemSolution
          dark
          problem="Nobody hands a patient their own history. They are expected to carry it in their head, across clinics that never speak to each other."
          solution="Holds it for them on their own phone, free: every report, every dose, every reading, with an assistant that reads them back in plain language."
        />

        <div className="mt-12 space-y-12 md:space-y-16">
          {features.map((b, i) => (
            <div
              key={b.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <p className="eyebrow text-white/45">
                  {b.eyebrow}
                </p>
                <h3 className="mt-2.5 max-w-[20ch] font-display text-[clamp(1.4rem,2.8vw,1.95rem)] leading-snug text-balance">
                  {b.title}
                </h3>
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
    { d: "March", v: "128", s: "Near optimal" },
    { d: "June", v: "146", s: "Borderline" },
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
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow text-mute">
                Understanding your numbers
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.15rem,5vw,3.2rem)] leading-tight text-ink text-balance">
                A marker is only useful if you know what it is for
              </h2>
              <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-slate">
                Every marker Ayussetu reads is explained where it appears, in
                plain language, with your own readings behind it.
              </p>
              <p className="mt-5 max-w-md text-[0.92rem] leading-relaxed text-navy">
                One reading is a number. Three readings are a direction, and a
                direction is the part you can still do something about.
              </p>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <article className="rounded-[2rem] border border-line bg-white p-7 shadow-[0_44px_100px_-70px_rgba(22,35,61,0.7)] md:p-9">
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

/* ----------------------------- practice ------------------------------ */

const doctorBlocks = [
  {
    eyebrow: "Consultation",
    title: "A prescription written in a minute, delivered in seconds",
    mock: <PrescriptionMock />,
  },
  {
    eyebrow: "Practice",
    title: "What you earned, by the period you actually think in",
    mock: <EarningsMock />,
  },
];

export function Practice() {
  return (
    <section id="doctors" className="relative border-b border-line bg-paper">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-mute">
            The doctor app
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.05rem,4.6vw,3rem)] leading-tight text-ink text-balance">
            A consultation that ends in a record, not a paper slip
          </h2>
        </div>

        <ProblemSolution
          problem="A patient arrives with no history, so the consultation starts from nothing and ends on a paper slip that nobody will find again."
          solution="Puts their own readings and reports in front of you before they sit down, and turns what you write into their record, their doses and your day's numbers."
        />
        <div className="mt-12 space-y-12 md:space-y-16">
          {doctorBlocks.map((b, i) => (
            <div
              key={b.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <p className="eyebrow text-mute">
                  {b.eyebrow}
                </p>
                <h3 className="mt-2.5 max-w-[20ch] font-display text-[clamp(1.4rem,2.8vw,1.95rem)] leading-snug text-ink text-balance">
                  {b.title}
                </h3>
              </Reveal>
              <Parallax speed={i % 2 === 0 ? 0.36 : 0.48}>{b.mock}</Parallax>
            </div>
          ))}
        </div>
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
    <section id="abha" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-line bg-ink px-6 py-11 text-white sm:px-9 md:px-14 md:py-16">
            <span className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.07] blur-3xl" />

            <div className="relative grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14">
              <div>
                <p className="eyebrow text-amber-light">
                  Planned, not yet live
                </p>
                <h2 className="mt-5 font-display text-[clamp(1.95rem,4.2vw,2.85rem)] leading-tight text-balance">
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
                      <p className="eyebrow text-white/40">
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
    <section id="team" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow text-amber-deep">
            About the founder
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.15rem,5vw,3.2rem)] leading-tight text-ink text-balance">
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
    <section id="security" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow text-amber-deep">
                Privacy and safety
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(2.15rem,5vw,3.2rem)] leading-tight text-ink text-balance">
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
                <p className="eyebrow text-mute">
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
    <section id="download" className="border-b border-line bg-paper">
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
            <StoreButtons size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
