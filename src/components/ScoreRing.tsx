"use client";

import { useEffect, useState } from "react";

/* The hero's centrepiece: the Swasth Score drawn as an instrument.
   Twenty nine ticks, one per marker; the ones out of range are lit
   orange. The ring itself stands still (labels used to sit where the
   turning ticks passed under them); instead one marker at a time is
   picked out, its tick lifted, and read out in the card beside it. */

const C = 270;
const N = 29;

type Tone = "high" | "low" | "watch" | "ok";
const readings: { i: number; k: string; v: string; u: string; s: string; tone: Tone }[] = [
  { i: 2, k: "LDL cholesterol", v: "164", u: "mg/dL", s: "High, rising since March", tone: "high" },
  { i: 5, k: "Haemoglobin", v: "13.8", u: "g/dL", s: "In range", tone: "ok" },
  { i: 9, k: "Vitamin D", v: "14", u: "ng/mL", s: "Low", tone: "low" },
  { i: 13, k: "Creatinine", v: "0.9", u: "mg/dL", s: "In range", tone: "ok" },
  { i: 17, k: "Fasting glucose", v: "126", u: "mg/dL", s: "High, up 28 this year", tone: "high" },
  { i: 20, k: "HbA1c", v: "6.0", u: "%", s: "Worth watching", tone: "watch" },
  { i: 23, k: "Triglycerides", v: "168", u: "mg/dL", s: "Borderline, easing", tone: "watch" },
];
const OUT = readings.filter((r) => r.tone !== "ok").map((r) => r.i);

const at = (i: number, r: number) => {
  const a = (i / N) * Math.PI * 2 - Math.PI / 2;
  // Rounded, so the server and the browser print the same attribute.
  return { x: Math.round((C + r * Math.cos(a)) * 100) / 100, y: Math.round((C + r * Math.sin(a)) * 100) / 100 };
};

const toneText: Record<Tone, string> = {
  high: "text-amber-light",
  low: "text-amber-light",
  watch: "text-[#FFD08A]",
  ok: "text-[#7FD3A8]",
};

export function ScoreRing() {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setN((x) => (x + 1) % readings.length), 2600);
    return () => clearInterval(t);
  }, []);

  const cur = readings[n];

  return (
    <div className="relative mx-auto w-[min(20rem,82vw)] md:w-[min(31rem,42vw)]">
      <div className="relative aspect-square">
        <div className="pointer-events-none absolute inset-[11%] rounded-full bg-[radial-gradient(circle,rgba(255,139,11,0.28),rgba(255,139,11,0)_65%)] blur-[10px]" />

        <svg viewBox="0 0 540 540" aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
          <defs>
            <linearGradient id="score-arc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFB15C" />
              <stop offset="1" stopColor="#FF8B0B" />
            </linearGradient>
          </defs>
          <circle cx={C} cy={C} r="250" fill="none" stroke="rgba(255,255,255,0.07)" />
          <circle cx={C} cy={C} r="168" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
          <circle
            className="score-arc"
            cx={C}
            cy={C}
            r="168"
            fill="none"
            stroke="url(#score-arc)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="760 1056"
            transform={`rotate(-90 ${C} ${C})`}
          />
          {Array.from({ length: N }, (_, i) => {
            const active = i === cur.i;
            const out = OUT.includes(i);
            const a = at(i, 212);
            const b = at(i, active ? 244 : out ? 236 : 226);
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={active ? "#FFFFFF" : out ? "#FF8B0B" : "rgba(255,255,255,0.32)"}
                strokeWidth={active ? 4 : out ? 3 : 1.6}
                strokeLinecap="round"
                style={{ transition: "all 400ms ease" }}
              />
            );
          })}
          {/* The picked marker: a dot that travels round to it. */}
          {(() => {
            const d = at(cur.i, 258);
            return (
              <g style={{ transition: "transform 700ms cubic-bezier(0.4,0,0.2,1)", transform: `translate(${d.x}px, ${d.y}px)` }}>
                <circle r="13" fill="rgba(255,255,255,0.12)" />
                <circle r="5" fill="#fff" />
              </g>
            );
          })()}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-[4.5rem] leading-none md:text-[7rem]">72</span>
          <span className="eyebrow mt-1.5 text-white/55">Swasth Score</span>
        </div>
      </div>

      {/* The reading itself, below the ring so nothing ever sits on it. */}
      <div className="relative mx-auto -mt-2 h-[4.6rem] w-[min(19rem,100%)]">
        {readings.map((r, i) => (
          <div
            key={r.k}
            aria-hidden={i !== n}
            className={`absolute inset-0 flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.06] px-4 backdrop-blur transition-all duration-500 ${
              i === n ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            }`}
          >
            <span className={`h-9 w-1 shrink-0 rounded-full ${r.tone === "ok" ? "bg-[#7FD3A8]" : "bg-cta"}`} />
            <span className="min-w-0 flex-1">
              <span className="eyebrow block text-white/50">{r.k}</span>
              <span className={`mt-1 block truncate text-[0.8rem] ${toneText[r.tone]}`}>{r.s}</span>
            </span>
            <span className="shrink-0 text-right">
              <span className="text-[1.35rem] font-semibold tabular-nums leading-none">{r.v}</span>
              <span className="ml-1 text-[0.72rem] text-white/50">{r.u}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
