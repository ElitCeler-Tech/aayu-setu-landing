"use client";

import { useEffect, useState } from "react";

/* The phone, playing the thing the product is hardest to explain in
   words: you book a doctor, the call rings on your phone, and you talk
   to them by video or by voice. Three panels on a loop, because a
   screenshot of a home screen says "health app" and nothing about
   consulting anybody.

   Frozen on the first panel when the visitor has asked for reduced
   motion - the panels still say what they say, they just stop moving. */

const PANELS = ["home", "ringing", "incall"] as const;
type Panel = (typeof PANELS)[number];

const captions: Record<Panel, string> = {
  home: "Your day, as the app opens",
  ringing: "The doctor calls at the booked time",
  incall: "Consult by video, or switch to voice",
};

export function PhoneShowcase() {
  const [i, setI] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      return;
    }
    const t = setInterval(() => setI((n) => (n + 1) % PANELS.length), 3400);
    return () => clearInterval(t);
  }, []);

  const panel = PANELS[still ? 0 : i];

  return (
    <div className="relative mx-auto w-[clamp(15rem,34vw,19.5rem)]">
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[4rem] bg-amber/10 blur-3xl" />

      <div className="rounded-[2.5rem] border border-line bg-white p-2.5 shadow-[0_40px_90px_-30px_rgba(22,35,61,0.5)]">
        <div className="relative h-[33rem] overflow-hidden rounded-[2rem] bg-paper">
          {PANELS.map((p) => (
            <div
              key={p}
              className={`absolute inset-0 transition-all duration-700 ${
                p === panel
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              {p === "home" && <Home />}
              {p === "ringing" && <Ringing />}
              {p === "incall" && <InCall />}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-2.5">
        <p className="h-5 text-center text-[0.8rem] font-medium text-slate transition">
          {captions[panel]}
        </p>
        {!still && (
          <div className="flex gap-1.5">
            {PANELS.map((p, n) => (
              <button
                key={p}
                onClick={() => setI(n)}
                aria-label={captions[p]}
                className={`h-1.5 rounded-full transition-all ${
                  p === panel ? "w-5 bg-navy" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return <div className="flex h-full flex-col">{children}</div>;
}

function Home() {
  return (
    <Shell>
      <div className="flex items-center justify-between bg-navy px-4 pb-6 pt-6">
        <div>
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-white/55">
            Good morning
          </p>
          <p className="mt-0.5 text-[0.98rem] font-semibold text-white">
            Lakshmi
          </p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/12 text-[0.7rem] font-semibold text-white">
          L
        </div>
      </div>

      <div className="space-y-3 px-3.5 pb-5 pt-4">
        <div className="rounded-2xl border border-line bg-white p-3.5">
          <div className="flex items-center gap-3.5">
            <div className="relative h-14 w-14 shrink-0">
              <div
                className="h-14 w-14 rounded-full"
                style={{
                  background:
                    "conic-gradient(var(--color-sage) 0 72%, var(--color-mist) 72% 100%)",
                }}
              />
              <div className="absolute inset-[5px] flex items-center justify-center rounded-full bg-white">
                <span className="text-[0.85rem] font-bold text-navy">72</span>
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-[0.74rem] font-semibold text-navy">
                Health score
              </p>
              <p className="mt-0.5 text-[0.62rem] leading-snug text-mute">
                Steady this week, 5 of 6 readings logged
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber/30 bg-amber-wash p-3">
          <p className="text-[0.56rem] font-bold uppercase tracking-[0.14em] text-amber-deep">
            Reading
          </p>
          <p className="mt-1 text-[0.74rem] font-semibold leading-snug text-navy">
            Blood sugar needs attention
          </p>
          <p className="mt-0.5 text-[0.62rem] text-amber-deep">
            Out of range today
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { k: "BP", v: "118/76" },
            { k: "HR", v: "72" },
            { k: "Sugar", v: "142" },
          ].map((t) => (
            <div
              key={t.k}
              className="rounded-xl border border-line bg-white px-2 py-2"
            >
              <p className="text-[0.55rem] font-medium text-mute">{t.k}</p>
              <p className="mt-0.5 text-[0.76rem] font-bold tabular-nums text-navy">
                {t.v}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-white p-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sage-wash">
            <span className="h-2 w-2 rounded-full bg-sage" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.72rem] font-semibold text-navy">
              Metformin 500mg
            </p>
            <p className="text-[0.6rem] text-mute">8:00 AM, after food</p>
          </div>
          <span className="rounded-lg bg-navy px-2.5 py-1 text-[0.58rem] font-semibold text-white">
            Take
          </span>
        </div>
      </div>
    </Shell>
  );
}

function Ringing() {
  return (
    <div className="flex h-full flex-col items-center justify-between bg-ink px-6 py-10 text-center">
      <div className="flex flex-col items-center">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/45">
          Incoming video consultation
        </p>
        <div className="relative mt-8">
          <span className="absolute inset-0 animate-ping rounded-full bg-white/10" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-[1.3rem] font-semibold text-white">
            SR
          </div>
        </div>
        <p className="mt-5 text-[1rem] font-semibold text-white">Dr S. Rao</p>
        <p className="mt-0.5 text-[0.7rem] text-white/50">
          Cardiology, 10:00 AM
        </p>
      </div>

      <div className="flex w-full items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4453D]">
            <PhoneIcon className="rotate-[135deg] text-white" />
          </span>
          <span className="text-[0.58rem] text-white/45">Decline</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage">
            <PhoneIcon className="text-white" />
          </span>
          <span className="text-[0.58rem] text-white/45">Answer</span>
        </div>
      </div>
    </div>
  );
}

function InCall() {
  return (
    <div className="flex h-full flex-col bg-ink">
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(47,125,99,0.35),transparent_60%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-[1.5rem] font-semibold text-white">
            SR
          </div>
          <p className="mt-4 text-[0.92rem] font-semibold text-white">
            Dr S. Rao
          </p>
          <p className="mt-1 text-[0.68rem] tabular-nums text-white/50">
            04:12
          </p>
        </div>

        <div className="absolute right-3 top-3 h-20 w-14 rounded-xl border border-white/15 bg-white/10 backdrop-blur">
          <div className="flex h-full items-center justify-center text-[0.6rem] font-semibold text-white/60">
            You
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 border-t border-white/10 px-4 py-5">
        {[
          { l: "Mute", on: false },
          { l: "Voice only", on: true },
          { l: "Chat", on: false },
        ].map((c) => (
          <div key={c.l} className="flex flex-col items-center gap-1.5">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                c.on ? "bg-amber" : "bg-white/10"
              }`}
            >
              <span
                className={`h-3 w-3 rounded-full ${
                  c.on ? "bg-white" : "bg-white/60"
                }`}
              />
            </span>
            <span className="text-[0.55rem] text-white/45">{c.l}</span>
          </div>
        ))}
        <div className="flex flex-col items-center gap-1.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4453D]">
            <PhoneIcon className="rotate-[135deg] text-white" small />
          </span>
          <span className="text-[0.55rem] text-white/45">End</span>
        </div>
      </div>
    </div>
  );
}

function PhoneIcon({
  className = "",
  small = false,
}: {
  className?: string;
  small?: boolean;
}) {
  const s = small ? 13 : 17;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.2 2.2Z" />
    </svg>
  );
}
