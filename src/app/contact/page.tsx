import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Ayussetu",
  description: "Write to Ayussetu: patients, doctors, clinics, labs and partners.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
