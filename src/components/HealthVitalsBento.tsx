"use client";

import React from "react";

const RangeBar = ({
  // status prop removed as it was unused
  ranges = ["Normal", "Borderline", "Risk"],
  colors = ["bg-[#4DA599]", "bg-[#F59E0B]", "bg-[#EF4444]"],
  markerPosition = 50, // 0 to 100
}: {
  status?: string;
  ranges?: string[];
  colors?: string[];
  markerPosition?: number;
}) => {
  return (
    <div className="w-full mt-4 mb-2">
      <div className="h-2.5 w-full bg-gray-100 rounded-full flex overflow-hidden relative">
        {colors.map((color, index) => (
          <div key={index} className={`h-full flex-1 ${color}`}></div>
        ))}
        {/* Marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-600 rounded-full shadow-sm z-10 box-content"
          style={{ left: `calc(${markerPosition}% - 8px)` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1.5 text-[10px] text-gray-400 font-medium">
        {ranges.map((range, index) => (
          <span
            key={index}
            className="flex-1 text-center first:text-left last:text-right"
          >
            {range}
          </span>
        ))}
      </div>
    </div>
  );
};

const WaveChart = ({ color = "#4DA599" }: { color?: string }) => {
  return (
    <div className="h-16 w-full mt-4 flex items-end">
      <svg
        viewBox="0 0 100 40"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 L0,30 Q10,25 20,30 T40,25 T60,35 T80,20 T100,30 L100,40 Z"
          fill={color}
          fillOpacity="0.2"
        />
        <path
          d="M0,30 Q10,25 20,30 T40,25 T60,35 T80,20 T100,30"
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

const GaugeChart = () => {
  return (
    <div className="relative w-full h-24 flex items-end justify-center mb-2 mt-4">
      <svg viewBox="0 0 100 55" className="w-[80%] overflow-visible">
        {/* Background Arc */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Active Arc (Green part) */}
        <path
          d="M 10 50 A 40 40 0 0 1 70 20"
          fill="none"
          stroke="#35615E"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="100 100" // Simplified
        />
        {/* Value Indicator */}
        <circle cx="70" cy="20" r="4" fill="#35615E" />
      </svg>
      <div className="absolute bottom-0 text-center">
        <div className="text-xl font-bold text-[#35615E]">
          90 <span className="text-[10px] text-gray-500">mg/dl</span>
        </div>
        <div className="text-[10px] text-gray-500 font-medium bg-green-50 px-2 rounded-full mt-1">
          Healthy range
        </div>
      </div>
    </div>
  );
};

const HealthVitalsBento = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="flex items-center gap-4 w-full justify-center opacity-80 mb-6">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#3A8177]/50 rounded-full" />
          <div className="shrink-0 px-6 py-1.5 rounded-full border border-[#3A8177]/30 text-[#3A8177] text-sm font-medium bg-[#ECF6F5]">
            Track your health
          </div>
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#3A8177]/50 rounded-full" />
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#4DA599] mb-4">
          Track Key Health Vitals and watch Trends
        </h2>
        <p className="text-gray-600 text-lg">
          Get Information and manage health with personal insights
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12 relative">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900">
              Key Health Markers Overview
            </h3>
            <p className="text-gray-500 mt-1">
              Track your core health indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. LDL Cholestrol */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900 text-lg">
                  LDL Cholestrol
                </h4>
                <span className="bg-orange-500 text-white text-[10px] px-2 py-1 rounded-full font-medium">
                  Borderline
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                135{" "}
                <span className="text-sm font-normal text-gray-500">mg/dl</span>
              </div>
              <div className="text-xs text-gray-400">
                Healthy range 50-100 mg/dl
              </div>

              <RangeBar markerPosition={55} />

              <div className="mt-6">
                <WaveChart color="#3A8177" />
                <div className="flex justify-between text-[10px] text-gray-300 mt-2">
                  <span>April 2023</span>
                  <span>Mar 2025</span>
                </div>
              </div>
            </div>

            {/* 2. HbA1c */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow relative">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900 text-lg">HbA1c</h4>
                <span className="bg-[#B91C1C] text-white text-[10px] px-2 py-1 rounded-full font-medium">
                  Needs attention
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">5.9 %</div>
              <div className="text-xs text-gray-400">Healthy range 40-50%</div>

              <RangeBar
                status="risk"
                markerPosition={85}
                colors={["bg-[#4DA599]", "bg-[#F59E0B]", "bg-[#B91C1C]"]}
              />

              <div className="mt-6">
                <WaveChart color="#B91C1C" />
                <div className="flex justify-between text-[10px] text-gray-300 mt-2">
                  <span>April 2023</span>
                  <span>Mar 2025</span>
                </div>
              </div>

              {/* Tooltip Connector/Triangl */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white drop-shadow-sm z-20 hidden lg:block"></div>
            </div>

            {/* 3. Fasting Glucose */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900 text-lg">
                  Fasting Glucose
                </h4>
                <span className="bg-[#35615E] text-white text-[10px] px-2 py-1 rounded-full font-medium">
                  Normal
                </span>
              </div>

              <div className="mt-2 text-xs text-gray-400">
                Healthy range 70-100 mg/dl
              </div>

              <GaugeChart />

              <div className="mt-2">
                <WaveChart color="#35615E" />
                <div className="flex justify-between text-[10px] text-gray-300 mt-2">
                  <span>April 2023</span>
                  <span>Mar 2025</span>
                </div>
              </div>
            </div>

            {/* 4. Creatinine + eGFR */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-gray-900 text-lg">
                  Creatinine + eGFR
                </h4>
                <span className="bg-[#35615E] text-white text-[10px] px-2 py-1 rounded-full font-medium">
                  Normal
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Creatinine
                    </span>
                    <span className="text-xs text-gray-400">
                      &lt; 1.3 mg/dl
                    </span>
                  </div>
                  <RangeBar markerPosition={30} />
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      eGFR
                    </span>
                    <span className="text-xs text-gray-400">
                      &gt; 92 ml/min
                    </span>
                  </div>
                  <RangeBar markerPosition={75} />
                </div>
              </div>

              <div className="mt-4">
                <WaveChart color="#35615E" />
                <div className="flex justify-between text-[10px] text-gray-300 mt-2">
                  <span>April 2023</span>
                  <span>Mar 2025</span>
                </div>
              </div>
            </div>

            {/* 5. Info Card */}
            <div className="bg-[#35615E] rounded-3xl p-8 shadow-xl text-white flex flex-col justify-center relative">
              {/* Triangle Pointing Up */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#35615E] hidden lg:block"></div>

              <p className="text-sm leading-relaxed opacity-90">
                <span className="font-bold text-white">
                  HbA1c is a blood test
                </span>{" "}
                that shows your average blood sugar over the last 2-3 months. A
                value below <span className="font-bold white">5.7%</span> is
                normal, <span className="font-bold text-white">5.7-6.4%</span>{" "}
                means higher risk (prediabetes), and{" "}
                <span className="font-bold text-white">6.5%</span> or above
                usually means diabetes.
              </p>
              <p className="text-xs mt-4 opacity-70">
                Higher HbA1c means blood sugar has been high for a long time,
                which can damage the heart, kidneys, eyes, and nerves. Keeping
                it in range helps prevent future health problems&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthVitalsBento;
