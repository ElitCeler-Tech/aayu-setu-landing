"use client";

import { useState } from "react";
import { Reveal } from "./Motion";

/* The section's claim is that one record is read three different ways, so
   the record itself is fixed on the left and only the reading changes. */

const RECORD = [
  { k: "Lipid profile", v: "14 Oct" },
  { k: "LDL cholesterol", v: "164 mg/dL" },
  { k: "HDL cholesterol", v: "38 mg/dL" },
  { k: "HbA1c", v: "6.1 %" },
  { k: "Metformin", v: "500mg, daily" },
  { k: "Dr S. Rao", v: "02 Oct" },
];

const lenses = [
  {
    tab: "Patients",
    who: "For patients",
    line: "Take control of your health early",
    body: "Understand what your reports are saying, see where risk is building, and act on it before it becomes a diagnosis. Your record travels with you to whichever doctor you choose.",
    chip: "Plain language",
    headline: "Your LDL is higher than it was in July",
    detail:
      "164 mg/dL, up from 138. Worth raising at your next visit on 2 Nov.",
    points: [
      "One record, every clinic",
      "Reminders that keep a course on track",
      "Risk explained in plain language",
    ],
  },
  {
    tab: "Doctors",
    who: "For doctors",
    line: "The patient's history, before the consultation",
    body: "Ask for access and read their own readings and reports before they sit down. Write the prescription into the record, sign it with a finger, and their doses schedule themselves from it.",
    chip: "Clinical view",
    headline: "Lipids worsening across three reports",
    detail:
      "LDL 164, up from 138 in July. HDL 38. Already on Metformin 500mg, daily.",
    points: [
      "Record access, with consent",
      "A prescription written in a minute",
      "Earnings, referrals and the day's list",
    ],
  },
  {
    tab: "Clinics",
    who: "For clinicians and clinics",
    line: "The whole practice, in one console",
    body: "Departments and the doctors who sit in them, the day's appointments across all of them, the patient list, every prescription written on your roster, and what has been billed.",
    chip: "Practice view",
    headline: "Lipid profile filed against the patient's record",
    detail:
      "Dr S. Rao, Cardiology, 02 Oct. Prescription issued, consultation billed.",
    points: [
      "Departments, doctors and staff",
      "The clinic's book for the day",
      "Prescriptions and billing in one place",
    ],
  },
];

export function AudienceLens() {
  const [i, setI] = useState(0);
  const a = lenses[i];

  return (
    <Reveal>
      <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_40px_90px_-60px_rgba(22,35,61,0.55)]">
        <div className="grid md:grid-cols-[0.82fr_1.18fr]">
          {/* The record. This panel never changes. */}
          <div className="relative overflow-hidden bg-ink p-7 text-white md:p-9">
            <span className="pointer-events-none absolute -left-20 -top-16 h-56 w-56 rounded-full bg-amber/15 blur-3xl" />
            <div className="relative">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-amber">
                The same record
              </p>
              <p className="mt-3 font-display text-[1.05rem] leading-snug text-white">
                Lakshmi R, 54
              </p>

              <dl className="mt-6 space-y-0">
                {RECORD.map((r) => (
                  <div
                    key={r.k}
                    className="flex items-baseline justify-between gap-4 border-t border-white/10 py-2.5 first:border-0 first:pt-0"
                  >
                    <dt className="text-[0.8rem] text-white/60">{r.k}</dt>
                    <dd className="text-[0.8rem] font-medium tabular-nums text-white">
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 border-t border-white/10 pt-4 text-[0.76rem] leading-relaxed text-white/45">
                One copy, held by the person it belongs to. Nobody is asked to
                keep a second.
              </p>
            </div>
          </div>

          {/* The reading. This is what changes. */}
          <div className="p-7 md:p-9">
            <div
              role="tablist"
              aria-label="Who is reading the record"
              className="inline-flex rounded-full bg-mist p-1"
            >
              {lenses.map((l, n) => (
                <button
                  key={l.tab}
                  type="button"
                  role="tab"
                  aria-selected={n === i}
                  onClick={() => setI(n)}
                  className={`rounded-full px-4 py-2 text-[0.78rem] font-semibold transition ${
                    n === i
                      ? "bg-navy text-white shadow-[0_8px_20px_-12px_rgba(22,35,61,0.9)]"
                      : "text-slate hover:text-navy"
                  }`}
                >
                  {l.tab}
                </button>
              ))}
            </div>

            <p className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-mute">
              {a.who}
            </p>
            <h3 className="mt-2 font-display text-[clamp(1.35rem,2.6vw,1.75rem)] leading-snug text-navy text-balance">
              {a.line}
            </h3>
            <p className="mt-3 max-w-xl text-[0.9rem] leading-relaxed text-slate">
              {a.body}
            </p>

            <div className="mt-6 rounded-2xl border border-line bg-paper p-5">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-amber-deep">
                {a.chip}
              </p>
              <p className="mt-2 font-display text-[1.02rem] leading-snug text-navy text-balance">
                {a.headline}
              </p>
              <p className="mt-1.5 text-[0.84rem] leading-relaxed text-slate">
                {a.detail}
              </p>
            </div>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-3">
              {a.points.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-2 text-[0.82rem] leading-snug text-navy"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 16 16"
                    className="mt-[0.2rem] shrink-0 text-amber"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z"
                      fill="currentColor"
                    />
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
