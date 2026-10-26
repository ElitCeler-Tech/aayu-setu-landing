/* The app's own home screen, drawn in CSS rather than screenshotted.
   A screenshot of a simulator carries a status bar, a scrollbar and
   whatever test data was on screen that day; this carries the layout and
   nothing else, and it stays sharp at any size. */
export function PhoneMock() {
  return (
    <div className="drift relative mx-auto w-[clamp(15rem,34vw,19rem)]">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-amber/10 blur-3xl" />
      <div className="rounded-[2.4rem] border border-line bg-white p-2.5 shadow-[0_30px_70px_-25px_rgba(22,35,61,0.45)]">
        <div className="overflow-hidden rounded-[1.9rem] bg-paper">
          {/* header */}
          <div className="flex items-center justify-between bg-navy px-4 pb-5 pt-5">
            <div>
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-white/55">
                Good morning
              </p>
              <p className="mt-0.5 text-[0.95rem] font-semibold text-white">
                Lakshmi
              </p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/12 text-[0.7rem] font-semibold text-white">
              L
            </div>
          </div>

          <div className="space-y-3 px-3.5 pb-5 pt-4">
            {/* score */}
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
                    Steady this week · 5 of 6 readings logged
                  </p>
                </div>
              </div>
            </div>

            {/* attention */}
            <div className="rounded-2xl border border-amber/30 bg-amber-wash p-3">
              <p className="eyebrow text-amber-deep">
                Reading
              </p>
              <p className="mt-1 text-[0.74rem] font-semibold leading-snug text-navy">
                Blood sugar needs attention
              </p>
              <p className="mt-0.5 text-[0.62rem] text-amber-deep">
                Out of range today
              </p>
            </div>

            {/* vitals */}
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

            {/* dose */}
            <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-white p-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sage-wash">
                <span className="h-2 w-2 rounded-full bg-sage" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.72rem] font-semibold text-navy">
                  Metformin 500mg
                </p>
                <p className="text-[0.6rem] text-mute">8:00 AM · after food</p>
              </div>
              <span className="rounded-lg bg-navy px-2.5 py-1 text-[0.58rem] font-semibold text-white">
                Take
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
