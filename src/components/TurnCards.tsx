"use client";

import { useEffect, useRef, useState } from "react";

/* A row of three cards, each with a small picture of what it means,
   drawn the way the home page draws (never a phone screen). The cards
   take turns while the row is on screen: every card stays readable, the
   one whose turn it is lifts with an orange outline and its picture
   plays in piece by piece. Light or dark ground. Reduced motion shows
   them all still. Used on the doctors page and the About page. */

const STEP_MS = 3200;

export const play = (on: boolean, i: number, gap = 0.16) =>
  on ? { className: "who-in", style: { animationDelay: `${0.15 + i * gap}s` } } : { className: "", style: undefined };

export type Tone = "light" | "dark";
export type Art = (p: { on: boolean; tone: Tone }) => React.ReactElement;
export type Card = { t: string; b: string; icon: string; Art: Art };

/* A row inside a picture, white on light ground, glass on dark. */
export const row = (tone: Tone) =>
  tone === "light" ? "border border-line bg-white text-navy" : "border border-white/10 bg-white/[0.06] text-white/85";
export const sub = (tone: Tone) => (tone === "light" ? "text-mute" : "text-white/50");

/* ------------------------------- the row ------------------------------- */

export function TurnCards({ cards, tone = "light" }: { cards: Card[]; tone?: Tone }) {
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        clearInterval(timer);
        if (e.isIntersecting) {
          setActive(0);
          timer = setInterval(() => setActive((a) => (a + 1) % cards.length), STEP_MS);
        } else {
          setActive(-1);
        }
      },
      { threshold: 0.35 },
    );
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, [cards.length]);

  const light = tone === "light";

  return (
    <div ref={ref} className="mt-12 grid gap-5 md:grid-cols-3">
      {cards.map((c, i) => {
        const on = active === i;
        return (
          <article
            key={c.t}
            className={`flex h-full flex-col rounded-3xl border p-7 transition-[background-color,border-color,box-shadow,transform] duration-500 ${
              light
                ? on
                  ? "-translate-y-1.5 border-cta/50 bg-white shadow-[0_24px_48px_-24px_rgba(18,29,51,0.28)] ring-1 ring-cta/20"
                  : "border-line bg-mist"
                : on
                  ? "-translate-y-1.5 border-cta/60 bg-white/[0.08] ring-1 ring-cta/25"
                  : "border-white/10 bg-white/[0.04]"
            }`}
          >
            <span className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-500 ${on ? "bg-cta" : light ? "bg-amber-wash" : "bg-white/10"}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={on ? "#FFFFFF" : light ? "#C25E00" : "#FFB15C"} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={c.icon} />
              </svg>
            </span>
            <h3 className={`mt-6 font-display text-[1.5rem] leading-tight ${light ? "text-ink" : "text-white"}`}>{c.t}</h3>
            <p className={`mt-2.5 text-[0.88rem] leading-relaxed ${light ? "text-slate" : "text-white/60"}`}>{c.b}</p>
            <div key={on ? "on" : "off"} className="mt-auto pt-6">
              <c.Art on={on} tone={tone} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

