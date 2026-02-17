"use client";

import React from "react";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";
import BlurFadeText from "./ui/blur-fade-text";

const ForDoctorsClinics = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header content */}
        <BlurFade delay={0}>
          <h2 className="text-2xl md:text-5xl font-heading font-medium bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent mb-4">
            FOR DOCTORS & CLINICS
          </h2>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="text-gray-800 text-base md:text-lg mb-12">
            Smarter care with less effort.
          </p>
        </BlurFade>

        {/* Image Placeholder */}
        <BlurFade
          delay={0.4}
          className="w-full mb-12 flex items-center justify-center"
        >
          <Image
            src="/for-doctors.png"
            alt="For Doctors"
            width={0}
            height={0}
            sizes="100vw"
            className="h-96 w-auto object-contain"
          />
        </BlurFade>

        {/* Paragraph Text */}
        <BlurFade delay={0.6}>
          <p className="text-gray-700 text-sm md:text-xl leading-relaxed max-w-5xl mx-auto">
            Get AI-powered risk summaries and decision support that reduce
            follow-up burden, improve chronic care outcomes, and help you focus
            on patients who need attention most.
          </p>
        </BlurFade>
      </div>
    </section>
  );
};

export default ForDoctorsClinics;
