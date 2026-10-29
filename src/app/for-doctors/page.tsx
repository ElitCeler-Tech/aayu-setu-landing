import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { StoreButtons } from "@/components/StoreButtons";
import { Reveal } from "@/components/Motion";
import { JoinForm } from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Ayussetu for doctors and clinics",
  description:
    "Consult, prescribe and run a practice on Ayussetu. Download the doctor app, open the clinic console, or register to join.",
};

const doctorApp = [
  {
    t: "The day, one patient at a time",
    b: "Appointments in order, with missed ones kept apart so they can be chased rather than lost.",
    p: [
      "Completed, upcoming and missed, separately",
      "Patients today and all time",
      "Prescriptions still to write",
    ],
  },
  {
    t: "The patient, before they sit down",
    b: "Ask for access to their record. Once granted, their own readings, reports and medicines are in front of you.",
    p: [
      "Vitals, reports and current medicines",
      "Record vitals for them yourself",
      "Book a slot on their behalf",
    ],
  },
  {
    t: "The prescription, in a minute",
    b: "Medicine with its generic resolved as you type, the end date worked out from the quantity, and your signature drawn with a finger.",
    p: [
      "Seventeen clinical fields, and a draft",
      "Follow up books the next appointment",
      "Their doses schedule themselves from it",
    ],
  },
];

const portal = [
  {
    t: "Departments and doctors",
    b: "Set up the departments your clinic runs and the doctors who sit in them, with the front desk staff who need access.",
    p: ["Departments", "Doctor roster", "Staff accounts"],
  },
  {
    t: "The clinic's book",
    b: "Every appointment across every department for the day, and the patient list behind it, rather than four separate registers.",
    p: ["The day across all departments", "One patient list", "Patient history"],
  },
  {
    t: "Prescriptions and billing",
    b: "Every prescription written on your roster is filed to the clinic as well as the patient, with fees collected and outstanding alongside.",
    p: ["Prescriptions by doctor", "Fees collected", "What is outstanding"],
  },
];

const doctorPoints = [
  "The day's appointments, one at a time, with missed ones kept separate",
  "A patient's own readings and reports, once they grant access",
  "A prescription written in a minute, signed with a finger",
  "Video and voice consultations inside the app",
  "Earnings by week, month, quarter or year, paid and outstanding",
  "Referral partners, agreed percentages and a summary to hand over",
];

const clinicPoints = [
  "Departments, and the doctors who sit in them",
  "The whole clinic's appointment book for the day",
  "One patient list, rather than four registers",
  "Every prescription written on your roster, filed to the clinic",
  "Billing: fees collected and fees outstanding",
  "Front desk staff with access, without being clinicians",
];

const today = [
  { t: "09:30", n: "Ravi K.", m: "Video consultation", s: "Seen" },
  { t: "10:00", n: "Meena S.", m: "In person", s: "Seen" },
  { t: "10:30", n: "Arjun P.", m: "Video consultation", s: "Up next" },
  { t: "11:00", n: "Fatima B.", m: "Voice call", s: "Booked" },
  { t: "08:45", n: "Suresh N.", m: "In person", s: "Missed" },
];

/* An icon for each doctor app card, in the same tile the home page uses. */
const doctorIcons = [
  "M8 3v3M16 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
  "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0",
  "M6 3h9l4 4v14H6zM9 12h7M9 16h4M15 3v4h4",
];

