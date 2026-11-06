"use client";

import { useState } from "react";

/* Pricing, on the dark ground of the hero, for two audiences behind a
   toggle. The free plan for each is ₹0 (₹499 struck through beside it); every other plan is on request,
   with a Request plans button to the contact page. No prices or
   inclusions are invented: each paid plan says its details are shared on
   request until the founder confirms them.

   The italic serif belongs to the section heading only. Inside the
   cards, labels and prices are set in the sans, so the plans read as
   plain facts. The free card carries an orange edge and glow. */

/* Every card lists the same features for its tab, in the same order:
   ticked when the plan includes them, greyed when it does not. Plans are
   cumulative, so a plan includes the first `incl` features. Contents are
   features the apps have today. AI (Ayu, AI report reading, AI patient
   summaries) is not in either free plan. */
type Plan = {
  who: string;
  price: string;
  /** A list price shown struck through beside the real one. */
  was?: string;
  note: string;
  incl: number;
  cta: [string, string];
  featured?: boolean;
};

const patientFeatures = [
  "All your reports in one place",
  "Vitals: BP, sugar, weight and more",
  "Health Score from your vitals",
  "Medicine reminders and refill alerts",
  "Doctor visits by video, voice or clinic",
  "Prescriptions and visit history",
  "Ayu AI answers from your record",
  "AI lab report reading and summaries",
  "Lab Score and report comparison",
  "Family groups and a shared feed",
  "Profiles for parents and children",
  "Choose what each member can see",
];

const patientPlans: Plan[] = [
  {
    who: "Free plan",
    price: "₹0",
    was: "₹499",
    note: "Free for everyone. Your records, vitals and medicines in one place.",
    incl: 6,
    cta: ["Download the app", "#download"],
    featured: true,
  },
  {
    who: "Individual",
    price: "On request",
    note: "For one person who wants answers from their own record.",
    incl: 9,
    cta: ["Request plans", "/contact"],
  },
  {
    who: "Family and group",
    price: "On request",
    note: "For parents, partners, children and groups.",
    incl: 12,
    cta: ["Request plans", "/contact"],
  },
];

const doctorFeatures = [
  "Doctor app on Android and iPhone",
  "Schedule and appointments",
  "Video and voice consultations",
  "Digital prescriptions",
  "Patient records, with consent",
  "Earnings and referrals",
  "AI patient summaries",
  "Clinic console in the browser",
  "Staff roles and permissions",
  "Departments and GST billing",
  "Reports straight to patients",
  "Integration support",
];

const doctorPlans: Plan[] = [
  {
    who: "Doctor",
    price: "₹0",
    was: "₹499",
    note: "Free to install. Your registration number is all it takes.",
    incl: 6,
    cta: ["Register as a doctor", "/for-doctors#join"],
    featured: true,
  },
  {
    who: "Clinic",
    price: "On request",
    note: "For clinics with a team of doctors and staff.",
    incl: 10,
    cta: ["Request plans", "/contact"],
  },
  {
    who: "Hospitals, labs and pharmacies",
    price: "On request",
    note: "Built around your scale.",
    incl: 12,
    cta: ["Request plans", "/contact"],
  },
];

const tabs = [
  { k: "patients", label: "For patients", plans: patientPlans, features: patientFeatures },
  { k: "doctors", label: "For doctors and clinics", plans: doctorPlans, features: doctorFeatures },
] as const;

export function Pricing() {
  const [tab, setTab] = useState<(typeof tabs)[number]["k"]>("patients");
  const current = tabs.find((t) => t.k === tab)!;
  const plans = current.plans;
  const features = current.features;

  return (
    <section id="pricing" className="hero-room relative scroll-mt-24 overflow-hidden border-b border-line text-white">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center">
          <p className="eyebrow text-amber-light">Pricing</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-balance">
            Start free. <em className="text-amber-light">Plans that grow with you.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-white/60">
            Free to begin, for every patient and every doctor. Ask us about the plan that fits you, your family or
            your practice.
          </p>

          <div role="tablist" aria-label="Plans for" className="mt-9 inline-flex gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1.5">
            {tabs.map((t) => (
              <button
                key={t.k}
                type="button"
                role="tab"
                aria-selected={tab === t.k}
                onClick={() => setTab(t.k)}
                className={`rounded-full px-5 py-2.5 text-[0.88rem] font-semibold transition ${
                  tab === t.k ? "bg-white text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div key={tab} className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.who}
              className={`who-in relative flex h-full flex-col rounded-[1.75rem] p-8 backdrop-blur-md ${
                p.featured
                  ? "border border-amber-light/50 bg-[linear-gradient(180deg,rgba(255,139,11,0.16),rgba(255,255,255,0.04)_45%)] shadow-[0_40px_80px_-40px_rgba(255,139,11,0.45)]"
                  : "border border-white/10 bg-white/[0.045]"
              }`}
            >
              {p.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-cta px-3 py-1.5 text-[0.7rem] font-semibold text-white">
                  Start here
                </span>
              )}
              <p className="eyebrow text-amber-light">{p.who}</p>
              <p className={`mt-5 flex h-12 items-end gap-3 font-semibold leading-none tracking-tight ${p.featured ? "text-[3rem]" : "text-[2.1rem] text-white/95"}`}>
                {p.price}
                {p.was && (
                  <s className="mb-[0.3rem] text-[1.15rem] font-medium tracking-normal text-white/45 decoration-white/50 decoration-1" aria-label={`Was ${p.was}`}>
                    {p.was}
                  </s>
                )}
              </p>
              <p className="mt-3 min-h-[2.9em] text-[0.92rem] leading-relaxed text-white/60">{p.note}</p>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                {features.map((x, i) => {
                  const on = i < p.incl;
                  return (
                    <li key={x} className={`flex gap-3 text-[0.88rem] lg:whitespace-nowrap leading-snug ${on ? "text-white/85" : "text-white/30"}`}>
                      {on ? (
                        <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#7FD3A8]/15 text-[#7FD3A8]">
                          <svg width="10" height="10" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M6.2 11.6 2.9 8.3l1.2-1.2 2.1 2.1 5.6-5.6 1.2 1.2z" fill="currentColor" />
                          </svg>
                        </span>
                      ) : (
                        <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border border-white/15" aria-hidden="true" />
                      )}
                      <span>
                        {x}
                        {!on && <span className="sr-only"> (not included)</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href={p.cta[1]}
                  className={`block rounded-full px-6 py-3.5 text-center text-[0.92rem] font-semibold transition ${
                    p.featured ? "bg-cta text-white hover:bg-brand-deep" : "border border-white/20 text-white hover:bg-white hover:text-ink"
                  }`}
                >
                  {p.cta[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[0.92rem] text-white/55">
          Not sure which plan fits?{" "}
          <a href="/contact" className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white">
            Talk to us
          </a>
        </p>
      </div>
    </section>
  );
}
