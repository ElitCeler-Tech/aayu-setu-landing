"use client";

import { useEffect, useState } from "react";

/* One How it works row, played as a story on its own clock: the problem
   first (left half bright, its picture playing, the answer waiting
   faded), then the turn (the arrow pulses, a line runs across the top),
   then the answer (right half lit, its picture restarted so it builds
   in, the problem dimmed), and round again. Remounting a side by key
   restarts its CSS animations from the start, so each half plays in
   step with the row. Reduced motion shows both sides, finished. */

const PROBLEM_MS = 3400;
const CYCLE_MS = 8000;

export function FlowRow({
  problem,
  solution,
  arrow,
}: {
  problem: React.ReactNode;
  solution: React.ReactNode;
  arrow: React.ReactNode;
}) {
  const [phase, setPhase] = useState<"still" | "problem" | "solution">("still");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let turn: ReturnType<typeof setTimeout>;
    const run = () => {
      setCycle((c) => c + 1);
      setPhase("problem");
      turn = setTimeout(() => setPhase("solution"), PROBLEM_MS);
    };
    run();
    const loop = setInterval(run, CYCLE_MS);
    return () => {
      clearInterval(loop);
      clearTimeout(turn);
    };
  }, []);

  const onProblem = phase === "problem";
  const onSolution = phase === "solution";

  return (
    <li className="relative grid overflow-hidden rounded-[1.5rem] border border-line bg-white transition duration-300 hover:shadow-[0_30px_60px_-40px_rgba(18,29,51,0.45)] md:grid-cols-[0.8fr_1.2fr]">
      {/* the line that carries the eye from problem to answer */}
      {phase !== "still" && (
        <span aria-hidden="true" className="absolute inset-x-0 top-0 z-20 h-[3px] bg-line/60">
          <span key={cycle} className="flow-line block h-full bg-cta" style={{ animationDuration: `${CYCLE_MS}ms` }} />
        </span>
      )}

      <div
        className={`transition-[opacity,filter] duration-500 ${onSolution ? "opacity-55 saturate-50" : "opacity-100"}`}
      >
        <div key={onProblem ? `p${cycle}` : "p"} className="h-full">
          {problem}
        </div>
      </div>

      <span className={onSolution ? "flow-pulse contents" : "contents"} key={onSolution ? `a${cycle}` : "a"}>
        {arrow}
      </span>

      <div
        className={`transition-[opacity,transform] duration-500 ${
          onProblem ? "translate-x-2 opacity-35" : "translate-x-0 opacity-100"
        }`}
      >
        <div key={onSolution ? `s${cycle}` : "s"} className="h-full">
          {solution}
        </div>
      </div>
    </li>
  );
}
