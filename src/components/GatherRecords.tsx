"use client";

import { useEffect, useState } from "react";

/* Why Ayussetu exists, as a picture: a family's records sit in four
   places, and one at a time each one is carried into a single record
   that reads them together. When all four are in, it starts again.
   Reduced motion shows the record complete. */

const STEP_MS = 1800;

const sources = [
  { t: "Paper file", d: "Blood test, 2019", icon: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h5", row: "Blood test, 2019" },
  { t: "WhatsApp photo", d: "Prescription", icon: "M4 20l1.3-3.9A8 8 0 1 1 8 19.3L4 20Z", row: "Prescription, 2021" },
  { t: "Email PDF", d: "Thyroid panel", icon: "M3 6h18v12H3zM3 7l9 6 9-6", row: "Thyroid panel, 2024" },
  { t: "Lab portal", d: "Lipid profile", icon: "M9 3v6l-4.5 9.5A1.5 1.5 0 0 0 5.9 21h12.2a1.5 1.5 0 0 0 1.4-2.5L15 9V3M8 3h8", row: "Lipid profile, 2026" },
];

export function GatherRecords() {
  // How many sources have been brought in so far; the next one is moving.
  const [n, setN] = useState(sources.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const t = setInterval(() => setN((x) => (x + 1) % (sources.length + 2)), STEP_MS);
    return () => clearInterval(t);
  }, []);

  const done = Math.min(n, sources.length);

  return (
    <div className="grid items-center gap-5 sm:grid-cols-[1fr_auto_1.1fr]">
      <ul className="space-y-2.5">
        {sources.map((s, i) => {
          const moving = i === n;
          const gone = i < done;
          return (
            <li
              key={s.t}
              className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3 transition-all duration-500 ${
                moving ? "border-cta/50 bg-white shadow-[0_14px_30px_-20px_rgba(18,29,51,0.4)] sm:translate-x-2" : gone ? "border-line bg-white/40 opacity-45" : "border-line bg-white"
              }`}
            >
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors duration-500 ${moving ? "bg-cta text-white" : "bg-amber-wash text-amber-deep"}`}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={s.icon} />
                </svg>
              </span>
              <span>
                <span className="block text-[0.86rem] font-semibold text-ink">{s.t}</span>
                <span className="block text-[0.72rem] text-mute">{s.d}</span>
              </span>
            </li>
          );
        })}
      </ul>

      <svg width="44" height="24" viewBox="0 0 44 24" className="mx-auto rotate-90 sm:rotate-0" aria-hidden="true">
        <path d="M2 12h36M30 5l8 7-8 7" fill="none" stroke="#FF8B0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="rounded-3xl bg-navy p-5 text-white shadow-[0_30px_60px_-30px_rgba(18,29,51,0.7)]">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-amber-light">Ayussetu</p>
        <p className="mt-1 font-display text-[1.45rem] leading-tight">One record, read together</p>
        <ul className="mt-4 space-y-1.5">
          {sources.map((s, i) => (
            <li
              key={s.row}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-[0.74rem] transition-all duration-500 ${i < done ? "bg-white/10 opacity-100" : "bg-white/[0.03] opacity-30"}`}
            >
              <span>{s.row}</span>
              {i < done && <span className="who-in rounded-full bg-[#7FD3A8]/15 px-2 py-0.5 text-[0.58rem] font-semibold text-[#9BE2BD]">Read</span>}
            </li>
          ))}
        </ul>
        <p className={`mt-4 border-t border-white/10 pt-3 text-[0.74rem] leading-relaxed transition-opacity duration-500 ${done === sources.length ? "text-white/80" : "text-white/30"}`}>
          Cholesterol has crept up since 2019. Worth a word with your doctor.
        </p>
      </div>
    </div>
  );
}
