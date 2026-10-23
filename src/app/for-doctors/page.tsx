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

        {/* The two ways in, side by side, because a doctor and a clinic
            manager arrive on this page wanting different things. */}
        <section className="border-b border-line bg-mist">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-18 sm:px-8 md:grid-cols-2 md:py-24">
            <Reveal>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-8">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-amber-deep">
                  Doctors
                </span>
                <h2 className="mt-3 font-display text-[1.5rem] leading-snug text-navy">
                  Download the doctor app
                </h2>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-slate">
                  Everything a consultation needs, in a pocket. Free to
                  install, and your registration number is all it takes to
                  start.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {doctorPoints.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[0.86rem] text-navy">
                      <svg width="13" height="13" viewBox="0 0 16 16" className="mt-[0.25rem] shrink-0 text-sage" aria-hidden="true">
                        <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <StoreButtons />
                </div>
              </article>
            </Reveal>

            <Reveal delay={110}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-ink p-8 text-white">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-amber">
                  Clinics
                </span>
                <h2 className="mt-3 font-display text-[1.5rem] leading-snug">
                  Open the clinic console
                </h2>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-white/60">
                  A browser console for the people who run the place, with the
                  whole practice in one view.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {clinicPoints.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[0.86rem] text-white/85">
                      <svg width="13" height="13" viewBox="0 0 16 16" className="mt-[0.25rem] shrink-0 text-amber" aria-hidden="true">
                        <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <a
                    href="#join"
                    className="rounded-full bg-white px-6 py-3 text-[0.88rem] font-semibold text-ink transition hover:bg-white/90"
                  >
                    Ask for a walkthrough
                  </a>
                  <a
                    href="#join"
                    className="rounded-full border border-white/25 px-6 py-3 text-[0.88rem] font-semibold text-white transition hover:bg-white/10"
                  >
                    Request access
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <JoinForm />
      </main>
      <Footer />
    </>
  );
}
