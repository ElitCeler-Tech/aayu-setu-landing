import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/Chrome";
import { BlogCards } from "@/components/BlogCards";
import { posts } from "@/data/blog";

/* Static export: every post is built at compile time from src/data/blog.ts. */
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title}, Ayussetu blog`, description: p.excerpt };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const more = posts.filter((x) => x.slug !== p.slug);

  return (
    <>
      <Header overlay />
      <main>
        <section className="hero-room relative overflow-hidden text-white">
          <div className="relative mx-auto max-w-3xl px-5 pb-36 pt-36 sm:px-8 md:pb-40 md:pt-40">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-white/70 transition hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              All articles
            </Link>
            <p className="eyebrow mt-8 text-amber-light">
              {p.category} · {p.read}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,5.4vw,3.8rem)] leading-[1.02] text-balance">{p.title}</h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-white/70">{p.excerpt}</p>
            <p className="mt-6 text-[0.85rem] text-white/50">
              Ayussetu team · <time dateTime={p.iso}>{p.date}</time>
            </p>
          </div>
        </section>

        <article className="border-b border-line bg-paper">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-16">
            <div className="relative -mt-28 aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-mist shadow-[0_30px_60px_-35px_rgba(18,29,51,0.45)] md:-mt-32">
              <Image src={p.image} alt="" fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" priority />
            </div>
            <div className="mt-12 space-y-5 text-[1.05rem] leading-[1.75] text-slate">
              {p.body.map((b, i) =>
                "h" in b ? (
                  <h2 key={i} className="pt-4 text-[1.35rem] font-semibold leading-snug text-ink">
                    {b.h}
                  </h2>
                ) : "p" in b ? (
                  <p key={i}>{b.p}</p>
                ) : (
                  <ul key={i} className="space-y-2.5 rounded-2xl border border-line bg-mist p-6">
                    {b.list.map((x) => (
                      <li key={x} className="flex gap-3 text-[0.98rem] leading-snug text-ink">
                        <span className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-sage-wash text-sage">
                          <svg width="10" height="10" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M6.2 11.6 2.9 8.3l1.2-1.2 2.1 2.1 5.6-5.6 1.2 1.2z" fill="currentColor" />
                          </svg>
                        </span>
                        {x}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </div>
            <p className="mt-12 rounded-2xl bg-amber-wash p-5 text-[0.88rem] leading-relaxed text-ink">
              This article is general wellness information, not medical advice. Always speak to your doctor about your
              own readings, medicines or treatment.
            </p>
          </div>
        </article>

        <section className="border-b border-line bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.6rem)] leading-[1.06] text-ink">
              Keep <em className="text-amber">reading</em>
            </h2>
            <div className="mt-10">
              <BlogCards posts={more} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
