import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { LockCard } from "@/components/LockCard";

export const metadata: Metadata = {
  title: "Security and trust at Ayussetu",
  description: "Your health data, protected at every level: private by design, secure by default, and shared only with your consent.",
};

/* Security and trust. Every line here describes what Ayussetu does in
   practice, worded to what is true today. No round the clock threat
   monitoring is claimed, and ABDM is described as planned, not live. */

const checks = [
  {
    t: "Private by design",
    b: "Your records are tied to your account and shown only to you. Nothing is shared with anyone by default, and your data is never sold.",
  },
  {
    t: "Secure by default",
    b: "Everything between the app and our servers travels over encrypted connections, and your record opens only when you are signed in to your own account.",
  },
  {
    t: "Consent you control",
    b: "A doctor sees your records only after you grant access. Once Ayussetu is on the ABDM network, linking your ABHA will work the same way: you choose what is shared, for how long, and can take it back.",
  },
  {
    t: "Responsible with data and AI",
    b: "AI explains your own reports in plain language. It does not diagnose or prescribe, it points you to a doctor when it should, and a clinical advisor reviews what the app says.",
  },
];

export default function Security() {
  return (
    <>
      <Header overlay />
      <main>
        <section id="hero" className="hero-room relative overflow-hidden text-white">
          <div className="relative mx-auto grid max-w-6xl items-start gap-14 px-5 pb-20 pt-36 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-40">
            <div>
              <p className="eyebrow text-amber-light">Security and trust</p>
              <h1 className="mt-5 max-w-[16ch] font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[1] text-balance">
                Your health data, <em className="text-amber-light">protected at every level</em>
              </h1>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70">
                Your health history is personal. Ayussetu is built so it stays yours: kept private,
                shared only when you say yes, and handled with care at every step.
              </p>

              <ul className="mt-10 space-y-5">
                {checks.map((c) => (
                  <li key={c.t} className="flex gap-4">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#7FD3A8]/15 text-[#9BE2BD]">
                      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M6.2 11.8 2.9 8.5l1.1-1.1 2.2 2.2 5.6-5.6 1.1 1.1z" fill="currentColor" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-[1.02rem] font-semibold text-white">{c.t}</span>
                      <span className="mt-1 block max-w-xl text-[0.9rem] leading-relaxed text-white/60">{c.b}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Held level with the four points rather than floating in the
                middle of the column, and kept in view while they are read. */}
            <div className="md:sticky md:top-32 md:mt-[19rem]">
              <LockCard />
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-line bg-mist p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <div>
                <h2 className="text-[1.4rem] font-semibold leading-tight text-ink">Questions about your data?</h2>
                <p className="mt-2 max-w-xl text-[0.92rem] leading-relaxed text-slate">
                  Ask us what we hold, how it is used, or how to delete it. A person will write back.
                </p>
              </div>
              <a href="/contact" className="rounded-full bg-brand px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:bg-brand-deep">
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
