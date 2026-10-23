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
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[4rem] bg-navy/[0.07] blur-3xl" />

      {/* Lifted off the phone, drifting out of phase. */}
      <div className="float-a pointer-events-none absolute -left-[8.5rem] top-20 z-20 hidden w-[10.5rem] xl:block rounded-2xl border border-line bg-white/95 p-3 shadow-[0_22px_45px_-24px_rgba(22,35,61,0.55)] backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage-wash">
            <svg width="11" height="11" viewBox="0 0 16 16" className="text-sage" aria-hidden="true">
              <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
            </svg>
          </span>
          <p className="text-[0.66rem] font-semibold text-navy">Dose taken</p>
        </div>
        <p className="mt-1.5 text-[0.58rem] leading-snug text-mute">
          Telmisartan 40mg, logged at 8:04 AM
        </p>
      </div>

      <div className="float-b pointer-events-none absolute -right-[8rem] bottom-24 z-20 hidden w-[11rem] xl:block rounded-2xl border border-line bg-white/95 p-3 shadow-[0_22px_45px_-24px_rgba(22,35,61,0.55)] backdrop-blur">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-mute">
          Lab report read
        </p>
        <div className="mt-2 space-y-1.5">
          {[
            { k: "LDL", v: "164", w: 82, high: true },
            { k: "HDL", v: "38", w: 24, high: true },
          ].map((m) => (
            <div key={m.k}>
              <div className="flex items-baseline justify-between text-[0.58rem]">
                <span className="font-medium text-navy">{m.k}</span>
                <span className="tabular-nums text-slate">{m.v} mg/dL</span>
              </div>
              <div className="mt-0.5 h-1 rounded-full bg-mist">
                <div
                  className="h-1 rounded-full bg-amber"
                  style={{ width: `${m.w}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

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

      <div
        aria-hidden="true"
        className="mx-auto mt-4 h-6 w-[72%] rounded-[50%] bg-ink/10 blur-xl"
      />

      <div className="mt-3 flex flex-col items-center gap-2.5">
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


/* The call panels use generated portraits: synthetic people, so no real
   person is implied to be an Ayussetu doctor and there is no licence to
   buy. Swap these two files for photographs of actual clinicians, with
   their consent, whenever we have them. */
const FACES = {
  doctor: "/people/doctor-call.jpg",
  "doctor-avatar": "/people/doctor-ring.jpg",
  patient: "/people/patient-call.jpg",
} as const;

function VideoFace({
  kind,
  className = "",
}: {
  kind: keyof typeof FACES;
  className?: string;
}) {
  return (
    <img
      src={FACES[kind]}
      alt=""
      aria-hidden="true"
      className={`object-cover ${className}`}
    />
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

        {/* Reports belong on this screen too: they are half of what the
            app is for, and the panel had the room. */}
        <div className="rounded-2xl border border-line bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-mute">
              Reports
            </p>
            <span className="text-[0.55rem] font-medium text-faint">
              34 files
            </span>
          </div>
          <div className="mt-2 space-y-1.5">
            {[
              { n: "Lipid profile", d: "14 Oct", s: "2 markers high" },
              { n: "Prescription, Dr Rao", d: "02 Oct", s: "3 medicines" },
            ].map((r) => (
              <div key={r.n} className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-mist">
                  <span className="h-2.5 w-2 rounded-[2px] border border-faint" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[0.64rem] font-semibold text-navy">
                    {r.n}
                  </p>
                  <p className="text-[0.54rem] text-mute">
                    {r.s}, {r.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
          <span className="absolute -inset-2 animate-ping rounded-full bg-white/10" />
          <VideoFace
            kind="doctor-avatar"
            className="relative h-24 w-24 rounded-full object-cover object-center ring-2 ring-white/20"
          />
        </div>
        <p className="mt-5 text-[1rem] font-semibold text-white">Dr S. Rao</p>
        <p className="mt-0.5 text-[0.7rem] text-white/50">
          Cardiology, 10:00 AM
        </p>

        <div className="mt-7 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-left">
          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-white/40">
            Shared for this consult
          </p>
          <p className="mt-1 text-[0.68rem] leading-snug text-white/70">
            Last 30 days of readings, 2 lab reports and your current medicines
          </p>
        </div>
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
    <div className="flex h-full flex-col bg-ink p-3">
      {/* The feed is letterboxed, the way a phone shows a remote camera, so
          the picture is never cropped to a close up of somebody's face. */}
      <div className="relative mt-1 aspect-[4/5] w-full overflow-hidden rounded-2xl">
        <VideoFace kind="doctor" className="absolute inset-0 h-full w-full" />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-3 pb-2.5 pt-10">
          <p className="text-[0.82rem] font-semibold text-white">Dr S. Rao</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[0.6rem] text-white/65">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Cardiology · connected 04:12
          </p>
        </div>

        {/* The patient's own tile, where every video app puts it. */}
        <div className="absolute right-2 top-2 w-[3.9rem] overflow-hidden rounded-lg border border-white/25 shadow-lg">
          <VideoFace kind="patient" className="h-[2.9rem] w-full" />
          <span className="absolute bottom-0.5 left-0.5 rounded bg-ink/70 px-1 text-[0.44rem] font-medium text-white/85">
            You
          </span>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
        <p className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-white/40">
          Open beside the call
        </p>
        <p className="mt-1 text-[0.68rem] leading-snug text-white/70">
          Lipid profile, 14 Oct · LDL 164 mg/dL
        </p>
      </div>

      <div className="mt-auto flex items-center justify-center gap-3.5 pb-1 pt-4">
        {[
          { l: "Mute", on: false },
          { l: "Voice only", on: true },
          { l: "Chat", on: false },
        ].map((c) => (
          <div key={c.l} className="flex flex-col items-center gap-1.5">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                c.on ? "bg-amber" : "bg-white/10"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  c.on ? "bg-white" : "bg-white/60"
                }`}
              />
            </span>
            <span className="text-[0.52rem] text-white/45">{c.l}</span>
          </div>
        ))}
        <div className="flex flex-col items-center gap-1.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4453D]">
            <PhoneIcon className="rotate-[135deg] text-white" small />
          </span>
          <span className="text-[0.52rem] text-white/45">End</span>
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
