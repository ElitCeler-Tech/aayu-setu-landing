import Image from "next/image";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { People } from "@/components/People";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "About Ayussetu",
  description:
    "Connecting care for better health: what the name means, our vision, mission and purpose, and the team.",
};

export default function About() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero
          eyebrow="About Ayussetu"
          title="Connecting care"
          accent="for better health"
          lede="Connecting people, physicians and health intelligence through every step of the health journey."
        />

        {/* The name, in two halves: Ayus, life and longevity; Setu, the
            bridge. A thin bridge joins the two, the one the purpose
            section below draws in full. */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <Reveal>
              <p className="eyebrow text-amber">The meaning behind our name</p>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.6vw,3.2rem)] leading-[1.04] text-ink text-balance">
                Life, and the bridge <em className="text-amber">that carries it</em>
              </h2>
            </Reveal>
            <div className="relative mt-12 grid gap-5 md:grid-cols-2">
              <span aria-hidden="true" className="absolute left-1/2 top-1/2 hidden h-px w-16 -translate-x-1/2 bg-gradient-to-r from-amber/30 via-amber to-amber/30 md:block" />
              {[
                { w: "Ayus", k: "Life and longevity", b: "The aspiration to live longer, healthier, more fulfilling lives." },
                { w: "Setu", k: "Bridge and connection", b: "Connecting people, physicians, information and care." },
              ].map((x, i) => (
                <Reveal key={x.w} delay={i * 120}>
                  <div className="h-full rounded-3xl border border-line bg-white p-8 md:p-10">
                    <p className="text-[clamp(2.4rem,4.6vw,3.2rem)] font-semibold leading-none tracking-tight text-ink">{x.w}</p>
                    <p className="eyebrow mt-5 text-amber-deep">{x.k}</p>
                    <p className="mt-3 text-[1rem] leading-relaxed text-slate">{x.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mission and vision, drawn as the name says: Ayus is life, Setu
            is a bridge. The mission stands at one end (today, the records
            people already hold), the vision at the other (tomorrow, risk
            seen in time), and a bridge runs between them through the heart,
            with a light crossing it. On small screens the two simply stack. */}
        <section className="hero-room relative overflow-hidden border-b border-line text-white">
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow text-amber-light">Our purpose</p>
                <h2 className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.4rem)] leading-[1.04] text-balance">
                  A bridge from your records <em className="text-amber-light">to a healthier tomorrow</em>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-white/65">
                  We don&rsquo;t just connect health data. <span className="text-white">We connect care</span>, to
                  help people live better and longer.
                </p>
              </div>
            </Reveal>

            <div className="relative mt-14">
              <div aria-hidden="true" className="relative mx-auto hidden h-40 md:block">
                <svg viewBox="0 0 1000 160" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                  <defs>
                    <linearGradient id="bridge" x1="0" x2="1">
                      <stop offset="0" stopColor="#FFB15C" stopOpacity="0.25" />
                      <stop offset="0.5" stopColor="#FF8B0B" />
                      <stop offset="1" stopColor="#FFB15C" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>
                  <path d="M250 150 Q500 -50 750 150" fill="none" stroke="url(#bridge)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path className="abha-flow" d="M250 150 Q500 -50 750 150" fill="none" stroke="#FFD2A0" strokeWidth="2.5" strokeDasharray="1.2 7.4" pathLength="100" vectorEffect="non-scaling-stroke" />
                  <circle r="5" fill="#FF8B0B">
                    <animateMotion dur="4.5s" repeatCount="indefinite" path="M250 150 Q500 -50 750 150" />
                  </circle>
                </svg>
                <span className="absolute left-1/2 top-[31%] grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-white shadow-[0_0_0_8px_rgba(255,139,11,0.18),0_20px_40px_-12px_rgba(255,139,11,0.6)]">
                  <Image src="/ayussetu-logo-white.png" alt="" width={56} height={56} />
                </span>
                <span className="eyebrow absolute bottom-0 left-1/4 -translate-x-1/2 translate-y-full pt-2 !text-[0.6rem] text-white/45">Today</span>
                <span className="eyebrow absolute bottom-0 left-3/4 -translate-x-1/2 translate-y-full pt-2 !text-[0.6rem] text-white/45">Tomorrow</span>
              </div>

              <div className="grid gap-5 md:mt-10 md:grid-cols-2">
                {[
                  {
                    k: "Our mission",
                    icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 12h.01",
                    h: "Bridging the gaps in healthcare,",
                    a: "bringing people closer to better health.",
                    b: "We connect people, physicians and health information to make healthcare more personal, proactive and continuous, turning insights into meaningful actions that help people live healthier lives.",
                    p: ["Personal", "Proactive", "Continuous"],
                  },
                  {
                    k: "Our vision",
                    icon: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                    h: "Connecting care.",
                    a: "Inspiring longer, healthier lives.",
                    b: "A world where everyone has the opportunity to live a longer, healthier life, supported by connected, compassionate and personalised healthcare.",
                    p: ["Connected", "Compassionate", "Personalised"],
                  },
                ].map((m, i) => (
                  <Reveal key={m.k} delay={i * 120}>
                    <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur md:p-10">
                      <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,139,11,0.18),rgba(255,139,11,0)_70%)]" />
                      <div className="relative flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-cta">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d={m.icon} />
                          </svg>
                        </span>
                        <span className="eyebrow text-amber-light">{m.k}</span>
                      </div>
                      <p className="relative mt-7 text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold leading-[1.3] tracking-tight text-balance">
                        {m.h} <span className="text-amber-light">{m.a}</span>
                      </p>
                      <p className="relative mt-4 text-[0.95rem] leading-relaxed text-white/65">{m.b}</p>
                      <ul className="relative mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                        {m.p.map((x) => (
                          <li key={x} className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[0.78rem] text-white/80">
                            <svg width="11" height="11" viewBox="0 0 16 16" className="text-[#7FD3A8]" aria-hidden="true">
                              <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                            </svg>
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <People intro={false} />
      </main>
      <Footer />
    </>
  );
}
