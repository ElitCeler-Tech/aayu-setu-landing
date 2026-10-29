/* The top of every inner page: the home page's dark room, under the
   same glass header (pages that use this pass `overlay` to Header), an
   eyebrow, a headline whose last words take the italic orange, and one
   line under it. Anything extra (a back link, a photo) goes in
   children. One component, so every page opens the same way. */
export function PageHero({
  eyebrow,
  title,
  accent,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section id="hero" className="hero-room relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-36 sm:px-8 md:pb-20 md:pt-40">
        <p className="eyebrow text-amber-light">{eyebrow}</p>
        <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[1] text-balance">
          {title}
          {accent && (
            <>
              {" "}
              <em className="text-amber-light">{accent}</em>
            </>
          )}
        </h1>
        {lede && <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/70">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
