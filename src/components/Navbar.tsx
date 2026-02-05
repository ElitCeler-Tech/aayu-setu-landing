import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          {/* Use a simple placeholder logo if image not available, or text */}
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-wide font-heading uppercase text-gray-900">
            AYUS SETU
          </span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">
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
      </div>

      <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
