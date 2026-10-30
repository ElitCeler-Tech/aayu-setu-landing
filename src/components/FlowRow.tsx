"use client";

import { useEffect, useState } from "react";

/* One How it works row, played as a story on its own clock. The card
   is one surface that fades from grey on the problem side to white on
   the answer side, with no divider and no arrow: the problem plays
   first while the answer waits faded, then a stream of orange dots
   runs from the problem's picture into the answer's, and the answer
   lights up with its picture restarted so it builds in, while the
   problem dims. Remounting a side by key restarts its CSS animations.
   Both halves share one layout (label, words, picture), so they line
   up across the card. Reduced motion shows both sides, finished. */

const PROBLEM_MS = 3400;
const CYCLE_MS = 8000;

export function FlowRow({ problem, solution }: { problem: React.ReactNode; solution: React.ReactNode }) {
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
    <li className="relative grid overflow-hidden rounded-[1.5rem] border border-line bg-[linear-gradient(180deg,var(--color-mist)_0%,var(--color-mist)_48%,#fff_52%)] transition duration-300 hover:shadow-[0_30px_60px_-40px_rgba(18,29,51,0.45)] md:grid-cols-2 md:bg-[linear-gradient(90deg,var(--color-mist)_0%,var(--color-mist)_38%,#fff_62%)]">
      {/* the stream from problem into answer, across the picture row */}
      <span
        aria-hidden="true"
        key={onSolution ? `f${cycle}` : "f"}
        className={`pointer-events-none absolute z-10 hidden h-3 w-36 -translate-x-1/2 md:block ${onSolution ? "flow-stream" : "opacity-0"}`}
        style={{ left: "50%", bottom: "calc(1.5rem + 5.75rem - 0.375rem)" }}
      >
        {[0, 1, 2, 3, 4].map((d) => (
          <span key={d} className="flow-dot absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cta" style={{ animationDelay: `${d * 0.12}s` }} />
        ))}
      </span>

      <div className={`transition-[opacity,filter] duration-700 ${onSolution ? "opacity-50 saturate-50" : "opacity-100"}`}>
        <div key={onProblem ? `p${cycle}` : "p"} className="h-full">
          {problem}
        </div>
      </div>

      <div className={`transition-[opacity,transform] duration-700 ${onProblem ? "translate-x-2 opacity-35" : "translate-x-0 opacity-100"}`}>
        <div key={onSolution ? `s${cycle}` : "s"} className="h-full">
          {solution}
        </div>
      </div>
    </li>
  );
}
