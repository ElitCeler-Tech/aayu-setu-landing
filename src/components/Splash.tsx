"use client";

import { useEffect, useRef, useState } from "react";

/* The app's own splash, on the website.
   The video is 1080 square on the app's navy, so the overlay is that
   same navy and the video sits in it seamlessly. On white it was a
   dark tile floating in a bright room. Shown once a session: a brand
   animation on every navigation is one people learn to resent. */
export function Splash() {
  const [done, setDone] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let seen = true;
    try {
      seen = sessionStorage.getItem("ayussetu-splash") === "1";
    } catch {
      seen = true;
    }
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (seen || reduced) return;

    setDone(false);
    document.documentElement.style.overflow = "hidden";
    try {
      sessionStorage.setItem("ayussetu-splash", "1");
    } catch {}
  }, []);

  useEffect(() => {
    if (done) return;
    // Nothing may strand a visitor behind an animation: a codec the
    // browser will not open, autoplay refused, a frame that never
    // arrives. The same rule the app's own splash keeps.
    const bail = setTimeout(finish, 5200);
    video.current?.play().catch(finish);
    return () => clearTimeout(bail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  function finish() {
    setLeaving(true);
    setTimeout(() => {
      document.documentElement.style.overflow = "";
      setDone(true);
    }, 520);
  }

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ background: "#2C3D50" }}
    >
      {/* The poster is the app icon on the same navy, so a browser
          without H.264 - and there are still several - shows the mark
          rather than a black rectangle while this bows out. */}
      <video
        ref={video}
        src="/splash.mp4"
        poster="/ayussetu-icon.png"
        muted
        playsInline
        preload="auto"
        onEnded={finish}
        onError={finish}
        className="aspect-square w-[min(62vw,24rem)] rounded-[1.6rem] object-contain"
      />
      <p className="mt-8 text-[0.78rem] font-medium tracking-[0.18em] text-white/35 uppercase">
        Connecting care for better health
      </p>
      <button
        onClick={finish}
        className="absolute bottom-10 rounded-full border border-white/20 px-4 py-1.5 text-[0.74rem] font-medium text-white/70 transition hover:border-white/40 hover:text-white"
      >
        Skip
      </button>
    </div>
  );
}
