"use client";

import React from "react";
import { ArrowRight, Linkedin } from "lucide-react";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";

const Team = () => {
  const teamMembers = [
    {
      name: "Sandeep Konda",
      role: "Founder & CEO - Ayussetu",
      image: "/team/sandeep.png",
      linkedin: "#",
    },
    {
      name: "Preeti Kotha",
      role: "Advisor - Ayussetu",
      image: "/team/preeti.png",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <BlurFade className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 w-full justify-center mb-6">
            <div className="h-[3px] w-20 md:w-32 bg-[linear-gradient(90deg,rgba(65,116,111,0.89)_0%,rgba(117,227,214,0.89)_100%)] opacity-50"></div>
            <div className="px-6 py-2 rounded-full bg-[#E8F3F1] text-[#35615E] text-sm font-medium shadow-sm">
              Track your health
            </div>
            <div className="h-[3px] w-20 md:w-32 bg-[linear-gradient(90deg,rgba(132,255,239,0.89)_0%,rgba(45,100,93,0.89)_100%)] opacity-50"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
            About the Founder
          </h2>
          <p className="text-gray-500 text-lg">
            Get to know more about the AyuSetu Team
          </p>
        </BlurFade>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1}>
              <div className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[#0077b5] flex items-center justify-center text-white hover:bg-[#006396] transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
