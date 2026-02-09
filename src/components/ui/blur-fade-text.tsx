"use client";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number; y: number };
    visible: { filter: string; opacity: number; y: number };
  };
  duration?: number;
  characterDelay?: number;
  delayOffset?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

const BlurFadeText = ({
  text,
  className,
  variant,
  duration = 0.8,
  delayOffset = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const wordVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delayOffset,
        staggerChildren: 0.04,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delayOffset,
        staggerChildren: 0.02,
      },
    },
  };

  if (animateByCharacter) {
    const characters = Array.from(text);
    return (
      <div ref={ref} className={cn("inline-block", className)}>
        <motion.h1
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={charVariants}
          className="inline-block"
        >
          {characters.map((char, i) => (
            <motion.span
              key={i}
              variants={combinedVariants}
              transition={{
                duration,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="inline-block"
              style={{ width: char === " " ? "0.2em" : "auto" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    );
  }

  const words = text.split(" ");

  return (
    <div ref={ref} className={cn("inline-block", className)}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={wordVariants}
        className="inline-block"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={combinedVariants}
            transition={{
              duration,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className="inline-block mr-[0.25em] last:mr-0 align-top"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default BlurFadeText;
