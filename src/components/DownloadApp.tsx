"use client";

import React from "react";
import { Iphone } from "./ui/iphone";

const DownloadApp = () => {
  return (
    <section
      className="py-24 relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg, #3A8177 0%, #397F76 100%)",
      }}
    >
      {/* Background patterns could go here */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Ready to simplify your health journey?
        </h2>
        <p className="text-gray-100 text-lg mb-10 max-w-2xl mx-auto">
          Take control of your health today with easy tracking, consultations,
          and insights.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          {/* App Store Button */}
          <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-900 transition-colors border border-gray-700">
            <svg viewBox="0 0 384 512" fill="white" className="w-8 h-8">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] uppercase font-medium">
                Download on the
              </div>
              <div className="text-lg font-bold leading-none">App Store</div>
            </div>
          </button>

          {/* Google Play Button */}
          <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-100 transition-colors">
            <svg viewBox="0 0 512 512" className="w-8 h-8">
              <path
                fill="#ea4335"
                d="M106.8 19.7c-9.5-4.6-21.7-5.5-31.4-1.2L428.6 372l62.3-62.3L106.8 19.7z"
              />
              <path
                fill="#fbbc04"
                d="M34.8 34.6c-4.3 6.9-6.3 14.8-6.3 22.8v397.3c0 8 2 15.9 6.3 22.8l232.3-233.1L34.1 34.6z"
              />
              <path
                fill="#4285f4"
                d="M451.7 132.3l-50.5-50.5-134.4 134.4 134.4 134.4 50.5-50.5c16.3-16.3 24.3-37.5 24.3-58.8s-8-42.5-24.3-58.8z" // Simplified
              />
              <path
                fill="#34a853"
                d="M106.8 492.3l384.1-353.5-62.3-62.3L75.4 139.7 267 331.3 106.8 492.3z"
              />
            </svg>
            <div className="text-left">
              <div className="text-[10px] uppercase font-medium text-gray-600">
                Get it on
              </div>
              <div className="text-lg font-bold leading-none">Google Play</div>
            </div>
          </button>
        </div>

        {/* Mockup */}
        <div className="flex justify-center -mb-48 md:-mb-64 pointer-events-none">
          <Iphone className="w-[300px] md:w-[360px] shadow-2xl rounded-[3rem]">
            <div className="bg-white h-full w-full flex flex-col pt-12 px-6 overflow-hidden">
              {/* Top Bar Mockup */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm font-semibold text-gray-900">9:41</div>
                <div className="flex gap-1.5 items-center">
                  <div className="w-4 h-2.5 bg-gray-900 rounded-[1px]"></div>
                  <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                </div>
              </div>

              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Hi John 👋
                  </h3>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-3 mb-8">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="text-gray-400 text-sm">Search</span>
              </div>

              {/* Circular Menu Mockup */}
              <div className="relative h-64 w-full flex items-center justify-center mb-8">
                {/* Central Icon */}
                <div className="w-14 h-14 bg-[#3A8177] rounded-full flex items-center justify-center text-white shadow-lg relative z-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full text-gray-200 pointer-events-none">
                  <line
                    x1="50%"
                    y1="50%"
                    x2="25%"
                    y2="25%"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="75%"
                    y2="25%"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="85%"
                    y2="50%"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="75%"
                    y2="75%"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="25%"
                    y2="75%"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="15%"
                    y2="50%"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>

                {/* Surrounding Icons */}
                <div className="absolute top-8 left-12 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div className="absolute top-8 right-12 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-md">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="absolute bottom-8 right-12 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="absolute bottom-8 left-12 w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white shadow-md">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-md">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="bg-[#1A5e56] rounded-xl p-4 text-white">
                <h4 className="font-bold text-xs mb-1">Do you know?</h4>
                <p className="text-[10px] opacity-80 mb-2">
                  Smoking can seriously damage your health...
                </p>
              </div>
            </div>
          </Iphone>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
