"use client";

import React from "react";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const DataSecurity = () => {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Badge */}
        <div className="flex items-center justify-center gap-4 mb-12 opacity-80">
          <div className="h-[3px] w-24 bg-[linear-gradient(90deg,rgba(65,116,111,0.89)_0%,rgba(117,227,214,0.89)_100%)] opacity-50 rounded-full" />
          <div className="shrink-0 px-6 py-1.5 rounded-full border border-[#3A8177]/30 text-[#3A8177] text-sm font-medium bg-[#ECF6F5]">
            Coming Soon
          </div>
          <div className="h-[3px] w-24 bg-[linear-gradient(90deg,rgba(132,255,239,0.89)_0%,rgba(45,100,93,0.89)_100%)] opacity-50 rounded-full" />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent mb-6 tracking-tight pb-2">
            Data Security & Privacy
          </h2>
          <p className="text-gray-800 font-medium text-lg mb-6">
            Your Health Data. Fully Protected. Always Yours.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            AyusSetu is built with privacy-first architecture to ensure your
            personal and medical data stays secure, confidential, and under your
            control.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-[#3A8177]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                End-to-End Data Encryption
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              All health records, reports, and personal details are encrypted
              both in transit and at rest.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-[#3A8177]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22S8 18 5 15.4182C2 12.8364 2 10.0361 2 7.76694C2 5.49774 3.73711 3.20424 6.5 2.5C9.26289 1.79576 12 4 12 4C12 4 14.7371 1.79576 17.5 2.5C20.2629 3.20424 22 5.49774 22 7.76694C22 10.0361 22 12.8364 19 15.4182C16 18 12 22 12 22Z"
                    stroke="none"
                    fill="none"
                  />
                  <path
                    d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12L2 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12L22 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Privacy by Design
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We follow privacy-by-design principles, collecting only
              what&apos;s essential
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-[#326a62] mb-10">
            Coming Soon
          </h3>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="flex gap-3">
                <TimeBox value="2" />
                <TimeBox value="0" />
              </div>
              <span className="text-xs font-bold text-gray-500 mt-4 tracking-widest">
                DAYS
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="flex gap-3">
                <TimeBox value="2" />
                <TimeBox value="2" />
              </div>
              <span className="text-xs font-bold text-gray-500 mt-4 tracking-widest">
                HOURS
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="flex gap-3">
                <TimeBox value="5" />
                <TimeBox value="6" />
              </div>
              <span className="text-xs font-bold text-gray-500 mt-4 tracking-widest">
                MINUTES
              </span>
            </div>
          </div>

          <p className="text-gray-900 font-medium text-lg">
            This feature is currently under development and will be available in
            an upcoming release
          </p>
        </div>
      </div>
    </section>
  );
};

const TimeBox = ({ value }: { value: string }) => (
  <div
    className={`w-12 h-16 md:w-16 md:h-24 bg-[#DEEBE9] rounded-xl flex items-center justify-center text-3xl md:text-5xl text-[#2D645D] shadow-inner font-light border border-[#D1E2E0] ${orbitron.className}`}
  >
    {value}
  </div>
);

export default DataSecurity;
