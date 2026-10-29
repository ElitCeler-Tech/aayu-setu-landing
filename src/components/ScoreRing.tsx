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
  { i: 17, k: "Fasting glucose", v: "118", u: "mg/dL", s: "Above range, up 20 this year", tone: "high" },
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
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setStep((s) => s + 1), 3200);
    return () => clearInterval(t);
  }, []);

  const n = step % readings.length;
  const lap = Math.floor(step / readings.length);
  const cur = readings[n];
  // Degrees from the top, never wrapping back: lap after lap it keeps
  // going round, so the marker glides forwards instead of jumping back.
  const deg = (lap * 360) + (cur.i / N) * 360;

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
            const out = OUT.includes(i);
            const a = at(i, 212);
            const b = at(i, out ? 236 : 226);
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={out ? "#FF8B0B" : "rgba(255,255,255,0.32)"}
                strokeWidth={out ? 3 : 1.6}
                strokeLinecap="round"
              />
            );
          })}
          {/* The marker: a lifted tick and a dot, drawn at the top and
              turned round the centre, so the move is an arc, eased. */}
          <g
            style={{
              transform: `rotate(${deg}deg)`,
              transformOrigin: "270px 270px",
              transition: "transform 1400ms cubic-bezier(0.65, 0, 0.35, 1)",
            }}
          >
            <line x1={C} y1={C - 208} x2={C} y2={C - 246} stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <circle cx={C} cy={C - 260} r="14" fill="rgba(255,255,255,0.12)" />
            <circle cx={C} cy={C - 260} r="5.5" fill="#fff" />
          </g>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-[4.5rem] leading-none md:text-[7rem]">72</span>
          <span className="eyebrow mt-1.5 text-white/55">Lab Score</span>
        </div>
      </div>

      {/* The reading itself, below the ring so nothing ever sits on it. */}
      <div className="relative mx-auto -mt-2 h-[4.6rem] w-[min(19rem,100%)]">
        {readings.map((r, i) => (
          <div
            key={r.k}
            aria-hidden={i !== n}
            className={`absolute inset-0 flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.06] px-4 backdrop-blur transition-all duration-700 ease-out ${
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
