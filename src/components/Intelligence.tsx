"use client";

import { useEffect, useState } from "react";

/* Health intelligence, as one stage with five scenes rather than a list
   beside two cards. The tabs advance on their own, a bar filling under
   the active one, and any tab can be picked; the stage cross fades.

   The Swasth Score scene follows how the score is actually built: the
   latest lab panel only, each marker weighted, one label band. The
   sugar scene stops at risk awareness and points at a doctor. */

const DURATION = 6000;

function Frame({ title, tag, tagTone = "amber", children }: { title: string; tag?: string; tagTone?: "amber" | "sage"; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <span className="text-[0.95rem] font-semibold text-ink">{title}</span>
        {tag && (
          <span className={`rounded-full px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] ${tagTone === "sage" ? "bg-sage-wash text-sage" : "bg-amber-wash text-amber"}`}>
            {tag}
          </span>
        )}
      </div>
      <div className="flex-1 pt-5">{children}</div>
    </div>
  );
}

/* 1. Everything, in one record, newest first. */
function History() {
  const items = [
    { d: "14 Oct 2026", t: "Lipid profile", s: "Diagnostic lab · PDF", k: "Lab", c: "bg-amber-wash text-amber" },
    { d: "02 Oct 2026", t: "Prescription, Dr S. Rao", s: "3 medicines · photo", k: "Rx", c: "bg-navy text-white" },
    { d: "18 Sep 2026", t: "Blood pressure 128/82", s: "Logged at home", k: "Vital", c: "bg-sage-wash text-sage" },
    { d: "11 Jun 2026", t: "HbA1c and fasting glucose", s: "Shared on WhatsApp · photo", k: "Lab", c: "bg-amber-wash text-amber" },
    { d: "03 Mar 2025", t: "Discharge summary", s: "City Hospital · email", k: "Doc", c: "bg-mist text-slate" },
  ];
  return (
    <Frame title="Your health history" tag="34 records" tagTone="sage">
      <ol className="relative space-y-2.5 pl-5 before:absolute before:bottom-3 before:left-[0.3rem] before:top-3 before:w-px before:bg-line-strong">
        {items.map((i) => (
          <li key={i.t} className="relative flex items-center gap-3 rounded-2xl border border-line bg-white px-3.5 py-2.5">
            <span className="absolute -left-[1.06rem] h-2.5 w-2.5 rounded-full border-2 border-white bg-navy ring-1 ring-line-strong" />
            <span className={`grid h-8 w-11 shrink-0 place-items-center rounded-lg font-mono text-[0.62rem] font-medium ${i.c}`}>{i.k}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[0.84rem] font-semibold text-ink">{i.t}</span>
              <span className="block truncate text-[0.72rem] text-mute">{i.s}</span>
            </span>
            <span className="hidden shrink-0 font-mono text-[0.66rem] text-mute sm:block">{i.d}</span>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

/* 2. One marker across five years. */
function Trends() {
  const pts = [
    { y: "2024", v: 112 },
    { y: "2025", v: 121 },
    { y: "Mar 26", v: 128 },
    { y: "Jun 26", v: 146 },
    { y: "Oct 26", v: 164 },
  ];
  const x = (i: number) => 40 + i * 92;
  const y = (v: number) => 210 - (v - 80) * 1.9;
  const line = pts.map((p, i) => `${x(i)} ${y(p.v)}`).join(" L");
  return (
    <Frame title="LDL cholesterol, five reports" tag="Rising">
      <svg viewBox="0 0 440 240" className="h-auto w-full" aria-label="LDL across five reports: 112 in 2024, 121 in 2025, then 128, 146 and 164 this year">
        <defs>
          <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF8B0B" stopOpacity="0.22" />
            <stop offset="1" stopColor="#FF8B0B" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="30" y={y(100)} width="400" height={210 - y(100)} fill="#E5F3EC" rx="6" />
        <text x="424" y={y(100) + 16} fontSize="10" textAnchor="end" fill="#2E8A62" fontFamily="var(--font-mono)">HEALTHY, UNDER 100</text>
        {[100, 130, 160].map((g) => (
          <g key={g}>
            <line x1="30" x2="430" y1={y(g)} y2={y(g)} stroke="#E3E8EF" strokeDasharray="3 4" />
            <text x="22" y={y(g) + 3} fontSize="9" textAnchor="end" fill="#A9B1BE" fontFamily="var(--font-mono)">{g}</text>
          </g>
        ))}
        <path d={`M${line} L${x(4)} 210 L${x(0)} 210 Z`} fill="url(#trend-fill)" />
        <path d={`M${line}`} fill="none" stroke="#C25E00" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
        {pts.map((p, i) => (
          <g key={p.y}>
            <circle cx={x(i)} cy={y(p.v)} r={i === 4 ? 7 : 5} fill={i === 4 ? "#FF8B0B" : "#fff"} stroke="#C25E00" strokeWidth="2" />
            <text x={x(i)} y={y(p.v) - 13} fontSize="11.5" textAnchor="middle" fill="#121D33" fontWeight="600">{p.v}</text>
            <text x={x(i)} y="232" fontSize="10.5" textAnchor="middle" fill="#7A8496">{p.y}</text>
          </g>
        ))}
      </svg>
      <p className="mt-3 text-[0.84rem] text-slate">
        <span className="font-semibold text-ink">+52 mg/dL since 2024.</span> Each report looked
        only a little high on its own. Together, they are a direction.
      </p>
    </Frame>
  );
}

/* 3. The app's two scores, side by side, each with what feeds it: the
   Health Score from six everyday vitals, the Lab Score (the Swasth
   Score) from the latest lab panel, each marker weighted. */
function Ring({ v, label, sub }: { v: number; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="grid h-[5.6rem] w-[5.6rem] shrink-0 place-items-center rounded-full"
        style={{ background: `conic-gradient(#2E8A62 0 ${v}%, #EEF2F7 ${v}% 100%)` }}
      >
        <span className="grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-white font-display text-[2.3rem] leading-none text-ink">{v}</span>
      </div>
      <span>
        <span className="block text-[0.95rem] font-semibold text-ink">{label}</span>
        <span className="mt-0.5 block text-[0.74rem] leading-snug text-mute">{sub}</span>
      </span>
    </div>
  );
}

function Chip({ k, ok }: { k: string; ok: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] ${ok ? "border-[#BFE0CF] bg-sage-wash text-sage" : "border-[#FFD9B0] bg-amber-wash text-amber"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${ok ? "bg-sage" : "bg-cta"}`} />
      {k}
    </span>
  );
}

function Scores() {
  const vitals = [
    { k: "Heart rate", ok: true },
    { k: "Blood pressure", ok: true },
    { k: "Blood sugar", ok: false },
    { k: "Sleep", ok: true },
    { k: "Steps", ok: false },
    { k: "BMI", ok: true },
  ];
  const labs = [
    { k: "LDL", ok: false },
    { k: "Glucose", ok: false },
    { k: "Triglycerides", ok: false },
    { k: "Haemoglobin", ok: true },
    { k: "Creatinine", ok: true },
    { k: "Liver enzymes", ok: true },
  ];
  return (
    <Frame title="Two scores, two views of you" tag="Updated today" tagTone="sage">
      <div className="space-y-4">
        <div className="rounded-2xl border border-line bg-white p-4">
          <Ring v={81} label="Health Score" sub="From six everyday vitals you log or sync." />
          <div className="mt-3.5 flex flex-wrap gap-1.5">{vitals.map((x) => <Chip key={x.k} {...x} />)}</div>
        </div>
        <div className="rounded-2xl border border-line bg-white p-4">
          <Ring v={72} label="Lab Score" sub="The Swasth Score, from your latest lab panel. Good, 60 to 79." />
          <div className="mt-3.5 flex flex-wrap gap-1.5">{labs.map((x) => <Chip key={x.k} {...x} />)}</div>
        </div>
      </div>
      <p className="mt-3.5 text-[0.74rem] text-mute">
        Each marker is graded against the range for your age, and the ones that matter most weigh most.
      </p>
    </Frame>
  );
}

/* 4. The sugar example the deck asks for: a drift, flagged early. */
function Insight() {
  const pts = [
    { d: "Jan", v: 98 },
    { d: "May", v: 108 },
    { d: "Oct", v: 118 },
  ];
  const x = (i: number) => 60 + i * 150;
  const y = (v: number) => 190 - (v - 85) * 3.6;
  return (
    <Frame title="Fasting blood sugar" tag="Worth attention">
      <svg viewBox="0 0 420 210" className="h-auto w-full" aria-label="Fasting blood sugar: 98 in January, 108 in May, 118 in October">
        <rect x="0" y={y(100)} width="420" height={190 - y(100)} fill="#E5F3EC" rx="6" />
        <rect x="0" y={y(125)} width="420" height={y(100) - y(125)} fill="#FFF1E2" rx="6" />
        <rect x="0" y="6" width="420" height={y(125) - 6} fill="#FDE4D3" rx="6" />
        <text x="10" y={y(100) + 16} fontSize="9.5" fill="#2E8A62" fontFamily="var(--font-mono)">NORMAL</text>
        <text x="10" y={y(125) + 16} fontSize="9.5" fill="#A54F00" fontFamily="var(--font-mono)">PREDIABETES RANGE</text>
        <text x="10" y="22" fontSize="9.5" fill="#A54F00" fontFamily="var(--font-mono)">DIABETES RANGE</text>
        <path d={`M${pts.map((p, i) => `${x(i)} ${y(p.v)}`).join(" L")}`} fill="none" stroke="#1F3050" strokeWidth="2" />
        {pts.map((p, i) => (
          <g key={p.d}>
            <circle cx={x(i)} cy={y(p.v)} r="6" fill={p.v < 100 ? "#2E8A62" : "#FF8B0B"} stroke="#fff" strokeWidth="2" />
            <text x={x(i)} y={y(p.v) - 12} fontSize="12" textAnchor="middle" fill="#121D33" fontWeight="600">{p.v}</text>
            <text x={x(i)} y="206" fontSize="10.5" textAnchor="middle" fill="#7A8496">{p.d}</text>
          </g>
        ))}
      </svg>
      <div className="mt-4 flex gap-3 rounded-2xl bg-navy px-4 py-3.5 text-white">
        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-lg bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ayussetu-logo-white.png" alt="" width={28} height={28} />
        </span>
        <p className="text-[0.84rem] leading-relaxed text-white/85">
          Up 20 mg/dL this year, and now in the prediabetes range, 100 to 125.
          <span className="font-semibold text-white"> Worth discussing with your doctor.</span>
        </p>
      </div>
    </Frame>
  );
}

/* 5. What to do about it, set around one person. */
function Actions() {
  const plan = [
    { t: "Walk 20 minutes after dinner", s: "Evenings suit you best", done: 12, of: 15 },
    { t: "Metformin 500mg, after breakfast", s: "As prescribed by Dr S. Rao", done: 28, of: 30 },
    { t: "Retest HbA1c and fasting sugar", s: "Due in January", done: 0, of: 1 },
  ];
  return (
    <Frame title="This month's plan" tag="Personal" tagTone="sage">
      <div className="space-y-3">
        {plan.map((p) => (
          <div key={p.t} className="rounded-2xl border border-line bg-white px-4 py-3.5">
            <div className="flex items-start justify-between gap-3">
              <span>
                <span className="block text-[0.88rem] font-semibold text-ink">{p.t}</span>
                <span className="block text-[0.72rem] text-mute">{p.s}</span>
              </span>
              <span className="shrink-0 font-mono text-[0.7rem] text-slate">
                {p.of === 1 ? "Upcoming" : `${p.done}/${p.of}`}
              </span>
            </div>
            <div className="mt-2.5 h-1.5 rounded-full bg-mist">
              <div className="h-1.5 rounded-full bg-sage" style={{ width: `${(p.done / p.of) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[0.78rem] text-mute">Fasting sugar since the walks began: <span className="font-semibold text-sage">118 → 108</span></p>
    </Frame>
  );
}

const tabs = [
  { t: "Unified health history", b: "Every report, prescription and reading in one record you hold, whatever it arrived as.", scene: <History /> },
  { t: "Lab reports and longitudinal trends", b: "Markers read out of each report and followed across years, so drift is visible.", scene: <Trends /> },
  { t: "Health Score and Lab Score", b: "Two numbers: one from your everyday vitals, one from your lab reports, each showing what moves it.", scene: <Scores /> },
  { t: "Health insights and risk awareness", b: "What is drifting toward a risk, flagged early and explained in plain language.", scene: <Insight /> },
  { t: "Personalised preventive actions", b: "Steps set around your readings and routine, and tracked against your results.", scene: <Actions /> },
];

export function Intelligence() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % tabs.length), DURATION);
    return () => clearTimeout(t);
  }, [active, paused]);

  return (
    <section id="intelligence" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-amber">Health intelligence</p>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
              Your records, <em className="text-amber">read for you</em>
            </h2>
          </div>
          <p className="max-w-sm text-[0.98rem] leading-relaxed text-slate">
            Five things Ayussetu does with the reports you already have.
          </p>
        </div>

        <div
          className="mt-12 grid overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_40px_80px_-50px_rgba(18,29,51,0.35)] md:grid-cols-[0.85fr_1.15fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* tabs */}
          <div role="tablist" aria-label="Health intelligence" className="flex flex-col border-b border-line md:border-b-0 md:border-r">
            {tabs.map((tab, i) => {
              const on = i === active;
              return (
                <button
                  key={tab.t}
                  role="tab"
                  aria-selected={on}
                  aria-controls="intelligence-stage"
                  onClick={() => setActive(i)}
                  className={`relative block w-full flex-1 border-b border-line px-6 py-5 text-left transition-colors last:border-b-0 md:px-8 ${on ? "bg-white" : "bg-mist/50 hover:bg-mist"}`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className={`font-mono text-[0.72rem] ${on ? "text-amber" : "text-faint"}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={`text-[1rem] font-semibold transition-colors ${on ? "text-ink" : "text-slate"}`}>{tab.t}</span>
                  </span>
                  <span className={`grid transition-all duration-500 ${on ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <span className="overflow-hidden pl-[2.1rem] text-[0.86rem] leading-relaxed text-slate">{tab.b}</span>
                  </span>
                  {on && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-line">
                      <span
                        key={`${active}-${paused}`}
                        className="intel-progress block h-full bg-cta"
                        style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? "paused" : "running" }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* stage */}
          <div id="intelligence-stage" role="tabpanel" className="relative min-h-[30rem] bg-[radial-gradient(120%_80%_at_100%_0%,rgba(255,139,11,0.07),transparent_60%)] p-6 md:p-9">
            {tabs.map((tab, i) => (
              <div
                key={tab.t}
                aria-hidden={i !== active}
                className={`transition-all duration-500 ${i === active ? "relative opacity-100 translate-y-0" : "pointer-events-none absolute inset-6 opacity-0 translate-y-3 md:inset-9"}`}
              >
                {tab.scene}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="#ai" className="inline-block rounded-full bg-navy px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:bg-ink">
            Explore health intelligence
          </a>
        </div>
      </div>
    </section>
  );
}
