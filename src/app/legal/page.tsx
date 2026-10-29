import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { legal } from "@/data/legal";

export const metadata: Metadata = {
  title: "Disclaimers, Ayussetu",
  description:
    "What Ayussetu is and is not: medical, AI use, health records, patient use, clinical use, outcomes, third party data and regulatory disclaimers.",
};

/* Every disclaimer on one page, each with its own anchor, so the footer
   can link straight to the one a reader asked about and nothing is
   buried in small print. */
export default function Legal() {
  return (
    <>
      <Header />
      <main className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="eyebrow text-amber-deep">Disclaimers</p>
              <h1 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.2rem)] leading-tight text-ink text-balance">
                What Ayussetu is, and what it is not
              </h1>
              <nav className="mt-8 hidden md:block">
                <ul className="space-y-2 text-[0.88rem]">
                  {legal.map((l) => (
                    <li key={l.slug}>
                      <a
                        className="text-slate transition hover:text-navy"
                        href={`#${l.slug}`}
                      >
                        {l.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="divide-y divide-line border-y border-line">
              {legal.map((l) => (
                <section key={l.slug} id={l.slug} className="scroll-mt-28 py-8">
                  <h2 className="font-display text-[1.6rem] leading-snug text-ink">
                    {l.title}
                  </h2>
                  <p className="mt-3 text-[0.96rem] leading-relaxed text-slate">
                    {l.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
