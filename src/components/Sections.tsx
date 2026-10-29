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
          <h1 className="rise font-display max-w-[12ch] text-[clamp(3.4rem,7.5vw,6rem)] leading-[0.95] tracking-[-0.015em] text-balance [animation-delay:170ms]">
            Your health has a story.{" "}
            <em className="text-amber-light">Understand it.</em>
          </h1>

          <p className="rise mt-6 max-w-[30rem] text-[1.05rem] leading-relaxed text-white/70 md:text-[1.15rem] [animation-delay:250ms]">
            Bring your health records together, understand what is changing,
            and discover practical steps toward better health.
          </p>

          {/* The app is the product, so the stores are the call to action:
              the official badges, first thing under the promise, rather
              than a button that only scrolls down to them. */}
          <div className="rise mt-9 [animation-delay:330ms]">
            <StoreButtons size="lg" />
            {/* The deck's two doors: patients stay on this page, doctors
                and clinics have their own. */}
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-[0.95rem] font-medium">
              <a href="#who" className="text-white/80 transition hover:text-white">
                For patients &rarr;
              </a>
              <a href="/for-doctors" className="text-white/80 transition hover:text-white">
                For doctors and clinics &rarr;
              </a>
            </div>
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


/* ------------------------------- ABHA -------------------------------- */

/* ABHA is the ID; the consent flow below is ABDM's, which runs on top
   of it. Worded to what that flow actually does: a revoked consent
   stops further access, and records already sent are deleted when the
   consent expires, so "ends the moment you say so" would overstate it. */
const abhaSteps = [
  { n: "01", t: "A hospital asks", d: "A hospital or doctor on the ABDM network requests your records, and says why." },
  { n: "02", t: "You approve", d: "You choose which records, from which dates, and for how long." },
  { n: "03", t: "Records travel", d: "Encrypted, straight from where they are kept. Nothing is held centrally." },
  { n: "04", t: "You revoke", d: "No further access, and the consent expires on the date you set." },
];

type NodeState = "approved" | "waiting" | "withdrawn" | "idle";

/* Six places that can ask, set on a circle round the patient the way
   the hero's ticks are set round the score. Angles run clockwise from
   the top. */
