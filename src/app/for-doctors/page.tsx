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

export default function ForDoctors() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-line">
          <div className="grid-ground grid-fade pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-mute">
              For doctors and clinics
            </p>
            <h1 className="mt-5 max-w-[20ch] font-display text-[clamp(2.1rem,5vw,3.2rem)] leading-[1.07] text-ink text-balance">
              Consult on Ayussetu, and keep the record
            </h1>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-slate">
              Doctors work from an app. Clinics run from a console in the
              browser. Both write into the same record the patient already
              keeps, so a consultation ends in something that lasts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="rounded-full bg-amber px-6 py-3.5 text-[0.9rem] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(255,139,11,0.9)] transition hover:bg-amber-deep"
              >
                Register your interest
              </a>
              <a
                href="/"
                className="rounded-full border border-line bg-white px-6 py-3.5 text-[0.9rem] font-semibold text-navy transition hover:border-navy"
              >
                Back to the patient app
              </a>
            </div>
          </div>
        </section>

        {/* Two products, explained one after the other, because a
            doctor and a clinic manager want different answers. */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
            <Reveal>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-amber-deep">
                The doctor app
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(1.7rem,3.6vw,2.3rem)] leading-tight text-ink text-balance">
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
                  <article className="h-full rounded-3xl border border-line bg-white p-6">
                    <h3 className="font-display text-[1.1rem] text-navy">
                      {d.t}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                      {d.b}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-line pt-4">
                      {d.p.map((x) => (
                        <li key={x} className="flex gap-2.5 text-[0.84rem] text-navy">
                          <svg width="13" height="13" viewBox="0 0 16 16" className="mt-[0.2rem] shrink-0 text-sage" aria-hidden="true">
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
                <div className="ml-auto">
                  <StoreButtons />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-line bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 md:py-24">
            <Reveal>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-amber">
                The clinician portal
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(1.7rem,3.6vw,2.3rem)] leading-tight text-balance">
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
                    <h3 className="font-display text-[1.1rem] text-white">
                      {d.t}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-white/60">
                      {d.b}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                      {d.p.map((x) => (
                        <li key={x} className="flex gap-2.5 text-[0.84rem] text-white/85">
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
              <div className="mt-10 flex flex-wrap items-center gap-5 rounded-3xl border border-white/12 bg-white/[0.04] p-6">
                <p className="text-[0.92rem] text-white/70">
                  Opened for your clinic once we have set it up. Ask and we
                  will walk you through it.
                </p>
                <a
                  href="#join"
                  className="ml-auto rounded-full bg-white px-6 py-3 text-[0.88rem] font-semibold text-ink transition hover:bg-white/90"
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
