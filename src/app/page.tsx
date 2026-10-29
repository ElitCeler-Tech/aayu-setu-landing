import { Header, Footer } from "@/components/Chrome";
import { Splash } from "@/components/Splash";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Steps } from "@/components/Steps";
import { Tracked } from "@/components/Tracked";
import { AnyLab } from "@/components/AnyLab";
import { People } from "@/components/People";
import { Compare } from "@/components/Compare";
import {
  Hero,
  Markers,
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
        <Steps />
        <Tracked />
        <Markers />
        <AnyLab />
        <Compare />
        <People />
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
