"use client";

import { useEffect, useState } from "react";

/* One How it works row, told in three beats on its own clock:

   1. Problem (about 3s): the grey side is bright and its picture plays;
      the answer waits, faded. The dot on the little track between the
      two labels sits at the Today end.
   2. Turn (about 1s): the dot travels along the track, the problem's
      picture slides toward the middle and shrinks, an orange glow sweeps
      across, and a stream of dots runs into the answer's picture.
   3. Answer (about 4s): the dot rests at the With Ayussetu end, the
      answer lights up, its picture restarts so it builds in, and its
      box flashes an orange ring as it lands. The problem dims.

   Remounting a side by key restarts its CSS animations, so each half
   plays in step with the row. Reduced motion shows both sides, finished. */

const PROBLEM_MS = 3000;
const TURN_MS = 1000;
const CYCLE_MS = 8000;

type Phase = "still" | "problem" | "turn" | "solution";

export function FlowRow({ problem, solution }: { problem: React.ReactNode; solution: React.ReactNode }) {
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

  const onProblem = phase === "problem";
  const onTurn = phase === "turn";
  const onSolution = phase === "solution";
  const still = phase === "still";

  return (
    <li
      data-phase={phase}
      className="group/flow relative grid overflow-hidden rounded-[1.5rem] border border-line bg-[linear-gradient(180deg,var(--color-mist)_0%,var(--color-mist)_48%,#fff_52%)] transition duration-300 hover:shadow-[0_30px_60px_-40px_rgba(18,29,51,0.45)] md:grid-cols-2 md:bg-[linear-gradient(90deg,var(--color-mist)_0%,var(--color-mist)_38%,#fff_62%)]"
    >
      {/* 1. The track between the two labels: where the row is in its story. */}
      {!still && (
        <span aria-hidden="true" className="pointer-events-none absolute left-[31%] top-[1.55rem] z-20 hidden h-px w-[16%] bg-line-strong md:block">
          <span
            className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_3px_rgba(255,139,11,0.25)] transition-[left,background-color] ease-in-out"
            style={{
              left: onProblem ? "0%" : "100%",
              background: onProblem ? "#D9403D" : "#2E8A62",
              transitionDuration: onTurn ? `${TURN_MS}ms` : "0ms",
            }}
          />
          <span className="absolute inset-y-0 left-0 bg-cta transition-[width] ease-in-out" style={{ width: onProblem ? "0%" : "100%", transitionDuration: onTurn ? `${TURN_MS}ms` : "0ms" }} />
        </span>
      )}

      {/* 2. The sweep at the turn: a glow across the middle, and dots
             running from the problem's picture into the answer's. */}
      {onTurn && (
        <>
          <span key={`g${cycle}`} aria-hidden="true" className="flow-glow pointer-events-none absolute inset-y-0 left-[30%] z-10 hidden w-[40%] md:block" />
          <span
            key={`d${cycle}`}
            aria-hidden="true"
            className="flow-stream pointer-events-none absolute left-[28%] z-20 hidden h-4 w-[44%] md:block"
            style={{ bottom: "calc(1.5rem + 5.75rem - 0.5rem)" }}
          >
            {[0, 1, 2, 3, 4, 5].map((d) => (
              <span key={d} className="flow-dot absolute top-1/2 h-2.5 w-2.5 rounded-full bg-cta shadow-[0_0_10px_#FF8B0B]" style={{ animationDelay: `${d * 0.1}s` }} />
            ))}
          </span>
        </>
      )}

      <div
        className={`transition-[opacity,filter,transform] duration-700 ease-in-out ${
          onTurn ? "translate-x-6 scale-[0.97] opacity-60" : onSolution ? "opacity-45 saturate-50" : "opacity-100"
        }`}
      >
        <div key={onProblem ? `p${cycle}` : "p"} className="h-full">
          {problem}
        </div>
      </div>

      {/* 3. The answer lands: lit, rebuilt, and a ring flash on its picture. */}
      <div className={`transition-[opacity,transform] duration-700 ${onProblem ? "translate-x-2 opacity-30" : onTurn ? "opacity-60" : "translate-x-0 opacity-100"}`}>
        <div key={onSolution ? `s${cycle}` : "s"} className={`h-full ${onSolution ? "flow-land" : ""}`}>
          {solution}
        </div>
      </div>
    </li>
  );
}
