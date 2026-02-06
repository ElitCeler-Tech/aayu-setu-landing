"use client";

import React, { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    id: 1,
    text: "This app has completely changed how I manage my health. I never miss a medication, and the AI chat gives instant answers to all my questions!",
    name: "Ria Singh",
    role: "Founder at Zenith",
    image: "/user-ria.jpg", // Placeholder
    rating: 5,
  },
  {
    id: 2,
    text: "The family health tracking feature is a lifesaver. Being able to monitor my parents' vitals from a different city gives me immense peace of mind.",
    name: "Arjun Mehta",
    role: "Software Engineer",
    image: "/user-arjun.jpg",
    rating: 5,
  },
  {
    id: 3,
    text: "I love the personalized health insights. It is not just raw data; the app actually tells me what to eat and how to improve my lifestyle.",
    name: "Priya Sharma",
    role: "Marketing Director",
    image: "/user-priya.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#35615E] text-white overflow-hidden relative">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/5 text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
            Track your health
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-white/80 text-lg max-w-2xl">
            Real experiences from people staying healthier and happier with our
            app.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto relative">
          <div className="relative">
            {/* Glass Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl min-h-[300px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonials[activeIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={24}
                          className="fill-[#F59E0B] text-[#F59E0B]"
                        />
                      ),
                    )}
                  </div>

                  {/* Quote */}
                  <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-3xl">
                    {testimonials[activeIndex].text}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden border-2 border-white/20">
                      {/* Placeholder for image, using a colored div if no image */}
                      <div className="w-full h-full bg-purple-400 flex items-center justify-center text-white text-xl font-bold">
                        {testimonials[activeIndex].name.charAt(0)}
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-lg">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-sm opacity-70">
                        {testimonials[activeIndex].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#35615E] shadow-lg hover:scale-105 transition-transform z-20 hidden md:flex"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-white"
                    : "w-8 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
