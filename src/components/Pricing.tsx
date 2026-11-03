"use client";

import { useState } from "react";

/* Pricing, on the dark ground of the hero, for two audiences behind a
   toggle. The free plan for each is ₹0; every other plan is on request,
   with a Request plans button to the contact page. No prices or
   inclusions are invented: each paid plan says its details are shared on
   request until the founder confirms them.

   The italic serif belongs to the section heading only. Inside the
   cards, labels and prices are set in the sans, so the plans read as
   plain facts. The free card carries an orange edge and glow. */

type Plan = {
  who: string;
  price: string;
  note: string;
  points: string[];
  cta: [string, string];
  featured?: boolean;
};

const patientPlans: Plan[] = [
  {
    who: "Free plan",
    price: "₹0",
    note: "Free for everyone. Everything you need to start reading your own health.",
    points: ["Every report in one place", "Health Score and trends", "Ayu AI answers", "Medicine and test reminders"],
    cta: ["Download the app", "#download"],
    featured: true,
  },
  {
    who: "Individual",
    price: "On request",
    note: "For one person who wants more from their record.",
    points: ["Everything in Free", "Built around your own health", "Plan details shared on request"],
    cta: ["Request plans", "/contact"],
  },
  {
    who: "Family and group",
    price: "On request",
    note: "For parents, partners, children and groups.",
    points: ["Everything in Individual", "The whole family's records together", "Plan details shared on request"],
    cta: ["Request plans", "/contact"],
  },
];

const doctorPlans: Plan[] = [
  {
    who: "Doctor",
    price: "₹0",
    note: "Free to install. Your registration number is all it takes.",
    points: ["The doctor app on Android and iPhone", "Appointments and video consultations", "Prescriptions signed with a finger", "Patient records, with their consent"],
    cta: ["Register as a doctor", "/for-doctors#join"],
    featured: true,
  },
  {
    who: "Clinic",
    price: "On request",
    note: "For clinics with a team of doctors and staff.",
    points: ["Everything in Doctor", "The clinic console in the browser", "Departments, staff and billing", "Plan details shared on request"],
    cta: ["Request plans", "/contact"],
  },
  {
    who: "Hospitals, labs and pharmacies",
    price: "On request",
    note: "Built around your scale.",
    points: ["Everything in Clinic", "Reports straight to patients", "Integration support", "Plan details shared on request"],
    cta: ["Request plans", "/contact"],
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
              <p className={`mt-5 font-semibold leading-none tracking-tight ${p.featured ? "text-[3rem]" : "text-[2.1rem] text-white/95"}`}>
                {p.price}
              </p>
              <p className="mt-3 min-h-[2.9em] text-[0.92rem] leading-relaxed text-white/60">{p.note}</p>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {p.points.map((x) => (
                  <li key={x} className="flex gap-3 text-[0.92rem] leading-snug text-white/85">
                    <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#7FD3A8]/15 text-[#7FD3A8]">
                      <svg width="10" height="10" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M6.2 11.6 2.9 8.3l1.2-1.2 2.1 2.1 5.6-5.6 1.2 1.2z" fill="currentColor" />
                      </svg>
                    </span>
                    {x}
                  </li>
                ))}
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
