import type { Metadata } from "next";
import Image from "next/image";
import { Header, Footer } from "@/components/Chrome";

export const metadata: Metadata = {
  title: "Ayussetu for healthcare partners",
  description:
    "Hospitals, labs, pharmacies and Ayurveda and wellness practitioners: connect with Ayussetu so what you produce reaches the patient's own record, shared only with their consent.",
};

/* One page for every care provider that is not a doctor or a clinic
   (those have /for-doctors). The top is a hub: the patient's record in
   the middle, the four kinds of partner around it, records flowing in
   along the lines while each partner lights in turn; each partner is a
   link to its own section. Each section is a card with that partner's
   own document arriving in the patient's record.

   Worded to what Ayussetu does for partners today, with no product
   claimed that does not exist yet; each ends in a walkthrough request,
   because every partnership is set up by hand. The italic serif is only
   in the page headline. */

const partners = [
  {
    id: "hospitals",
    who: "Hospitals",
    t: "Every stay ends up in the patient's own record",
    b: "Discharge summaries, reports and prescriptions go straight to the patient, so the next doctor they see has the whole story rather than a lost file.",
    points: ["Records delivered to the patient, not left in a folder", "A patient's history, only when they grant access", "Integration support from our team"],
    icon: "M4 20V8l8-4 8 4v12M9 20v-5h6v5M12 8v4M10 10h4",
    org: "City Hospital",
    doc: "Discharge summary",
    lines: [["Admitted", "28 May"], ["Discharged", "02 Jun"]],
  },
  {
    id: "labs",
    who: "Labs and diagnostic centres",
    t: "Lab orders and results in one place",
    b: "Patients order tests and book appointments with your lab from the app, and every result goes straight to their record, next to every past report.",
    points: ["Order labs and schedule appointments", "Personalized lab test recommendations", "Integration support from our team"],
    icon: "M9 3v6l-4.5 9.5A1.5 1.5 0 0 0 5.9 21h12.2a1.5 1.5 0 0 0 1.4-2.5L15 9V3M8 3h8M7 15h10",
    org: "Your lab",
    doc: "Blood work",
    lines: [["Cholesterol", "214"], ["LDL", "138"]],
  },
  {
    id: "pharmacies",
    who: "Pharmacies",
    t: "Medicines that stay with the patient",
    b: "Receive digital prescriptions, remind patients when it is time to reorder, and deliver to their door, while their medicine list stays in the record every doctor sees.",
    points: ["Digital prescriptions", "Medication reminders to order on time", "Delivery services"],
    icon: "M5.5 13.5 13.5 5.5a3.5 3.5 0 0 1 5 5l-8 8a3.5 3.5 0 0 1-5-5ZM9.5 9.5l5 5",
    org: "Your pharmacy",
    doc: "Medication report",
    lines: [["Current medicines", "4"], ["Refill due", "25 Sep"]],
  },
  {
    id: "wellness",
    who: "Ayurveda and wellness",
    t: "The full picture before you advise",
    b: "With the patient's consent, see their reports and medicines in one place, so your guidance fits alongside the rest of their care.",
    points: ["Reports and medicines in one view, with consent", "Care that fits alongside their treatment", "Talk to us about how you would like to connect"],
    icon: "M12 21c-4-3-7-6.5-7-10a7 7 0 0 1 7-7 7 7 0 0 1 7 7c0 3.5-3 7-7 10ZM12 4v17M12 11l-3-2M12 15l3-2",
    org: "Your practice",
    doc: "Reports shared with you",
    lines: [["Shared by patient", "Yes"], ["Valid until", "30 Jun"]],
  },
];

const steps = [
  { t: "Talk to us", b: "Tell us what you produce and how your team works today." },
  { t: "We set it up together", b: "Our team connects your records to Ayussetu and walks your staff through it." },
  { t: "Records reach patients", b: "What you send lands in each patient's own record, shared only with their consent." },
];

