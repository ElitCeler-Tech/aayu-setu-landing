"use client";

import { motion, useInView, type Variants, type UseInViewOptions } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number; opacity: number; filter: string };
    visible: { y: number; opacity: number; filter: string };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inViewMargin?: UseInViewOptions["margin"];
  blur?: string; // e.g. "8px"
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 20,
  inViewMargin = "-50px",
  blur = "8px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: inViewMargin });

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant || defaultVariants}
      transition={{
        duration,
        delay,
        ease: "easeOut", // Using a simple ease-out as requested in guidelines for entering elements
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
