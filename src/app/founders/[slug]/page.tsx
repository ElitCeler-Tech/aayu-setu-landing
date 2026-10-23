import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/Chrome";
import { team } from "@/data/team";

/* Static export, so every founder page is built at compile time from
   the same data the section on the home page reads. */
export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = team.find((x) => x.slug === slug);
  if (!m) return {};
  return {
    title: `${m.name}, ${m.role} at Ayussetu`,
    description: m.lede,
  };
}

export default async function Founder({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = team.find((x) => x.slug === slug);
  if (!m) notFound();

  const others = team.filter((x) => x.slug !== m.slug);

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-line">
          <div className="grid-ground grid-fade pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-20">
            <Link
              href="/#team"
              className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-mute transition hover:text-navy"
            >
              <span>&larr;</span> The team
            </Link>

            <div className="mt-8 grid gap-10 md:grid-cols-[16rem_1fr] md:gap-14">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-line bg-mist md:w-64">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(min-width: 768px) 16rem, 100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-amber-deep">
                  {m.role}
                </p>
                <h1 className="mt-3 font-display text-[clamp(1.9rem,4.4vw,2.8rem)] leading-tight text-ink text-balance">
                  {m.name}
                </h1>
                <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-slate">
                  {m.lede}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[0.85rem] font-semibold text-white transition hover:bg-ink"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.82-1.95 3.75-1.95 4 0 4.4 2.5 4.4 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.46-2.2 2.96V21h-4z" />
                    </svg>
                    LinkedIn
                  </a>
                  {m.location && (
                    <span className="text-[0.84rem] text-mute">{m.location}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
            <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
              <div>
                <h2 className="font-display text-[1.4rem] text-navy">
                  Background
                </h2>
                <div className="mt-4 space-y-4">
                  {m.bio.map((para) => (
                    <p key={para} className="text-[0.95rem] leading-relaxed text-slate">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <aside className="space-y-8">
                <div>
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-mute">
                    Education
                  </h3>
                  <ul className="mt-3 space-y-2.5 border-t border-line pt-3">
                    {m.education.map((e) => (
                      <li key={e} className="text-[0.86rem] leading-snug text-navy">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-mute">
                    Along the way
                  </h3>
                  <ul className="mt-3 space-y-2.5 border-t border-line pt-3">
                    {m.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-[0.86rem] leading-snug text-navy">
                        <svg width="13" height="13" viewBox="0 0 16 16" className="mt-[0.2rem] shrink-0 text-sage" aria-hidden="true">
                          <path d="M6.2 11.3 3.4 8.5l1-1 1.8 1.8 5-5 1 1z" fill="currentColor" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {others.length > 0 && (
          <section className="border-b border-line bg-white">
            <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-mute">
                Also on the team
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/founders/${o.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition hover:border-navy/25"
                  >
                    <span className="relative h-16 w-14 shrink-0 overflow-hidden rounded-xl bg-mist">
                      <Image src={o.photo} alt="" fill sizes="56px" className="object-cover object-top" />
                    </span>
                    <span>
                      <span className="block font-display text-[1rem] text-navy">
                        {o.name}
                      </span>
                      <span className="block text-[0.8rem] text-mute">{o.role}</span>
                    </span>
                    <span className="ml-auto text-mute transition group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
