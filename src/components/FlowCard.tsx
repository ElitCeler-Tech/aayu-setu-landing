"use client";

import { useEffect, useRef, useState } from "react";

/* One How it works card: the problem on the left, the solution with
   Ayussetu on the right, each with its own picture. The cards stack as
   you scroll. Both pictures start playing when the card comes into view
   and replay on a loop, so the card is never a still frame.

   Remounting a picture by key restarts its CSS animations. */

const CYCLE_MS = 13000;

/* Graded navy, one shade per card, so the edges of the stacked cards
   stay visible. Health intelligence uses the same shades. */
export const SHADES = ["#1F3050", "#22365A", "#263B62", "#1B2B4A", "#16233D", "#13203A"];

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
  const [cycle, setCycle] = useState(0);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let loop: ReturnType<typeof setInterval> | undefined;
    const seen = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || loop) return;
        setCycle((c) => c + 1);
        loop = setInterval(() => setCycle((c) => c + 1), CYCLE_MS);
        seen.disconnect();
      },
      { threshold: 0.45 },
    );
    seen.observe(el);
    return () => {
      seen.disconnect();
      if (loop) clearInterval(loop);
    };
  }, []);

  const num = String(n).padStart(2, "0");

  return (
    <li
      ref={ref}
      className="sticky mb-6 overflow-hidden rounded-[1.75rem] text-white shadow-[0_-24px_50px_-30px_rgba(13,22,40,0.6)]"
      style={{ top: `${96 + (n - 1) * 18}px`, background: SHADES[(n - 1) % SHADES.length] }}
    >
      <span className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(255,139,11,0.28),transparent)]" />
      {/* One grid for both sides, so the labels, the words and the pictures
          each sit on a shared row and line up across the card. On a phone
          the problem comes first, then the solution. */}
      <div className="relative grid gap-x-16 p-6 md:grid-cols-2 md:grid-rows-[auto_1fr_auto] md:p-10">
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-10 left-1/2 hidden w-px bg-white/10 md:block" />

        <span className="order-1 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[#FF8A87] md:order-none">
          <span className="grid h-[1.15rem] w-[1.15rem] place-items-center rounded-full border border-[#FF8A87]/40 bg-[#FF8A87]/15 text-[0.58rem] font-bold">✕</span>
          The problem
        </span>
        <div className="order-4 mt-8 flex items-center justify-between md:order-none md:mt-0">
          <span className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[#7FD3A8]">
            <span className="grid h-[1.15rem] w-[1.15rem] place-items-center rounded-full bg-[#7FD3A8]/15 text-[0.58rem] font-bold">✓</span>
            Solution with Ayussetu
          </span>
          <span className="font-mono text-[0.72rem] text-white/40">{num} of 06</span>
        </div>

        <p className="order-2 mt-4 text-[clamp(1.3rem,2.2vw,1.65rem)] font-semibold leading-snug tracking-tight text-white/90 md:order-none">
          {problem}
        </p>
        <div className="order-5 mt-4 md:order-none">
          <h3 className="text-[clamp(1.3rem,2.2vw,1.65rem)] font-semibold leading-snug tracking-tight text-white">{title}</h3>
          <p className="mt-2 max-w-md text-[0.94rem] leading-relaxed text-white/65">{body}</p>
        </div>

        <div className="relative order-3 mt-5 h-[11rem] overflow-hidden rounded-2xl bg-mist p-2.5 ring-1 ring-white/10 md:order-none md:mt-6 md:h-[13rem]">
          <div key={`p${cycle}`} className="relative mx-auto flex h-full max-w-[26rem] items-center">
            <div className="relative h-[8.5rem] w-full">{problemArt}</div>
          </div>
        </div>
        <div className="relative order-6 mt-5 h-[11rem] overflow-hidden rounded-2xl bg-white p-2.5 ring-1 ring-white/10 md:order-none md:mt-6 md:h-[13rem]">
          <div key={`s${cycle}`} className="mx-auto flex h-full max-w-[26rem] items-center">
            <div className="w-full">{art}</div>
          </div>
        </div>
      </div>
    </li>
  );
}
