"use client";

import { useEffect, useState } from "react";

/* The header's outer frame: one bar, the same everywhere. A rounded
   glass bar floating just below the top of the window, always with the
   light logo and white links.

   Over a dark ground (the hero, prevention, ABHA, the dark page tops,
   the footer) the glass is clear, so the colour and type behind it show
   through. Over a light ground it fills with the colours it shows over the hero
   as a navy gradient, deep #16233D to the app's blue navy #2C4468, so it reads
   as it does over the dark: the same bar, never a white one. Which
   ground is under it is read from the page itself, the first solid
   background beneath the bar, judged by its brightness. */
function isDarkAt(x: number, y: number, header: HTMLElement | null) {
  for (const el of document.elementsFromPoint(x, y)) {
    if (header && header.contains(el)) continue;
    let node: Element | null = el;
    while (node && node !== document.documentElement) {
      const m = getComputedStyle(node).backgroundColor.match(/rgba?\(([^)]+)\)/);
      if (m) {
        const [r, g, b, a = "1"] = m[1].split(",").map((s) => s.trim());
        if (parseFloat(a) > 0.5) return (0.2126 * +r + 0.7152 * +g + 0.0722 * +b) / 255 < 0.45;
      }
      node = node.parentElement;
    }
    return false;
  }
  return false;
}

export function HeaderFrame({ overlay = false, children }: { overlay?: boolean; children: React.ReactNode }) {
  const [overDark, setOverDark] = useState(overlay);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("header[data-frame]");
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOverDark(isDarkAt(window.innerWidth / 2, 34, header)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header data-frame="" data-dark="true" className="group pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-10 sm:pt-2.5">
      <div
        className={`pointer-events-auto mx-auto max-w-6xl rounded-[1rem] border backdrop-blur-xl transition-[background,border-color,box-shadow] duration-300 ${
          overDark
            ? "border-white/10 bg-white/[0.06] shadow-none"
            : "border-white/[0.12] bg-[linear-gradient(90deg,#16233D,#2C4468)] shadow-[0_14px_34px_-18px_rgba(13,22,40,0.5)]"
        }`}
      >
        {children}
      </div>
    </header>
  );
}
