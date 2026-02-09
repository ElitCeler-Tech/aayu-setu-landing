"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";

const Footer = () => {
  return (
    <footer
      className="text-white py-16"
      style={{
        background: "linear-gradient(180deg, #397f76 0%, #2D645D 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo Section */}
          <BlurFade className="col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/white-logo.png"
                alt="Ayus Setu Logo"
                width={200}
                height={200}
                className=" object-contain"
              />
            </div>
          </BlurFade>

          {/* Links Column 1 */}
          <BlurFade delay={0.2} className="col-span-1">
            <h3 className="font-bold text-sm mb-6 tracking-wide uppercase">
              Home
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </BlurFade>

          {/* Links Column 2 */}
          <BlurFade delay={0.3} className="col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer group">
              <h3 className="font-bold text-sm tracking-wide uppercase group-hover:text-gray-200 transition-colors">
                Disclaimer
              </h3>
              <Icon icon="mdi:chevron-up" className="w-4 h-4" />
            </div>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Medical Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Use Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Health Records Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Patient Use Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Clinical Use Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Outcomes Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Third-Party Data Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Regulatory Disclaimer
                </a>
              </li>
            </ul>
          </BlurFade>

          {/* Address & Socials Column */}
          <BlurFade delay={0.4} className="col-span-1">
            <div className="mb-8">
              <h3 className="font-bold text-sm mb-4 tracking-wide uppercase text-gray-300/80">
                Terms of Use
              </h3>
              <h3 className="font-bold text-sm mb-4 tracking-wide uppercase text-gray-300/80">
                Privacy Policy
              </h3>
              <h3 className="font-bold text-sm mb-4 tracking-wide uppercase text-gray-300/80">
                Data & AI Use
              </h3>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4 tracking-wide uppercase">
                Address
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                11-29-79 2nd Bank Colony, Warangal,
                <br />
                Telangana - 506002.
              </p>
              <div className="text-sm text-gray-300 mb-2">
                <span className="opacity-80">Email:</span>{" "}
                <a
                  href="mailto:info@ayussetu.com"
                  className="hover:text-white underline decoration-1 underline-offset-2"
                >
                  info@ayussetu.com
                </a>
              </div>
              <div className="text-sm text-gray-300 mb-8">
                <span className="opacity-80">Phone:</span> +91 7794 864 334
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer text-white">
                  <Icon icon="mdi:facebook" className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer text-white">
                  <Icon icon="mdi:instagram" className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer text-white">
                  <Icon icon="mdi:youtube" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Bottom Bar */}
        <BlurFade delay={0.6}>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300">
            <div>&copy; 2025 Ayus Setu. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Disclaimers
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms and Conditions
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
};

export default Footer;
