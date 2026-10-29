/* The argument the whole page has been making, put side by side. The
   left column is what somebody has today, which is a folder, not a
   competitor: the comparison is against doing nothing. */

const rows: [string, boolean][] = [
  ["Your reports kept in one place", true],
  ["Markers pulled out and placed against their range", false],
  ["This report compared with the last one", false],
  ["What a marker means, in plain language", false],
  ["Doses scheduled from the prescription", false],
  ["A missed dose logged honestly, late", false],
  ["Ten vitals logged in one sitting", false],
  ["A doctor given access, and able to lose it", false],
  ["A parent's week visible without ringing to ask", false],
  ["Consultations by video or by voice", false],
];

/* A filled tick on the Ayussetu column, an outlined cross for the
   folder: the reference's own marks, which read at a glance from across
   the table. */
function Yes({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-grid h-6 w-6 place-items-center rounded-full ${
        dark ? "bg-white text-navy" : "text-sage"
      }`}
    >
      <svg width="13" height="13" viewBox="0 0 16 16" aria-label="Yes">
        <path d="M6.2 11.8 2.9 8.5l1.1-1.1 2.2 2.2 5.6-5.6 1.1 1.1z" fill="currentColor" />
      </svg>
    </span>
  );
}

function No() {
  return (
    <span className="inline-grid h-6 w-6 place-items-center rounded-full border-[1.5px] border-mute text-mute">
      <svg width="9" height="9" viewBox="0 0 10 10" aria-label="No">
        <path d="m1.5 1.5 7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Compare() {
  const cols = "grid-cols-[1fr_4.75rem_4.75rem] sm:grid-cols-[1fr_11rem_11rem] md:grid-cols-[1fr_12.5rem_12.5rem]";
  return (
    <section id="compare" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="text-center font-display text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] text-ink text-balance">
          <em className="text-amber">Not your average</em> folder of reports
        </h2>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className={`relative z-20 grid ${cols} px-3.5 sm:px-9`}>
            <div />
            <div className="flex h-[4.6rem] items-center justify-center gap-2 text-white">
              <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-[0.45rem] bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ayussetu-logo-white.png" alt="" width={28} height={28} />
              </span>
              <span className="hidden text-[1.05rem] font-semibold sm:inline">Ayussetu</span>
            </div>
            <div className="flex items-end justify-center pb-5 text-center text-[0.72rem] font-semibold text-navy sm:text-[0.84rem]">
              A folder of reports
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-mist px-3.5 sm:px-9">
            {rows.map(([label, folder], i) => (
              <div
                key={label}
                className={`grid min-h-[3.75rem] items-center py-2.5 ${cols} ${
                  i < rows.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="relative z-20 pr-3 text-[0.86rem] leading-snug text-navy sm:text-[0.95rem]">{label}</div>
                <div className="relative z-20 text-center"><Yes dark /></div>
                <div className="relative z-20 text-center">{folder ? <Yes /> : <No />}</div>
              </div>
            ))}
          </div>

          {/* The Ayussetu column stands proud of the table, top and
              bottom, the way the reference lifts its own. */}
          <div className="pointer-events-none absolute inset-0 z-10 px-3.5 sm:px-9">
            <div className={`grid h-full ${cols}`}>
              <div />
              <div className="-mb-7 rounded-3xl bg-[linear-gradient(170deg,#24385E_0%,#1F3050_45%,#3B3A4E_80%,#8A5A2E_100%)] shadow-[0_30px_60px_-28px_rgba(18,29,51,0.55)]" />
              <div />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
