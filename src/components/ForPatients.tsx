"use client";

import React from "react";
import Image from "next/image";

const ForPatients = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl  font-heading font-semibold bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent mb-4">
          FOR PATIENTS
        </h2>
        <p className="text-gray-800 text-base mb-12">
          Take control of your health—early.
        </p>

        <div className="w-full mb-12 flex items-center justify-center">
          <Image
            src="/for-patients.png"
            alt="For Patients"
            width={0}
            height={0}
            sizes="100vw"
            className="h-96 w-auto object-contain"
          />
        </div>

        <p className="text-gray-700 text-xl leading-relaxed max-w-5xl mx-auto">
          AyusSetu helps you understand your future health risks and take
          simple, personalized actions before problems become serious. Stay
          healthier, avoid complications, and reduce out-of-pocket medical
          costs.
        </p>
      </div>
    </section>
  );
};

export default ForPatients;