export default function ForDoctors() {
  return (
    <>
      <Header overlay />
      <main>
        {/* The same dark room as the home page, with the doctor's day in
            it: who is next, who was seen, who did not come. */}
        <section id="hero" className="hero-room relative overflow-hidden text-white">
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-36 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-40">
            <div>
              <p className="eyebrow text-amber-light">For doctors and clinics</p>
              <h1 className="mt-5 max-w-[16ch] font-display text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.98] text-balance">
                Consult on Ayussetu, <em className="text-amber-light">keep the record</em>
              </h1>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70">
                Doctors work from an app. Clinics run from a console in the
                browser. Both write into the same record the patient already
                keeps, so a consultation ends in something that lasts.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#join" className="rounded-full bg-brand px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:bg-brand-deep">
                  Register your interest
                </a>
                <a href="/" className="text-[0.95rem] font-medium text-white/75 transition hover:text-white">
                  For patients &rarr;
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur md:p-6">
                <div className="flex items-baseline justify-between">
                  <p className="text-[1rem] font-semibold">Today</p>
                  <p className="font-mono text-[0.7rem] text-white/50">8 PATIENTS</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {today.map((a) => (
                    <li key={a.t} className={`flex items-center gap-3 rounded-xl px-3.5 py-3 ${a.s === "Up next" ? "bg-white text-ink" : "border border-white/10 bg-white/[0.04]"}`}>
                      <span className={`w-12 shrink-0 font-mono text-[0.72rem] ${a.s === "Up next" ? "text-amber" : "text-white/55"}`}>{a.t}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[0.88rem] font-semibold">{a.n}</span>
                        <span className={`block text-[0.7rem] ${a.s === "Up next" ? "text-mute" : "text-white/50"}`}>{a.m}</span>
                      </span>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[0.66rem] font-semibold ${
                          a.s === "Up next" ? "bg-cta text-white" : a.s === "Seen" ? "bg-[#7FD3A8]/15 text-[#9BE2BD]" : "bg-white/10 text-white/60"
                        }`}
                      >
                        {a.s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-[0_24px_50px_-24px_rgba(0,0,0,0.6)] sm:flex">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-sage-wash text-sage">
                  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M6.2 11.8 2.9 8.5l1.1-1.1 2.2 2.2 5.6-5.6 1.1 1.1z" fill="currentColor" /></svg>
                </span>
                <span>
                  <span className="block text-[0.82rem] font-semibold">Prescription sent</span>
                  <span className="block text-[0.7rem] text-mute">Doses scheduled in the patient&rsquo;s app</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Two products, explained one after the other, because a
            doctor and a clinic manager want different answers. */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
            <Reveal>
              <p className="eyebrow text-amber-deep">
                The doctor app
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(1.95rem,4.2vw,2.8rem)] leading-tight text-ink text-balance">
                Everything a consultation needs, in a pocket
              </h2>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate">
                On Android and iPhone. A doctor signs in with their
                registration number and works from the day&rsquo;s list: who is
                coming, what each person has been through, and what they leave
                with.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {doctorApp.map((d, i) => (
                <Reveal key={d.t} delay={i * 90}>
                  <article className="h-full rounded-3xl border border-line bg-mist p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-wash">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C25E00" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={doctorIcons[i]} />
                      </svg>
                    </span>
                    <h3 className="mt-5 text-[1.05rem] font-semibold text-ink">
                      {d.t}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                      {d.b}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-line pt-4">
                      {d.p.map((x) => (
                        <li key={x} className="flex gap-2.5 text-[0.84rem] text-navy">
                          <svg width="13" height="13" viewBox="0 0 16 16" className="mt-[0.2rem] shrink-0 text-amber" aria-hidden="true">
                            <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                          </svg>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-10 flex flex-wrap items-center gap-5 rounded-3xl border border-line bg-white p-6">
                <p className="text-[0.92rem] text-slate">
                  Free to install. Your registration number is all it takes to
                  start.
                </p>
                <div className="sm:ml-auto">
                  <StoreButtons />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-line bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
            <Reveal>
              <p className="eyebrow text-amber-light">
                The clinician portal
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(1.95rem,4.2vw,2.8rem)] leading-tight text-balance">
                A browser console for the people who run the place
              </h2>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-white/60">
                Doctors work from the app. The clinic works from a console: the
                roster, the book, the patients and the money, in one view that
                the front desk can use without being clinicians.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {portal.map((d, i) => (
                <Reveal key={d.t} delay={i * 90}>
                  <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                    <h3 className="text-[1.05rem] font-semibold text-white">
                      {d.t}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-white/60">
                      {d.b}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                      {d.p.map((x) => (
                        <li key={x} className="flex gap-2.5 text-[0.84rem] text-white/85">
                          <svg width="13" height="13" viewBox="0 0 16 16" className="mt-[0.2rem] shrink-0 text-amber-light" aria-hidden="true">
                            <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                          </svg>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-10 flex flex-wrap items-center gap-5 rounded-3xl border border-white/12 bg-white/[0.04] p-6">
                <p className="text-[0.92rem] text-white/70">
                  Opened for your clinic once we have set it up. Ask and we
                  will walk you through it.
                </p>
                <a
                  href="#join"
                  className="ml-auto rounded-full bg-brand px-6 py-3 text-[0.88rem] font-semibold text-white transition hover:bg-brand-deep"
                >
                  Ask for a walkthrough
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <JoinForm />
      </main>
      <Footer />
    </>
  );
}
