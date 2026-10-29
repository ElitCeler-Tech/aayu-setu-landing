import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Ayussetu",
  description: "Write to Ayussetu: patients, doctors, clinics, labs and partners.",
};

export default function ContactPage() {
  return (
    <>
      <Header overlay />
      <main>
        <PageHero eyebrow="Contact us" title="Tell us what you need" accent="it to do" />
        <Contact bare />
      </main>
      <Footer />
    </>
  );
}
