"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadApp from "@/components/DownloadApp";
import BlurFade from "@/components/ui/blur-fade";

const AIUseDisclaimer = () => {
  return (
    <div className="min-h-screen bg-[#F8FBFB] font-body text-gray-900 flex flex-col">
      <Navbar />

      <main className="grow pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-medium mb-12 font-heading tracking-tight text-gray-900">
                AI Use Disclaimer
              </h1>
              <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                <p>
                  <span className="font-bold text-gray-900">AyusSetu</span> uses
                  machine-learning models to analyze health data and identify
                  potential risk patterns. AI-generated insights are
                  probabilistic and informational in nature and do not represent
                  definitive clinical outcomes. Predictions and recommendations
                  are designed to support preventive care and clinical
                  decision-making and should be interpreted in conjunction with
                  professional medical judgment.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </main>

      <DownloadApp />

      <Footer />
    </div>
  );
};

export default AIUseDisclaimer;
