import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/blog";

/* One card per post: the photo, a category and date line, the title and
   a one line excerpt. Used on the home page section and on /blog. */
export function BlogCards({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {posts.map((p) => (
        <Link
          key={p.slug}
          href={`/blog/${p.slug}`}
          className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(18,29,51,0.35)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image
              src={p.image}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.72rem] font-semibold text-navy">
              {p.category}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="eyebrow text-mute">
              {p.date} · {p.read}
            </p>
            <h3 className="mt-3 text-[1.2rem] font-semibold leading-snug text-ink text-balance">{p.title}</h3>
            <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">{p.excerpt}</p>
            <span className="mt-auto flex items-center gap-1.5 pt-6 text-[0.88rem] font-semibold text-navy">
              Read article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* The home page section: the three latest posts and a link to the rest. */
export function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" className="scroll-mt-24 border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-amber">From the blog</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4.6vw,3.2rem)] leading-[1.04] text-ink text-balance">
              Health and wellness, <em className="text-amber">in plain words</em>
            </h2>
            <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-slate">
              Short reads on tracking your health, taking medicines well and getting more from your reports.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 rounded-full border border-line-strong bg-white px-6 py-3 text-[0.9rem] font-semibold text-ink transition hover:border-navy"
          >
            All articles
          </Link>
        </div>
        <div className="mt-12">
          <BlogCards posts={posts.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
}
