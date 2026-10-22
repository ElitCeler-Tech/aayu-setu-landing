import { Header, Footer } from "@/components/Chrome";
import { Splash } from "@/components/Splash";
import { Contact } from "@/components/Contact";
import {
  Hero,
  Counts,
  Audiences,
  Patients,
  Doctors,
  Clinics,
  Capabilities,
  How,
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
        <Audiences />
        <Patients />
        <Doctors />
        <Clinics />
        <Capabilities />
        <How />
        <Security />
        <Download />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
