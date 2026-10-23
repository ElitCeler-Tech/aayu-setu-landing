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


/* Faces drawn as a camera feed, not as avatars.
   These are illustrations on purpose. Putting a stock photograph of a
   real person on a medical product implies that person is one of our
   doctors, which is a claim we are not entitled to make; a drawn face
   says "this is what a call looks like" and claims nothing. */
function VideoFace({
  kind,
  className = "",
}: {
  kind: "doctor" | "patient";
  className?: string;
}) {
  const doctor = kind === "doctor";
  const id = `f-${kind}`;
  return (
    <svg viewBox="0 0 160 200" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${id}-room`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={doctor ? "#23374F" : "#2B3A52"} />
          <stop offset="100%" stopColor={doctor ? "#16233D" : "#1C2840"} />
        </linearGradient>
        <radialGradient id={`${id}-key`} cx="30%" cy="22%" r="75%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-skin`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={doctor ? "#F0D2B2" : "#E7BE99"} />
          <stop offset="100%" stopColor={doctor ? "#D9B089" : "#C99872"} />
        </linearGradient>
      </defs>

      {/* the room behind them */}
      <rect width="160" height="200" fill={`url(#${id}-room)`} />
      <rect width="160" height="200" fill={`url(#${id}-key)`} />
      {doctor ? (
        <>
          <rect x="104" y="28" width="44" height="58" rx="3" fill="#FFFFFF" opacity="0.05" />
          <rect x="110" y="36" width="32" height="3" rx="1.5" fill="#FFFFFF" opacity="0.09" />
          <rect x="110" y="44" width="22" height="3" rx="1.5" fill="#FFFFFF" opacity="0.07" />
        </>
      ) : (
        <circle cx="128" cy="44" r="26" fill="#FFFFFF" opacity="0.04" />
      )}

      {/* shoulders and clothing */}
      <path
        d="M4 200c0-38 34-58 76-58s76 20 76 58z"
        fill={doctor ? "#EEF2F7" : "#3C5075"}
      />
      {doctor && (
        <>
          <path d="M80 142 58 160l22 40 22-40z" fill="#DCE4EE" />
          <path d="M80 142 62 156" stroke="#C9D4E2" strokeWidth="2" />
          <path d="M80 142 98 156" stroke="#C9D4E2" strokeWidth="2" />
          <path
            d="M62 150c0 26 8 38 18 38s18-12 18-38"
            stroke="#2F7D63"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="98" cy="186" r="6" fill="#2F7D63" />
        </>
      )}

      {/* neck and head */}
      <path d="M68 108h24v30H68z" fill={`url(#${id}-skin)`} />
      <ellipse cx="80" cy="84" rx="31" ry="35" fill={`url(#${id}-skin)`} />
      {/* hair */}
      <path
        d={
          doctor
            ? "M49 84c0-22 14-34 31-34s31 12 31 34c0-11-12-17-31-17s-31 6-31 17z"
            : "M49 86c0-24 14-36 31-36s31 12 31 36c-2-9-6-14-12-17-7 4-31 5-38-2-6 3-10 9-12 19z"
        }
        fill="#2A3242"
      />
      {/* features */}
      <ellipse cx="68" cy="84" rx="3.2" ry="3.6" fill="#2A3242" />
      <ellipse cx="92" cy="84" rx="3.2" ry="3.6" fill="#2A3242" />
      <path d="M80 88v8" stroke="#B98F6C" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M70 100c4 4 16 4 20 0"
        stroke="#9A6B4E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
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
            kind="doctor"
            className="relative h-24 w-24 rounded-full object-cover ring-2 ring-white/20"
          />
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
        {/* The doctor's camera fills the screen, as it does in a call. */}
        <VideoFace kind="doctor" className="absolute inset-0 h-full w-full" />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-4 pt-10">
          <p className="text-[0.92rem] font-semibold text-white">Dr S. Rao</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[0.66rem] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Connected, 04:12
          </p>
        </div>

        {/* The patient's own tile, where every video app puts it. */}
        <div className="absolute right-3 top-3 w-[4.2rem] overflow-hidden rounded-xl border border-white/20 shadow-lg">
          <VideoFace kind="patient" className="h-[5.6rem] w-full" />
          <span className="absolute bottom-1 left-1 rounded bg-ink/70 px-1 py-0.5 text-[0.46rem] font-medium text-white/80">
            You
          </span>
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
