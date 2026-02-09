"use client";

import React from "react";
import Image from "next/image";

const ForGovernmentPublicHealth = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header content */}
        <h2 className="text-3xl md:text-5xl font-heading font-medium bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent mb-4">
          FOR GOVERNMENT & PUBLIC HEALTH
        </h2>
        <p className="text-gray-800 text-lg mb-12">
          Scalable prevention for population health.
        </p>

        {/* Image Placeholder */}
        <div className="w-full mb-12 flex items-center justify-center">
          <Image
            src="/for-government.png"
            alt="For Government"
            width={0}
            height={0}
            sizes="100vw"
            className="h-96 w-auto object-contain"
          />
        </div>

        {/* Paragraph Text */}
        <p className="text-gray-700 text-xl leading-relaxed max-w-5xl mx-auto">
          AyusSetu aligns with national digital health initiatives such as
          Ayushman Bharat Digital Mission, enabling interoperable, privacy-first
          AI that supports large-scale disease prevention and public health
          planning.
        </p>
      </div>
    </section>
  );
};

export default ForGovernmentPublicHealth;
