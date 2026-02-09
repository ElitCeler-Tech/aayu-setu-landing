"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import BlurFade from "./ui/blur-fade";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs = [
    {
      question: "How do I track my vitals in Ayus Setu?",
      answer:
        "You can easily track your vitals by navigating to the Vitals section in your dashboard. You can manually enter data or sync with supported wearable devices for automatic tracking.",
    },
    {
      question: "Can I book both online and in-clinic doctor appointments?",
      answer:
        "Yes! Ayu Setu lets you schedule video, voice, or in-clinic consultations with trusted doctors. All appointments sync with your profile, so you can track visits, view history, and share relevant health data easily.",
    },
    {
      question: "Is my health data secure?",
      answer:
        "Absolutely. We use industry-standard encryption protocols to ensure your health data remains private and secure. Only you and the healthcare providers you authorize can access your information.",
    },
    {
      question: "How does the AI chat feature work?",
      answer:
        "Our AI chat uses advanced natural language processing to understand your health queries and provide instant, accurate responses based on verified medical databases. It acts as a friendly 24/7 health assistant.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <BlurFade delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 w-full justify-center mb-6">
              <div className="h-[3px] w-20 md:w-32 bg-[linear-gradient(90deg,rgba(65,116,111,0.89)_0%,rgba(117,227,214,0.89)_100%)] opacity-50"></div>
              <div className="px-6 py-2 rounded-full bg-[#E8F3F1] text-[#35615E] text-sm font-medium shadow-sm">
                Track your health
              </div>
              <div className="h-[3px] w-20 md:w-32 bg-[linear-gradient(90deg,rgba(132,255,239,0.89)_0%,rgba(45,100,93,0.89)_100%)] opacity-50"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Get to know more about the AyuSetu Team
            </p>
          </div>
        </BlurFade>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <BlurFade key={index} delay={0.1 + index * 0.1}>
                <div
                  onClick={() => toggleFAQ(index)}
                  className={`rounded-2xl cursor-pointer transition-colors duration-300 overflow-hidden ${
                    isOpen ? "bg-[#E8F3F1]" : "bg-[#F3F4F6] hover:bg-gray-200"
                  }`}
                >
                  <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        {isOpen ? (
                          <ChevronUp className="text-[#35615E]" />
                        ) : (
                          <ChevronDown className="text-[#6B7280]" />
                        )}
                      </span>
                      <h3
                        className={`text-lg md:text-xl font-medium ${
                          isOpen ? "text-[#35615E]" : "text-[#4B3F72]"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0 pl-16 md:pl-20">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
