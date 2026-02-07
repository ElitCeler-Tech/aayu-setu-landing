"use client";

import React from "react";

const ContactUs = () => {
  return (
    <section
      className="py-24 text-white"
      style={{
        background: "linear-gradient(180deg, #2D645D 0%, #3A8177 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Reach out to Us
          </h2>
          <p className="text-gray-200 text-lg">
            We&apos;re here to help &mdash; reach out with any questions or
            feedback.
          </p>
        </div>

        {/* Form */}
        <form className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-400 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-gray-400 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              className="w-full bg-transparent border-b border-gray-400 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div className="mb-12">
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full bg-transparent border-b border-gray-400 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors resize-none"
            ></textarea>
          </div>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          {/* Facebook */}
          <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          {/* Instagram */}
          <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          {/* Twitter (X) */}
          <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        </div>

        {/* Button */}
        <div>
          <button className="bg-white text-[#2D645D] px-10 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg">
            Message Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
