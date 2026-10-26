/* Small pieces of the real product, drawn in CSS.
   Every one of these mirrors a screen that exists: the dose card with
   Take and Skip, the vitals grid with nothing logged yet, the marker
   rows a lab report is read into, the prescription form's sections, the
   earnings header. Drawn rather than screenshotted so they stay sharp
   and carry the layout instead of a simulator's test data. */

export function DoseMock() {
  return (
    <Frame>
      <div className="space-y-2">
        {[
          { n: "Metformin", d: "500mg · after food", t: "8:00 AM", s: "due" },
          { n: "Telmisartan", d: "40mg · before food", t: "8:00 AM", s: "taken" },
        ].map((m) => (
          <div
            key={m.n}
            className="flex items-center gap-2.5 rounded-xl border border-line bg-white p-2.5"
          >
            <span
              className={`h-7 w-7 shrink-0 rounded-full ${
                m.s === "taken" ? "bg-sage-wash" : "bg-mist"
              } flex items-center justify-center`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  m.s === "taken" ? "bg-sage" : "bg-faint"
                }`}
              />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.74rem] font-semibold text-navy">
                {m.n}
              </p>
              <p className="text-[0.62rem] text-mute">{m.d}</p>
            </div>
            {m.s === "taken" ? (
              <span className="text-[0.6rem] font-semibold text-sage">
                Taken {m.t}
              </span>
            ) : (
              <span className="flex gap-1.5">
                <span className="rounded-lg bg-navy px-2.5 py-1 text-[0.58rem] font-semibold text-white">
                  Take
                </span>
                <span className="rounded-lg border border-line px-2.5 py-1 text-[0.58rem] font-semibold text-mute">
                  Skip
                </span>
              </span>
            )}
          </div>
        ))}
        <div className="rounded-xl border border-amber/30 bg-amber-wash px-2.5 py-2">
          <p className="text-[0.62rem] font-semibold text-amber-deep">
            Yesterday · 8:00 PM missed
          </p>
          <p className="text-[0.58rem] text-amber-deep/80">
            Log it as taken late, or skipped
          </p>
        </div>
      </div>
    </Frame>
  );
}

export function VitalsMock() {
  const tiles = [
    { k: "BP", v: "138/86", s: "watch" },
    { k: "HR", v: "72", s: "ok" },
    { k: "Sugar", v: "186", s: "high" },
    { k: "Sleep", v: "6h 10m", s: "watch" },
    { k: "Steps", v: "6,300", s: "ok" },
    { k: "Weight", v: "Not logged", s: "none" },
  ];
  return (
    <Frame>
      <div className="grid grid-cols-3 gap-2">
        {tiles.map((t) => (
          <div key={t.k} className="rounded-xl border border-line bg-white p-2">
            <p className="text-[0.55rem] font-medium text-mute">{t.k}</p>
            <p
              className={`mt-0.5 font-bold tabular-nums ${
                t.s === "none"
                  ? "text-[0.56rem] font-medium text-faint"
                  : t.s === "high"
                    ? "text-[0.72rem] text-amber-deep"
                    : "text-[0.72rem] text-navy"
              }`}
            >
              {t.v}
            </p>
            {t.s !== "none" && (
              <p className="mt-0.5 text-[0.5rem] text-faint">
                {t.s === "ok" ? "Good" : "Watch"}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-2.5 rounded-xl border border-amber/30 bg-amber-wash p-2.5">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-amber-deep">
          Reading
        </p>
        <p className="mt-0.5 text-[0.72rem] font-semibold text-navy">
          Blood sugar needs attention
        </p>
        <p className="text-[0.6rem] text-amber-deep">Out of range today</p>
      </div>
    </Frame>
  );
}

export function ReportMock() {
  const markers = [
    { n: "LDL cholesterol", v: "164 mg/dL", pos: 82, s: "High" },
    { n: "HDL cholesterol", v: "38 mg/dL", pos: 22, s: "Low" },
    { n: "Haemoglobin", v: "13.8 g/dL", pos: 55, s: "Normal" },
    { n: "Vitamin D", v: "18 ng/mL", pos: 18, s: "Low" },
  ];
  return (
    <Frame>
      <div className="mb-2.5 flex items-center justify-between">
        <p className="text-[0.68rem] font-semibold text-navy">
          Lipid profile · 14 Oct
        </p>
        <span className="rounded-md bg-mist px-1.5 py-0.5 text-[0.55rem] font-semibold text-mute">
          Read automatically
        </span>
      </div>
      <div className="space-y-2">
        {markers.map((m) => (
          <div key={m.n}>
            <div className="flex items-baseline justify-between">
              <p className="text-[0.66rem] font-medium text-navy">{m.n}</p>
              <p className="text-[0.62rem] font-semibold tabular-nums text-slate">
                {m.v}
              </p>
            </div>
            <div className="mt-1 h-1 rounded-full bg-mist">
              <div
                className={`h-1 rounded-full ${
                  m.s === "Normal" ? "bg-sage" : "bg-amber"
                }`}
                style={{ width: `${m.pos}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function PrescriptionMock() {
  return (
    <Frame>
      <div className="space-y-2">
        <div className="rounded-xl border border-line bg-paper p-2.5">
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-amber-deep">
            Medicine 1
          </p>
          <p className="mt-1 text-[0.74rem] font-semibold text-navy">
            Amlodipine · 5mg · Tablet
          </p>
          <p className="mt-0.5 text-[0.6rem] text-mute">
            Morning 8:00 AM · after food · 10 tablets
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="rounded-md bg-mist px-2 py-0.5 text-[0.55rem] text-slate">
              Starts 22 Oct
            </span>
            <span className="rounded-md bg-amber-wash px-2 py-0.5 text-[0.55rem] font-medium text-amber-deep">
              Ends 31 Oct, from quantity
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Diagnosis", "Vitals", "Tests", "Follow up"].map((t) => (
            <div
              key={t}
              className="rounded-lg border border-line bg-paper px-2 py-1.5 text-[0.6rem] text-slate"
            >
              {t}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-xl border border-line bg-paper px-2.5 py-2">
          <span className="text-[0.62rem] text-mute">Signature</span>
          <svg width="64" height="20" viewBox="0 0 64 20" fill="none" aria-hidden="true">
            <path
              d="M2 15c6-10 10 4 15-6s9 10 14 2 10 4 17-4"
              stroke="#1F3050"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </Frame>
  );
}

export function EarningsMock() {
  return (
    <Frame>
      <div className="mb-2.5 flex flex-wrap gap-1.5">
        {["Today", "Week", "Month", "Quarter", "Year"].map((p, i) => (
          <span
            key={p}
            className={`rounded-full px-2.5 py-1 text-[0.55rem] font-semibold ${
              i === 2
                ? "bg-navy text-white"
                : "border border-line bg-white text-mute"
            }`}
          >
            {p}
          </span>
        ))}
      </div>
      <div className="rounded-xl border border-line bg-paper p-3">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-mute">
          This month
        </p>
        <p className="mt-1 font-display text-[1.5rem] tabular-nums text-navy">
          ₹48,200
        </p>
        <p className="text-[0.6rem] text-mute">61 consultations</p>
        <div className="mt-3 space-y-1.5 border-t border-line pt-2.5">
          {[
            ["Consultations", "₹44,600"],
            ["Referral share", "₹3,600"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between text-[0.62rem]">
              <span className="text-mute">{k}</span>
              <span className="font-semibold tabular-nums text-navy">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function GroupMock() {
  return (
    <Frame>
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[0.55rem] font-semibold text-white">
          A
        </span>
        <p className="text-[0.68rem] font-semibold text-navy">Amma</p>
        <span className="ml-auto text-[0.55rem] text-faint">shared</span>
      </div>
      <div className="rounded-xl bg-sage-wash p-2.5">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-sage">
          This week
        </p>
        <p className="mt-1 text-[0.74rem] font-semibold text-navy">
          18 of 21 doses taken
        </p>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {[
          ["BP", "126/80"],
          ["Sugar", "118"],
          ["Sleep", "7h"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-line bg-white p-1.5">
            <p className="text-[0.5rem] text-mute">{k}</p>
            <p className="text-[0.66rem] font-bold tabular-nums text-navy">
              {v}
            </p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-3 shadow-[0_26px_55px_-30px_rgba(22,35,61,0.5)]">
      {children}
    </div>
  );
}
