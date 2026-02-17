"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "./ui/blur-fade";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative flex items-center justify-between px-6 lg:px-20 py-4 container mx-auto">
      <BlurFade delay={0} className="flex items-center gap-2 z-50">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          {/* Use a simple placeholder logo if image not available, or text */}
          <Link
            href="/"
            className="flex items-center justify-center w-[150px] lg:w-[200px] h-12 lg:h-16"
          >
            <Image
              src="/logo.png"
              alt="Ayus Setu Logo"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      </BlurFade>

      {/* Desktop Links */}
      <BlurFade
        delay={0.1}
        className="hidden lg:flex items-center gap-8 text-gray-600 font-medium"
      >
        <Link href="/#home" className="hover:text-[#346E6A]">
          Home
        </Link>
        <Link href="/#features" className="hover:text-[#346E6A]">
          Features
        </Link>
        <Link href="/#how-it-works" className="hover:text-[#346E6A]">
          How it works
        </Link>
        <Link href="/#testimonials" className="hover:text-[#346E6A]">
          Testimonials
        </Link>
        <Link href="/#faq" className="hover:text-[#346E6A]">
          FAQs
        </Link>
        <Link href="/#blogs" className="hover:text-[#346E6A]">
          Blogs
        </Link>
        <Link href="/#contact" className="hover:text-[#346E6A]">
          Contact Us
        </Link>
      </BlurFade>

      {/* Desktop Buttons */}
      <BlurFade delay={0.2} className="hidden lg:flex items-center gap-4">
        <button
          className="px-6 py-2 rounded-md text-white font-medium shadow-md transition-transform hover:scale-105 cursor-pointer"
          style={{
            background: `linear-gradient(90deg, #346E6A 0%, #3A8177 50%, #2D645D 100%),
                           linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)`,
          }}
        >
          Login
        </button>
        <button className="px-6 py-2 rounded-md text-gray-700 bg-white border border-gray-300 font-medium hover:bg-gray-50 transition-colors cursor-pointer">
          Signup
        </button>
      </BlurFade>

      {/* Mobile Menu Button */}
      <div className="lg:hidden z-50">
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-700 cursor-pointer"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full bg-white shadow-xl flex flex-col items-center py-8 px-6 lg:hidden z-40 border-b border-gray-100"
          >
            <div className="h-16 w-full mb-4"></div>{" "}
            {/* Spacer for logo/close button alignment */}
            <div className="flex flex-col items-center gap-6 w-full text-lg font-medium text-gray-700">
              <Link
                href="/#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#346E6A]"
              >
                Home
              </Link>
              <Link
                href="/#features"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#346E6A]"
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#346E6A]"
              >
                How it works
              </Link>
              <Link
                href="/#testimonials"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#346E6A]"
              >
                Testimonials
              </Link>
              <Link
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#346E6A]"
              >
                FAQs
              </Link>
              <Link
                href="/#blogs"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#346E6A]"
              >
                Blogs
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#346E6A]"
              >
                Contact Us
              </Link>

              <div className="w-full h-[1px] bg-gray-100 my-2"></div>

              <div className="flex flex-col gap-4 w-full px-8">
                <button
                  className="w-full px-6 py-3 rounded-md text-white font-medium shadow-md active:scale-95 transition-transform"
                  style={{
                    background: `linear-gradient(90deg, #346E6A 0%, #3A8177 50%, #2D645D 100%),
                                  linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)`,
                  }}
                >
                  Login
                </button>
                <button className="w-full px-6 py-3 rounded-md text-gray-700 bg-white border border-gray-300 font-medium active:bg-gray-50 transition-colors">
                  Signup
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
