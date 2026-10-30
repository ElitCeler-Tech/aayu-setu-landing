"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ABHA, told one step at a time. One hospital, Cardiology, goes through
   the whole consent: it asks (the line pulses dashed), you approve (the
   line turns solid orange), records travel (dots run along it), and you
   revoke (the line greys out). The four steps in the list beside the
   diagram light up in turn with it, and it loops. The other places on
   the ring stay quiet, because nobody else asked.

   ABHA is the ID; the consent flow is ABDM's, which runs on top of it.
   Worded to what that flow actually does: a revoked consent stops
   further access, and records already sent are deleted when the consent
   expires. Reduced motion holds on step two, approved. */

const STEP_MS = 2800;

const steps = [
  { n: "01", t: "A doctor has to ask", d: "Nothing is visible until a hospital or doctor requests your records, and says why." },
  { n: "02", t: "You choose what they see", d: "Which records, from which dates, and for how long. Nothing moves before you approve." },
  { n: "03", t: "Records travel", d: "Encrypted, straight from where they are kept. Nothing is held centrally." },
  { n: "04", t: "Logged, and revocable", d: "Every grant is dated. Revoke any time, and the consent expires on the date you set." },
];

const notes = ["Request waiting", "Approved, 7 days", "Records shared", "Revoked"];

/* Every place on the ring takes its turn through the whole consent,
   clockwise from the top. */
