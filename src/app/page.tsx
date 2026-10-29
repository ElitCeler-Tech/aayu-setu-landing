import { Header, Footer } from "@/components/Chrome";
import { Splash } from "@/components/Splash";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Reads } from "@/components/Reads";
import { Compare } from "@/components/Compare";
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
      <Header overlay />
      <main>
        <Hero />
        <Thesis />
        <Reads />
        <Markers />
        <Features />
        <Practice />
        <Compare />
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
