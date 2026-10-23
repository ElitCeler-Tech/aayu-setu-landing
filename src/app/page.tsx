import { Header, Footer } from "@/components/Chrome";
import { Splash } from "@/components/Splash";
import { Contact } from "@/components/Contact";
import {
  Hero,
  Counts,
  Thesis,
  Features,
  Markers,
  Audiences,
  Practice,
  How,
  Testimonial,
  Abha,
  Team,
  Security,
  Download,
  Faq,
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
        <Markers />
        <Audiences />
        <Practice />
        <How />
        <Testimonial />
        <Abha />
        <Team />
        <Security />
        <Download />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
