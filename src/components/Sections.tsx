import Image from "next/image";
import { Reveal } from "./Motion";
import { StoreButtons } from "./StoreButtons";
import { ScoreRing } from "./ScoreRing";
import { AbhaStory } from "./AbhaStory";

/* ------------------------------- hero -------------------------------- */


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
      </div>
    </section>
  );
}


/* ------------------------------ privacy ------------------------------ */

export function Security() {
  return (
    <section id="trust" className="hero-room relative overflow-hidden border-b border-line text-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        {/* The heading sits in the story's left column, above the steps,
            so the text reads straight down beside the ring. The consent
            story plays one step at a time: who asks, what you allow,
            records moving, and taking it back. */}
        <div id="abha" className="scroll-mt-24">
          <AbhaStory>
            <div>
              <p className="eyebrow text-amber-light">
                Privacy, safety and trust
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.15rem,5vw,3.2rem)] leading-tight text-white text-balance">
                Private by default. Shared <em className="text-amber-light">only when you say yes</em>
              </h2>
              <p className="mt-4 max-w-[34rem] text-[1.02rem] leading-relaxed text-white/65">
                Link your ABHA, India&rsquo;s health ID, and hospitals can ask for
                your records. Only you decide what they see, and for how long.
                Your data is handled in line with HIPAA and India&rsquo;s Digital
                Personal Data Protection (DPDP) Act.
              </p>
            </div>
          </AbhaStory>
        </div>

        <Reveal>
          <ul className="mt-12 flex flex-wrap border-t border-white/12 pt-6 gap-x-7 gap-y-2.5 text-[0.86rem] text-white/70">
            {[
              "Encrypted in transit and at rest",
              "Never sold on",
              "Shares nothing by default",
              "Built towards ABDM, not claimed today",
              "HIPAA and DPDP aligned",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 16 16" className="shrink-0 text-[#7FD3A8]" aria-hidden="true">
                  <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- responsible AI --------------------------- */

/* The three promises beyond consent, after ABHA: responsible AI, honest
   limits, and a clinician reviewing what the app suggests. */
export function Promises() {
  return (
    <section id="promises" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-amber-deep">Responsible AI</p>
          <h2 className="mt-3 font-display text-[clamp(2.15rem,5vw,3.2rem)] leading-tight text-ink text-balance">
            AI that supports your care, <em className="text-amber">never replaces your doctor</em>
          </h2>
        </div>
        {/* Responsible AI, limits and clinicians, the three the deck asks
            for beyond consent: each a card with a small picture of the
            promise, so it can be understood at a glance. */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Responsible AI */}
          <article className="flex flex-col rounded-3xl border border-line bg-white p-6">
            <h3 className="text-[1.02rem] font-semibold text-navy">Responsible AI</h3>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
              Ayu answers from your own record, says when it is AI, and points you to a doctor instead of diagnosing.
            </p>
            <div className="mt-auto pt-5">
              <div className="space-y-2 rounded-2xl border border-line bg-mist/60 p-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="rounded-full bg-navy px-2 py-0.5 font-mono text-[0.56rem] uppercase tracking-[0.08em] text-white">AI</span>
                  <span className="text-[0.66rem] text-mute">From your record · Lipid profile, Oct</span>
                </div>
                <p className="rounded-xl rounded-bl-sm border border-line bg-white px-3 py-2 text-[0.74rem] leading-snug text-navy">
                  Your LDL is 164, above the healthy range.
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-wash px-2.5 py-1 text-[0.68rem] font-semibold text-sage">
                  ✓ Talk to your doctor about it
                </span>
              </div>
            </div>
          </article>

          {/* Honest about limits */}
          <article className="flex flex-col rounded-3xl border border-line bg-white p-6">
            <h3 className="text-[1.02rem] font-semibold text-navy">Honest about limits</h3>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
              Ayussetu supports preventive health actions. It is not a diagnostic or treatment tool, and it is not for emergencies.
            </p>
            <div className="mt-auto pt-5">
              <ul className="space-y-1.5 rounded-2xl border border-line bg-mist/60 p-3.5 text-[0.74rem]">
                {[
                  ["Prevention and awareness", true],
                  ["Diagnosis or treatment", false],
                  ["Emergencies: call 108", false],
                ].map(([k, ok]) => (
                  <li key={String(k)} className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5">
                    <span
                      className={`grid h-4 w-4 shrink-0 place-items-center rounded-full text-[0.55rem] font-bold ${
                        ok ? "bg-sage-wash text-sage" : "bg-[#FDECEC] text-[#D9403D]"
                      }`}
                    >
                      {ok ? "✓" : "✕"}
                    </span>
                    <span className={ok ? "font-semibold text-navy" : "text-slate"}>{k}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Clinicians involved */}
          <article className="flex flex-col rounded-3xl border border-line bg-white p-6">
            <h3 className="text-[1.02rem] font-semibold text-navy">Clinicians involved</h3>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
              A clinical advisor reviews the app's health suggestions, explanations and education content, so what you read is accurate, safe, and sends you to a doctor when it should.
            </p>
            <div className="mt-auto pt-5">
              <div className="rounded-2xl border border-line bg-mist/60 p-3.5">
                <div className="flex items-center gap-2.5 rounded-lg bg-white px-2.5 py-2">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-sage-wash text-sage">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M13 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM10 21l2-6 3 3v3M9 12l3-4 3 3 3 1M8 17l2-5" />
                    </svg>
                  </span>
                  <span className="min-w-0 flex-1 text-[0.74rem] leading-snug text-navy">Your blood sugar is high: walk for 10 minutes after each meal</span>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="flex -space-x-2">
                    {["CA"].map((x) => (
                      <span key={x} className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-navy text-[0.56rem] font-semibold text-white">
                        {x}
                      </span>
                    ))}
                  </span>
                  <span className="rounded-full bg-sage-wash px-2.5 py-1 text-[0.68rem] font-semibold text-sage">✓ Clinically reviewed</span>
                </div>
              </div>
            </div>
          </article>
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
