import { Reveal } from "./Motion";

/* How it works, in the three moves a patient actually makes: bring the
   paper in, have it read, act on it. Each card carries a small picture
   of that move, because "scan", "range" and "plan" are three shapes
   before they are three sentences. */

function Doc({ className, lines }: { className: string; lines: string[] }) {
  return (
    <div
      className={`absolute h-[9.4rem] w-[7.4rem] rounded-[0.65rem] border border-line-strong bg-white px-3 py-3.5 shadow-[0_14px_30px_-18px_rgba(18,29,51,0.35)] ${className}`}
    >
      {lines.map((w, i) => (
        <i
          key={i}
          className={`mb-2 block h-[5px] rounded ${w === "o" ? "w-4/5 bg-amber-wash" : w === "s" ? "w-3/5 bg-mist" : "bg-mist"}`}
        />
      ))}
    </div>
  );
}

function Scan() {
  return (
    <div className="relative h-[12rem]">
      <Doc className="left-[calc(50%-7.5rem)] top-7 -rotate-[8deg]" lines={["", "s", "", "o", "s"]} />
      <Doc className="left-[calc(50%+0.1rem)] top-7 rotate-[7deg]" lines={["", "o", "s", "", "s"]} />
      <Doc className="left-[calc(50%-3.7rem)] top-3" lines={["s", "", "o", "", "s", ""]} />
      <span className="scan-line absolute left-1/2 h-0.5 w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-cta to-transparent shadow-[0_0_14px_#FF8B0B]" />
    </div>
  );
}

function Range() {
  return (
    <div className="grid h-[12rem] grid-cols-[6rem_1fr] px-2">
      <div className="flex flex-col gap-1.5">
        {["Above range", "In range", "Below range"].map((b) => (
          <div
            key={b}
            className={`eyebrow flex flex-1 items-center rounded-md border pl-2.5 !text-[0.56rem] ${
              b === "In range"
                ? "border-[#BFE0CF] bg-sage-wash text-sage"
                : "border-line-strong bg-white text-mute"
            }`}
          >
            {b}
          </div>
        ))}
      </div>
      <svg viewBox="0 0 200 190" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
        <line x1="0" y1="64" x2="200" y2="64" stroke="#E3E8EF" strokeDasharray="3 4" />
        <line x1="0" y1="126" x2="200" y2="126" stroke="#E3E8EF" strokeDasharray="3 4" />
        <polyline points="30,22 100,48 170,96" fill="none" stroke="#C25E00" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
        <circle cx="30" cy="22" r="5" fill="#FF8B0B" />
        <circle cx="100" cy="48" r="5" fill="#FF8B0B" />
        <circle cx="170" cy="96" r="6" fill="#2E8A62" />
      </svg>
    </div>
  );
}

const planItems = [
  { t: "Metformin 500mg", s: "8:00 AM, after food", icon: <path d="M5 13.5h14a3 3 0 0 0 0-6H5a3 3 0 0 0 0 6ZM12 7.5v6" /> },
  { t: "Dr S. Rao, video", s: "Thursday, 10:00 AM", icon: <path d="M3 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3zM16 11l5-3v8l-5-3" /> },
  { t: "HbA1c retest", s: "In three months", icon: <path d="M9 3v6l-4 9a1.5 1.5 0 0 0 1.4 2h11.2A1.5 1.5 0 0 0 19 18l-4-9V3M8 3h8" /> },
];

function Plan() {
  return (
    <div className="flex h-[12rem] flex-col justify-center gap-2 text-left">
      {planItems.map((p) => (
        <div key={p.t} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-3 py-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[0.6rem] bg-navy">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF8B0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {p.icon}
            </svg>
          </span>
          <span>
            <span className="block text-[0.82rem] font-semibold text-ink">{p.t}</span>
            <span className="block text-[0.72rem] text-mute">{p.s}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

const steps = [
  { n: "01", t: "Bring your reports in", b: "A PDF from the lab, or a photo of the paper one.", art: <Scan /> },
  { n: "02", t: "Every marker explained", b: "Placed against its range, in plain language.", art: <Range /> },
  { n: "03", t: "Act on it, early", b: "Take the medicine. See the doctor. Test again.", art: <Plan /> },
];

export function Steps() {
  return (
    <section id="how" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="text-center font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink">
          Getting started is <em className="text-amber">easy</em>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-mist px-7 pb-8 pt-10 text-center">
                <span className="font-mono text-[0.95rem] text-amber">{s.n}</span>
                <h3 className="mt-2.5 font-display text-[2rem] leading-tight text-ink">{s.t}</h3>
                <p className="mt-2.5 text-[0.9rem] text-slate">{s.b}</p>
                <div className="mt-8">{s.art}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#download" className="rounded-full bg-navy px-7 py-4 text-center text-[0.92rem] font-semibold text-white transition hover:bg-ink">
            Download the app
          </a>
          <a href="#tracked" className="rounded-full border border-line-strong px-7 py-4 text-center text-[0.92rem] font-semibold text-navy transition hover:border-navy">
            See what it reads
          </a>
        </div>
      </div>
    </section>
  );
}
