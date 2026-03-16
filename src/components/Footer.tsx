"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "./ui/blur-fade";

const Footer = () => {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = React.useState(false);

  return (
    <footer className="bg-white text-gray-800 py-16 border-t border-gray-100 font-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo Section */}
          <BlurFade className="col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/logo.png"
                alt="Ayus Setu Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </BlurFade>

          {/* Links Column 1 */}
          <BlurFade delay={0.2} className="col-span-1">
            <h3 className="font-bold text-sm mb-6 tracking-wide uppercase text-gray-900">
              Home
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li>
                <Link
                  href="/#features"
                  className="hover:text-[#3A8177] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="hover:text-[#3A8177] transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#blogs"
                  className="hover:text-[#3A8177] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#team"
                  className="hover:text-[#3A8177] transition-colors"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="hover:text-[#3A8177] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-[#3A8177] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-[#3A8177] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </BlurFade>

          {/* Links Column 2 */}
          <BlurFade delay={0.3} className="col-span-1">
            <div
              className="flex items-center gap-2 mb-6 cursor-pointer group text-[#3A8177]"
              onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
            >
              <h3 className="font-bold text-sm tracking-wide uppercase group-hover:text-[#2D645D] transition-colors">
                Disclaimer
              </h3>
              <Icon
                icon="mdi:chevron-up"
                className={`w-4 h-4 transition-transform duration-300 ${isDisclaimerOpen ? "rotate-180" : ""}`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${isDisclaimerOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <ul className="space-y-3 text-sm text-gray-600 font-medium pb-4">
                <li>
                  <a
                    href="/medical-disclaimer"
                    className="hover:text-[#3A8177] transition-colors"
                  >
                    Medical Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/ai-use-disclaimer"
                    className="hover:text-[#3A8177] transition-colors"
                  >
                    AI Use Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/health-records-disclaimer"
                    className="hover:text-[#3A8177] transition-colors"
                  >
                    Health Records Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/patient-use-disclaimer"
                    className="hover:text-[#3A8177] transition-colors"
                  >
                    Patient Use Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/clinical-use-disclaimer"
                    className="hover:text-[#3A8177] transition-colors"
                  >
                    Clinical Use Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/outcomes-disclaimer"
                    className="hover:text-[#3A8177] transition-colors"
                  >
                    Outcomes Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/third-party-data-disclaimer"
                    className="hover:text-[#3A8177] transition-colors"
                  >
                    Third-Party Data Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/regulatory-disclaimer"
                    className="hover:text-[#3A8177] transition-colors"
                  >
                    Regulatory Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </BlurFade>

          {/* Address & Socials Column */}
          <BlurFade delay={0.4} className="col-span-1">
            <div className="mb-8">
              <a
                href="#"
                className="block font-bold text-sm mb-4 tracking-wide uppercase text-gray-800 hover:text-[#3A8177] transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="/privacy-policy"
                className="block font-bold text-sm mb-4 tracking-wide uppercase text-gray-800 hover:text-[#3A8177] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block font-bold text-sm mb-4 tracking-wide uppercase text-gray-800 hover:text-[#3A8177] transition-colors"
              >
                Data & AI Use
              </a>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4 tracking-wide uppercase text-[#3A8177]">
                Address
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium">
                11-29-79 2nd Bank Colony, Warangal,
                <br />
                Telangana - 506002.
              </p>
              <div className="text-sm text-gray-600 mb-2 font-medium">
                <span className="opacity-80">Email:</span>{" "}
                <a
                  href="mailto:info@ayussetu.com"
                  className="hover:text-[#3A8177] underline decoration-1 underline-offset-2"
                >
                  info@ayussetu.com
                </a>
              </div>
              <div className="text-sm text-gray-600 mb-8 font-medium">
                <span className="opacity-80">Phone:</span> +91 7794 864 334
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#3A8177] flex items-center justify-center hover:bg-[#2D645D] transition-colors cursor-pointer text-white">
                  <Icon icon="mdi:facebook" className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#3A8177] flex items-center justify-center hover:bg-[#2D645D] transition-colors cursor-pointer text-white">
                  <Icon icon="mdi:instagram" className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#3A8177] flex items-center justify-center hover:bg-[#2D645D] transition-colors cursor-pointer text-white">
                  <Icon icon="mdi:youtube" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Bottom Bar */}
        <BlurFade delay={0.6}>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-[#3A8177]">
            <div>&copy; 2025 Ayus Setu. All rights reserved.</div>
            <div className="flex gap-6">
              <a
                href="/privacy-policy"
                className="hover:text-[#2D645D] transition-colors"
              >
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#2D645D] transition-colors">
                Disclaimers
              </a>
              <a href="#" className="hover:text-[#2D645D] transition-colors">
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
