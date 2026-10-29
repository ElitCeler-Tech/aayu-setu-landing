import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { People } from "@/components/People";
import { PageHero } from "@/components/PageHero";
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
      <Header overlay />
      <main>
        <PageHero
          eyebrow="About Ayussetu"
          title="Health information people can"
          accent="actually read"
          lede="Ayussetu began with a simple observation: people in India hold years of their own health information, and almost none of it is anywhere they can read it together. We are building the place where it sits, and the reading that makes it useful."
        />

        <section className="border-b border-line bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <p className="eyebrow text-amber">What we hold to</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.6vw,3.2rem)] leading-[1.04] text-ink text-balance">
              Three things we <em className="text-amber">will not trade</em>
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {beliefs.map((b, i) => (
                <div key={b.h} className="rounded-3xl border border-line bg-white p-7">
                  <p className="font-mono text-[0.8rem] text-amber">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-[1.1rem] font-semibold leading-snug text-ink text-balance">{b.h}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-slate">{b.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <People intro={false} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
