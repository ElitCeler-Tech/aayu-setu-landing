/* The hero's centrepiece: a health score drawn as an instrument rather
   than as a phone screen. Twenty nine ticks, one per marker Ayussetu
   reads; the four that sit out of range are lit. The arc is the score.
   The tick ring turns slowly, so the section is alive without anything
   moving that somebody is trying to read. */

const C = 270;
const LIT = [2, 9, 17, 23];

const ticks = Array.from({ length: 29 }, (_, i) => {
  const a = (i / 29) * Math.PI * 2;
  const lit = LIT.includes(i);
  const r2 = lit ? 236 : 226;
  return {
    i,
    lit,
    x1: C + 212 * Math.cos(a),
    y1: C + 212 * Math.sin(a),
    x2: C + r2 * Math.cos(a),
    y2: C + r2 * Math.sin(a),
    dx: C + 246 * Math.cos(a),
    dy: C + 246 * Math.sin(a),
  };
});

const readings = [
  { k: "LDL", v: "164 mg/dL", n: "rising", tone: "up", pos: "left-[-16%] top-[5%]" },
  { k: "Haemoglobin", v: "13.8 g/dL", n: "in range", tone: "ok", pos: "right-[-14%] top-[7%] flex-row-reverse" },
  { k: "Vitamin D", v: "14 ng/mL", n: "low", tone: "up", pos: "left-[-16%] top-[92%]" },
];

export function ScoreRing() {
  return (
    <div className="relative mx-auto aspect-square w-[min(20rem,82vw)] md:w-[min(33.75rem,44vw)]">
      <div className="pointer-events-none absolute inset-[11%] rounded-full bg-[radial-gradient(circle,rgba(255,139,11,0.28),rgba(255,139,11,0)_65%)] blur-[10px]" />

      <svg viewBox="0 0 540 540" aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="score-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFB15C" />
            <stop offset="1" stopColor="#FF8B0B" />
          </linearGradient>
        </defs>
        <circle cx={C} cy={C} r="250" fill="none" stroke="rgba(255,255,255,0.07)" />
        <circle cx={C} cy={C} r="168" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
        <circle
          className="score-arc"
          cx={C}
          cy={C}
          r="168"
          fill="none"
          stroke="url(#score-arc)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="760 1056"
          transform={`rotate(-90 ${C} ${C})`}
        />
        <g className="ring-spin">
          {ticks.map((t) => (
            <g key={t.i}>
              <line
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                stroke={t.lit ? "#FF8B0B" : "rgba(255,255,255,0.35)"}
                strokeWidth={t.lit ? 3 : 1.6}
                strokeLinecap="round"
              />
              {t.lit && <circle cx={t.dx} cy={t.dy} r="3.5" fill="#FF8B0B" />}
            </g>
          ))}
        </g>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-[4.5rem] leading-none md:text-[7.5rem]">72</span>
        <span className="eyebrow mt-1.5 text-white/55">Swasth Score</span>
      </div>

      {/* Three readings, labelled off the ring. Desktop only: on a phone
          the ring is the picture and the labels would crowd it. */}
      {readings.map((r) => (
        <div
          key={r.k}
          aria-hidden="true"
          className={`absolute hidden items-center gap-2.5 whitespace-nowrap text-[0.8rem] lg:flex ${r.pos}`}
        >
          <span className="h-px w-8 bg-white/35" />
          <span className="eyebrow text-white/50">{r.k}</span>
          <span className="font-semibold">{r.v}</span>
          <span className={`text-[0.75rem] ${r.tone === "up" ? "text-amber-light" : "text-[#7FD3A8]"}`}>
            {r.n}
          </span>
        </div>
      ))}
    </div>
  );
}
