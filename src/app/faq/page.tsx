import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Questions, Ayussetu",
  description: "Answers to the questions people ask about Ayussetu: vitals, lab reports, appointments, privacy and ABHA.",
};

export default function FaqPage() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero
          eyebrow="Questions"
          title="The ones people"
          accent="actually ask"
          lede={<>Something not answered here? <a href="/contact" className="font-semibold text-white underline decoration-amber-light underline-offset-4">Write to us</a> and a person will reply.</>}
        />
        <Faq bare />
      </main>
      <Footer />
    </>
  );
}
