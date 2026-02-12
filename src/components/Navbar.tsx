import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "./ui/blur-fade";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-4 container mx-auto">
      <BlurFade delay={0} className="flex items-center gap-2">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          {/* Use a simple placeholder logo if image not available, or text */}
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Ayus Setu Logo"
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </BlurFade>

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
