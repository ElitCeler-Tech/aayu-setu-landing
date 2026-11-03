import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ayussetu for healthcare partners",
  description:
    "Hospitals, labs, pharmacies and Ayurveda and wellness practitioners: connect with Ayussetu so what you produce reaches the patient's own record, shared only with their consent.",
};

/* One page for every care provider that is not a doctor or a clinic
   (those have /for-doctors). Each partner gets its own section, reached
   from the footer by its anchor. Worded to what Ayussetu does for them
   today, with no product claimed that does not exist yet; each ends in a
   walkthrough request, because every partnership is set up by hand.

   The italic serif is only in the page headline; section titles are the
   plain sans. Each section's picture is the same idea drawn for that
   partner: what they produce, arriving in the patient's record. */

const partners = [
  {
    id: "hospitals",
    who: "Hospitals",
    t: "Every stay ends up in the patient's own record",
    b: "Discharge summaries, reports and prescriptions go straight to the patient, so the next doctor they see has the whole story rather than a lost file.",
    points: ["Records delivered to the patient, not left in a folder", "A patient's history, only when they grant access", "Integration support from our team"],
    icon: "M4 20V8l8-4 8 4v12M9 20v-5h6v5M12 8v4M10 10h4",
    from: "City Hospital",
    item: "Discharge summary",
  },
  {
    id: "labs",
    who: "Labs and diagnostic centres",
    t: "Results that patients can actually read",
    b: "Send results straight to the patient's record, where each value is shown against its range in plain language and kept next to every past report.",
    points: ["Results land where patients keep everything", "Each value set against its range", "Integration support from our team"],
    icon: "M9 3v6l-4.5 9.5A1.5 1.5 0 0 0 5.9 21h12.2a1.5 1.5 0 0 0 1.4-2.5L15 9V3M8 3h8M7 15h10",
    from: "Your lab",
    item: "Lipid profile",
  },
  {
    id: "pharmacies",
    who: "Pharmacies",
    t: "Medicines that stay with the patient",
    b: "Help patients keep an accurate list of what they take, with dose reminders in the app, so every doctor they see knows their current medicines.",
    points: ["A medicine list that travels with the patient", "Dose reminders in the app", "Integration support from our team"],
    icon: "M5.5 13.5 13.5 5.5a3.5 3.5 0 0 1 5 5l-8 8a3.5 3.5 0 0 1-5-5ZM9.5 9.5l5 5",
    from: "Your pharmacy",
    item: "Medication report",
  },
  {
    id: "wellness",
    who: "Ayurveda and wellness",
    t: "The full picture before you advise",
    b: "With the patient's consent, see their reports and medicines in one place, so your guidance fits alongside the rest of their care.",
    points: ["Reports and medicines in one view, with consent", "Care that fits alongside their treatment", "Talk to us about how you would like to connect"],
    icon: "M12 21c-4-3-7-6.5-7-10a7 7 0 0 1 7-7 7 7 0 0 1 7 7c0 3.5-3 7-7 10ZM12 4v17M12 11l-3-2M12 15l3-2",
    from: "Your practice",
    item: "Reports and medicines",
  },
];

function Icon({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d={d} />
    </svg>
  );
}

/* What the partner produces, arriving in the patient's record. */
function Flow({ icon, from, item }: { icon: string; from: string; item: string }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4" aria-hidden="true">
      <div className="flex-1 rounded-2xl border border-line bg-white p-4 shadow-[0_20px_40px_-30px_rgba(18,29,51,0.4)]">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-wash text-amber-deep">
          <Icon d={icon} />
        </span>
        <p className="mt-3 text-[0.82rem] font-semibold text-ink">{from}</p>
        <p className="mt-0.5 text-[0.74rem] text-mute">{item}</p>
      </div>
      <svg width="40" height="18" viewBox="0 0 40 18" className="shrink-0 text-cta">
        <path d="M2 9h32M27 3l7 6-7 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex-1 rounded-2xl bg-navy p-4 text-white shadow-[0_24px_48px_-28px_rgba(18,29,51,0.7)]">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-amber-light">Patient&rsquo;s record</p>
        <div className="mt-3 flex items-center justify-between gap-2 rounded-xl bg-white/[0.08] px-3 py-2.5">
          <span className="min-w-0 text-[0.78rem] font-semibold">{item}</span>
          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage">
            <svg width="10" height="10" viewBox="0 0 16 16">
              <path d="M6.2 11.6 2.9 8.3l1.2-1.2 2.1 2.1 5.6-5.6 1.2 1.2z" fill="#fff" />
            </svg>
          </span>
        </div>
        <p className="mt-2 text-[0.68rem] text-white/55">Saved, with consent</p>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero
          eyebrow="For healthcare partners"
          title="Work with Ayussetu and reach patients"
          accent="where their records live"
          lede="Hospitals, labs, pharmacies and Ayurveda and wellness practitioners can connect with Ayussetu, so what you produce reaches the patient's own record, shared only with their consent."
        >
          <nav aria-label="Partners" className="mt-9 flex flex-wrap gap-2.5">
            {partners.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[0.86rem] font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                <Icon d={p.icon} className="h-4 w-4" />
                {p.who}
              </a>
            ))}
          </nav>
        </PageHero>

        {partners.map((p, i) => (
          <section key={p.id} id={p.id} className={`scroll-mt-24 border-b border-line ${i % 2 ? "bg-paper" : "bg-mist"}`}>
            <div className={`mx-auto grid max-w-6xl items-center gap-10 px-5 py-18 sm:px-8 md:grid-cols-2 md:gap-16 md:py-24 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="eyebrow text-amber">{p.who}</p>
                <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.15] tracking-tight text-ink text-balance">{p.t}</h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-slate">{p.b}</p>
                <ul className="mt-6 space-y-3">
                  {p.points.map((x) => (
                    <li key={x} className="flex gap-3 text-[0.94rem] text-navy">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-wash text-amber-deep">
                        <svg width="10" height="10" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M6.2 11.6 2.9 8.3l1.2-1.2 2.1 2.1 5.6-5.6 1.2 1.2z" fill="currentColor" />
                        </svg>
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="mt-8 inline-block rounded-full bg-brand px-6 py-3.5 text-[0.9rem] font-semibold text-white transition hover:bg-brand-deep">
                  Request a walkthrough
                </a>
              </div>
              <Flow icon={p.icon} from={p.from} item={p.item} />
            </div>
          </section>
        ))}

        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
            <div className="flex flex-col items-start gap-5 rounded-3xl bg-navy p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h2 className="text-[1.5rem] font-semibold leading-tight">A doctor or a clinic?</h2>
                <p className="mt-2 max-w-xl text-[0.94rem] leading-relaxed text-white/70">
                  The doctor app and the clinic console have a page of their own.
                </p>
              </div>
              <a href="/for-doctors" className="rounded-full bg-cta px-6 py-3.5 text-[0.9rem] font-semibold text-white transition hover:bg-brand-deep">
                See Ayussetu for doctors
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
