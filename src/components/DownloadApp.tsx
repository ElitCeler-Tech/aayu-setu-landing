"use client";

import React from "react";
import { Iphone } from "./ui/iphone";
import { Icon } from "@iconify/react";

const DownloadApp = () => {
  return (
    <section
      className="pt-24 relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg, #3A8177 0%, #397F76 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Ready to simplify your health journey?
        </h2>
        <p className="text-gray-100 text-lg mb-10 max-w-2xl mx-auto">
          Take control of your health today with easy tracking, consultations,
          and insights.
        </p>

        <div className="flex justify-center gap-4">
          {/* App Store Button */}
          <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg border border-black hover:bg-gray-900 transition-colors cursor-pointer">
            <Icon icon="mdi:apple" className="w-8 h-8" />
            <div className="text-left">
              <div className="text-[10px] leading-tight opacity-80 uppercase">
                Download on the
              </div>
              <div className="text-sm font-bold leading-tight">App Store</div>
            </div>
          </button>

          {/* Google Play Button */}
          <button className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
            <Icon icon="logos:google-play-icon" className="w-7 h-7" />
            <div className="text-left">
              <div className="text-[10px] leading-tight opacity-80 uppercase">
                GET IT ON
              </div>
              <div className="text-sm font-bold leading-tight">Google Play</div>
            </div>
          </button>
        </div>

        {/* Mockup */}
        <div className="flex justify-center translate-y-[35%] pointer-events-none">
          <Iphone
            src="/hero/hero-left.png"
            className="w-[300px] md:w-[360px] shadow-2xl rounded-[3rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
