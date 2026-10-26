/* The rest of the product, drawn rather than screenshotted. */

export function AyuMock() {
  return (
    <div className="rounded-2xl border border-[#E3E7EF] bg-white p-3 shadow-[0_26px_55px_-30px_rgba(22,35,61,0.5)]">
      <div className="space-y-2">
        <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-navy px-3 py-2">
          <p className="text-[0.68rem] leading-snug text-white">
            My LDL went up. Should I worry?
          </p>
        </div>
        <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-[#E3E7EF] bg-[#FFFFFF] px-3 py-2.5">
          <p className="text-[0.66rem] leading-relaxed text-[#46556F]">
            Your LDL moved from 138 to 164 mg/dL since July, and your HDL is
            low at 38. Both are worth discussing with your doctor.
            Your next appointment is on 2 Nov.
          </p>
          <p className="mt-2 border-t border-[#E3E7EF] pt-1.5 text-[0.56rem] text-[#A4AFC2]">
            AI can make mistakes. Always consult a healthcare professional.
          </p>
        </div>
      </div>
    </div>
  );
}

export function RecordsMock() {
  const rows = [
    { n: "Lipid profile", d: "14 Oct", t: "Lab report" },
    { n: "Prescription · Dr Rao", d: "02 Oct", t: "Prescription" },
    { n: "CBC", d: "18 Sep", t: "Lab report" },
    { n: "Discharge summary", d: "04 Aug", t: "Hospital" },
  ];
  return (
    <div className="rounded-2xl border border-[#E3E7EF] bg-white p-3 shadow-[0_26px_55px_-30px_rgba(22,35,61,0.5)]">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[0.66rem] font-semibold text-navy">Your records</p>
        <span className="rounded-md bg-[#F1F3F7] px-1.5 py-0.5 text-[0.55rem] font-semibold text-[#76829A]">
          34 files
        </span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div
            key={r.n}
            className="flex items-center gap-2.5 rounded-xl border border-[#E3E7EF] bg-[#FFFFFF] px-2.5 py-2"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#F1F3F7]">
              <span className="h-2.5 w-2 rounded-[2px] border border-faint" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.68rem] font-semibold text-navy">
                {r.n}
              </p>
              <p className="text-[0.56rem] text-[#76829A]">
                {r.t} · {r.d}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RiskMock() {
  const risks = [
    { n: "Cardiovascular", v: 68, s: "Worth acting on" },
    { n: "Metabolic", v: 54, s: "Watch" },
    { n: "Liver", v: 22, s: "Clear" },
  ];
  return (
    <div className="rounded-2xl border border-[#E3E7EF] bg-white p-3.5 shadow-[0_26px_55px_-30px_rgba(22,35,61,0.5)]">
      <p className="eyebrow text-[#76829A]">
        Where the risk is
      </p>
      <div className="mt-2.5 space-y-2.5">
        {risks.map((r) => (
          <div key={r.n}>
            <div className="flex items-baseline justify-between">
              <p className="text-[0.68rem] font-semibold text-navy">{r.n}</p>
              <p className="text-[0.58rem] text-[#76829A]">{r.s}</p>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-[#F1F3F7]">
              <div
                className={`h-1.5 rounded-full ${
                  r.v > 60 ? "bg-[#FF8B0B]" : r.v > 40 ? "bg-amber/50" : "bg-sage"
                }`}
                style={{ width: `${r.v}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 border-t border-[#E3E7EF] pt-2 text-[0.55rem] leading-relaxed text-[#A4AFC2]">
        Insights to support preventive action. Not a diagnosis.
      </p>
    </div>
  );
}

export function ConsultMock() {
  return (
    <div className="rounded-2xl border border-[#E3E7EF] bg-white p-3 shadow-[0_26px_55px_-30px_rgba(22,35,61,0.5)]">
      <div className="rounded-xl border border-[#E3E7EF] bg-[#FFFFFF] p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-[0.62rem] font-semibold text-white">
            SR
          </span>
          <div className="min-w-0">
            <p className="text-[0.72rem] font-semibold text-navy">
              Dr S. Rao
            </p>
            <p className="text-[0.58rem] text-[#76829A]">Cardiology · 12 yrs</p>
          </div>
          <span className="ml-auto rounded-lg bg-navy px-2.5 py-1 text-[0.58rem] font-semibold text-white">
            Book
          </span>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5 border-t border-[#E3E7EF] pt-2.5">
          {["In person", "Video", "Voice"].map((m, i) => (
            <span
              key={m}
              className={`rounded-lg px-1.5 py-1 text-center text-[0.55rem] font-semibold ${
                i === 1
                  ? "bg-[#FFF4E6] text-[#C96A00]"
                  : "bg-[#F1F3F7] text-[#76829A]"
              }`}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-2 flex gap-1.5">
        {["09:30", "10:00", "11:15", "04:45"].map((t, i) => (
          <span
            key={t}
            className={`flex-1 rounded-lg border px-1 py-1.5 text-center text-[0.55rem] font-semibold ${
              i === 1
                ? "border-navy bg-navy text-white"
                : "border-[#E3E7EF] bg-[#FFFFFF] text-[#46556F]"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
