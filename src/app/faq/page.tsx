import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Questions, Ayussetu",
  description: "Answers to the questions people ask about Ayussetu: vitals, lab reports, appointments, privacy and ABHA.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
