"use client";

import { useEffect, useRef, useState } from "react";

/* Who it is for. The client's deck starts with people over forty, but
   nobody should read the site as "not for me" because of their age, so
   the first card is anyone keeping their own health records, with the
   age only as the moment it starts to matter most. Then people managing
   an ongoing condition, then families looking after a parent. Each card
   carries a small picture of that person's Ayussetu. Doctors and clinics
   are pointed at the page built for them.

   The cards take turns while the row is on screen. Every card stays fully
   readable; the one whose turn it is lifts onto white with an orange outline,
   and its picture plays: the reports file in one by one, the readings
   settle into their status, the week's doses tick off day by day. Reduced
   motion shows all three still. */

const STEP_MS = 3200;

/* The delay for the i-th piece of a picture, only while its card is on. */
const play = (on: boolean, i: number, gap = 0.18) =>
  on ? { className: "who-in", style: { animationDelay: `${0.15 + i * gap}s` } } : { className: "", style: undefined };

function Records({ on }: { on: boolean }) {
  const rows = [
    { t: "Lipid profile", d: "2026" },
    { t: "Thyroid panel", d: "2025" },
    { t: "Full body checkup", d: "2023" },
  ];
  return (
    <div className="space-y-1.5">
      {rows.map((r, i) => {
        const p = play(on, i);
        return (
        <div key={r.t} className={`flex items-center justify-between rounded-lg border border-line bg-white px-3 py-2 text-[0.74rem] ${p.className}`} style={p.style}>
          <span className="flex items-center gap-2 text-navy">
            <span className="h-2 w-2 rounded-full bg-cta" />
            {r.t}
          </span>
          <span className="font-mono text-[0.66rem] text-mute">{r.d}</span>
        </div>
        );
      })}
    </div>
  );
}

function Conditions({ on }: { on: boolean }) {
  const rows = [
    { k: "Blood sugar", v: "118", s: "Easing", ok: true },
    { k: "Blood pressure", v: "128/82", s: "In range", ok: true },
    { k: "Cholesterol", v: "164", s: "Watch", ok: false },
  ];
  return (
    <div className="space-y-1.5">
      {rows.map((r, i) => {
        const p = play(on, i, 0.3);
        return (
        <div key={r.k} className="flex items-center justify-between rounded-lg border border-line bg-white px-3 py-2 text-[0.74rem]">
          <span className="text-navy">{r.k}</span>
          <span className="flex items-center gap-2">
            <span className="font-mono text-[0.7rem] text-slate">{r.v}</span>
            <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-semibold ${r.ok ? "bg-sage-wash text-sage" : "bg-amber-wash text-amber"} ${p.className}`} style={p.style}>{r.s}</span>
          </span>
        </div>
        );
      })}
    </div>
  );
}

function Family({ on }: { on: boolean }) {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const taken = [1, 1, 1, 1, 0, 1, 1];
  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-[0.8rem] font-semibold text-white">M</span>
        <span>
          <span className="block text-[0.76rem] font-semibold text-navy">Mother&rsquo;s week</span>
          <span className="block text-[0.64rem] text-mute">Shared with you, by her choice</span>
        </span>
      </div>
      <div className="mt-2.5 flex justify-between">
        {days.map((d, i) => {
          const p = play(on, i, 0.16);
          return (
          <span key={i} className="flex flex-col items-center gap-1">
            <span className={`grid h-5 w-5 place-items-center rounded-full text-[0.55rem] font-bold ${taken[i] ? "bg-sage-wash text-sage" : "bg-[#FDECEC] text-[#D9403D]"} ${p.className}`} style={p.style}>
              {taken[i] ? "✓" : "!"}
            </span>
            <span className="text-[0.56rem] text-mute">{d}</span>
          </span>
          );
        })}
      </div>
    </div>
  );
}

const who = [
  {
    t: "Anyone keeping their own records",
    b: "Every report you have, in one place and read together. Most useful from your 40s, when reports pile up and small changes start to matter.",
    icon: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7",
    Art: Records,
  },
  {
    t: "People managing a condition",
    b: "Sugar, blood pressure, cholesterol or thyroid: what to watch, what to take, and whether it is working.",
    icon: "M3 12h4l2-5 4 10 2-5h6",
    Art: Conditions,
  },
  {
    t: "Families caring for parents",
    b: "A parent's records, medicines and appointments together, so you can see their week without having to ring and ask.",
    icon: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17 11a3 3 0 1 0 0-6M2.5 20a6.5 6.5 0 0 1 13 0M16 14.2a5.5 5.5 0 0 1 5.5 5.8",
    Art: Family,
  },
];

export function WhoWeServe() {
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        clearInterval(timer);
        if (e.isIntersecting) {
          setActive(0);
          timer = setInterval(() => setActive((a) => (a + 1) % who.length), STEP_MS);
        } else {
          setActive(-1);
        }
      },
      { threshold: 0.35 },
    );
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, []);

  return (
    <section id="who" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center">
          <p className="eyebrow text-amber">Who we serve</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            Made for you, <em className="text-amber">and the people you care for</em>
          </h2>
        </div>

        <div ref={ref} className="mt-14 grid gap-5 md:grid-cols-3">
          {who.map((w, i) => {
            const on = active === i;
            return (
              <div
                key={w.t}
                className={`flex h-full flex-col rounded-3xl border p-7 transition-[background-color,border-color,box-shadow,transform] duration-500 ${
                  on
                    ? "-translate-y-1.5 border-cta/50 bg-white ring-1 ring-cta/20 shadow-[0_24px_48px_-24px_rgba(18,29,51,0.28)]"
                    : "border-line bg-mist"
                }`}
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-500 ${on ? "bg-cta" : "bg-amber-wash"}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={on ? "#FFFFFF" : "#C25E00"} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={w.icon} />
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-[1.6rem] leading-tight text-ink">{w.t}</h3>
                <p className="mt-2.5 text-[0.88rem] leading-relaxed text-slate">{w.b}</p>
                <div key={on ? "on" : "off"} className="mt-auto pt-6">
                  <w.Art on={on} />
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-[0.92rem] text-slate">
          Doctors, clinics, pharmacies and healthcare partners:{" "}
          <a href="/for-doctors" className="font-semibold text-navy underline decoration-line-strong underline-offset-4 transition hover:decoration-navy">
            see Ayussetu for doctors &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