const places = [
  { label: "Cardiology", angle: -90, icon: "M4 20V8l8-4 8 4v12M9 20v-5h6v5M12 8v4M10 10h4" },
  { label: "Diagnostic lab", angle: -30, icon: "M9 3v6l-4.5 9.5A1.5 1.5 0 0 0 5.9 21h12.2a1.5 1.5 0 0 0 1.4-2.5L15 9V3M8 3h8M7 15h10" },
  { label: "Clinic", angle: 30, icon: "M6 3v6a4 4 0 0 0 8 0V3M10 13v3a4 4 0 0 0 8 0v-2M18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" },
  { label: "Pharmacy", angle: 90, icon: "M5.5 13.5 13.5 5.5a3.5 3.5 0 0 1 5 5l-8 8a3.5 3.5 0 0 1-5-5ZM9.5 9.5l5 5" },
  { label: "Hospital", angle: 150, icon: "M4 20V8l8-4 8 4v12M9 20v-5h6v5M12 8v4M10 10h4" },
  { label: "Imaging centre", angle: 210, icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" },
];

const R = 39;
const at = (angle: number, r = R) => {
  const a = (angle * Math.PI) / 180;
  return { x: Math.round((50 + r * Math.cos(a)) * 100) / 100, y: Math.round((50 + r * Math.sin(a)) * 100) / 100 };
};

function Icon({ d }: { d: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export function AbhaStory({ children }: { children?: React.ReactNode }) {
  // One tick per step; every four steps the next place takes its turn.
  const [tick, setTick] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTick(0);
    const t = setInterval(() => setTick((s) => s + 1), STEP_MS);
    return () => clearInterval(t);
  }, []);

  const step = tick % steps.length;
  const turn = Math.floor(tick / steps.length) % places.length;
  const asking = step === 0;
  const open = step === 1 || step === 2;
  const revoked = step === 3;

  return (
    <div className="relative grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
      <div>
        {children}
        <ol className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/12 pt-7">
          {steps.map((s, i) => {
            const on = i === step;
            return (
              <li key={s.n} className={`transition-opacity duration-500 ${on ? "opacity-100" : "opacity-40"}`}>
                <span className={`inline-block rounded-md px-1.5 font-mono text-[0.72rem] transition-colors duration-500 ${on ? "bg-cta text-white" : "text-amber-light"}`}>
                  {s.n}
                </span>
                <p className="mt-1.5 text-[0.95rem] font-semibold text-white">{s.t}</p>
                <p className="mt-1 text-[0.82rem] leading-snug text-white/55">{s.d}</p>
              </li>
            );
          })}
        </ol>

        <p className="mt-9 text-[0.74rem] leading-relaxed text-white/40">
          Ayussetu is not yet certified on the ABDM network. This shows how it
          will work once it is.
        </p>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
        <div className="pointer-events-none absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,139,11,0.22),rgba(255,139,11,0)_65%)] blur-[8px]" />

        <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
          <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.25" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.25" />
          {places.map((n, i) => {
            const a = at(n.angle, 15);
            const b = at(n.angle, R - 5);
            if (i !== turn) return <line key={n.label} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(255,255,255,0.12)" strokeWidth="0.3" />;
            return (
              <g key={n.label}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={revoked ? "rgba(255,255,255,0.18)" : asking ? "#FFB15C" : "#FF8B0B"}
                  strokeWidth={open ? 0.7 : 0.45}
                  strokeDasharray={asking ? "1 1.2" : undefined}
                  className={asking ? "abha-ask" : undefined}
                  style={{ transition: "stroke 500ms, stroke-width 500ms" }}
                />
                {step === 2 && (
                  <line className="abha-flow" x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#FFD2A0" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.2 7.4" />
                )}
              </g>
            );
          })}
        </svg>

        {/* the patient */}
        <div className="absolute left-1/2 top-1/2 flex w-[30%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
          <span className={`grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-white transition-shadow duration-500 md:h-16 md:w-16 ${step === 1 ? "shadow-[0_0_0_8px_rgba(255,139,11,0.25),0_20px_40px_-12px_rgba(255,139,11,0.6)]" : "shadow-[0_0_0_6px_rgba(255,255,255,0.06),0_20px_40px_-12px_rgba(255,139,11,0.45)]"}`}>
            <Image src="/ayussetu-logo-white.png" alt="" width={64} height={64} />
          </span>
          <span className="mt-3 text-[0.82rem] font-semibold text-white md:text-[0.9rem]">Your ABHA</span>
          <span className="eyebrow mt-1 hidden !text-[0.56rem] text-white/45 md:block">
            {step === 1 ? "You approved" : step === 3 ? "You revoked" : "You hold the keys"}
          </span>
        </div>

        {places.map((n, i) => {
          const pos = at(n.angle);
          const top = n.angle === -90;
          const on = i === turn;
          return (
            <div
              key={n.label}
              className={`absolute flex w-[30%] -translate-x-1/2 items-center text-center ${
                top ? "-translate-y-[calc(100%-1.25rem)] flex-col-reverse md:-translate-y-[calc(100%-1.5rem)]" : "-translate-y-5 flex-col md:-translate-y-6"
              }`}
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            >
              <span
                className={`relative grid h-10 w-10 place-items-center rounded-xl border transition-colors duration-500 md:h-12 md:w-12 ${
                  !on
                    ? "border-white/20 bg-white/[0.08] text-white/80"
                    : revoked
                      ? "border-white/15 bg-white/[0.03] text-white/45"
                      : open
                        ? "border-cta bg-cta/15 text-amber-light"
                        : "border-amber-light/50 bg-white/[0.05] text-amber-light"
                }`}
              >
                {on && asking && <span className="abha-wait absolute inset-[-5px] rounded-[0.9rem] border border-dashed border-amber-light/60" />}
                <Icon d={n.icon} />
              </span>
              <span
                className={`${top ? "mb-1.5" : "mt-2"} text-[0.66rem] leading-tight md:text-[0.76rem] ${
                  on && revoked ? "text-white/35 line-through decoration-white/30" : on ? "text-white" : "text-white/70"
                }`}
              >
                {n.label}
              </span>
              {on && (
                <span key={tick} className={`abha-note eyebrow ${top ? "mb-0.5" : "mt-1"} !text-[0.52rem] md:!text-[0.58rem] ${revoked ? "text-white/40" : "text-amber-light"}`}>
                  {notes[step]}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
