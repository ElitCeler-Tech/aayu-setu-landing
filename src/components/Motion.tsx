"use client";

import { useEffect, useRef, useState } from "react";

/* Two primitives, both of which do nothing at all when the visitor has
   asked for reduced motion.

   Reveal: content arrives as it is scrolled to, once, and then stays.
   Nothing on this page is hidden until an observer fires - every
   element starts visible to a crawler and to anybody who lands mid
   page, and only animates when it genuinely enters the viewport from
   below. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen when the page loads: leave it alone.
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.92) return;

    setShown(false);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* Parallax: the element drifts against the scroll, at a fraction of its
   speed. Capped tight - a few dozen pixels. Anything more and a reader
   scrolling to a paragraph finds it has moved away from them, which is
   the reason parallax has a bad name. */
export function Parallax({
  children,
  speed = 0.12,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Touch devices scroll with momentum and repaint the whole page;
    // drifting layers there costs more than it gives.
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    let visible = false;

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) tick();
    });
    io.observe(el);

    function tick() {
      if (!visible) return;
      const box = el!.getBoundingClientRect();
      // How far this element is from the middle of the screen, as a
      // fraction, so the drift is zero when it is centred.
      const fromCentre =
        (box.top + box.height / 2 - window.innerHeight / 2) /
        window.innerHeight;
      setY(Math.max(-60, Math.min(60, -fromCentre * speed * 220)));
      frame = requestAnimationFrame(tick);
    }

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${y.toFixed(1)}px, 0)` }}
    >
      {children}
    </div>
  );
}
