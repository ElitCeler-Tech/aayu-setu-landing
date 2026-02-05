"use client";

import React from "react";

const ForInsurersEmployers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header content */}
        <h2 className="text-3xl md:text-5xl font-heading font-medium bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent mb-4">
          FOR INSURERS & EMPLOYERS
        </h2>
        <p className="text-gray-800 text-lg mb-12">
          Prevention that lowers costs.
        </p>

        {/* Image Placeholder */}
        <div className="w-full h-80 bg-gray-200 rounded-3xl mb-12 flex items-center justify-center">
          <span className="text-gray-400 font-medium">Image Placeholder</span>
        </div>

        {/* Paragraph Text */}
        <p className="text-gray-700 text-xl leading-relaxed max-w-5xl mx-auto">
          Identify high-risk members early, improve engagement, and reduced
          avoidable claims through proactive, data-driven preventive care.
        </p>
      </div>
    </section>
  );
};

export default ForInsurersEmployers;
