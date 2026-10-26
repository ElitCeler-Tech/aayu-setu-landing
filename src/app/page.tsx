import { Header, Footer } from "@/components/Chrome";
import { Splash } from "@/components/Splash";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import {
  Hero,
  Thesis,
  Features,
  Markers,
  Practice,
  Abha,
  Security,
  Download,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Splash />
      <Header />
      <main>
        <Hero />
        <Thesis />
        <Markers />
        <Features />
        <Practice />
        <Testimonials />
        <Abha />
        <Security />
        <Download />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
