"use client";

import { useEffect, useState } from "react";

/* The security page's picture: a health record, readable, then blurred
   as a lock slides down over it and closes, then a line saying only you
   hold the key. It loops. Reduced motion shows it locked. */

const CYCLE_MS = 5200;

export function LockCard() {
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setLocked(false);
    let t: ReturnType<typeof setTimeout>;
    const run = () => {
      setLocked(false);
      t = setTimeout(() => setLocked(true), 1600);
    };
    run();
    const loop = setInterval(run, CYCLE_MS);
    return () => {
      clearInterval(loop);
      clearTimeout(t);
    };
  }, []);

  const rows = [
    ["HbA1c", "6.9 %"],
    ["Fasting sugar", "118 mg/dL"],
    ["LDL cholesterol", "131 mg/dL"],
    ["Blood pressure", "128/82"],
  ];

  return (
    <div className="relative mx-auto w-full max-w-[24rem]">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,139,11,0.2),rgba(255,139,11,0)_65%)]" />
      <div className="relative rounded-3xl border border-white/10 bg-white p-6 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
        <div className={`transition-[filter,opacity] duration-700 ${locked ? "opacity-70 blur-[6px]" : "opacity-100 blur-0"}`}>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-[0.8rem] font-semibold text-white">R</span>
            <span>
              <span className="block text-[0.9rem] font-semibold">Your health record</span>
              <span className="block text-[0.72rem] text-mute">12 reports, 2019 to 2026</span>
            </span>
          </div>
          <ul className="mt-5 space-y-2">
            {rows.map(([k, v]) => (
              <li key={k} className="flex items-center justify-between rounded-xl bg-mist px-3.5 py-2.5 text-[0.82rem]">
                <span className="text-slate">{k}</span>
                <span className="font-semibold">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <div className={`flex flex-col items-center transition-all duration-700 ${locked ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}>
            <span className="grid h-20 w-20 place-items-center rounded-3xl bg-navy shadow-[0_0_0_10px_rgba(255,139,11,0.18),0_24px_48px_-16px_rgba(18,29,51,0.7)]">
              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
                <path
                  d="M13 18v-5a7 7 0 0 1 14 0v5"
                  fill="none"
                  stroke="#FFB15C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ transform: locked ? "translateY(0)" : "translateY(-4px)", transition: "transform 500ms 300ms" }}
                />
                <rect x="9" y="18" width="22" height="16" rx="4" fill="#FF8B0B" />
                <circle cx="20" cy="25" r="2.2" fill="#fff" />
                <path d="M20 26.5v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="mt-4 rounded-full bg-navy px-3.5 py-1.5 text-[0.74rem] font-semibold text-white">
              Only you hold the key
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
