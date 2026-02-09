"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips to Track Your Vitals Effectively",
      category: "HEALTH",
      date: "15 Sep, 2021",
      image: "/blog/1.png",
      link: "#",
    },
    {
      id: 2,
      title: "The Importance of Medication Adherence",
      category: "HEALTH",
      date: "15 Sep, 2021",
      image: "/blog/2.png",
      link: "#",
    },
    {
      id: 3,
      title: "How AI is Changing Personal Healthcare",
      category: "HEALTH",
      date: "15 Sep, 2021",
      image: "/blog/3.png",
      link: "#",
    },
  ];

  return (
    <section className="py-24 bg-[#35615E] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Health & Wellness <span className="opacity-50">Blog</span>
            </h2>
            <p className="text-white/80 text-lg">
              Expert tips, insights, and guides to help you stay healthier every
              day.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-sm border border-white/10">
              <ArrowLeft size={24} />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-sm border border-white/10">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative h-[550px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#F59E0B] text-black text-xs font-bold tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 leading-tight group-hover:text-[#F59E0B] transition-colors">
                  {post.title}
                </h3>

                <div className="flex items-center gap-2 text-white/90 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Read More</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
