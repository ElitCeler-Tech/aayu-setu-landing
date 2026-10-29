import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/team";
import { Reveal } from "./Motion";
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

/* ------------------------------- ABHA -------------------------------- */

const abhaSteps = [
  { n: "01", t: "A hospital asks", d: "A request arrives against your ABHA, naming who is asking and why." },
  { n: "02", t: "You approve", d: "You choose which records, and for how long. Nothing moves before this." },
  { n: "03", t: "Records travel", d: "Only what you picked is sent, over the national network." },
  { n: "04", t: "You withdraw", d: "Access ends the moment you say so, and the grant stays on your record." },
];

/* What ABHA will mean, drawn as the path a consent takes rather than as
   a picture of the ID card: a mock of a government card with a made up
   number reads as an imitation of the real one. Marked as planned in
   the heading's own label, because it is. */
export function Abha() {
  return (
    <section id="abha" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center">
          <p className="eyebrow text-amber">Planned, not yet live</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            One health ID, <em className="text-amber">every hospital</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-slate">
            The records you keep in Ayussetu will sit behind your ABHA, readable
            by any hospital on the national network, and only against a consent
            you approve each time.
          </p>
        </div>

        <Reveal>
          <ol className="relative mt-16 grid gap-10 rounded-3xl border border-line bg-mist px-6 py-10 sm:px-10 md:grid-cols-4 md:gap-8 md:py-12">
            {/* The path: navy where the patient has acted, so the line
                itself says that nothing travels before step two. */}
            <span aria-hidden="true" className="absolute left-10 right-10 top-[4.15rem] hidden h-px bg-line-strong md:block" />
            <span aria-hidden="true" className="absolute left-10 top-[4.15rem] hidden h-px w-[calc(50%-2.5rem)] bg-navy md:block" />
            {abhaSteps.map((s, i) => (
              <li key={s.n} className="relative">
                <span
                  className={`relative z-10 grid h-9 w-9 place-items-center rounded-full font-mono text-[0.72rem] ${
                    i === 1
                      ? "bg-cta text-ink"
                      : i < 2
                        ? "bg-navy text-white"
                        : "border border-line-strong bg-paper text-mute"
                  }`}
                >
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-[1.6rem] leading-tight text-ink">{s.t}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">{s.d}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <p className="mt-6 text-center text-[0.78rem] text-mute">
          Ayussetu is not yet certified on the ABDM network. This describes how
          it will work once it is.
        </p>
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
