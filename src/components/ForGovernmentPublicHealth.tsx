"use client";

import React from "react";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";

const ForGovernmentPublicHealth = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header content */}
        <BlurFade delay={0}>
          <h2 className="text-2xl md:text-5xl font-heading font-medium bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent mb-4">
            FOR GOVERNMENT & PUBLIC HEALTH
          </h2>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="text-gray-800 text-base md:text-lg mb-8 md:mb-12">
            Scalable prevention for population health.
          </p>
        </BlurFade>

        {/* Image Placeholder */}
        <BlurFade
          delay={0.4}
          className="w-full mb-8 md:mb-12 flex items-center justify-center"
        >
          <Image
            src="/for-government.png"
            alt="For Government"
            width={0}
            height={0}
            sizes="100vw"
            className="h-48 md:h-96 w-auto object-contain"
          />
        </BlurFade>

        {/* Paragraph Text */}
        <BlurFade delay={0.6}>
          <p className="text-gray-700 text-sm md:text-xl leading-relaxed max-w-5xl mx-auto">
            AyusSetu aligns with national digital health initiatives such as
            Ayushman Bharat Digital Mission, enabling interoperable,
            privacy-first AI that supports large-scale disease prevention and
            public health planning.
          </p>
        </BlurFade>
      </div>
    </section>
  );
};

export default ForGovernmentPublicHealth;
