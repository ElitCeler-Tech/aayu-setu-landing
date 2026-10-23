import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { Team } from "@/components/Sections";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "About Ayussetu",
  description:
    "Why Ayussetu exists, and the people building it.",
};

const beliefs = [
  {
    h: "A record belongs to the person it describes",
    p: "Not to the clinic that printed it. Everything in Ayussetu is held by the patient and shared only against a consent they give.",
  },
  {
    h: "A number is useless until it is explained",
    p: "A lab value means nothing on its own. Ayussetu puts each one against its range, in plain language, next to the readings around it.",
  },
  {
    h: "Early is the only time prevention works",
    p: "Risk builds quietly across years of reports. Reading them together is what makes it visible while there is still something to do.",
  },
];

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-mute">
              About us
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.2rem)] leading-[1.08] text-ink text-balance">
              Health information people can actually read
            </h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-slate">
              Ayussetu began with a simple observation: people in India hold
              years of their own health information, and almost none of it is
              anywhere they can read it together. We are building the place
              where it sits, and the reading that makes it useful.
            </p>
          </div>
        </section>

        <section className="border-b border-line bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <h2 className="max-w-xl font-display text-[clamp(1.7rem,3.6vw,2.3rem)] leading-tight text-balance">
              What we hold to
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
              {beliefs.map((b) => (
                <div key={b.h}>
                  <h3 className="font-display text-[1.15rem] leading-snug text-white text-balance">
                    {b.h}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-white/60">
                    {b.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
