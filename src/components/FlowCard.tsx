"use client";

import { useEffect, useState } from "react";

/* One How it works card, where the problem turns into the answer in
   place: one card, one picture box, three beats on its own clock.

   1. Problem (3s): a red The problem today label, the problem in words, and the
      problem's picture playing in the box.
   2. Turn (1s): an orange line wipes across the picture box from left
      to right, uncovering the answer's picture behind it; the label
      flips to Solution with Ayussetu and the words change over.
   3. Answer (4s): the answer's picture plays, rebuilt from its start.

   Remounting a layer by key restarts its CSS animations, so each picture
   plays from the beginning when its beat begins. Reduced motion shows the
   answer, with the problem as a struck line above it. */

const PROBLEM_MS = 3000;
const TURN_MS = 1000;
const CYCLE_MS = 8000;

type Phase = "still" | "problem" | "turn" | "solution";

export function FlowCard({
  n,
  problem,
  problemArt,
  title,
  body,
  art,
}: {
  n: number;
  problem: string;
  problemArt: React.ReactNode;
  title: string;
  body: string;
  art: React.ReactNode;
}) {
  const [phase, setPhase] = useState<Phase>("still");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setCycle((c) => c + 1);
      setPhase("problem");
      timers.push(setTimeout(() => setPhase("turn"), PROBLEM_MS));
      timers.push(setTimeout(() => setPhase("solution"), PROBLEM_MS + TURN_MS));
    };
    run();
    const loop = setInterval(run, CYCLE_MS);
    return () => {
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, []);

  const still = phase === "still";
  const isProblem = phase === "problem";
  const answered = phase === "turn" || phase === "solution" || still;
  const wipe = phase === "problem" ? 0 : 100; // how much of the answer is uncovered
  const wipeMs = phase === "turn" ? TURN_MS : 0;
  const num = String(n).padStart(2, "0");

  return (
    <li data-phase={phase} className="flex flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white p-5 transition duration-300 hover:shadow-[0_30px_60px_-40px_rgba(18,29,51,0.45)]">
      {/* label: Today, then With Ayussetu */}
      <div className="flex items-center justify-between">
        <span className="relative h-5 flex-1">
          <span className={`absolute inset-0 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[#D9403D] transition-all duration-500 ${isProblem ? "opacity-100" : "-translate-y-2 opacity-0"}`}>
            <span className="grid h-[1.15rem] w-[1.15rem] place-items-center rounded-full border border-[#F6C9C8] bg-[#FDECEC] text-[0.58rem] font-bold">✕</span>
            The problem today
          </span>
          <span className={`absolute inset-0 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-sage transition-all duration-500 ${answered ? "opacity-100" : "translate-y-2 opacity-0"}`}>
            <span className="grid h-[1.15rem] w-[1.15rem] place-items-center rounded-full bg-sage-wash text-[0.58rem] font-bold">✓</span>
            Solution with Ayussetu
          </span>
        </span>
        <span className="font-mono text-[0.72rem] text-faint">{num}</span>
      </div>

      {/* words: the problem, then the answer */}
      <div className="relative mt-3 min-h-[6.6rem]">
        <p className={`absolute inset-x-0 top-0 font-display text-[1.5rem] leading-[1.1] text-slate transition-all duration-500 ${isProblem ? "opacity-100" : "-translate-y-2 opacity-0"}`}>
          {problem}
        </p>
        <div className={`transition-all duration-500 ${answered ? "opacity-100" : "translate-y-2 opacity-0"}`}>
          {still && <p className="mb-1 text-[0.78rem] text-mute line-through decoration-[#D9403D]">{problem}</p>}
          <h3 className="font-display text-[1.5rem] leading-[1.1] text-ink">{title}</h3>
          <p className="mt-1.5 text-[0.84rem] leading-relaxed text-slate">{body}</p>
        </div>
      </div>

      {/* picture: the problem's, wiped across into the answer's */}
      <div className="relative mt-4 h-[11.5rem] overflow-hidden rounded-2xl bg-mist ring-1 ring-line">
        <div key={isProblem ? `p${cycle}` : "p"} className={`absolute inset-0 p-3 transition-opacity duration-300 ${phase === "solution" || still ? "opacity-0" : "opacity-100"}`}>
          <div className="relative h-full">{problemArt}</div>
        </div>
        <div
          className="absolute inset-0 bg-white p-3"
          style={{ clipPath: `inset(0 ${100 - wipe}% 0 0)`, transition: `clip-path ${wipeMs}ms ease-in-out` }}
        >
          <div key={phase === "turn" ? `s${cycle}` : "s"} className="h-full">
            {art}
          </div>
        </div>
        {!still && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 w-[3px] bg-cta shadow-[0_0_16px_4px_rgba(255,139,11,0.55)]"
            style={{ left: `${wipe}%`, opacity: phase === "turn" ? 1 : 0, transition: `left ${wipeMs}ms ease-in-out, opacity 200ms` }}
          />
        )}
      </div>
    </li>
  );
}
