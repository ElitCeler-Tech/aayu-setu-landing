"use client";

import { useEffect, useState } from "react";

/* The hero's centrepiece: the Health Score, the app's score from six
   everyday vitals, told as a year. A calendar strip steps through the
   months; each month the score in the centre moves to that month's
   value, the arc follows it, the ticks for readings still out of range
   go out one by one, and the card under the ring says what happened.
   Reduced motion: it rests on the latest month. */

const C = 270;
const N = 30;
const ARC = 2 * Math.PI * 168; // circumference of the score arc

type Month = { m: string; score: number; out: number; k: string; v: string; s: string; good: boolean };
const months: Month[] = [
  { m: "Jan", score: 64, out: 6, k: "Blood pressure", v: "142/92", s: "Above range", good: false },
  { m: "Mar", score: 67, out: 5, k: "Steps", v: "4,200", s: "A day, below your goal", good: false },
  { m: "May", score: 71, out: 4, k: "Sleep", v: "6h 40m", s: "Up from 5h 50m", good: true },
  { m: "Jul", score: 74, out: 3, k: "Fasting sugar", v: "108", s: "Easing, from 118", good: true },
  { m: "Sep", score: 78, out: 2, k: "Blood pressure", v: "128/82", s: "Back near range", good: true },
  { m: "Oct", score: 81, out: 1, k: "Heart rate", v: "72", s: "In range", good: true },
];

// Which ticks are lit while readings are out of range; they go out from the end of the list.
const LIT = [3, 8, 13, 18, 23, 27];

const at = (i: number, r: number) => {
  const a = (i / N) * Math.PI * 2 - Math.PI / 2;
  // Rounded, so the server and the browser print the same attribute.
  return { x: Math.round((C + r * Math.cos(a)) * 100) / 100, y: Math.round((C + r * Math.sin(a)) * 100) / 100 };
};

/* The number in the centre counts to the new month's value instead of
   jumping to it. */
function useCount(target: number) {
  const [v, setV] = useState(target);
  useEffect(() => {
    let raf = 0;
    const from = v;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 900, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setV(Math.round(from + (target - from) * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return v;
}

export function ScoreRing() {
  const [n, setN] = useState(months.length - 1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const t = setInterval(() => setN((x) => (x + 1) % months.length), 2800);
    return () => clearInterval(t);
  }, []);

  const cur = months[n];
  const shown = useCount(cur.score);
  const lit = LIT.slice(0, cur.out);

  return (
    <div className="relative mx-auto w-[min(20rem,82vw)] md:w-[min(30rem,40vw)]">
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
            cx={C}
            cy={C}
            r="168"
            fill="none"
            stroke="url(#score-arc)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${Math.round((cur.score / 100) * ARC)} ${Math.round(ARC)}`}
            transform={`rotate(-90 ${C} ${C})`}
            style={{ transition: "stroke-dasharray 900ms cubic-bezier(0.33, 1, 0.68, 1)" }}
          />
          {Array.from({ length: N }, (_, i) => {
            const on = lit.includes(i);
            const a = at(i, 212);
            const b = at(i, on ? 236 : 226);
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={on ? "#FF8B0B" : "rgba(255,255,255,0.3)"}
                strokeWidth={on ? 3 : 1.6}
                strokeLinecap="round"
                style={{ transition: "stroke 500ms ease" }}
              />
            );
          })}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-[4.5rem] leading-none tabular-nums md:text-[7rem]">{shown}</span>
          <span className="eyebrow mt-1.5 text-white/55">Health Score</span>
        </div>
      </div>

      {/* The calendar: the months the story runs through, the current
          one lit, the ones before it marked as passed. */}
      <div className="mx-auto -mt-1 flex w-[min(21rem,100%)] items-center justify-between">
        {months.map((x, i) => (
          <span key={x.m} className="flex flex-col items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                i === n ? "scale-150 bg-cta" : i < n ? "bg-white/60" : "bg-white/20"
              }`}
            />
            <span className={`font-mono text-[0.62rem] uppercase tracking-[0.08em] transition-colors duration-500 ${i === n ? "text-white" : "text-white/40"}`}>
              {x.m}
            </span>
          </span>
        ))}
      </div>

      {/* That month's reading. */}
      <div className="relative mx-auto mt-3 h-[4.6rem] w-[min(21rem,100%)]">
        {months.map((r, i) => (
          <div
            key={r.m}
            aria-hidden={i !== n}
            className={`absolute inset-0 flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.06] px-4 backdrop-blur transition-all duration-700 ease-out ${
              i === n ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            }`}
          >
            <span className={`h-9 w-1 shrink-0 rounded-full ${r.good ? "bg-[#7FD3A8]" : "bg-cta"}`} />
            <span className="min-w-0 flex-1">
              <span className="eyebrow block text-white/50">{r.m} · {r.k}</span>
              <span className={`mt-1 block truncate text-[0.8rem] ${r.good ? "text-[#9BE2BD]" : "text-amber-light"}`}>{r.s}</span>
            </span>
            <span className="shrink-0 text-[1.3rem] font-semibold tabular-nums leading-none">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
