import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import UnifiedHealthRecords from "@/components/UnifiedHealthRecords";
import HealthVitalsBento from "@/components/HealthVitalsBento";
import WhatWeDeliver from "@/components/WhatWeDeliver";
import ForPatients from "@/components/ForPatients";
import ForDoctorsClinics from "@/components/ForDoctorsClinics";
import ForInsurersEmployers from "@/components/ForInsurersEmployers";
import ForGovernmentPublicHealth from "@/components/ForGovernmentPublicHealth";

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
      <ForDoctorsClinics />
      <ForInsurersEmployers />
      <ForGovernmentPublicHealth />
    </div>
  );
}
