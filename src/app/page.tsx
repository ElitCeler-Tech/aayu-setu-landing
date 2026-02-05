import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import UnifiedHealthRecords from "@/components/UnifiedHealthRecords";
import HealthVitalsBento from "@/components/HealthVitalsBento";
import WhatWeDeliver from "@/components/WhatWeDeliver";
import ForPatients from "@/components/ForPatients";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-body">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <UnifiedHealthRecords />
      <HealthVitalsBento />
      <WhatWeDeliver />
      <ForPatients />
    </div>
  );
}
