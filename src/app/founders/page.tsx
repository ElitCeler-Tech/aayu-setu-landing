"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurFade from "@/components/ui/blur-fade";
import DownloadApp from "@/components/DownloadApp";

const FoundersPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FBFB] font-body text-gray-900">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight">
              Meet Our Advisor<span className="text-[#3A8177]">.</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our team brings decades of experience, leadership, and innovation
              to healthcare.
            </p>
          </div>
        </BlurFade>

        {/* Profile Image Card */}
        <BlurFade delay={0.2}>
          <div className="relative w-full max-w-[400px] mx-auto aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl mb-16 group">
            <Image
              src="/team/preeti.png"
              alt="Dr. Preeti Kotha"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Preeti Kotha</h2>
              <p className="text-white/90 font-medium text-lg uppercase tracking-wide opacity-90">
                Advisor - Ayussetu
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Bio Content */}
        <BlurFade delay={0.3}>
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-700 text-center font-medium">
            <p>
              <span className="font-bold text-gray-900">
                Dr. Preeti Kotha, PharmD, APh
              </span>{" "}
              is a seasoned pharmacy leader and educator with extensive
              experience in clinical operations, pharmacy services, and
              interprofessional healthcare education.
            </p>
            <p>
              She currently serves as{" "}
              <span className="font-bold text-gray-900">
                Director of Pharmacy Services and Operations and Assistant
                Professor
              </span>{" "}
              at Western University of Health Sciences, where she also actively
              teaches and mentors PharmD students, bridging classroom learning
              with real-world patient care.
            </p>
            <p>
              Dr. Kotha has led impactful public health initiatives, including
              securing and administering significant grant-funded programs to
              expand vaccine access during critical periods of need and driving
              interprofessional community outreach efforts.
            </p>
            <p>
              Her work in pharmacy practice, education, and community health
              positions her as a trusted advisor for Ayus Setu, particularly in
              shaping clinical strategy, user education, and integration of
              healthcare workflows.
            </p>
          </div>
        </BlurFade>

        {/* Education */}
        <BlurFade delay={0.4}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
              Education
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              Western University of Health Sciences Doctor of Pharmacy - PharmD
              2004 - 2007
            </p>
          </div>
        </BlurFade>
      </main>

      <DownloadApp />

      <Footer />
    </div>
  );
};

export default FoundersPage;
