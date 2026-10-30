/* How it works, as six rows of problem and answer. Each row is one white
   card with a red edge for what goes wrong today, an arrow, and one with
   a green edge for how Ayussetu fixes it: a short label, one line, and a
   small moving picture on the right of each. The words live in the list
   at the bottom, so copy changes never touch the layout. Motion is CSS
   (hiw-* in globals.css) and stops for reduced motion. */

function Chip({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <span
      className={`absolute whitespace-nowrap rounded-lg border border-line-strong bg-white px-2 py-1 text-[0.66rem] font-semibold text-ink shadow-[0_6px_12px_-10px_rgba(18,29,51,0.6)] ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}

function Big({ value, note }: { value: React.ReactNode; note?: string }) {
  return (
    <div className="grid h-full place-items-center text-center">
      <div>
        <span className="font-display text-[2.75rem] leading-none text-ink">{value}</span>
        {note && <div className="hiw-blink mt-1 text-[0.7rem] text-[#D9403D]">{note}</div>}
      </div>
    </div>
  );
}

/* --- today ------------------------------------------------------------- */

const Scattered = () => (
  <>
    <Chip className="hiw-jitter" style={{ left: 0, top: 4 }}>📄 Paper</Chip>
    <Chip className="hiw-jitter" style={{ left: 58, top: 26, animationDelay: "0.3s" }}>💬 WhatsApp</Chip>
    <Chip className="hiw-jitter" style={{ left: 6, top: 54, animationDelay: "0.6s" }}>✉️ Email</Chip>
  </>
);

const Lost = () => (
  <>
    {[18, 62, 106].map((x, i) => (
      <span
        key={x}
        className="hiw-fall absolute top-0 h-[2.4rem] w-[1.9rem] rounded-md border-[1.5px] border-dashed border-[#F1A9A7] bg-white"
        style={{ left: x, animationDelay: `${i * 0.7}s` }}
      />
    ))}
  </>
);

const Generic = () => (
  <div className="grid h-full content-center gap-1">
    {["Exercise daily", "Eat less sugar", "Get checked"].map((g, i) => (
      <span key={g} className="relative rounded-md bg-mist px-2 py-1 text-[0.66rem] text-mute">
        {g}
        <span className="hiw-strike absolute inset-x-1.5 top-1/2 h-[1.5px] bg-[#D9403D]" style={{ animationDelay: `${i * 0.3}s` }} />
      </span>
    ))}
  </div>
);

/* --- with Ayussetu ----------------------------------------------------- */

const OneRecord = () => (
  <>
    {[["📄", -8, 8], ["💬", 0, 34], ["✉️", 8, 60]].map(([e, y, top], i) => (
      <Chip key={String(e)} className="hiw-flyin" style={{ left: 0, top: Number(top), ["--y" as string]: `${y}px`, animationDelay: `${i * 0.25}s` }}>
        {e}
      </Chip>
    ))}
    <div className="hiw-pop absolute right-0 top-1/2 -mt-[2.1rem] h-[4.25rem] w-24 rounded-[0.875rem] bg-navy px-3 py-2.5 text-[0.62rem] text-white">
      AYUSSETU
      <b className="mt-0.5 block text-[0.8rem]">One record</b>
      <i className="not-italic text-[#9BE2BD]">✓ 34 reports</i>
    </div>
  </>
);

const Years = () => (
  <div className="flex h-full items-end justify-between">
    {[
      ["2023", 2],
      ["2024", 3],
      ["2025", 2],
      ["2026", 3],
    ].map(([y, n], col) => (
      <div key={String(y)} className="flex flex-col items-center">
        <div className="flex flex-col-reverse gap-[3px]">
          {Array.from({ length: Number(n) }).map((_, k) => (
            <span
              key={k}
              className={`hiw-stack h-[0.56rem] w-[1.6rem] rounded-[3px] border ${col === 3 && k === Number(n) - 1 ? "border-cta bg-amber-wash" : "border-line-strong bg-white"}`}
              style={{ animationDelay: `${col * 0.25 + k * 0.08}s` }}
            />
          ))}
        </div>
        <em className="mt-1 font-mono text-[0.56rem] not-italic text-mute">{y}</em>
      </div>
    ))}
  </div>
);

const TrendLine = () => (
  <svg viewBox="0 0 150 84" className="h-full w-full" aria-hidden="true">
    <rect x="0" y="50" width="150" height="26" rx="5" fill="#E5F3EC" />
    <path className="hiw-draw" pathLength={100} d="M6 68 L40 62 L75 50 L110 40 L144 20" fill="none" stroke="#1F3050" strokeWidth="2.2" />
    <circle cx="144" cy="20" r="4.5" fill="#FF8B0B" />
    <text x="144" y="11" fontSize="10" textAnchor="middle" fill="#121D33" fontWeight="600">6.0</text>
  </svg>
);

const Flags = () => (
  <div className="grid h-full content-center gap-1">
    {[
      ["LDL 164", "High", false],
      ["Vit D 14", "Low", false],
      ["Hb 13.8", "In range", true],
    ].map(([k, t, ok], i) => (
      <div key={String(k)} className="hiw-slide flex justify-between rounded-md bg-mist px-2 py-1 text-[0.66rem]" style={{ animationDelay: `${i * 0.25}s` }}>
        <span>{k}</span>
        <span className={`rounded-full px-1.5 text-[0.56rem] font-bold ${ok ? "bg-sage-wash text-sage" : "bg-amber-wash text-amber"}`}>{t}</span>
      </div>
    ))}
  </div>
);

const Plan = () => (
  <div className="grid h-full content-center gap-1">
    {["Walk after dinner", "Metformin, 8 am", "Retest in Jan"].map((p, i) => (
      <div key={p} className="hiw-slide flex justify-between rounded-md bg-sage-wash px-2 py-1 text-[0.66rem] font-semibold text-ink" style={{ animationDelay: `${i * 0.25}s` }}>
        <span>{p}</span>
        <span className="text-sage">✓</span>
      </div>
    ))}
  </div>
);

const Progress = () => (
  <svg viewBox="0 0 150 84" className="h-full w-full" aria-hidden="true">
    <text x="0" y="22" fontSize="18" fill="#7A8496" textDecoration="line-through" fontFamily="var(--font-serif)">210</text>
    <text x="42" y="22" fontSize="16" fill="#7A8496">→</text>
    <text x="64" y="22" fontSize="22" fill="#2E8A62" fontFamily="var(--font-serif)">168</text>
    <path className="hiw-draw" pathLength={100} d="M4 40 L40 46 L76 58 L112 66 L146 72" fill="none" stroke="#2E8A62" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="146" cy="72" r="4" fill="#2E8A62" />
  </svg>
);

/* --- the six rows ------------------------------------------------------- */

const rows = [
  { pk: "Scattered", p: "Reports on paper, WhatsApp and email", pv: <Scattered />, sk: "One record", s: "Every report in one place you hold", sv: <OneRecord /> },
  { pk: "Lost", p: "Old reports go missing, so there is no history", pv: <Lost />, sk: "Kept by year", s: "Every report filed by date, year after year", sv: <Years /> },
  { pk: "Read alone", p: "Each report read on its own, so drift goes unseen", pv: <Big value="5.8" note="HbA1c. Fine?" />, sk: "Trends", s: "Years of results in one line, so you see the rise", sv: <TrendLine /> },
  { pk: "Unexplained", p: "A number like 164, and no idea if it matters", pv: <Big value="164" note="High? Normal?" />, sk: "Explained", s: "Each marker against its range, in plain words", sv: <Flags /> },
  { pk: "Generic", p: "Advice written for everybody, so nobody follows it", pv: <Generic />, sk: "Personal", s: "Steps set around your readings and routine", sv: <Plan /> },
  { pk: "No feedback", p: "No way to tell if what you changed is working", pv: <Big value={<>210 → <span className="hiw-blink text-[#D9403D]">?</span></>} />, sk: "Progress", s: "Each new report shows whether it moved", sv: <Progress /> },
];

function Card({ tone, label, text, children }: { tone: "bad" | "good"; label: string; text: string; children: React.ReactNode }) {
  const bad = tone === "bad";
  return (
    <div
      className={`relative grid h-28 grid-cols-[1fr_9.4rem] items-center gap-3.5 overflow-hidden rounded-[1.1rem] border border-line bg-white py-0 pl-5 pr-4 ${
        bad ? "" : "shadow-[0_18px_40px_-32px_rgba(46,138,98,0.6)]"
      }`}
    >
      <span className={`absolute inset-y-3.5 left-0 w-[3px] rounded-full ${bad ? "bg-[#D9403D]" : "bg-sage"}`} />
      <div>
        <p className={`font-mono text-[0.62rem] uppercase tracking-[0.1em] ${bad ? "text-[#D9403D]" : "text-sage"}`}>{label}</p>
        <p className={`mt-1.5 text-[1rem] leading-snug ${bad ? "font-medium text-slate" : "font-semibold text-ink"}`}>{text}</p>
      </div>
      <div className="relative h-[5.25rem]">{children}</div>
    </div>
  );
}

export function Journey() {
  return (
    <section id="how" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center">
          <p className="eyebrow text-amber">How it works</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
            From scattered records to <em className="text-amber">useful action</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-slate">
            Six things that go wrong with health records today, and how
            Ayussetu fixes each one.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="mb-2.5 hidden grid-cols-[1fr_3rem_1fr] gap-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] md:grid">
            <span className="text-[#D9403D]">✕ Today</span>
            <span />
            <span className="text-sage">✓ With Ayussetu</span>
          </div>
          <ol className="grid gap-7 md:gap-3">
            {rows.map((r, i) => (
              <li key={r.pk} className="grid items-center gap-2 md:grid-cols-[1fr_3rem_1fr] md:gap-3">
                <Card tone="bad" label={`${String(i + 1).padStart(2, "0")} · ${r.pk}`} text={r.p}>
                  {r.pv}
                </Card>
                <span className="grid place-items-center">
                  <span className="hiw-nudge grid h-9 w-9 rotate-90 place-items-center rounded-full bg-cta text-white shadow-[0_10px_22px_-10px_rgba(255,139,11,0.8)] md:rotate-0">
                    →
                  </span>
                </span>
                <Card tone="good" label={r.sk} text={r.s}>
                  {r.sv}
                </Card>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 text-center">
          <a href="#intelligence" className="inline-block rounded-full bg-navy px-7 py-4 text-[0.92rem] font-semibold text-white transition hover:bg-ink">
            See how Ayussetu works
          </a>
        </div>
      </div>
    </section>
  );
}
