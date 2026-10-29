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

function Tick({ on }: { on: boolean }) {
  return on ? (
    <svg width="17" height="17" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M6.2 11.8 2.9 8.5l1.1-1.1 2.2 2.2 5.6-5.6 1.1 1.1z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg width="17" height="17" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 7.3h8v1.4H4z" fill="currentColor" />
    </svg>
  );
}

export function Compare() {
  return (
    <section id="compare" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-mute">
            The difference
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.15rem,5vw,3.2rem)] leading-tight text-ink text-balance">
            Not your average folder of reports
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-line">
          <div className="grid grid-cols-[1fr_4.5rem_5.5rem] sm:grid-cols-[1fr_11rem_12rem]">
            {/* heads */}
            <div className="border-b border-line bg-white px-5 py-5 sm:px-7" />
            <div className="border-b border-l border-line bg-white px-1.5 py-5 text-center sm:px-3">
              <span className="text-[0.7rem] font-semibold leading-tight text-mute sm:text-[0.78rem]">
                The folder
                <span className="block font-normal">you keep now</span>
              </span>
            </div>
            <div className="border-b border-line bg-navy px-1.5 py-5 text-center sm:px-3">
              <span className="text-[0.74rem] font-semibold text-white sm:text-[0.86rem]">
                Ayussetu
              </span>
            </div>

            {rows.map(([label, folder], i) => {
              const last = i === rows.length - 1;
              return (
                <div key={label} className="contents">
                  <div
                    className={`bg-white px-4 py-4 text-[0.86rem] leading-snug text-navy sm:px-7 sm:text-[0.88rem] ${
                      last ? "" : "border-b border-line"
                    }`}
                  >
                    {label}
                  </div>
                  <div
                    className={`flex items-center justify-center border-l border-line bg-white ${
                      folder ? "text-sage" : "text-faint"
                    } ${last ? "" : "border-b"}`}
                  >
                    <Tick on={folder} />
                  </div>
                  <div
                    className={`flex items-center justify-center bg-navy text-white ${
                      last ? "" : "border-b border-white/10"
                    }`}
                  >
                    <Tick on />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-5 text-[0.8rem] leading-relaxed text-mute">
          A folder keeps the paper. The rest of this is the reading.
        </p>
      </div>
    </section>
  );
}
