import { Header, Footer } from "@/components/Chrome";
import {
  Hero,
  Patients,
  Doctors,
  How,
  Trust,
  Download,
  Faq,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Patients />
        <Doctors />
        <How />
        <Trust />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
