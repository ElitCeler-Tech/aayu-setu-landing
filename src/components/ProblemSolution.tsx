"use client";

import React from "react";
import BlurFade from "./ui/blur-fade";

const ProblemSolution = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 space-y-12 lg:space-y-24">
      {/* The Problem Section */}
      <div className="flex flex-col items-center gap-8">
        <BlurFade>
          <h2 className="text-2xl md:text-4xl font-heading font-semibold bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent">
            The Problem
          </h2>
        </BlurFade>

        <BlurFade delay={0.2} className="w-full">
          <div className="w-full bg-[#ECF6F5] rounded-[2rem] p-8 md:p-12 lg:p-16">
            <p className="text-center text-gray-700 leading-relaxed text-base md:text-2xl max-w-5xl mx-auto">
              In India and emerging markets, patient health data is scattered
              across paper files, hospitals, labs, and apps. Doctors are
              overburdened, chronic diseases are detected late, and patients
              often seek care only after complications arise. This reactive
              system increases costs, suffering, and preventable
              hospitalizations.
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Ayus Setu Solution Section */}
      <div className="flex flex-col items-center gap-8">
        <BlurFade>
          <h2 className="text-2xl md:text-4xl font-heading font-semibold bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent">
            Ayus Setu Solution
          </h2>
        </BlurFade>

        <BlurFade delay={0.2} className="w-full">
          <div className="w-full bg-linear-to-r from-[#2D645D] to-[#3A8177] rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-xl">
            <p className="text-center text-white leading-relaxed text-base md:text-2xl max-w-5xl mx-auto">
              AyusSetu digitizes, aggregates, and unifies patient health
              data—paper records, hospital EHRs, lab results, wearables,
              medications, and lifestyle inputs—into a single, continuously
              updated health profile. Our AI transforms this data into early
              risk predictions and actionable prevention.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ProblemSolution;
