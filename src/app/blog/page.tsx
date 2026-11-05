import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { PageHero } from "@/components/PageHero";
import { BlogCards } from "@/components/BlogCards";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog, Ayussetu",
  description: "Health and wellness in plain words: tracking vitals, taking medicines well and understanding your reports.",
};

export default function Blog() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Health and wellness,"
          accent="in plain words"
          lede="Short, practical reads on tracking your health, taking medicines well and getting more from your reports."
        />
        <section className="border-b border-line bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <BlogCards posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
