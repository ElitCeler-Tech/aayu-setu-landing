import React from "react";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <BlurFade delay={0} className="flex items-center gap-2">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          {/* Use a simple placeholder logo if image not available, or text */}
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Ayus Setu Logo"
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </BlurFade>

      <BlurFade
        delay={0.1}
        className="hidden lg:flex items-center gap-8 text-gray-600 font-medium"
      >
        <a href="#" className="hover:text-[#346E6A]">
          Home
        </a>
        <a href="#" className="hover:text-[#346E6A]">
          Features
        </a>
        <a href="#" className="hover:text-[#346E6A]">
          How it works
        </a>
        <a href="#" className="hover:text-[#346E6A]">
          Testimonials
        </a>
        <a href="#" className="hover:text-[#346E6A]">
          FAQs
        </a>
        <a href="#" className="hover:text-[#346E6A]">
          Blogs
        </a>
        <a href="#" className="hover:text-[#346E6A]">
          About Founder
        </a>
        <a href="#" className="hover:text-[#346E6A]">
          Contact Us
        </a>
      </BlurFade>

      <BlurFade delay={0.2} className="flex items-center gap-4">
        <button
          className="px-6 py-2 rounded-md text-white font-medium shadow-md transition-transform hover:scale-105"
          style={{
            background: `linear-gradient(90deg, #346E6A 0%, #3A8177 50%, #2D645D 100%),
                           linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)`,
          }}
        >
          Login
        </button>
        <button className="px-6 py-2 rounded-md text-gray-700 bg-white border border-gray-300 font-medium hover:bg-gray-50 transition-colors">
          Signup
        </button>
      </BlurFade>
    </nav>
  );
};

export default Navbar;
