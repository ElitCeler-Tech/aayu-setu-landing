"use client";

import { useEffect, useState } from "react";

/* The security page's picture: the same records the rest of the site
   shows (a prescription, a discharge summary, a medication report and an
   MRI report), readable, then blurred
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
    { t: "Prescription", d: "Feb 2024", icon: "M10.5 20.5 3.5 13.5a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7ZM8.5 8.5l7 7" },
    { t: "Discharge summary", d: "Jun 2024", icon: "M4 20V8l8-4 8 4v12M9 20v-5h6v5M12 8v4M10 10h4" },
    { t: "Medication report", d: "Sep 2024", icon: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h5" },
    { t: "MRI report", d: "Jan 2025", icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[24rem]">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,139,11,0.2),rgba(255,139,11,0)_65%)]" />
      <div className="relative rounded-3xl border border-white/10 bg-white p-6 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
        <div className={`transition-[filter,opacity] duration-700 ${locked ? "opacity-70 blur-[6px]" : "opacity-100 blur-0"}`}>
          <div className="flex items-center gap-3">
            <img src="/icon.png" alt="" width={36} height={36} className="h-9 w-9 rounded-[10px]" />
            <span>
              <span className="block text-[0.95rem] font-semibold">My records</span>
              <span className="block text-[0.74rem] text-mute">4 documents, saved</span>
            </span>
          </div>
          <ul className="mt-5 space-y-2">
            {rows.map((r) => (
              <li key={r.t} className="flex items-center gap-3 rounded-xl border border-line px-3 py-2.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-amber-wash text-amber-deep">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={r.icon} />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.85rem] font-semibold">{r.t}</span>
                  <span className="block text-[0.7rem] text-mute">{r.d}</span>
                </span>
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage">
                  <svg width="10" height="10" viewBox="0 0 16 16" aria-hidden="true"><path d="M6.2 11.6 2.9 8.3l1.2-1.2 2.1 2.1 5.6-5.6 1.2 1.2z" fill="#fff" /></svg>
                </span>
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
