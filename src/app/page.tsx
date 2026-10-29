import { Header, Footer } from "@/components/Chrome";
import { Journey } from "@/components/Journey";
import { Intelligence } from "@/components/Intelligence";
import { AyuAI } from "@/components/AyuAI";
import { Prevention } from "@/components/Prevention";
import { WhoWeServe } from "@/components/WhoWeServe";
import { People } from "@/components/People";
import { Hero, Security, Abha, Download } from "@/components/Sections";

/* The order the client's website deck sets out: the promise, how it
   works, what it reads, the assistant, prevention, trust, who it is
   for, and who is behind it. FAQs and contact live in the footer, on
   pages of their own. */
export default function Home() {
  return (
    <>
      <Header overlay />
      <main>
        <Hero />
        <Journey />
        <Intelligence />
        <AyuAI />
        <Prevention />
        <Security />
        <Abha />
        <WhoWeServe />
        <People />
        <Download />
      </main>
      <Footer />
    </>
  );
}