function Icon({ d, size = 22 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const Tick = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M6.2 11.6 2.9 8.3l1.2-1.2 2.1 2.1 5.6-5.6 1.2 1.2z" fill="currentColor" />
  </svg>
);

/* The hub: four partners around the patient's record. Node positions are
   in percent of the square; the lines are drawn in the same space. */
const nodes = [
  { x: 18, y: 20 },
  { x: 82, y: 20 },
  { x: 18, y: 80 },
  { x: 82, y: 80 },
];

function Hub() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
      <div className="pointer-events-none absolute inset-[20%] rounded-full bg-[radial-gradient(circle,rgba(255,139,11,0.25),rgba(255,139,11,0)_65%)] blur-[6px]" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.3" />
        {nodes.map((n, i) => {
          const path = `M${n.x} ${n.y} L50 50`;
          return (
            <g key={i}>
              <path d={path} stroke="rgba(255,255,255,0.14)" strokeWidth="0.35" fill="none" />
              <path d={path} className="hub-flow" stroke="#FFB15C" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="1.2 4" fill="none" style={{ animationDelay: `${i * 0.4}s` }} />
              <circle r="1.3" fill="#FF8B0B">
                <animateMotion dur="3.2s" begin={`${i * 0.8}s`} repeatCount="indefinite" path={path} />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* the patient's record */}
      <div className="absolute left-1/2 top-1/2 w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-3 text-ink shadow-[0_0_0_8px_rgba(255,139,11,0.15),0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2">
          <Image src="/icon.png" alt="" width={24} height={24} className="h-6 w-6 rounded-md" />
          <span className="text-[0.72rem] font-semibold">Patient&rsquo;s record</span>
        </div>
        <div className="mt-2 space-y-1">
          {["Discharge summary", "Blood work", "Medicines"].map((r) => (
            <div key={r} className="flex items-center justify-between rounded-md bg-mist px-2 py-1 text-[0.6rem] text-navy">
              {r}
              <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-sage text-white">
                <svg width="7" height="7" viewBox="0 0 16 16" aria-hidden="true"><path d="M6.2 11.6 2.9 8.3l1.2-1.2 2.1 2.1 5.6-5.6 1.2 1.2z" fill="currentColor" /></svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      {partners.map((p, i) => (
        <a
          key={p.id}
          href={`#${p.id}`}
          className="hub-node group absolute flex w-[30%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
          style={{ left: `${nodes[i].x}%`, top: `${nodes[i].y}%`, animationDelay: `${i * 2}s` }}
        >
          <span className="hub-tile grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/[0.07] text-amber-light backdrop-blur transition group-hover:bg-white group-hover:text-amber-deep" style={{ animationDelay: `${i * 2}s` }}>
            <Icon d={p.icon} />
          </span>
          <span className="text-[0.78rem] font-semibold leading-tight text-white/90 group-hover:text-white">{p.who}</span>
        </a>
      ))}
    </div>
  );
}

/* A partner's document arriving in the patient's record. */
function Arrives({ p }: { p: (typeof partners)[number] }) {
  return (
    <div className="relative grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]" aria-hidden="true">
      <div className="mx-auto w-full max-w-[15rem] -rotate-2 rounded-xl bg-white p-4 shadow-[0_24px_44px_-24px_rgba(18,29,51,0.5)] ring-1 ring-line">
        <div className="flex items-center justify-between">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-mute">{p.org}</span>
          <span className="grid h-6 w-6 place-items-center rounded-md bg-amber-wash text-amber-deep">
            <Icon d={p.icon} size={13} />
          </span>
        </div>
        <p className="mt-3 text-[0.92rem] font-semibold text-ink">{p.doc}</p>
        <div className="mt-3 space-y-1.5">
          {p.lines.map(([k, v]) => (
            <div key={k} className="flex justify-between text-[0.72rem] text-slate">
              <span>{k}</span>
              <span className="font-semibold text-navy">{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 rounded-full bg-mist" />
          <div className="h-1.5 w-4/5 rounded-full bg-mist" />
        </div>
      </div>

      <svg width="56" height="20" viewBox="0 0 56 20" className="mx-auto rotate-90 text-cta sm:rotate-0">
        <path d="M2 10h44" className="hub-flow" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 5" fill="none" />
        <path d="M40 4l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      <div className="mx-auto w-full max-w-[15rem] rounded-2xl bg-navy p-4 text-white shadow-[0_30px_60px_-30px_rgba(18,29,51,0.8)]">
        <div className="flex items-center gap-2">
          <Image src="/icon.png" alt="" width={22} height={22} className="h-[22px] w-[22px] rounded-md" />
          <span className="text-[0.74rem] font-semibold">Patient&rsquo;s record</span>
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="flex items-center justify-between rounded-lg bg-white/[0.06] px-3 py-2 text-[0.7rem] text-white/60">
            Earlier reports
            <span className="text-[0.62rem]">12</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/[0.14] px-3 py-2 text-[0.74rem] font-semibold ring-1 ring-amber-light/40">
            {p.doc}
            <span className="grid h-5 w-5 place-items-center rounded-full bg-sage text-white">
              <Tick />
            </span>
          </div>
        </div>
        <p className="mt-2.5 text-[0.66rem] text-amber-light">Saved, with consent</p>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <>
      <Header overlay />
      <main>
        <section id="hero" className="hero-room relative overflow-hidden text-white">
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-36 sm:px-8 md:grid-cols-[1fr_1fr] md:pb-24 md:pt-40">
            <div>
              <p className="eyebrow text-amber-light">For healthcare partners</p>
              <h1 className="mt-5 font-display text-[clamp(2.6rem,5.4vw,4.2rem)] leading-[1.02] text-balance">
                Reach patients <em className="text-amber-light">where their records live</em>
              </h1>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70">
                Hospitals, labs, pharmacies and Ayurveda and wellness practitioners can connect with Ayussetu, so
                what you produce reaches the patient&rsquo;s own record, shared only with their consent.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="/contact" className="rounded-full bg-cta px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:bg-brand-deep">
                  Request a walkthrough
                </a>
                <a href="#how" className="text-[0.95rem] font-medium text-white/75 transition hover:text-white">
                  How partnering works &rarr;
                </a>
              </div>
            </div>
            <Hub />
          </div>
        </section>

        <section className="border-b border-line bg-mist">
          <div className="mx-auto max-w-6xl space-y-6 px-5 py-18 sm:px-8 md:py-24">
            {partners.map((p, i) => (
              <article
                key={p.id}
                id={p.id}
                className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_30px_60px_-50px_rgba(18,29,51,0.5)]"
              >
                <div className={`grid items-center gap-10 p-7 md:grid-cols-[1fr_1.05fr] md:gap-14 md:p-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-cta text-white">
                        <Icon d={p.icon} size={20} />
                      </span>
                      <span className="eyebrow text-amber">
                        {String(i + 1).padStart(2, "0")} &middot; {p.who}
                      </span>
                    </div>
                    <h2 className="mt-5 text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-[1.2] tracking-tight text-ink text-balance">{p.t}</h2>
                    <p className="mt-3 text-[0.98rem] leading-relaxed text-slate">{p.b}</p>
                    <ul className="mt-6 space-y-2.5">
                      {p.points.map((x) => (
                        <li key={x} className="flex gap-3 text-[0.92rem] text-navy">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage-wash text-sage">
                            <Tick />
                          </span>
                          {x}
                        </li>
                      ))}
                    </ul>
                    <a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-[0.88rem] font-semibold text-navy transition hover:border-navy hover:bg-navy hover:text-white">
                      Request a walkthrough &rarr;
                    </a>
                  </div>
                  <div className="rounded-[1.5rem] bg-[radial-gradient(80%_80%_at_70%_20%,rgba(255,139,11,0.1),transparent_60%),#F5F7FA] p-6 md:p-8">
                    <Arrives p={p} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="scroll-mt-24 border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
            <p className="eyebrow text-amber">How partnering works</p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.05] text-ink text-balance">
              Three steps, set up with you
            </h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.t} className="relative rounded-3xl border border-line bg-mist p-7">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-[0.9rem] font-semibold text-white">{i + 1}</span>
                  <h3 className="mt-5 text-[1.1rem] font-semibold text-ink">{s.t}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-slate">{s.b}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl bg-navy p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-[1.4rem] font-semibold leading-tight">A doctor or a clinic?</h3>
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
