"use client";

import { useState } from "react";

/* Pricing, as it stands, for two audiences behind a toggle. Patients:
   the free plan is live, Individual and Family plans are coming. Doctors
   and clinics: the doctor app is free to start, clinic and hospital plans
   are on request. No prices are shown because none have been set; each
   paid plan says Coming soon and asks people to get in touch. When the
   founder confirms the plans, the price goes in `price` and the real
   inclusions replace the points below. */

const patientPlans = [
  {
    who: "Free",
    price: "Free",
    note: "Everything you need to start",
    points: ["Every report in one place", "Health Score and trends", "Ayu AI answers", "Medicine and test reminders"],
    cta: ["Download the app", "#download"],
    featured: true,
  },
  {
    who: "Individual plan",
    price: "Coming soon",
    note: "For one person who wants more from their record",
    points: ["Everything in Free", "More for your own health", "Plan details coming soon"],
    cta: ["Contact us to know more", "/contact"],
    featured: false,
  },
  {
    who: "Family and group plan",
    price: "Coming soon",
    note: "For parents, partners, children and groups",
    points: ["Everything in Individual", "Records for the whole family together", "Plan details coming soon"],
    cta: ["Contact us to know more", "/contact"],
    featured: false,
  },
];

const doctorPlans = [
  {
    who: "Doctor",
    price: "Free",
    note: "Free to install. Your registration number is all it takes",
    points: ["The doctor app on Android and iPhone", "Appointments and video consultations", "Prescriptions signed with a finger", "Patient records, with their consent"],
    cta: ["Register as a doctor", "/for-doctors#join"],
    featured: true,
  },
  {
    who: "Clinic plan",
    price: "Coming soon",
    note: "For clinics with a team of doctors and staff",
    points: ["Everything in Doctor", "The clinic console in the browser", "Departments, staff and billing", "Plan details on request"],
    cta: ["Request plans", "/contact"],
    featured: false,
  },
  {
    who: "Hospitals, labs and pharmacies",
    price: "On request",
    note: "Built around your scale",
    points: ["Everything in Clinic", "Reports straight to patients", "Integration support", "Plan details on request"],
    cta: ["Request plans", "/contact"],
    featured: false,
  },
];

const tabs = [
  { k: "patients", label: "For patients", plans: patientPlans },
  { k: "doctors", label: "For doctors and clinics", plans: doctorPlans },
] as const;

export function Pricing() {
  const [tab, setTab] = useState<(typeof tabs)[number]["k"]>("patients");
  const plans = tabs.find((t) => t.k === tab)!.plans;

  return (
    <section id="pricing" className="scroll-mt-24 border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center">
          <p className="eyebrow text-amber">Pricing</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            Start free, <em className="text-amber">more plans coming soon</em>
          </h2>
          <div role="tablist" aria-label="Plans for" className="mt-8 inline-flex rounded-full border border-line bg-white p-1">
            {tabs.map((t) => (
              <button
                key={t.k}
                type="button"
                role="tab"
                aria-selected={tab === t.k}
                onClick={() => setTab(t.k)}
                className={`rounded-full px-5 py-2.5 text-[0.88rem] font-semibold transition ${tab === t.k ? "bg-navy text-white" : "text-slate hover:text-navy"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div key={tab} className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.who}
              className={`who-in flex h-full flex-col rounded-3xl border p-7 ${p.featured ? "border-navy bg-navy text-white" : "border-line bg-white text-ink"}`}
            >
              <p className={`eyebrow ${p.featured ? "text-amber-light" : "text-amber"}`}>{p.who}</p>
              <p className="mt-5 flex items-center gap-2.5 font-display text-[2.6rem] leading-none">
                {p.price}
              </p>
              <p className={`mt-2 text-[0.86rem] ${p.featured ? "text-white/60" : "text-slate"}`}>{p.note}</p>
              <ul className={`mt-6 space-y-2.5 border-t pt-6 ${p.featured ? "border-white/10" : "border-line"}`}>
                {p.points.map((x) => (
                  <li key={x} className={`flex gap-2.5 text-[0.88rem] ${p.featured ? "text-white/85" : "text-navy"}`}>
                    <svg width="13" height="13" viewBox="0 0 16 16" className={`mt-[0.22rem] shrink-0 ${p.featured ? "text-[#7FD3A8]" : "text-amber"}`} aria-hidden="true">
                      <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                    </svg>
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href={p.cta[1]}
                  className={`block rounded-full px-6 py-3.5 text-center text-[0.9rem] font-semibold transition ${
                    p.featured ? "bg-cta text-white hover:bg-brand-deep" : "border border-line-strong text-navy hover:border-navy"
                  }`}
                >
                  {p.cta[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[0.92rem] text-slate">
          Want to know more about a plan?{" "}
          <a href="/contact" className="font-semibold text-navy underline decoration-line-strong underline-offset-4 transition hover:decoration-navy">
            Contact us &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