const abhaNodes: { label: string; angle: number; state: NodeState; note?: string; icon: string }[] = [
  { label: "Cardiology", angle: -90, state: "approved", note: "Approved, 7 days", icon: "M4 20V8l8-4 8 4v12M9 20v-5h6v5M12 8v4M10 10h4" },
  { label: "Diagnostic lab", angle: -30, state: "idle", icon: "M9 3v6l-4.5 9.5A1.5 1.5 0 0 0 5.9 21h12.2a1.5 1.5 0 0 0 1.4-2.5L15 9V3M8 3h8M7 15h10" },
  { label: "Clinic", angle: 30, state: "waiting", note: "Request waiting", icon: "M6 3v6a4 4 0 0 0 8 0V3M10 13v3a4 4 0 0 0 8 0v-2M18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" },
  { label: "Pharmacy", angle: 90, state: "idle", icon: "M5.5 13.5 13.5 5.5a3.5 3.5 0 0 1 5 5l-8 8a3.5 3.5 0 0 1-5-5ZM9.5 9.5l5 5" },
  { label: "Hospital", angle: 150, state: "withdrawn", note: "Revoked 02 Oct", icon: "M4 20V8l8-4 8 4v12M9 20v-5h6v5M12 8v4M10 10h4" },
  { label: "Imaging centre", angle: 210, state: "idle", icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" },
];

const R = 39; // node ring radius, as a percentage of the diagram

function at(angle: number, r = R) {
  const a = (angle * Math.PI) / 180;
  return { x: 50 + r * Math.cos(a), y: 50 + r * Math.sin(a) };
}

function AbhaNetwork() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="pointer-events-none absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,139,11,0.22),rgba(255,139,11,0)_65%)] blur-[8px]" />

      <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
        <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.25" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.25" />
        {abhaNodes.map((n) => {
          const p = at(n.angle, R - 5);
          const q = at(n.angle, 15);
          if (n.state === "approved")
            return (
              <g key={n.label}>
                <line x1={q.x} y1={q.y} x2={p.x} y2={p.y} stroke="#FF8B0B" strokeWidth="0.6" />
                <line className="abha-flow" x1={q.x} y1={q.y} x2={p.x} y2={p.y} stroke="#FFD2A0" strokeWidth="0.9" strokeLinecap="round" strokeDasharray="1.2 16" />
              </g>
            );
          if (n.state === "waiting")
            return <line key={n.label} x1={q.x} y1={q.y} x2={p.x} y2={p.y} stroke="#FFB15C" strokeOpacity="0.7" strokeWidth="0.4" strokeDasharray="1 1.2" />;
          return <line key={n.label} x1={q.x} y1={q.y} x2={p.x} y2={p.y} stroke="rgba(255,255,255,0.12)" strokeWidth="0.3" />;
        })}
      </svg>

      {/* The patient, at the centre of every line. */}
      <div className="absolute left-1/2 top-1/2 flex w-[30%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.06),0_20px_40px_-12px_rgba(255,139,11,0.45)] md:h-16 md:w-16">
          <Image src="/ayussetu-logo-white.png" alt="" width={64} height={64} />
        </span>
        <span className="mt-3 text-[0.82rem] font-semibold text-white md:text-[0.9rem]">Your ABHA</span>
        <span className="eyebrow mt-1 hidden !text-[0.56rem] text-white/45 md:block">You hold the keys</span>
      </div>

      {abhaNodes.map((n) => {
        const p = at(n.angle);
        // The top node's line arrives from below, so its words go above
        // the icon instead of across the line.
        const top = n.angle === -90;
        return (
          <div
            key={n.label}
            className={`absolute flex w-[30%] -translate-x-1/2 items-center text-center ${
              top ? "-translate-y-[calc(100%-1.25rem)] flex-col-reverse md:-translate-y-[calc(100%-1.5rem)]" : "-translate-y-5 flex-col md:-translate-y-6"
            }`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span
              className={`relative grid h-10 w-10 place-items-center rounded-xl border md:h-12 md:w-12 ${
                n.state === "approved"
                  ? "border-cta bg-cta/15 text-amber-light"
                  : n.state === "waiting"
                    ? "border-amber-light/50 bg-white/[0.05] text-amber-light"
                    : n.state === "withdrawn"
                      ? "border-white/15 bg-white/[0.03] text-white/45"
                      : "border-white/20 bg-white/[0.08] text-white/90"
              }`}
            >
              {n.state === "waiting" && (
                <span className="absolute inset-[-5px] rounded-[0.9rem] border border-dashed border-amber-light/45" />
              )}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={n.icon} />
              </svg>
            </span>
            <span className={`${top ? "mb-1.5" : "mt-2"} text-[0.66rem] leading-tight md:text-[0.76rem] ${n.state === "withdrawn" ? "text-white/30 line-through decoration-white/30" : "text-white/80"}`}>
              {n.label}
            </span>
            {n.note && (
              <span
                className={`eyebrow ${top ? "mb-0.5" : "mt-1"} !text-[0.52rem] md:!text-[0.58rem] ${
                  n.state === "approved" ? "text-amber-light" : n.state === "waiting" ? "text-amber-light/80" : "text-white/35"
                }`}
              >
                {n.note}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* What ABHA will mean, drawn as the network a consent travels across
   rather than as a picture of the ID card: a mock government card with
   a made up number reads as an imitation of the real one. One line is
   lit because one hospital was let in, one waits, one was let go; the
   rest are dark because nobody asked. Still labelled planned, because
   it is. */
export function Abha() {
  return (
    <section id="abha" className="hero-room relative overflow-hidden border-b border-line text-white">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:py-28">
        <div>
          <p className="eyebrow text-amber-light">Planned, not yet live</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-balance">
            Your health ID, <em className="text-amber-light">your consent</em>
          </h2>
          <p className="mt-5 max-w-[30rem] text-[1.02rem] leading-relaxed text-white/65">
            Your ABHA is your national health ID. Link it to Ayussetu, and
            hospitals on the ABDM network can ask for your records, but only
            with a consent you approve: which records, from when, and for how
            long. You can revoke it at any time.
          </p>

          <ol className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/12 pt-7">
            {abhaSteps.map((s) => (
              <li key={s.n}>
                <span className="font-mono text-[0.72rem] text-amber-light">{s.n}</span>
                <p className="mt-1.5 text-[0.95rem] font-semibold text-white">{s.t}</p>
                <p className="mt-1 text-[0.82rem] leading-snug text-white/55">{s.d}</p>
              </li>
            ))}
          </ol>

          <p className="mt-9 text-[0.74rem] leading-relaxed text-white/40">
            Ayussetu is not yet certified on the ABDM network. This shows how it
            will work once it is.
          </p>
        </div>

        <Reveal>
          <AbhaNetwork />
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
                    <span className="mt-0.5 block text-[0.84rem] font-medium text-amber-light">
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

export function Security() {
  return (
    <section id="trust" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow text-amber-deep">
                Privacy, safety and trust
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
            <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_28px_60px_-44px_rgba(18,29,51,0.45)]">
              <h3 className="text-[1.02rem] font-semibold text-navy">
                A doctor has to ask
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                Nothing is visible to a clinician until you approve it.
              </p>
              <div className="mt-auto rounded-2xl border border-line bg-mist/60 p-3.5 pt-3 transition duration-500 group-hover:bg-mist">
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
            <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_28px_60px_-44px_rgba(18,29,51,0.45)]">
              <h3 className="text-[1.02rem] font-semibold text-navy">
                You choose what a group sees
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                Each person decides what travels to a care group, and can change their mind.
              </p>
              <div className="mt-auto space-y-1.5 rounded-2xl border border-line bg-mist/60 p-3.5 transition duration-500 group-hover:bg-mist">
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
            <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_28px_60px_-44px_rgba(18,29,51,0.45)]">
              <h3 className="text-[1.02rem] font-semibold text-navy">
                Access is logged, and revocable
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                Every grant is dated, and you can take it back without asking anybody.
              </p>
              <div className="mt-auto space-y-1.5 rounded-2xl border border-line bg-mist/60 p-3.5 transition duration-500 group-hover:bg-mist">
                {[
                  ["Dr S. Rao", "Granted 14 Oct", true],
                  ["Dr K. Menon", "Revoked 02 Oct", false],
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

        {/* Consent, control and security are drawn above; the deck also
            asks for responsible AI, limitations and clinicians, which are
            said plainly here rather than drawn. */}
        <div className="mt-12 grid gap-5 border-t border-line pt-10 md:grid-cols-3">
          {[
            {
              t: "Responsible AI",
              b: "Ayu answers from your own record, says when it is AI, and points you to a doctor instead of diagnosing.",
            },
            {
              t: "Honest about limits",
              b: "Ayussetu supports preventive health actions. It is not a diagnostic or treatment tool, and it is not for emergencies.",
            },
            {
              t: "Clinicians involved",
              b: "A pharmacist founder and a clinical advisor review what the app says about markers and medicines.",
            },
          ].map((x) => (
            <div key={x.t}>
              <h3 className="text-[1.02rem] font-semibold text-navy">{x.t}</h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">{x.b}</p>
            </div>
          ))}
        </div>

        <a href="/legal" className="mt-10 inline-block text-[0.95rem] font-semibold text-navy underline decoration-line-strong underline-offset-[6px] transition hover:decoration-navy">
          Our approach to trust &rarr;
        </a>
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
