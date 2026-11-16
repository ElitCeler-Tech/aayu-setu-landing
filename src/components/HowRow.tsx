"use client";

import { useState } from "react";

/* How it works on desktop: six tall navy cards in one row. The open card
   is wide and shows the problem on the left and the solution with
   Ayussetu on the right, each with its picture; the others are slim
   strips with their number and title. Hovering (or focusing, or tapping)
   a strip opens it. The open card's content has a fixed width so the
   words never reflow while the card grows; it fades in once there is
   room. Phones and tablets use the card grid instead (FlowCard). */

const SHADES = ["#1F3050", "#22365A", "#263B62", "#1B2B4A", "#16233D", "#13203A"];

export type HowStep = {
  problem: string;
  problemArt: React.ReactNode;
  title: string;
  body: string;
  art: React.ReactNode;
};

export function HowRow({ steps }: { steps: HowStep[] }) {
  const [open, setOpen] = useState(0);
  const [turns, setTurns] = useState(0); // remounts the pictures so they replay

  const pick = (i: number) => {
    if (i === open) return;
    setOpen(i);
    setTurns((t) => t + 1);
  };

  return (
    <div className="mt-12 hidden h-[27rem] gap-3 lg:flex">
      {steps.map((s, i) => {
        const on = i === open;
        const num = String(i + 1).padStart(2, "0");
        return (
          <div
            key={s.title}
            role="button"
            tabIndex={0}
            aria-expanded={on}
            aria-label={`${num}. ${s.title}`}
            onMouseEnter={() => pick(i)}
            onFocus={() => pick(i)}
            onClick={() => pick(i)}
            className="relative min-w-0 cursor-pointer overflow-hidden rounded-[1.5rem] text-white outline-none transition-[flex-grow] duration-500 ease-out focus-visible:ring-2 focus-visible:ring-cta"
            style={{ flexGrow: on ? 7 : 1, flexBasis: 0, background: SHADES[i % SHADES.length] }}
          >
            <span className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(255,139,11,0.28),transparent)]" />

            {/* slim strip: number on top, title running up the side */}
            <div className={`absolute inset-0 flex flex-col items-center justify-between py-6 transition-opacity duration-300 ${on ? "opacity-0" : "opacity-100 delay-200"}`} aria-hidden={on}>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 font-mono text-[0.72rem] text-white/80">{num}</span>
              <span className="rotate-180 text-[1.02rem] font-semibold leading-tight tracking-tight text-white/90 [writing-mode:vertical-rl]">
                {s.title}
              </span>
            </div>

            {/* open card: problem on the left, solution on the right */}
            <div className={`absolute inset-y-0 left-0 w-[37.5rem] p-7 transition-opacity duration-300 ${on ? "opacity-100 delay-200" : "pointer-events-none opacity-0"}`} aria-hidden={!on}>
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 font-mono text-[0.72rem] text-white/80">{num}</span>
                <span className="font-mono text-[0.72rem] text-white/40">{num} of 06</span>
              </div>

              <div className="mt-5 grid h-[calc(100%-3.5rem)] grid-cols-2 grid-rows-[auto_1fr_auto] gap-x-7">
                <span className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[#FF8A87]">
                  <span className="grid h-[1.15rem] w-[1.15rem] place-items-center rounded-full border border-[#FF8A87]/40 bg-[#FF8A87]/15 text-[0.58rem] font-bold">✕</span>
                  The problem
                </span>
                <span className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[#7FD3A8]">
                  <span className="grid h-[1.15rem] w-[1.15rem] place-items-center rounded-full bg-[#7FD3A8]/15 text-[0.58rem] font-bold">✓</span>
                  Solution with Ayussetu
                </span>

                <p className="mt-3 text-[1.15rem] font-semibold leading-snug tracking-tight text-white/90">{s.problem}</p>
                <div className="mt-3">
                  <h3 className="text-[1.15rem] font-semibold leading-snug tracking-tight text-white">{s.title}</h3>
                  <p className="mt-1.5 text-[0.84rem] leading-relaxed text-white/65">{s.body}</p>
                </div>

                <div className="relative h-[12rem] overflow-hidden rounded-2xl bg-mist p-2.5 ring-1 ring-white/10">
                  <div key={on ? `p${turns}` : "p"} className="relative flex h-full items-center">
                    <div className="relative h-[8.5rem] w-full">{s.problemArt}</div>
                  </div>
                </div>
                <div className="relative h-[12rem] overflow-hidden rounded-2xl bg-white p-2.5 ring-1 ring-white/10">
                  <div key={on ? `s${turns}` : "s"} className="flex h-full items-center">
                    <div className="w-full">{s.art}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
