"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurFade from "@/components/ui/blur-fade";
import DownloadApp from "@/components/DownloadApp";

const FounderPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FBFB] font-body text-gray-900">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight">
              Meet Our Founder<span className="text-[#3A8177]">.</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our team brings decades of experience, leadership, and innovation
              to healthcare.
            </p>
          </div>
        </BlurFade>

        {/* Profile Image Card */}
        <BlurFade delay={0.2}>
          <div className="relative w-full max-w-[400px] mx-auto aspect-3/4 rounded-[2rem] overflow-hidden shadow-2xl mb-16 group">
            <Image
              src="/team/sandeep.png"
              alt="Sandeep Konda"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Sandeep Konda</h2>
              <p className="text-white/90 font-medium text-lg uppercase tracking-wide opacity-90">
                Founder & CEO - Ayussetu
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Bio Content */}
        <BlurFade delay={0.3}>
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-700 text-center font-medium">
            <p>
              <span className="font-bold text-gray-900">Sandeep Konda</span> is
              a visionary healthcare innovator and pharmacist with a global
              mission: to make healthcare{" "}
              <span className="font-bold text-gray-900">
                connected, preventive, and patient-centric
              </span>{" "}
              through digital transformation.
            </p>
            <p>
              With over{" "}
              <span className="font-bold text-gray-900">
                20 years of pharmacy leadership experience
              </span>{" "}
              in the U.S., Sandeep successfully built and managed some of{" "}
              <span className="font-bold text-gray-900">
                Rite Aid&apos;s highest-performing pharmacies
              </span>
              , delivering exceptional patient satisfaction, clinical outcomes,
              and multimillion-dollar growth.
            </p>
            <p>
              His focus has always been on one thing—
              <span className="font-bold text-gray-900">
                helping people live healthier, longer lives
              </span>{" "}
              through better access and continuity of care. During his MBA at UC
              Irvine, Sandeep co-developed{" "}
              <span className="font-bold text-gray-900">iCancerCare</span>, a
              digital tool designed for cancer patients to manage their
              treatment journey.
            </p>
            <p>
              That experience sparked his belief that{" "}
              <span className="font-bold text-gray-900">
                technology can bridge the gap between patients and preventive
                healthcare
              </span>
              —an idea that evolved into his latest venture,{" "}
              <span className="font-bold text-gray-900">Ayus Setu</span>.
            </p>
            <p>
              <span className="font-bold text-gray-900">Ayus Setu</span> is a
              secure, AI intelligent healthcare platform designed to{" "}
              <span className="font-bold text-gray-900">
                store and organize patients&apos; digital health records
              </span>
              , turning them into{" "}
              <span className="font-bold text-gray-900">
                actionable trends and insights for early risk detection and
                prevention with personalized advice
              </span>
              .
            </p>
            <p>
              It also offers an integrated{" "}
              <span className="font-bold text-gray-900">doctor portal</span>{" "}
              that empowers clinicians to access longitudinal health data and
              provide proactive, personalized care.
            </p>
            <p>
              Sandeep believes the future of healthcare in India depends on{" "}
              <span className="font-bold text-gray-900">
                data-driven prevention, accessibility, and collaboration
              </span>
              —where every citizen&apos;s health journey is connected and
              empowered through technology.
            </p>
          </div>
        </BlurFade>

        {/* Education */}
        <BlurFade delay={0.4}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">
              Education:
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600 text-lg font-medium">
                MBA (Healthcare) – UC Irvine, Paul Merage School of Business
              </p>
              <p className="text-gray-600 text-lg font-medium">
                MS (Pharmaceutical Sciences) – Western University of Health
                Sciences, California
              </p>
              <p className="text-gray-600 text-lg font-medium">
                BPharm – G. Pulla Reddy College of Pharmacy, Hyderabad
              </p>
            </div>
          </div>
        </BlurFade>
      </main>

      <DownloadApp />

      <Footer />
    </div>
  );
};

export default FounderPage;
