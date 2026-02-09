"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadApp from "@/components/DownloadApp";
import BlurFade from "@/components/ui/blur-fade";

const PatientUseDisclaimer = () => {
  return (
    <div className="min-h-screen bg-[#F8FBFB] font-body text-gray-900 flex flex-col">
      <Navbar />

      <main className="grow pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-medium mb-12 font-heading tracking-tight text-gray-900">
                Patient Use Disclaimer
              </h1>
              <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                <p>
                  <span className="font-bold text-gray-900">AyusSetu</span> is
                  designed to help users understand potential health risks early
                  and adopt preventive lifestyle and care measures. It is not
                  intended for emergency use or for making independent medical
                  decisions. Users experiencing symptoms, emergencies, or health
                  concerns should seek immediate medical attention from a
                  qualified healthcare provider.
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

export default PatientUseDisclaimer;
