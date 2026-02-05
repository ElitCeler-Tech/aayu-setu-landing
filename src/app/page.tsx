import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import UnifiedHealthRecords from "@/components/UnifiedHealthRecords";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-body">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <UnifiedHealthRecords />
    </div>
  );
}
