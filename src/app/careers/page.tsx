import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers at Ayussetu",
  description: "Join our team to improve people's lives and make a difference.",
};

/* Careers. There are no open roles today, so rather than an empty jobs
   board the page says who we look for and asks for a CV by email. When
   roles open, they go in a list above the CV card. */

const values = [
  {
    t: "Work that reaches people",
    b: "What you build ends up in the hands of families reading their own health records, often for the first time.",
    icon: "M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z",
  },
  {
    t: "Health and technology together",
    b: "Engineers, designers and clinicians in one team, so what ships is both useful and safe.",
    icon: "M4 6h16v10H4zM8 20h8M12 16v4",
  },
  {
    t: "Room to own things",
    b: "A small team means real ownership: you shape the product, not just a ticket queue.",
    icon: "M12 3v18M3 12h18",
  },
];

export default function Careers() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Join our team to improve people's lives"
          accent="and make a difference"
          lede="Ayussetu is building personal health intelligence for India. We are always glad to hear from people who care about that as much as we do."
        />

        <section className="border-b border-line bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <p className="eyebrow text-amber">Why Ayussetu</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.6vw,3.2rem)] leading-[1.04] text-ink text-balance">
              What it is like <em className="text-amber">to work here</em>
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {values.map((v) => (
                <div key={v.t} className="rounded-3xl border border-line bg-white p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-wash">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C25E00" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={v.icon} />
                    </svg>
                  </span>
                  <h3 className="mt-6 font-display text-[1.5rem] leading-tight text-ink">{v.t}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">{v.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <div className="grid items-center gap-8 rounded-[2rem] bg-navy p-8 text-white md:grid-cols-[1.4fr_1fr] md:p-12">
              <div>
                <p className="eyebrow text-amber-light">Open roles</p>
                <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.6rem)] leading-[1.08] text-balance">
                  No open roles right now, <em className="text-amber-light">but we would still like to hear from you</em>
                </h2>
                <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-white/70">
                  Send your CV and a few lines about what you would like to work on. We keep every
                  application and write back when a role fits.
                </p>
              </div>
              <div className="md:text-right">
                <a
                  href="mailto:info@ayussetu.com?subject=Careers%20at%20Ayussetu"
                  className="inline-block rounded-full bg-cta px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:bg-brand-deep"
                >
                  Send your CV
                </a>
                <p className="mt-3 text-[0.82rem] text-white/55">info@ayussetu.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
