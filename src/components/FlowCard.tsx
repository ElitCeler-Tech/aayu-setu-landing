"use client";

import { useEffect, useRef, useState } from "react";

/* One How it works card, where the problem turns into the answer in
   place: one card, one picture box, three beats on its own clock.
   The cards stack as you scroll (like Health intelligence), so each
   card's clock starts only when it comes into view: you always meet
   the problem first.

   1. Problem (5.5s): a red The problem label, the problem in words, and the
      problem's picture playing in the box.
   2. Turn (1s): an orange line wipes across the picture box from left
      to right, uncovering the answer's picture behind it; the label
      flips to Solution with Ayussetu and the words change over.
   3. Answer (6.5s): the answer's picture plays, rebuilt from its start.

   Remounting a layer by key restarts its CSS animations, so each picture
   plays from the beginning when its beat begins. Reduced motion shows the
   answer, with the problem as a struck line above it. */

const PROBLEM_MS = 5500;
const TURN_MS = 1000;
const CYCLE_MS = 13000;

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

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let loop: ReturnType<typeof setInterval> | undefined;
    const run = () => {
      setCycle((c) => c + 1);
      setPhase("problem");
      timers.push(setTimeout(() => setPhase("turn"), PROBLEM_MS));
      timers.push(setTimeout(() => setPhase("solution"), PROBLEM_MS + TURN_MS));
    };
    const seen = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || loop) return;
        run();
        loop = setInterval(run, CYCLE_MS);
        seen.disconnect();
      },
      { threshold: 0.45 },
    );
    seen.observe(el);
    return () => {
      seen.disconnect();
      if (loop) clearInterval(loop);
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
    <li
      ref={ref}
      data-phase={phase}
      className="sticky mb-6 overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_-24px_50px_-34px_rgba(18,29,51,0.45)]"
      style={{ top: `${96 + (n - 1) * 18}px` }}
    >
      <div className="grid gap-6 p-6 md:min-h-[18.5rem] md:grid-cols-[1fr_1.1fr] md:items-center md:gap-12 md:p-10">
      <div>
      {/* label: Today, then With Ayussetu */}
      <div className="flex items-center justify-between">
        <span className="relative h-5 flex-1">
          <span className={`absolute inset-0 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[#D9403D] transition-all duration-500 ${isProblem ? "opacity-100" : "-translate-y-2 opacity-0"}`}>
            <span className="grid h-[1.15rem] w-[1.15rem] place-items-center rounded-full border border-[#F6C9C8] bg-[#FDECEC] text-[0.58rem] font-bold">✕</span>
            The problem
          </span>
          <span className={`absolute inset-0 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-sage transition-all duration-500 ${answered ? "opacity-100" : "translate-y-2 opacity-0"}`}>
            <span className="grid h-[1.15rem] w-[1.15rem] place-items-center rounded-full bg-sage-wash text-[0.58rem] font-bold">✓</span>
            Solution with Ayussetu
          </span>
        </span>
        <span className="font-mono text-[0.72rem] text-faint">{num} of 06</span>
      </div>

      {/* words: the problem, then the answer */}
      <div className="relative mt-4 min-h-[7.5rem]">
        <p className={`absolute inset-x-0 top-0 text-[clamp(1.3rem,2.2vw,1.65rem)] font-semibold leading-snug tracking-tight text-slate transition-all duration-500 ${isProblem ? "opacity-100" : "-translate-y-2 opacity-0"}`}>
          {problem}
        </p>
        <div className={`transition-all duration-500 ${answered ? "opacity-100" : "translate-y-2 opacity-0"}`}>
          {still && <p className="mb-1 text-[0.78rem] text-mute line-through decoration-[#D9403D]">{problem}</p>}
          <h3 className="text-[clamp(1.3rem,2.2vw,1.65rem)] font-semibold leading-snug tracking-tight text-ink">{title}</h3>
          <p className="mt-2 max-w-md text-[0.94rem] leading-relaxed text-slate">{body}</p>
        </div>
      </div>
      </div>

      {/* picture: the problem's, wiped across into the answer's */}
      <div className="relative h-[11rem] overflow-hidden rounded-2xl bg-mist ring-1 ring-line md:h-[13rem]">
        <div key={isProblem ? `p${cycle}` : "p"} className={`absolute inset-0 p-2.5 transition-opacity duration-300 ${phase === "solution" || still ? "opacity-0" : "opacity-100"}`}>
          <div className="relative mx-auto flex h-full max-w-[26rem] items-center"><div className="relative h-[8.5rem] w-full">{problemArt}</div></div>
        </div>
        <div
          className="absolute inset-0 bg-white p-2.5"
          style={{ clipPath: `inset(0 ${100 - wipe}% 0 0)`, transition: `clip-path ${wipeMs}ms ease-in-out` }}
        >
          <div key={phase === "turn" ? `s${cycle}` : "s"} className="mx-auto flex h-full max-w-[26rem] items-center">
            <div className="w-full">{art}</div>
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
      </div>
    </li>
  );
}
