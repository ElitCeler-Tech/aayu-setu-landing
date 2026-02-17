"use client";

import React from "react";
import { Iphone } from "./ui/iphone";
import BlurFade from "./ui/blur-fade";

const WhatWeDeliver = () => {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-gray-50 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 flex flex-col items-center">
          <BlurFade delay={0}>
            <h2 className="text-3xl md:text-5xl font-heading font-medium bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent mb-2">
              What We Deliver
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inViewMargin="-20px">
            <p className="text-gray-600 text-base md:text-lg">
              Actionable prevention, not just data.
            </p>
          </BlurFade>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-32 lg:gap-24">
          <BlurFade
            className="flex-1 w-full relative flex justify-center items-center h-[400px] sm:h-[450px] lg:h-[500px] mt-8 lg:mt-0"
            delay={0.2}
          >
            {/* Background Circle */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] rounded-full z-0 bg-linear-to-b from-[#346E6A] to-[#2D645D]"></div>

            {/* Left Phone */}
            <div className="absolute left-[15%] sm:left-[10%] top-[50%] -translate-y-1/2 w-[70px] sm:w-[160px] lg:w-[200px] -rotate-10 z-10">
              <Iphone
                src="/hero/hero-left.png"
                className="w-full h-auto shadow-2xl transition-all rounded-[1rem] sm:rounded-[2.5rem] bg-gray-800"
              />
            </div>

            {/* Center Phone */}
            <div className="absolute left-[50%] top-[45%] md:top-[45%] -translate-x-1/2 -translate-y-1/2 w-[90px] sm:w-[180px] lg:w-[220px] z-20 hover:scale-105 transition-transform duration-300">
              <Iphone
                src="/hero/hero-right.png"
                className="w-full h-auto drop-shadow-2xl rounded-[1rem] sm:rounded-[2.5rem] bg-gray-800"
              />
            </div>

            {/* Right Phone */}
            <div className="absolute right-[15%] sm:right-[10%] top-[50%] -translate-y-1/2 w-[70px] sm:w-[160px] lg:w-[200px] rotate-10 z-10">
              <Iphone
                src="/uified/family-health.png"
                className="w-full h-auto shadow-2xl transition-all rounded-[1rem] sm:rounded-[2.5rem] bg-gray-800"
              />
            </div>
          </BlurFade>

          <div className="flex-1 w-full max-w-lg">
            <div className="space-y-4">
              {deliveryItems.map((item, index) => (
                <BlurFade key={index} delay={0.4 + index * 0.1}>
                  <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg hover:border-[#3A8177]/20 transition-all cursor-default group">
                    <h3 className="text-base md:text-lg font-medium text-[#3A8177] group-hover:text-[#2c615a] transition-colors">
                      <span className="mr-3 opacity-60">{index + 1}.</span>
                      {item}
                    </h3>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const deliveryItems = [
  "Personalized risk alerts",
  "Adaptive health coaching",
  "Medication & follow-up reminders",
  "Clinician-facing risk dashboards",
  "Trends and Insights about your health with personalized advise.",
];

export default WhatWeDeliver;
