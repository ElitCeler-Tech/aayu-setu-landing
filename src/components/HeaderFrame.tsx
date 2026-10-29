"use client";

import { useEffect, useState } from "react";

/* The header's outer frame, and the one part of it that has to know
   where the page is scrolled.

   Over the dark hero it floats as a pane of glass, the way the
   reference sets it. Once the hero has gone by it settles back into the
   paper header every other page uses, because a dark glass bar over
   warm paper reads as a mistake. Children style themselves off
   `data-dark`, so nothing inside needs to be a client component. */
export function HeaderFrame({
  overlay = false,
  children,
}: {
  overlay?: boolean;
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(overlay);

  useEffect(() => {
    if (!overlay) return;
    const hero = document.getElementById("hero");
    const update = () => {
      const end = hero ? hero.offsetHeight - 90 : window.innerHeight * 0.8;
      setDark(window.scrollY < end);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [overlay]);

  if (!overlay) {
    return (
      <header
        data-dark="false"
        className="group sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-xl"
      >
        {children}
      </header>
    );
  }

  return (
    <header
      data-dark={dark}
      className="group fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 data-[dark=true]:px-3 data-[dark=true]:pt-3 sm:data-[dark=true]:px-8 sm:data-[dark=true]:pt-5"
    >
      <div className="rounded-none border-b border-line/70 bg-paper/85 backdrop-blur-xl transition-colors duration-300 group-data-[dark=true]:rounded-[1.25rem] group-data-[dark=true]:border group-data-[dark=true]:border-white/10 group-data-[dark=true]:bg-white/[0.06]">
        {children}
      </div>
    </header>
  );
}
