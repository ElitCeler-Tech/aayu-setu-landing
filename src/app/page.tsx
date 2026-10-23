import { Header, Footer } from "@/components/Chrome";
import { Splash } from "@/components/Splash";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import {
  Hero,
  Counts,
  Thesis,
  Features,
  Markers,
  Audiences,
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
        <Counts />
        <Thesis />
        <Features />
        <Audiences />
        <Markers />
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
